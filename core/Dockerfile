FROM python:3.8-slim-buster

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt && pip install psycopg2-binary



COPY . .

CMD [ "python3", "manage.py", "runserver", "127.0.0.1:8000"]