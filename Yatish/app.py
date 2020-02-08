from flask import Flask, render_template, redirect, jsonify, json
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
#from flask_pymongo import PyMongo
import scrapePd
import pandas as pd
from sqlalchemy.ext.automap import automap_base
import psycopg2
import psycopg2.extras
import json as simplejson
import datetime as dt 



# Create an instance of Flask
app = Flask(__name__)
"""
    while (cleaned_df.loc[cleaned_df.index[-1], "acq_date"]!=todaysDate): 
        connection_string = "postgres:Yatish28$@localhost:5432/planetOnFire_db"
        engine = create_engine(f'postgresql+psycopg2://{connection_string}')
"""    
connection_string = "postgres:Yatish28$@localhost:5432/planetOnFire_db"
engine = create_engine(f'postgresql+psycopg2://{connection_string}')

mydata = pd.read_sql_query('select * from cleaned_df', con=engine).tail()
longi = pd.read_sql_query('select longitude from cleaned_df', con=engine)
lati = pd.read_sql_query('select latitude from cleaned_df', con=engine)

date_df = pd.read_sql_query('select acq_date from cleaned_df', con=engine)
dictlongi = longi.to_dict('longi')
dictlongi
dictlati = lati.to_dict('lati')
dictlati
todaysdate = str(dt.date.today())
jsonFile = {**dictlongi,**dictlati}
#while (date_df["acq_date"].iloc[-1]!=todaysdate):

@app.route("/api")
def myData():


    
    return (jsonFile)

if __name__ == "__main__":
    app.run(debug=True)
