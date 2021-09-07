from flask import Flask
from flask_restful import Api


def register_routes(api: Api, app: Flask, root=""):
    from app.health import reigster_routes as attach_health
    from app.inspiration import reigster_routes as attach_inspiration

    # Add routes
    attach_health(api, app, root)
    attach_inspiration(api, app, root)
