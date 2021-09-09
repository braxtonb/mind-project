from enum import Enum
from typing import List, TypedDict

class MediaType(Enum):
    IMAGE = "IMAGE"
    VIDEO = "VIDEO"


class InspirationInterface(TypedDict, total=False):
    createdAt: str
    creatorName: str
    description: str
    id: str
    mediaType: MediaType
    mediaURL: str
    name: str
    updatedAt: str
    url: str

class PaginatedInspirationInterface(TypedDict, total=False):
    count: int
    inspirations: List[InspirationInterface]