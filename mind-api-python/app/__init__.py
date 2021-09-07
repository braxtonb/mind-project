from flask import Flask
from flask_restful import Api
from flask_cors import CORS


def create_app():
    from app.config import active_config
    from app.routes import register_routes

    mind_app = Flask(__name__)
    mind_app.config.from_object(active_config)
    CORS(mind_app, expose_headers=[active_config.TOTAL_COUNT_HEADER])
    api = Api(mind_app)

    register_routes(api, mind_app)

    return mind_app
