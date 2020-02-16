from flask import Blueprint
from .extentions import mongo
from pymongo import MongoClient

main = Blueprint('main', __name__)
client = MongoClient(
    'mongodb+srv://dbUser:dbUserPassword@programmersonly-vbfpo.gcp.mongodb.net/test?retryWrites=true&w=majority')


@main.route('/')
def index():
    db = client.Users
    user_collection = db.UserData
    user_collection.insert({'ID': 0, 'name': 'Alex', 'Gender': 'Male', 'Interest': 'Men',
                            'Bio': "Find some time to do something", 'Code': "Picture", 'Password': "Password"})
    return '<h1>Added a user!</h1>'
