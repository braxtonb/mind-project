
from flask import Flask
from flask_restful import Api

BASE_ROUTE = "health"


def reigster_routes(api: Api, app: Flask, root=""):
    from .controller import HealthResource

    api.add_resource(HealthResource, f"{root}/{BASE_ROUTE}")
