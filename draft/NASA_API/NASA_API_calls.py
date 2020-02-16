#!/usr/bin/env python
# coding: utf-8

# In[1]:


#import dependencies
import requests
import time
import pandas as pd
from config import nkey
import json


# In[2]:


#dictionary of locations of tooltips on homepage map

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


# NASA Earth Images API Call
# * API needs to read from user click (javascript?)
# * images will be placed in tooltip of country area (i.e. the central point of the zoom coordinates)

# In[16]:


#request variables
#url="https://api.nasa.gov/planetary/earth/imagery/"
#city = "Anchorage"
#lon = "-149.86"
#lat = "61.22"

#build query url 
#query_url = f"{url}?lon={lon}&lat={lat}&api_key={nkey}"

#print(query_url)


# In[17]:


#retrieve image url for Anchorage, Alaska
#image = requests.get(query_url).json()

#print(image)


# NASA Images API Call
# * API needs to read from user click (javascript?)
# * images will in the further information page

# In[3]:


###SAMPLE PULL TO TEST THAT API WORKS

#request variables
url="https://images-api.nasa.gov/search"
region=location_list[0]['region'] #can put in 0 for just Anchorage, but i is for loops (having trouble with using i)
lat=location_list[0]['lat']
lon=location_list[0]['lon']
media_type="image"

#build query url
query_url = f"{url}?q={region}&media_type={media_type}"

#retrive image url
region_url = requests.get(query_url).json()
regionimage_url = region_url["collection"]["items"][0]["links"][0]["href"]


#print(cityimage_url)
print(regionimage_url)


# In[4]:


#loop through items in list to gather image urls

for each_dict in location_list:
    region_name = each_dict['region']
    try:
        response=requests.get(f"{url}?q={region_name}&media_type={media_type}").json()
        
        print(f"Processing {region_name}")
        regionimage_url=response["collection"]["items"][0]["links"][0]["href"]
        print(f"{region_name} image url: {regionimage_url}")
        
        n=+1
        
    except:
        print(f"{region_name} not found. Skipping...")
    continue

#print("-------------")
#print("Data Retrieval Complete")
