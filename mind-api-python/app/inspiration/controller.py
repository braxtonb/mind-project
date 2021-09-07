from flask_restful import Resource
from typing import List

from db import inspirations
from app.config import active_config
from app.shared.parsers import PaginationRequestParser, InspirationBodyParser
from .interface import InspirationInterface
from .service import InspirationService


class InspirationsResource(Resource):
    def get(self):
        pagination_parser = PaginationRequestParser()
        args = pagination_parser.parse_args()

        paginated_inspirations: List[InspirationInterface] = InspirationService.get_paginated_list(
            **args)

        return paginated_inspirations, 200, {active_config.TOTAL_COUNT_HEADER: str(len(inspirations))}

    def post(self):
        inspiration_parser = InspirationBodyParser()
        args = inspiration_parser.parse_args()

        InspirationService.create(args)

        return {}, 200


class InspirationByIdResource(Resource):
    def get(self, inspiration_id):
        inspiration = InspirationService.get(inspiration_id)

        if inspiration:
            return inspiration, 200

        return f'Inspiration ${inspiration_id} not found', 400

    def put(self, inspiration_id):
        inspiration_parser = InspirationBodyParser()
        args = inspiration_parser.parse_args()

        inspiration = InspirationService.update(inspiration_id, args)

        if inspiration:
            return inspiration, 201

        return f'Inspiration ${inspiration_id} not found', 400

    def delete(self, inspiration_id):
        inspiration = InspirationService.delete(inspiration_id)

        if inspiration:
            return inspiration, 201

        return f'Inspiration ${inspiration_id} not found', 400
