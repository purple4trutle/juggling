# syntax=docker/dockerfile:1

FROM python:3.7-slim-buster
ENV PYTHONUNBUFFERED=1

WORKDIR /backend
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY ./src ./src
EXPOSE 8000
CMD [ "python", "./src/api/manage.py" , "runserver", "0.0.0.0:8000" ]
