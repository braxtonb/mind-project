from enum import Enum
from typing import TypedDict

class MediaType(Enum):
    IMAGE = 'IMAGE'
    VIDEO = 'VIDEO'


class InspirationInterface(TypedDict, total=False):
    createdAt: int
    creatorName: str
    description: str
    id: int
    mediaType: MediaType
    mediaURL: str
    name: str
    updatedAt: int
    url: str
