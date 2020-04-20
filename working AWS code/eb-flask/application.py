import os
from flask import Flask, render_template, redirect, jsonify, json, abort, url_for
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask_pymongo import PyMongo
#import scrapePd
import pandas as pd
from sqlalchemy.ext.automap import automap_base
#import psycopg2
#import psycopg2.extras
import json as simplejsonpythi
import datetime as dt
from bson import json_util
# import Twitter_LocationSearchTweets
#from Twitter_LocationSearchTweets import scraped_time




# Create an instance of Flask
application = app = Flask(__name__)


#connection_string = 'postgres:1234@localhost:5432/planetOnFire_db'

connection_string = "root:12345678@mydb1.ctm8syawui4l.us-east-2.rds.amazonaws.com/planetOnFire_db"

engine = create_engine(f'postgresql+psycopg2://{connection_string}')

# connection_string = "mfvfrkdrdamxmk:a70fc94c64db38058d7aa946f6bcdd82e4616214e4604c6bd902fd5076eac9e4@ec2-52-207-93-32.compute-1.amazonaws.com:5432/dc6vdhtfchef8k"
# engine = create_engine(f'postgresql+psycopg2://{connection_string}')

# connection_string = 'root:12345678@mydb.cpzsszr6n1nw.us-east-2.rds.amazonaws.com:5432/planetOnFire_db'
# engine = create_engine(f'postgresql+psycopg2://{connection_string}')


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

@app.route("/data")
def data():    
   return render_template("data.html")

@app.route("/predictions")
def predictions():    
   return render_template("predictions.html")

@app.route("/api")
def myData():

   return (myJsonData)
"""
@app.route("/refresh")
def refreshData():
   print("abc")

   scrapePd.scrape_data()

   return render_template("index.html")
"""
@app.route("/api/africa_historic_data")
def historic_data_africa_2015():
   import Historic_data_au
   return Historic_data_au.mongoData_historic("Africa")

@app.route("/api/asia_historic_data")
def historic_data_au_2016():
   import Historic_data_au
   return Historic_data_au.mongoData_historic("Asia")

@app.route("/api/australia_historic_data")
def historic_data_au_2017():
   import Historic_data_au
   return Historic_data_au.mongoData_historic("Australia")

@app.route("/api/europe_historic_data")
def historic_data_au_2018():
   import Historic_data_au
   return Historic_data_au.mongoData_historic("Europe")

@app.route("/api/north_america_historic_data")
def historic_data_au_2019():
   import Historic_data_au
   return Historic_data_au.mongoData_historic("North America")

@app.route("/api/south_america_historic_data")
def historic_data_au_2020():
   import Historic_data_au
   return Historic_data_au.mongoData_historic("South America")


@app.route("/api3")
def myTwitterData():
   #mongo = PyMongo(app, uri="mongodb://localhost:27017/TwitterData")
   mongo = PyMongo(app, uri="mongodb+srv://Yatish:1234@cluster0-4l19n.mongodb.net/TwitterData?retryWrites=true&w=majority")
   current_time = dt.datetime.now()
   try:
      import Twitter_LocationSearchTweets
      from Twitter_LocationSearchTweets import scraped_time

      mongoTwitterData =[]
      mongoDict = {} 
      mongoTwitter = (mongo.db.TwitterMyData)   
      
   
      if (current_time - Twitter_LocationSearchTweets.scraped_time).seconds/60 > 20:
         try:
            Twitter_LocationSearchTweets.scrapeTwitter()
            print("twitter scraped")
         except:
            print ("all good")

      else:
         print("new scrape not required")
         #return twitterData
   except:
      print("no more delays")
   mongoTwitterData =[]
   mongoDict = {} 
   mongoTwitter = (mongo.db.TwitterMyData)   
   for x in mongoTwitter.find({}):
      x.pop('_id')
      mongoTwitterData.append(x)
   mongoDict["url"] = mongoTwitterData
   return mongoDict
   
print ("Data loading complate...")
if __name__ == "__main__":
    app.run(debug=True)