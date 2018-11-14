from apiclient.discovery import build
from apiclient.errors import HttpError

YOUTUBE_API_KEY = "YOUR-API-KEY-HERE"

# gets videos data for youtube api and returns list of dicts 
def search_yt(query):
    service = build("youtube", "v3", developerKey=YOUTUBE_API_KEY)
    response = service.search().list(
        q=query,
        type="video",
        order="relevance",
        part="id,snippet",
        maxResults=10,
    ).execute()

    videos = []
    for item in response["items"]:
        d = {
            "id" : item["id"]["videoId"],
            "title" : item["snippet"]["title"],
            "descr" : item["snippet"]["description"],
            "p_date" : item["snippet"]["publishedAt"],
            "thumbnail" : item["snippet"]["thumbnails"]["high"]["url"]
        }
        videos.append(d)
    
    return videos
