# version hand in will be deployed on pythonanywhere.com
# set up flask app on shopping list
# 1. Get local storage - new structure
# 2. write the endpoints to save + get
# 3. update js to use fetch to save & get
# localhost:5001/static/shopping.html

from flask import Flask, Response, request, jsonify, send_from_directory
from pathlib import Path
import os

app = Flask(__name__, static_url_path = '')

@app.route('/js/<path:path>')
def js(path):
    return send_from_directory('js', path)

@app.route('/css/<path:path>')
def css(path):
    return send_from_directory('css', path)

@app.route('/')
def page():
    return send_from_directory('',"shopping.html")

@app.route('/shoppinglist', methods = ['GET','POST'])
def shoppinglist():
    wd = os.path.dirname(os.path.realpath(__file__))
    file_path = wd + "/shoppingList.json"
    my_file = Path(file_path)

    if request.method == 'GET':
        # GET method
        # read json from text file
        with open(file_path, 'rb') as info:
            raw = info.read()
            res = Response(raw)
            res.headers['Content-type'] = 'application/json'
        return res
    else:
        # POST method
        # write json to text file
        with open(file_path, 'wb') as info:
            res = request.data
            info.write(res)
        return res

@app.route('/shoppinglistauto', methods=['GET', 'POST'])
def auto():
    wd = os.path.dirname(os.path.realpath(__file__))
    file_path = wd + "/shoppingListAuto.json"
    my_file = Path(file_path)

    if request.method == 'GET':
        if os.path.exists(file_path):
            with open(file_path, "rb") as info:
                raw = info.read()
                res = Response(raw)
                res.headers['Content-type'] = 'application/json'
            return res
    else:
        with open(file_path, "wb") as info:
            res = request.data
            info.write(res)
        return res


if __name__ == "__main__":
    app.run(debug=True, port=5001)
