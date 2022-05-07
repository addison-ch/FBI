from flask import Flask
from flask_cors import CORS, cross_origin
from serpapi import GoogleSearch
import json, requests


app = Flask(__name__)
CORS(app)

@app.route("/api")
def api():
    params = {
    "q": "What is the use of sodium chloride in food?",
    "hl": "en",
    "gl": "us",
    "api_key": "1c1af191bef69e75c008dd69a150a7e2a688994a3ce696cdb784f52aa0d6ef0e"
    }
    search = GoogleSearch(params)
    results = search.get_dict()
    answer_box = results["answer_box"]
    
    print(answer_box['snippet'])
    print('hi')
    return {"msg" : [{"ingredient": "Sodium Chloride", "fact": answer_box['snippet']}] }


if __name__ == "__main__":
    app.run(debug=True)