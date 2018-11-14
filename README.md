# YouMan

A webapp using which the user can search for videos on YouTube. It provided features to sort the videos by name or by date.

## Implementation

* The backend server is made using Flask and the frontend is made using Bootstrap, jQuery and Javascript.
* When the user searches for a query, an AJAX POST request is made to the Flask API.
* The Flask API uses the Google Python API Client Library to search YouTube and returns an array of JSON Objects.
* This array is then parsed and a `div` block is created for each video.
* The sorting is done using the javascript `sort` function.
* The Dockerfile is used to build a Docker image to run the project using Docker.
* It is also deployed to Heroku [here](https://youman.herokuapp.com/)

## How to run

### Generate a YouTube API key :

* Create a project in the [Google Developer Console](https://console.developers.google.com/)
* Click on the *Enable APIs and Services*, search for *YouTube Data API v3* and click on *Enable*.
* Click on *Credentials* in the left menu and click on *Create Credentials*.
* In the *Where you will be call the API from* select *Web Server* and select *Public Data* in *What data will you be accessing?* and click the next button.
* Copy the API key and assign the value of *YOUTUBE_API_KEY* variable in the `utils.py` file

### Run the webapp:

**Using Docker**

* Make sure you have docker installed.
* Build the docker image using (might take some time)
```bash
docker build -t youman .
```
* Run the image using
```bash
docker run -p 8000:8000 youman
```

**Running locally**

* To run you need Python3.5+ and pip installed.
* Clone the repository and enter into it using 
```bash
git clone https://github.com/techytushar/youman.git && cd youman
```
* Install `virtualenv` module to create a virtual environment using
```bash
[sudo] pip3 install virtualenv
```
* Create a virtual environment using
```bash
virtualenv .
```
* Activate the virtual environment using 
```bash
source bin/activate
```
* Install all the dependencies using
```bash
pip install -r requirements.txt
```
* Export the FLASK_APP environment variable using
```bash
export FLASK_APP=app.py
```
* Run the app using
```bash
flask run -h localhost -p 8000
```
* Open a browser and navigate to
```
http://localhost:8000
```
