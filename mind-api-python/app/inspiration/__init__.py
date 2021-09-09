from flask import Flask
from flask_restful import Api
from .interface import InspirationInterface, MediaType

BASE_ROUTE = "inspirations"


def reigster_routes(api: Api, app: Flask, root=""):
    from .controller import InspirationsResource, InspirationByIdResource

    api.add_resource(InspirationsResource, f"{root}/{BASE_ROUTE}")
    api.add_resource(InspirationByIdResource,
                     f"{root}/{BASE_ROUTE}/<string:inspiration_id>")
