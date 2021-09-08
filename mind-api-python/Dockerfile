FROM python:3.8-slim-buster

LABEL version="1.0"
LABEL description="This is the docker image for the python flask API in production"
LABEL maintainer = ["braxtonbrewton@gmail.com"]

WORKDIR /app

ENV FLASK_ENV=prod
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

CMD ["python3", "-m", "flask", "run", "--host=0.0.0.0", "--port=4000"]
