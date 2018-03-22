# version hand in will be deployed on pythonanywhere.com
# set up flask app on shopping list
# 1. Get local storage - new structure
# 2. write the endpoints to save + get
# 3. update js to use fetch to save & get
# localhost:5001/static/index.html

from flask import Flask, Response, request, jsonify
from flask_cors import CORS
import json, random

app = Flask(__name__)
CORS(app)

@app.route('/savelist')
def save(): #POST method
    # write json to text file
    res = Response(json.dumps(shoppingModel.newItems)) #this thing is not right, just a eg of get the items list
    res.headers['Content-type'] = 'application/json'
    return res

@app.route('getlist')
def get(): #GET method
    # read json from text file

if __name__ == "__main__":
    app.run(debug=True, port=5001)