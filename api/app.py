from distutils.command.config import config
import os
from flask import Flask, flash, request, redirect, url_for, session
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import logging

# imports for paddleocr
from paddleocr import PaddleOCR

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger('HELLO WORLD')




ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
from serpapi import GoogleSearch
import json, requests


app = Flask(__name__)

@app.route("/api")
def api(ingredientList):
    count = 0
    ingredientFact = []
    ingredientList = ['ascorbic acid', 'mononitrate', 'reduced ironthiamin']
    if ingredientList is None:
        ingredientList = []
    else:
        for x in ingredientList:
            print(x)
            print(f"What is the use of {x} in food?")
            params = {
            "q": f"What is the use of {x} in food?",
            "hl": "en",
            "gl": "us",
            "api_key": "1c1af191bef69e75c008dd69a150a7e2a688994a3ce696cdb784f52aa0d6ef0e"
            }
            search = GoogleSearch(params)
            results = search.get_dict()
            answer_box = results["answer_box"]
            # "fact": answer_box['snippet']
            ingredientFact.append(answer_box['snippet'])
            print(answer_box['snippet'])
            count = count + 1
            if count == 2:
                break

#     # params = {
#     # "q": "What is the use of sodium chloride in food?",
#     # "hl": "en",
#     # "gl": "us",
#     # "api_key": "1c1af191bef69e75c008dd69a150a7e2a688994a3ce696cdb784f52aa0d6ef0e"
#     # }
#     # search = GoogleSearch(params)
#     # results = search.get_dict()
#     # answer_box = results["answer_box"]
#     # "fact": answer_box['snippet']
#     # print(answer_box['snippet'])
#     # print('hi')
#     # print('hello')
    # return {"msg" : [{"ingredient": "Sodium Chloride", "fact": "It is healthy"}, {"ingredient": "Sodium Carbonate", "fact": "It is used for leavening bread."}] }
    return {"msg" : {"ingredient": ingredientList, "fact": ingredientFact} }

# @app.route("/image_upload", methods=['POST'])
@app.route("/image_upload", methods=['POST'])
def fileUpload():
    f = request.files['file']
    f.save(secure_filename(f.filename))
    
    print(f.filename)

    # instantiates a PaddleOCR object
    ocr_model = PaddleOCR(lang='en')

    # gets path to image
    image_path = os.path.join('.', f.filename)

    # Using the OCR model to perform the OCR
    results = ocr_model.ocr(image_path)

    # splitting from commas
    splitted = []
    for i in range(len(results)):
        if (results[i][1][0].find(',') != -1):
            results_splitted = results[i][1][0].split(',')
            for result_splitted in results_splitted:
                splitted.append(result_splitted)
        else:
            splitted.append(results[i][1][0])

    # filtered down results
    filtered = []
    for i in range(len(splitted)):
        result_check = splitted[i].lower()
        if (result_check.find('ingredients') != -1):  
            filtered.append(result_check.replace('ingredients:', ''))
        elif (result_check.find('contains') != -1):
            filtered.append(result_check.replace('contains:', ''))
        elif (result_check.find('may contain') != -1):
            filtered.append(result_check.replace('may contain', ''))
        else:
            filtered.append(result_check)
    print(api(filtered))
    # return {"msg": {"keywords": filtered, "facts": ["It is healthy", "It tastes good"]}}
    # return {"msg" : filtered }
    return {"ok": filtered}

if __name__ == "__main__":
    app.secret_key = os.urandom(24)
    app.run(debug=True)

CORS(app, expose_headers='Authorization')
