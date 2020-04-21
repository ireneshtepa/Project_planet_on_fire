
import requests
import json
import twitter
from twitter import *
from config import consumer_key, consumer_secret, access_token, access_token_secret
import json
import pymongo
import datetime as dt 
import time

# Setup connection to mongodb

#dictionary of relevant locations

#Add locations based on where we see forest fires on the map (on home page)

def scrapeTwitter():


    location_list = [
        {"region": "Brazil", "lat": -14.23, "lon": -51.92},
        {"region": "Canada", "lat": 50.67, "lon": -120.34},
        {"region": "Spain", "lat": 41.11, "lon": 1.24},
        {"region": "USA", "lat": 34.05, "lon": -118.24},
        {"region": "Australia", "lat": -31.84, "lon": 145.61},
        {"region": "New Zealand", "lat": -38.05, "lon": 175.43},
        {"region": "Congo", "lat": -4.51, "lon": 15.53},
        {"region": "Indonesia", "lat": -6.17, "lon": 106.82},
        {"region": "Russia", "lat": 61.01, "lon": 99.19},
        {"region": "Lebanon", "lat": 33.88, "lon": 35.49},
        {"region": "North America", "lat": 50.67, "lon": -120.34},
        {"region": "South America", "lat": -14.23, "lon": -51.92},
        {"region": "Australia", "lat": -31.84, "lon": 145.61},
        {"region": "Africa", "lat": -4.51, "lon": 15.53},
        {"region": "Asia", "lat": -6.17, "lon": 106.82},
        {"region": "Europe", "lat": 41.11, "lon": 1.24}
    ]
    #print(location_list[0]["region"])

    #authenticate with Twitter

    api = twitter.Api(consumer_key=consumer_key,
    consumer_secret=consumer_secret,
    access_token_key=access_token,
    access_token_secret=access_token_secret)

        #check authentication
    #print(api.VerifyCredentials())


    #sample search

    search = api.GetSearch("wildfire South Wales")
    #print(search)
    for tweet in search:
        #print(tweet.id)
        tweet_id = tweet.id
        
    #oembed with single call as sample
    tweet_embed = api.GetStatusOembed(status_id=1226846606856740865,  url=None, maxwidth=None, hide_media=False, hide_thread=False, omit_script=False, align=None, related=None, lang=None)

    #print(tweet_embed)

    tweetembedurl = tweet_embed["html"]
    #print(tweetembedurl)

    #request variables and loop
    url = "https://api.twitter.com/1.1/search/tweets.json"
    lang = "eu"
    result_type = "mixed"
    count = "10"

    region_dict = {}

    tweets=[]

    for i in location_list:
        location = i["region"]
        try:
            location_search = api.GetSearch(f"wildfire news {location} -Coronavirus -virus -corona -COVID, -COVID19 -COVID-19, -Trump, -Putin, -outbreak"), 
            #print(f"Processing {location}")
            
            for tweet in location_search[0]:
                #print(tweet.id)

                tweets.append(tweet.id)
                tweet_id = tweet.id
                
                if location in region_dict:
                    region_dict[location].append(tweet_id)
                else:
                    region_dict[location] = [tweet_id]
                    
                
            #print(location_search[0])
        except:
            print(f"{location} not found. Skipping...")
        continue

    #location_tweet_embed = api.GetStatusOembed(f"status_id={}"")

    #print(region_dict)

    #print(region_dict)

    tweet_id = 1227510148920332288

    tweettoembed = api.GetStatusOembed(status_id=tweet_id,  url=None, maxwidth=None, hide_media=False, hide_thread=False, omit_script=False, align=None, related=None, lang=None)

    #print(tweettoembed)

    #get oembed url for each id

    scriptData = []
    for each_tweet in tweets:
        tweet_id = each_tweet

        try:
            
            tweettoembed = api.GetStatusOembed(status_id=tweet_id,  url=None, maxwidth=None, hide_media=False, hide_thread=False, omit_script=False, align=None, related=None, lang=None)
            print(f"Processing {tweet_id}")
            #print(tweettoembed)
            tweetembedurl = tweettoembed["html"]
            #print(tweetembedurl)

            n=+1

            scriptData.append(tweetembedurl.strip())
            
        except:
            #print(f"{tweet_id} not found. Skipping...")
            continue
    print (scriptData)
    #return scriptData
    #myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    myclient = pymongo.MongoClient("mongodb+srv://Yatish:1234@cluster0-4l19n.mongodb.net/TwitterData?retryWrites=true&w=majority")
    mydb = myclient["TwitterData"]
    mycol = mydb["TwitterMyData"]

    mydict = { "url": scriptData}
    x = mycol.delete_many({})
    x = mycol.insert_one(mydict)

scrapeTwitter()
scraped_time = dt.datetime.now()
#scraped_time = dt.datetime.now()
print (scraped_time)

