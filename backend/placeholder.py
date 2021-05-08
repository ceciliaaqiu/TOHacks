from flask import Flask, request
from flask_restful import Api, Resource
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///userinfo.db"
db = SQLAlchemy(app)
ma = Marshmallow(app)
api = Api(app)

class UserInfo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(200), nullable=False)
    last_name = db.Column(db.String(200), nullable=False)
    # answers_first_qs = db.relationship('Questions', backref='userinfo', lazy=True)

    def __repr__(self):
        return '<User %r>' % self.id

class Questions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(200), nullable=False)


class UserSchema(ma.Schema):
    class Meta:
        fields = ("id", "title", "content")
        model = UserInfo

user_schema = UserSchema()
users_schema = UserSchema(many=True)


class UserList(Resource):
    def get(self):
        users = UserInfo.query.all()
        return users_schema.dump(users)

    def post(self):
        new_user = UserInfo(
            first_name=request.json['first_name'],
            last_name=request.json['last_name']
        )
        db.session.add(new_user)
        db.session.commit()
        return user_schema.dump(new_user)
'''
class User(Resource):
    def get(self, post_id):
        user = UserInfo.qet_or_404(post_id)
        return user_schema.dump(user)
'''

api.add_resource(UserList, '/users')
# api.add_resource(User, '/users/<int:user_id>')

if __name__ == '__main__':
    app.run(debug=True)