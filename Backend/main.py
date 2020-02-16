from flask import Blueprint, jsonify
from .extentions import mongo
from pymongo import MongoClient
from passlib.hash import sha256_crypt

main = Blueprint('main', __name__)
client = MongoClient(
    'mongodb+srv://dbUser:dbUserPassword@programmersonly-vbfpo.gcp.mongodb.net/test?retryWrites=true&w=majority')
db = client.Users
users = db.UserData


@main.route('/')
def index():
    db = client.Users
    users = db.UserData
    users.insert({'ID': 0, 'Name': 'Alex', 'Gender': 'Male', 'Interest': ['Male'],
                            'Bio': "Find some time to do something", 'Code': "Picture", 'Password': "Password", 'Matches':[1,2,3], 'Username':'Axelman03'})
    return '<h1>Added a user!</h1>'
ID = 0

@main.route('/findUser')
def findUser():
    return jsonify({'int':5})
# def findUser():
#     reader = users.find_one({'ID': ID})
#     readerInterest = reader['Interest']
#     readerGender = reader['Gender']
#     for genders in readerInterst:
#         for user in users.find({'Gender': genders}):
#             userInterest = user['Interest']
#             for userGender in userInterest:
#                 if userGender == readerGender:
#                     return jsonify(user)


def createUser(name, username, password, bio, gender, interest):
    count = 1
    for user in users.find():
        count += 1

    ID = count
    password = sha256_crypt.encrypt(password)
    newUser = {'ID': ID, 'Name': name, 'Gender': gender, 'Interest': interest, 'Bio': bio, 'Picture': None, 'Password': password, 'Matches': [], 'Username': username}
    users.insert(newUser)

def sendLinktoUIPath(link):
    return None

def uploadPicToProfile(pic):  #request UIPath
    users.update_one({'ID':ID}, {'Picture':pic})