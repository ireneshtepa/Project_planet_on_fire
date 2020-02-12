#!/usr/bin/env python
# coding: utf-8

# In[26]:


#import dependencies

import requests
import json
import twitter
from twitter import *
from config import consumer_key, consumer_secret, access_token, access_token_secret


# In[27]:


#dictionary of relevant locations

#Add locations based on where we see forest fires on the map (on home page)

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


# In[28]:


#authenticate with Twitter

api = twitter.Api(consumer_key=consumer_key,
  consumer_secret=consumer_secret,
  access_token_key=access_token,
  access_token_secret=access_token_secret)

    #check authentication
print(api.VerifyCredentials())


# In[29]:


#sample search

search = api.GetSearch("wildfire South Wales")
#print(search)
for tweet in search:
    #print(tweet.id)
    tweet_id = tweet.id
    
#oembed with single call as sample
tweet_embed = api.GetStatusOembed(status_id=1226846606856740865,  url=None, maxwidth=None, hide_media=False, hide_thread=False, omit_script=False, align=None, related=None, lang=None)
print(tweet_embed)


# In[33]:


#request variables and loop
url = "https://api.twitter.com/1.1/search/tweets.json"
lang = "eu"
result_type = "mixed"
count = "10"

region_dict = {}

#region_dict = {"canada";[23456,98765], "usa": [67889]}
#appending twitter ids in dictionary
for i in location_list:
    location = i["region"]
    try:
        location_search = api.GetSearch(f"wildfire news {location}"), 
        print(f"Processing {location}")
        
        for tweet in location_search[0]:
            print(tweet.id)
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


# In[34]:


#print region_dict to verify the dictionary is now populated with tweet_id
print(region_dict)


# In[ ]:





# In[ ]:




