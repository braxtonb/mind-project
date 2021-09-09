from sqlalchemy import Column, String
from app import db
from .interface import InspirationInterface


class Inspiration(db.Model):
    '''An Inspiration'''

    __tablename__ = "inspiration"

    createdAt = Column(String(255), nullable=False)
    creatorName = Column(String(255), nullable=False)
    description = Column(String(255), nullable=False)
    id = Column(String(255), primary_key=True, autoincrement=False)
    mediaType = Column(String(255), nullable=False)
    mediaURL = Column(String(255), nullable=False)
    name = Column(String(255), nullable=False)
    updatedAt = Column(String(255), nullable=False)
    url = Column(String(255), nullable=False)

    def __repr__(self):
        return f"<Inspiration {self.name}>"

    def update(self, changes: InspirationInterface):
        for key, val in changes.items():
            setattr(self, key, val)
        return self