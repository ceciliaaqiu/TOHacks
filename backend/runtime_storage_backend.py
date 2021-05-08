from flask import Flask, jsonify, make_response, request, abort
from datetime import datetime

app = Flask(__name__)

# runtime storage
users = []


@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_task(user_id):
    user = [user for user in users if user['id'] == user_id]
    if len(user) == 0:
        abort(404)
    return jsonify({'user': user[0]})


# returns all users in json format
@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify({'users': users})


@app.route('/api/users', methods=['POST'])
def create_user():
    '''
        makes a new user
        eg using command line 64bit Win:
            curl -H "Content-Type: application/json" -X POST -d "{\"first\":\"John\", \"last\":\"Doe\"}" http://localhost:5000/api/users
    '''
    if not request.json or not 'first' in request.json:
        abort(400)


    user = {
        'first': request.json['first'],
        'last': request.json['last'],
        'date_joined': datetime.utcnow()
    }
    if users:
        user['id'] = users[-1]['id'] + 1
    else:
        user['id'] = 0
    users.append(user)
    return jsonify({'user': user}), 201


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)


if __name__ == '__main__':
    app.run(debug=True)