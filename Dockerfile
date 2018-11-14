FROM ubuntu:18.10
LABEL maintainer="Tushar Mittal <chiragmittal.mittal@gmail.com>"

RUN apt-get update
RUN apt-get install -y python3 python3-dev python3-pip

COPY ./ ./app
WORKDIR ./app

RUN pip3 install -r requirements.txt
RUN export FLASK_APP=app.py
EXPOSE 8000

ENTRYPOINT ["gunicorn", "-b", "0.0.0.0:8000"]
CMD ["app:app"]
