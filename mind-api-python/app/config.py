import os
from typing import List, Type


class BaseConfig:
    CONFIG_NAME = "base"
    TOTAL_COUNT_HEADER = "x-total-count"
    DEBUG = True
    # usually database credentials would be read from a .env file
    # but for demonstration purposes it is put in the config file
    SQLALCHEMY_DATABASE_URI = "postgresql://admin:password@db-postgres-local:5432/mind"
    # not using Flask-SQLAlchemy's event system currently
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class LocalConfig(BaseConfig):
    CONFIG_NAME = "local"


class ProductionConfig(BaseConfig):
    CONFIG_NAME = "prod"
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = "postgresql://admin:password@db-postgres-prod:5432/mind"


EXPORT_CONFIGS: List[Type[BaseConfig]] = [
    LocalConfig,
    ProductionConfig
]

config_by_name = {cfg.CONFIG_NAME: cfg for cfg in EXPORT_CONFIGS}
active_config = config_by_name[os.getenv("FLASK_ENV") or LocalConfig.CONFIG_NAME]