from db import inspirations
from typing import List

from .interface import InspirationInterface


class InspirationService:
    @staticmethod
    def get_paginated_list(page: int, limit: int) -> List[InspirationInterface]:
        low_index = (page - 1) * limit
        high_index = page * limit
        paginated_inspirations = inspirations[low_index:high_index]

        return paginated_inspirations

    @staticmethod
    def create(inspiration: InspirationInterface) -> None:
        inspirations.append(inspiration)

    @staticmethod
    def get(inspiration_id: int) -> InspirationInterface:
        for inspiration in inspirations:
            if inspiration["id"] == inspiration_id:
                return inspiration

        return None

    @staticmethod
    def update(inspiration_id: int, new_data: InspirationInterface) -> InspirationInterface:
        for inspiration in inspirations:
            if inspiration["id"] == inspiration_id:
                inspiration.update(new_data)

                return inspiration

        return None

    @staticmethod
    def delete(inspiration_id: int) -> InspirationInterface:
        for index, inspiration in enumerate(inspirations):
            if inspiration["id"] == inspiration_id:
                return inspirations.pop(index)

        return None

