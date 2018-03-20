from flask import Flask, Response, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/adder')
def adder():
    numbers = []
    for i in range(1,5):
        num = request.args.get("num"+str(i))
        if num != None:
            numbers.append(int(num))

    total = sum(numbers)

    res = Response(json.dumps({'total': total}))
    res.headers['Content-type'] = 'application/json'
    return res

    # return jsonify({'Total':total})

    # res = Response(json.dumps(num1 + num2))
    # res.headers['Content-type'] = 'application/json'
    # return res
    # return jsonify(num1+num2)


app.run(debug=True, port=5001)