import os

from app import create_app


mind_app = create_app()

if __name__ == "__main__":
    mind_app.run(debug=True, port=4000)
