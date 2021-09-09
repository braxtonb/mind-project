from typing import List
from app import db

from .model import Inspiration
from .interface import InspirationInterface, PaginatedInspirationInterface


class InspirationService:
    @staticmethod
    def get_paginated_list(page: int, limit: int) -> PaginatedInspirationInterface:
        paginated_inspirations = Inspiration.query.paginate(page, limit, error_out=False)

        return {
            "count": paginated_inspirations.total,
            "inspirations": paginated_inspirations.items
        }


    @staticmethod
    def create(inspiration: InspirationInterface) -> Inspiration:
        new_inspiration = Inspiration(**inspiration)

        db.session.add(new_inspiration)
        db.session.commit()

        return new_inspiration

    @staticmethod
    def get(inspiration_id: int) -> Inspiration:
        return Inspiration.query.get(inspiration_id)

    @staticmethod
    def update(inspiration_id: int, changes: InspirationInterface) -> Inspiration:
        inspiration = InspirationService.get(inspiration_id)

        if not inspiration:
            return inspiration

        inspiration.update(changes)
        db.session.commit()

        return inspiration

    @staticmethod
    def delete(inspiration_id: int) -> Inspiration:
        inspiration = InspirationService.get(inspiration_id)

        if not inspiration:
            return inspiration

        db.session.delete(inspiration)
        db.session.commit()

        return inspiration
