from flask import Flask, jsonify, make_response, request, abort
from datetime import datetime
import json
import os

app = Flask(__name__)

storage_file = open("data.json", "r+")

# checks if data.json is empty or not
if os.stat("data.json").st_size == 0:
    users = []
else:
    users = json.load(storage_file)


@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    '''
    this is O(n) but should be fast enough

    eg. curl -X GET http://localhost:5000/api/users/0
    '''
    user = [user for user in users if user['id'] == user_id]
    if len(user) == 0:
        abort(404)
    return jsonify({'user': user[0]})


# returns all users in json format
@app.route('/api/users', methods=['GET'])
def get_users():
    '''
    hide this from users?

    eg. curl -X GET http://localhost:5000/api/users
    '''
    return jsonify({'users': users})


@app.route('/api/users', methods=['POST'])
def create_user():
    '''
        makes a new user
        eg using command line 64bit Win:
            curl -H "Content-Type: application/json" -X POST -d "{\"first\":\"John\", \"last\":\"Doe\"}" http://localhost:5000/api/users

        Win10 64bit needs a '\' after " within the {}
    '''
    if not request.json or 'first' not in request.json:
        abort(400)

    user = {
        'first': request.json['first'],
        'last': request.json['last'],
        'date_joined': str(datetime.utcnow()),
        'daily_score': 0,
        'commute_ans': 0,
        'food_ans': 0,
        'waste_ans': 0,
        'bonus': 0
    }
    if users:
        user['id'] = users[-1]['id'] + 1
    else:
        user['id'] = 0
    users.append(user)

    json.dump(users, storage_file, indent=4)

    return jsonify({'user': user}), 201


@app.route('/api/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    '''
        updates a current user
        eg using command line 64bit Win:
            curl -H "Content-Type: application/json" -X PUT -d "{\"first\":\"Johnathan\"}" http://localhost:5000/api/users/[user_id]

        {} only needs updated key:value pairs
        must know the user_id to add to the uri
    '''
    user = [user for user in users if user['id'] == user_id]
    if len(user) == 0:
        abort(404)
    if not request.json:
        abort(400)
    if 'first' in request.json and type(request.json['first']) != str:
        abort(400)
    if 'last' in request.json and type(request.json['last']) is not str:
        abort(400)
    if 'daily_score' in request.json and type(request.json['daily_score']) is not int:
        abort(400)
    if 'commute_ans' in request.json and type(request.json['commute_ans']) is not int:
        abort(400)
    if 'food_ans' in request.json and type(request.json['food_ans']) is not int:
        abort(400)
    if 'waste_ans' in request.json and type(request.json['waste_ans']) is not int:
        abort(400)
    if 'bonus' in request.json and type(request.json['bonus']) is not int:
        abort(400)
    user[0]['first'] = request.json.get('first', user[0]['first'])
    user[0]['last'] = request.json.get('last', user[0]['last'])
    user[0]['daily_score'] = request.json.get('daily_score', user[0]['daily_score'])
    user[0]['commute_ans'] = request.json.get('commute_ans', user[0]['commute_ans'])
    user[0]['food_ans'] = request.json.get('food_ans', user[0]['food_ans'])
    user[0]['waste_ans'] = request.json.get('waste_ans', user[0]['waste_ans'])
    user[0]['bonus'] = request.json.get('bonus', user[0]['bonus'])
    json.dump(users, storage_file, indent=4)
    return jsonify({'task': user[0]})


@app.route('/api/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    '''
        deletes a current user
        eg using command line 64bit Win:
            curl -X DELETE http://localhost:5000/api/users/[user_id]

        must know the user_id to add to the uri
    '''
    user = [user for user in users if user['id'] == user_id]
    if len(user) == 0:
        abort(404)
    users.remove(user[0])
    json.dump(users, storage_file, indent=4)
    return jsonify({'result': True})


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)


if __name__ == '__main__':
    app.run(debug=True)

    # requires port forwarding to local port 5000
    #   app.run(host="0.0.0.0")
    # users connect through [ip]:5000
