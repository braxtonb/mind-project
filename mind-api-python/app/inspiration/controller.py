from flask_restful import Resource, marshal_with
from typing import List

from db import inspirations
from app.config import active_config
from app.shared.parsers import PaginationRequestParser, InspirationBodyParser
from .interface import PaginatedInspirationInterface
from .service import InspirationService
from .schema import InspirationSchema


class InspirationsResource(Resource):
    @marshal_with(InspirationSchema)
    def get(self):
        pagination_parser = PaginationRequestParser()
        args = pagination_parser.parse_args()

        paginated_inspirations: PaginatedInspirationInterface = InspirationService.get_paginated_list(
            **args)

        return paginated_inspirations["inspirations"], 200, {active_config.TOTAL_COUNT_HEADER: str(paginated_inspirations["count"])}

    @marshal_with(InspirationSchema)
    def post(self):
        inspiration_parser = InspirationBodyParser()
        args = inspiration_parser.parse_args()

        inspiration = InspirationService.create(args)

        return inspiration, 200


class InspirationByIdResource(Resource):
    @marshal_with(InspirationSchema)
    def get(self, inspiration_id):
        inspiration = InspirationService.get(inspiration_id)

        if inspiration:
            return inspiration, 200

        return f"Inspiration {inspiration_id} not found", 400

    @marshal_with(InspirationSchema)
    def put(self, inspiration_id):
        inspiration_parser = InspirationBodyParser()
        args = inspiration_parser.parse_args()

        inspiration = InspirationService.update(inspiration_id, args)

        if inspiration:
            return inspiration, 201

        return f"Inspiration {inspiration_id} not found", 400

    @marshal_with(InspirationSchema)
    def delete(self, inspiration_id):
        inspiration = InspirationService.delete(inspiration_id)

        if inspiration:
            return inspiration, 201

        return f"Inspiration {inspiration_id} not found", 400
