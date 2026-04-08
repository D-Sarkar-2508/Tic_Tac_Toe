FROM python:3.9
WORKDIR /code
COPY ./requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
COPY . .
# Flask needs to run on port 7860 for Hugging Face
CMD ["python", "app.py"]