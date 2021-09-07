import os
from typing import List, Type


class BaseConfig:
    CONFIG_NAME = "base"
    TOTAL_COUNT_HEADER = 'x-total-count'


class LocalConfig:
    CONFIG_NAME = "local"
    TOTAL_COUNT_HEADER = 'x-total-count'


class ProductionConfig:
    CONFIG_NAME = "prod"
    TOTAL_COUNT_HEADER = 'x-total-count'


EXPORT_CONFIGS: List[Type[BaseConfig]] = [
    LocalConfig,
    ProductionConfig
]

config_by_name = {cfg.CONFIG_NAME: cfg for cfg in EXPORT_CONFIGS}
active_config = config_by_name[os.getenv("FLASK_ENV") or LocalConfig.CONFIG_NAME]