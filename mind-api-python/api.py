import os

from app import create_app
from app.config import active_config


mind_app = create_app()

if __name__ == "__main__":
    mind_app.run(debug=active_config.DEBUG, port=4000)
