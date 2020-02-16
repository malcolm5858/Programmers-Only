from flask import Blueprint
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


@main.route('/', methods = ['GET','POST'])
def findUser(ID):
    reader = users.find_one({'ID': 0})
    readerInterest = reader['Interest']
    readerGender = reader['Gender']
    for genders in readerInterst:
        for user in users.find({'Gender': genders}):
            userInterest = user['Interest']
            for userGender in userInterest:
                if userGender == readerGender:
                    return user

def createUser(name, username, password, link, bio, gender, interest):  #takes in name, username, password, github link, bio, gender, interest
    count = 1
    for user in users.find():
        count += 1

    password = sha256_crypt.encrypt(password)
    newUser = {'ID':count, 'Name': name, 'Gender': gender, 'Interest': interest, 'Bio': bio, 'Picture': pic, 'Password':password, 'Matches':[], 'Username':username}
