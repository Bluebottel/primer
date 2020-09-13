from flask import Flask, request, make_response
from flask_cors import CORS

import json

app = Flask(__name__)

# CORS allows browser-run javascript to make calls to the server
# without getting blocked unless the server is running on the
# same domain
CORS(app)

@app.route('/gethello', methods = ['GET'])
def gethello():

    # request.args contain all the arguments found in a GET request
    # ex: www.test.com/cat?argument1=value1&argument2=value2...
    for key in request.args.keys():
        print(key, ':', request.args.get(key))
    
    return make_response('GET request  response!', 200)

@app.route('/postjson', methods = ['POST'])
def postjson():

    # the request object comes from the @app.route decorator
    # json.loads takes a json string and returns a 
    # python dictionary
    json_data = json.loads(request.data)

    print('The client sends: ', json_data)

    reply_dictionary = { 'reply_message': 'Hello earthling!' }

    return make_response(json.dumps(reply_dictionary), 200)


# without this part you'd have to start the Flask server by
# setting the FLASK_APP environment variable to the filename
# and then run "python -m flask run"
if __name__ == '__main__':
    app.run(debug = True, port = 14000)


    
