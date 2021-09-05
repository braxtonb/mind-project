from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS
from db import inspirations
from parsers import PaginationRequestParser, InspirationBodyParser


TOTAL_COUNT_HEADER = 'x-total-count'


app = Flask(__name__)
CORS(app, resources={r'/inspirations/*': {'origins': '*'}},
     expose_headers=[TOTAL_COUNT_HEADER])
api = Api(app)


class Inspirations(Resource):
    def get(self):
        parser_pagination = PaginationRequestParser.create_parser()
        args = parser_pagination.parse_args()
        page = int(args['_page'])
        limit = int(args['_limit'])
        low_index = (page - 1) * limit
        high_index = page * limit

        paginated_inspirations = inspirations[low_index:high_index]

        return paginated_inspirations, 200, {TOTAL_COUNT_HEADER: str(len(inspirations))}

    def post(self):
        parser_inspiration = InspirationBodyParser.create_parser()
        args = parser_inspiration.parse_args()
        inspirations.append(args)

        return {}, 200


class InspirationById(Resource):
    def get(self, inspiration_id):
        for inspiration in inspirations:
            if inspiration['id'] == inspiration_id:
                return inspiration

        return f'Inspiration ${inspiration_id} not found', 400

    def put(self, inspiration_id):
        parser_inspiration = InspirationBodyParser.create_parser()
        args = parser_inspiration.parse_args()

        for index, inspiration in enumerate(inspirations):
            if inspiration['id'] == inspiration_id:
                inspirations[index] = args
                return {}, 201

        return f'Inspiration ${inspiration_id} not found', 400

    def delete(self, inspiration_id):
        for index, inspiration in enumerate(inspirations):
            if inspiration['id'] == inspiration_id:
                inspirations.pop(index)
                return {}, 201

        return f'Inspiration ${inspiration_id} not found', 400


api.add_resource(Inspirations, '/inspirations')
api.add_resource(InspirationById, '/inspirations/<int:inspiration_id>')


if __name__ == '__main__':
    app.run(debug=True, port=4000)
