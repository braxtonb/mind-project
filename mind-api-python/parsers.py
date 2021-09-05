from flask_restful import reqparse

class PaginationRequestParser:
    @staticmethod
    def create_parser():
        parser_pagination = reqparse.RequestParser(bundle_errors=True)
        parser_pagination.add_argument('_page', location='args')
        parser_pagination.add_argument('_limit', location='args')

        return parser_pagination


class InspirationBodyParser:
    @staticmethod
    def create_parser():
        parser_inspiration = reqparse.RequestParser(bundle_errors=True)
        parser_inspiration.add_argument('createdAt',   type=int,                   required=True, help='createdAt is a required number')
        parser_inspiration.add_argument('creatorName', type=str,                   required=True, help='creatorName is a required string')
        parser_inspiration.add_argument('description', type=str,                   required=True, help='description is a required string')
        parser_inspiration.add_argument('id',          type=int,                   required=True, help='id is a required number')
        parser_inspiration.add_argument('mediaType',   choices=('IMAGE', 'VIDEO'), required=True, help='mediaType must be IMAGE or VIDEO: {error_msg}')
        parser_inspiration.add_argument('mediaURL',    type=str,                   required=True, help='mediaURL is a required string')
        parser_inspiration.add_argument('name',        type=str,                   required=True, help='name is a required string')
        parser_inspiration.add_argument('updatedAt',   type=int,                   required=True, help='updatedAt is a required number')
        parser_inspiration.add_argument('url',         type=str,                   required=True, help='url is a required string')

        return parser_inspiration