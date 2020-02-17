from bs4 import BeautifulSoup
from splinter import Browser
import requests
import pandas as pd
from selenium import webdriver
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Float
import datetime as dt  
import pandas as pd


browser = Browser('chrome', headless=True)

Base = declarative_base()

todaysDate = str(dt.date.today())


# connection_string = "postgres:1234@localhost:5432/planetOnFire_db"
connection_string = "postgres://zmohrmrfwwjvsc:89d4d39abb538481ac6e2249abb0cdfb56f86721e7aff9b7b051ffecd34d9a0e@ec2-34-235-108-68.compute-1.amazonaws.com:5432/dbjlmcitp23998"
engine = create_engine(f'postgresql+psycopg2://{connection_string}')
Base.metadata.create_all(engine)
engine.table_names()

date_df = pd.read_sql_query('select acq_date from cleaned_df', con=engine)
date_check = date_df["acq_date"].iloc[-1]

# URL of page to be scraped
url = "https://earthdata.nasa.gov/earth-observation-data/near-real-time/firms/active-fire-data#ed-firms-archive"


def scrape_data():

    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    #print(soup.prettify())

    #grab third table (TXT data)
    table = soup.find_all('table')[2]
    #print(table)

    #grab link for 7 days data in the second column (with MODIS 1 km data)
    link = table.find_all('a', text='7d')[0]['href']
    #print(link)
    
    df = pd.read_csv(link)
    
    cleaned_df = df.drop(columns=["scan","track","acq_time","satellite","confidence","version","frp","daynight"])
    
    cleaned_df.to_sql('cleaned_df', con=engine, if_exists='replace', index=False)

if ((date_check)!=todaysDate):

    scrape_data()

    print ("scraped")

else:
    print("table exists")