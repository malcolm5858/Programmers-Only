from flask import Blueprint, jsonify, request
from .extentions import mongo
from pymongo import MongoClient
from passlib.hash import sha256_crypt
import requests

main = Blueprint('main', __name__)
client = MongoClient(
    'mongodb+srv://dbUser:dbUserPassword@programmersonly-vbfpo.gcp.mongodb.net/test?retryWrites=true&w=majority')
db = client.Users
users = db.UserData

print("test")
headers = {'Content-Type': 'application/json',
           'X-UIPATH-TenantName': 'IITDefaultym3f337016'}
payload = {"grant_type": "refresh_token",
           "client_id": "8DEv1AMNXczW3y4U15LL3jYf62jK93n5",
           "refresh_token": "Rk-63zvkTn68N27Sse0TEMhEKrQEh4N_bhGg2rC-a8dZO"}
url = "https://account.uipath.com/oauth/token"

r = requests.post(url, headers=headers, json=payload)
print("test")
token = r.json().get("access_token")


# Request 2
url = "https://platform.uipath.com/iitissuxlz/IITDefaultym3f337016/odata/Releases"
headers = {'Authorization': 'Bearer ' + token,
           'X-UIPATH-TenantName': 'IITDefaultym3f337016'}

r = requests.get(url, headers=headers)
print("test")
key = r.json().get("value")[0].get("Key")


print("2")


def addUser(url):
    print("into function")
    testUrl = url
    url = "https://platform.uipath.com/iitissuxlz/IITDefaultym3f337016/odata/Jobs/UiPath.Server.Configuration.OData.StartJobs"
    headers = {'Content-Type': 'application/json',
               'X-UIPATH-TenantName': 'IITDefaultym3f337016', 'Authorization': 'Bearer ' + token}
    payload = {"startInfo": {
        "ReleaseKey": key,
        "Strategy": "All",
        "RobotIds": [],
        "NoOfRobots": 0,
        "InputArguments": "{\"CodeURL\":\"" + testUrl + "\"}"
    }}

    r = requests.post(url, headers=headers, json=payload)
    postKey = r.json().get('value')[0].get('Key')

    go = True
    while (go):
        headers = {'Authorization': 'Bearer ' + token,
                   'X-UIPATH-TenantName': 'IITDefaultym3f337016'}
        url = "https://platform.uipath.com/iitissuxlz/IITDefaultym3f337016/odata/Jobs?$orderby=CreationTime desc"
        r = requests.get(url, headers=headers)
        i = 0
        while postKey != r.json().get("value")[i].get("Key"):
            i += 1
        if r.json().get("value")[i].get("OutputArguments") == None:
            print("None")
        else:
            print("got the img")
            image = r.json().get("value")[i].get("OutputArguments")[18:-3]
            go = False

    return image


@main.route('/getURl', methods=['POST'])
def getUrl():
    urlFromFrontEnd = request.get_json()
    print(urlFromFrontEnd)
    img = addUser(urlFromFrontEnd)
    return jsonify({'string': img}), 200


# @main.route('/')
# def index():
#     users.insert({'ID': 0, 'Name': 'Alex', 'Gender': 'Male', 'Interest': ['Male'],'Bio': "Find some time to do something", 'Code': "Picture", 'Password': "Password", 'Matches': [], 'NotMatches':[], 'Username': 'Axelman03'})
#     return '<h1>Added a user!</h1>'


ID = 0


@main.route('/')
def auth():

    return jsonify({
        "grant_type": "refresh_token",
        "client_id": "8DEv1AMNXczW3y4U15LL3jYf62jK93n5",
        "refresh_token": "Xa_238Zt5ZGss2RzhxInG0V2Nqj0Zh6avMj__C9dCn1-Z"
    })


@main.route('/findUser')
def findUser():
    print("NONONO")
    beenSeen = False
    reader = users.find_one({'ID': ID})
    readerInterest = reader.get('Interest')
    readerGender = reader.get('Gender')
    readerMatches = reader.get('Matches')
    readerDismatches = reader.get('NotMatches')
    readerName = reader.get('Name')
    for genders in readerInterest:
        for user in users.find({'Gender': genders}):
            for match in readerMatches:
                if user.get('ID') == match:
                    beenSeen = True
            for dismatch in readerDismatches:
                if user.get('ID') == dismatch:
                    beenSeen = True
            if beenSeen == False:
                userInterest = user.get('Interest')
                for userGender in userInterest:
                    if userGender == readerGender:
                        userImage = user.get('Picture')
                        userBio = user.get('Bio')
                        
                        return jsonify({'Bio': userBio, 'img': userImage, 'id': user.get('ID'), 'name':readerName})


def createUser(name, username, password, bio, gender, interest, link):
    count = 1
    for user in users.find():
        count += 1

    iid = count
    password = sha256_crypt.encrypt(password)
    img = addUser(link)
    newUser = {'ID': iid,'Name': name, 'Gender': gender, 'Interest': interest, 'Bio': bio,
               'Picture': img, 'Password': password, 'Matches': [], 'NotMatches': [], 'Username': username}
    users.insert(newUser)
    
    global ID
    ID = iid
    return ID


@main.route('/getId', methods=['POST'])
def PostCreateUser():
    userData = request.get_json()
    id = createUser(userData.get("FirstName"), userData.get("Username"), userData.get("Password"), userData.get("Bio"), userData.get("Gender"), userData.get("LookFor"), userData.get("LinktoCode"))
    return jsonify({'id': id}), 200

@main.route('/getName')
def GetCurrentUserName():
    return jsonify({'name': sendName(ID)})

@main.route('/yesNo', methods=['POST'])
def matchRequest():
    data = request.get_json()
    if data.get('value'):
        match(data.get('id'))
    else:
        notMatch(data.get('id'))
    
    return ID


def match(iid):
    user = users.find_one({'ID': ID})
    userMatches = user.get('Matches') + iid
    users.update_one(user, userMatches)
    return findUser


def notMatch(iid):
    user = users.find_one({'ID': ID})
    userNotMatches = user.get('NotMatches') + iid
    users.update_one(user, userNotMatches)
    return findUser


def sendName(iid):
    user = users.find_one({'ID': iid})
    name = user.get('Name')
    return name


def uploadPicToProfile(pic):  # request UIPath
    users.update_one({'ID': ID}, {'Picture': pic})
