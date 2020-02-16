from flask import Flask
from .extentions import mongo
from .main import main


def create_app(config_object='Backend.settings'):
    # create and configure the app
    app = Flask(__name__)
    app.config.from_object(config_object)
    #mongo.init_app(app)
    mongo.init_app('mongodb+srv://dbUser:dbUserPassword@programmersonly-vbfpo.gcp.mongodb.net/test?retryWrites=true&w=majority')

    app.register_blueprint(main)
    return app