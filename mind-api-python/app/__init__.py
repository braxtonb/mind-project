from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy()


def create_app():
    from app.config import active_config
    from app.routes import register_routes

    mind_app = Flask(__name__)
    mind_app.config.from_object(active_config)
    CORS(mind_app, expose_headers=[active_config.TOTAL_COUNT_HEADER])
    api = Api(mind_app)

    register_routes(api, mind_app)
    db.init_app(mind_app)
    Migrate(mind_app, db)
    db.create_all(app=mind_app)

    return mind_app
