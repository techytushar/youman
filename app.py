from flask import Flask, render_template, request
from flask_restful import Resource, Api

from utils import search_yt 


app = Flask(__name__, static_url_path='/static')
api = Api(app)

@app.route('/')
def index():
    return render_template('index.html')

class Search(Resource):
    def post(self):
        data = request.get_json(force=True)
        videos = search_yt(data['query']) 
        return videos


api.add_resource(Search, '/search')
