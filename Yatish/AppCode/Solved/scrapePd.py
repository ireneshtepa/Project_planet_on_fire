from bs4 import BeautifulSoup
from splinter import Browser
import requests
import pandas as pd
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Float
import datetime as dt  
import pandas as pd
from sqlalchemy.orm import Session


browser = Browser('chrome', headless=True)

Base = declarative_base()

todaysDate = str(dt.date.today())


connection_string = "postgres:Yatish28$@localhost:5432/planetOnFire_db"
engine = create_engine(f'postgresql+psycopg2://{connection_string}')
Base.metadata.create_all(engine)


session = Session(bind=engine)
#cleaned_df.to_sql('cleaned_df', con=engine, if_exists='replace', index=False)

# URL of page to be scraped
url = "https://earthdata.nasa.gov/earth-observation-data/near-real-time/firms/active-fire-data#ed-firms-archive"

#while (cleaned_df.loc[cleaned_df.index[-1], "acq_date"]!=todaysDate): 
    
# Retrieve page with the requests module
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')
#print(soup.prettify())

#grab third table (TXT data)
table = soup.find_all('table')[2]
#print(table)

#grab link for 7 days data in the second column (with VIIRS 375 m data)
link = table.find_all('a', text='7d')[1]['href']
#print(link)       


df = pd.read_csv(link)

new_df = df.loc[df["acq_date"]==todaysDate]

cleaned_df = df.drop(columns=["scan","track","acq_time","satellite","confidence","version","frp","daynight"])

engine.table_names()

Base.metadata.create_all(engine)

from sqlalchemy.orm import Session
session = Session(bind=engine)
cleaned_df.to_sql('cleaned_df', con=engine, if_exists='replace', index=False) 

Mdata = pd.read_sql_query('select * from cleaned_df', con=engine).tail()
Mdata