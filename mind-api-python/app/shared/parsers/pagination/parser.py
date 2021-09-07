from flask_restful import reqparse
from typing import TypedDict


class PaginationArgsInterface(TypedDict):
    _page: int
    _limit: int


class PaginationRequestParser:
    def __init__(self, parser=reqparse.RequestParser(bundle_errors=True)):
        self.parser = parser
        self.add_arguments()

    def add_arguments(self):
        self.parser.add_argument('_page',  type=int, location='args')
        self.parser.add_argument('_limit', type=int, location='args')

    def parse_args(self) -> PaginationArgsInterface:
        args: PaginationArgsInterface = self.parser.parse_args()

        return {
            "page": int(args['_page']),
            "limit": int(args['_limit'])
        }
