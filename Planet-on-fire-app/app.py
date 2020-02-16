import os
from flask import Flask, render_template, redirect, jsonify, json, abort, url_for
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask_pymongo import PyMongo
import scrapePd
import pandas as pd
from sqlalchemy.ext.automap import automap_base
import psycopg2
import psycopg2.extras
import json as simplejsonpythi
import datetime as dt
from bson import json_util
import Twitter_LocationSearchTweets




# Create an instance of Flask
app = Flask(__name__)

mongo = PyMongo(app, uri="mongodb://localhost:27017/fire")

connection_string = 'postgres:1234@localhost:5432/planetOnFire_db'
engine = create_engine(f'postgresql+psycopg2://{connection_string}')

mydata = pd.read_sql_query('select * from cleaned_df', con=engine)
myJsonData = mydata.to_json(orient='records')

print("working")

@app.route("/")
def home():    
   return render_template("index.html") 

@app.route("/news")
def news():    
   return render_template("news.html") 


@app.route("/stats")
def stats():    
   return render_template("stats.html") 

@app.route("/developers")
def developers():    
   return render_template("developers.html")

@app.route("/api")
def myData():

   return (myJsonData)

@app.route("/refresh")
def refreshData():
   print("abc")

   scrapePd.scrape_data()

   return render_template("index.html")

@app.route("/api2")
def mongoData():

   dates =[]
   #mongoDict = {} 
   mongoMydata = (mongo.db.northamerica)

   
   for x in mongoMydata.find({}).limit(100):
      x.pop('_id')
      x.pop('acq_time')
      x.pop('bright_t31')
      x.pop('brightness')
      x.pop('confidence')
      x.pop('daynight')
      #x.pop('D')
      x.pop('frp')
      x.pop('instrument')
      x.pop('latitude')
      x.pop('longitude')
      x.pop('satellite')
      x.pop('scan')
      x.pop('track')
      x.pop('type')
      x.pop('version')

      dates.append(x)

      mongoData = json.dumps((dates), sort_keys=True)
   #print(mongoData)
   return mongoData 

# @app.route("/api3")
# def myTwitterData():
#    twitterData={} 
   
#    twitterData["url"] = Twitter_LocationSearchTweets.scrapeTwitter()
#    print(twitterData)
#    return twitterData

#    dates =[]
#    #mongoDict = {} 
#    mongoMydata = (mongo.db.n)

   
#    for x in mongoMydata.find({}).limit(10000):

print ("Data loading complate...")
if __name__ == "__main__":
    app.run(debug=True)