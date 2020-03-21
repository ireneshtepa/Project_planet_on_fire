
import json
import pymongo
import glob
import os


# Setup connection to mongodb
#conn = "mongodb+srv://Yatish:1234@cluster0-4l19n.mongodb.net/test?retryWrites=true&w=majority"
#client = pymongo.MongoClient(conn)
client = pymongo.MongoClient("mongodb+srv://Yatish:1234@cluster0-4l19n.mongodb.net/HistoricData?retryWrites=true&w=majority")
db = client.test


# Select database and collection to use
db = client.HistoricData
collection = db.northamerica

country_name = []
path = 'historical_data/North_America'
print(glob.glob(path))
for i, filename in enumerate(glob.glob(path+"/*")):
    country_name.append(filename)
print(country_name)

collection.delete_many({})
for country in country_name:
    with open(country) as f:
        file_data = json.load(f)
        collection.insert_many(file_data)
        client.close()
print("upload done")
