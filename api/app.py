from distutils.command.config import config
import os
from flask import Flask, flash, request, redirect, url_for, session
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import logging

# imports for tesseract
import pytesseract
import PIL.Image

# imports for paddleocr
from paddleocr import PaddleOCR

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger('HELLO WORLD')




ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)

@app.route("/api")
def api():
    return {"msg" : "hi rishie 🤰"}

@app.route("/image_upload", methods=['POST'])
def fileUpload():
    f = request.files['file']
    f.save(secure_filename(f.filename))
    
    print(f.filename)

    # instantiates a PaddleOCR object
    ocr_model = PaddleOCR(lang='en')

    # gets path to image
    image_path = os.path.join('.', f.filename)

    # gets the results of the ocr process
    results = ocr_model.ocr(image_path)

    # filtered down results
    filtered = []
    for i in range(len(results)):
    #if (any(char.isdigit() for char in result[1][0]) and result[1][0].find('%') == -1):
        #filtered.append(result[1][0])
        # Redacts the word ingredients or fact plus the colon
        result_check = results[i][1][0].lower()
        if (result_check.find('ingredients') != -1):  
            filtered.append(result_check.replace('ingredients:', ''))
        elif (result_check.find('contains') != -1):
            filtered.append(result_check.replace('contains:', ''))
        elif (result_check.find('may contain') != -1):
            filtered.append(result_check.replace('may contain', ''))
        else:
            filtered.append(result_check)
   
    return {"ok":filtered}

if __name__ == "__main__":
    app.secret_key = os.urandom(24)
    app.run(debug=True)

CORS(app, expose_headers='Authorization')
