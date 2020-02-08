from flask import Flask, render_template, redirect, jsonify, json
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
import scrapePd
import pandas as pd
from sqlalchemy.ext.automap import automap_base
import psycopg2
import psycopg2.extras
import json as simplejson
import datetime as dt 

# Create an instance of Flask
app = Flask(__name__)
connection_string = "postgres:Yatish28$@localhost:5432/planetOnFire_db"
engine = create_engine(f'postgresql+psycopg2://{connection_string}')

mydata = pd.read_sql_query('select * from cleaned_df limit 10', con=engine)
myJsonData = mydata.to_json(orient='records')

@app.route("/api")
def myData():


    
   return (jsonify(myJsonData))

@app.route("/")
def home():


    
   return render_template("index.html")  

if __name__ == "__main__":
    app.run(debug=True)