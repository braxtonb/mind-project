from flask_restful import fields

InspirationSchema = {
    "createdAt": fields.String,
    "creatorName": fields.String,
    "description": fields.String,
    "id": fields.String,
    "mediaType": fields.String,
    "mediaURL": fields.String,
    "name": fields.String,
    "updatedAt": fields.String,
    "url": fields.String,
}
