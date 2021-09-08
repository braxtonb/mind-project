from flask_restful.reqparse import RequestParser
from app.inspiration import InspirationInterface, MediaType


class InspirationBodyParser:
    def __init__(self, parser=RequestParser(bundle_errors=True)):
        self.parser: RequestParser = parser
        self.add_arguments()

    def add_arguments(self):
        self.parser.add_argument("createdAt",   type=int,                               required=True, help="createdAt is a required number")
        self.parser.add_argument("creatorName", type=str,                               required=True, help="creatorName is a required string")
        self.parser.add_argument("description", type=str,                               required=True, help="description is a required string")
        self.parser.add_argument("id",          type=int,                               required=True, help="id is a required number")
        self.parser.add_argument("mediaType",   type=str,   choices=("IMAGE", "VIDEO"), required=True, help="mediaType must be IMAGE or VIDEO: {error_msg}")
        self.parser.add_argument("mediaURL",    type=str,                               required=True, help="mediaURL is a required string")
        self.parser.add_argument("name",        type=str,                               required=True, help="name is a required string")
        self.parser.add_argument("updatedAt",   type=int,                               required=True, help="updatedAt is a required number")
        self.parser.add_argument("url",         type=str,                               required=True, help="url is a required string")

    def parse_args(self) -> InspirationInterface:
        args: InspirationInterface = self.parser.parse_args()

        return {
            "createdAt": int(args["createdAt"]),
            "creatorName": args["creatorName"],
            "description": args["description"],
            "id": int(args["id"]),
            "mediaType": args["mediaType"],
            "mediaURL": args["mediaURL"],
            "name": args["name"],
            "updatedAt": int(args["updatedAt"]),
            "url": args["url"]
        }
