import os
from flask import Flask, flash, request, redirect, url_for, session
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import logging

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger('HELLO WORLD')



UPLOAD_FOLDER = '/'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route("/api")
def api():
    return {"msg" : "hi rishie 🤰"}

@app.route("/image_upload", methods=['POST'])
def fileUpload():
    f = request.files['file']
    f.save(secure_filename(f.filename))
    # target=os.path.join(UPLOAD_FOLDER,'')
    # if not os.path.isdir(target):
    #     os.mkdir(target)
    # file = request.files['file'] 
    # filename = secure_filename(file.filename)
    # destination="/".join([target, filename])
    # file.save(destination)
    # session['uploadFilePath']=destination
    response="Whatever you wish too return"
    return response

if __name__ == "__main__":
    app.secret_key = os.urandom(24)

    app.run(debug=True)

CORS(app, expose_headers='Authorization')
