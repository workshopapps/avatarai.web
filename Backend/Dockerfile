FROM python:3.9

WORKDIR code

COPY ./Backend/requirements.txt .

RUN pip install -r requirements.txt

COPY ./Backend .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
