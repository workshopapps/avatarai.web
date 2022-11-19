FROM python:3.9

WORKDIR code

COPY ./Backend/requirements.txt .

RUN pip install -r requirements.txt

COPY ./Backend .

CMD ["uvicorn", "api:app", "--host", "0.0.0.0", "--root-path", "/api/v1", "--port", "8000"]
