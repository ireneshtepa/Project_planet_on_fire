from bs4 import BeautifulSoup
from splinter import Browser
import requests
import pandas as pd
#from selenium import webdriver
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy_utils import create_database, database_exists, drop_database
from sqlalchemy import Column, Integer, String, Float
import datetime as dt  
import pandas as pd


browser = Browser('chrome', headless=True)

todaysDate = str(dt.date.today())
Base = declarative_base()
connection_string = "postgres:1234@localhost:5432/planetOnFire_db"
# connection_string = "postgres:Yatish28$@localhost:5432/planetOnFire_db"
engine = create_engine(f'postgresql+psycopg2://{connection_string}')
                                                
# connection_string = "mfvfrkdrdamxmk:a70fc94c64db38058d7aa946f6bcdd82e4616214e4604c6bd902fd5076eac9e4@ec2-52-207-93-32.compute-1.amazonaws.com:5432/dc6vdhtfchef8k"
# engine = create_engine(f'postgresql+psycopg2://{connection_string}', connect_args={'sslmode':'require'},echo=True)

# connection_string = 'root:12345678@mydb.cpzsszr6n1nw.us-east-2.rds.amazonaws.com:5432/planetOnFire_db'
# engine = create_engine(f'postgresql+psycopg2://{connection_string}')

#connection_string = "prmpgujo:cSBQxTa1lkKY0hsb4c1OGgAZOqIX6bc4@drona.db.elephantsql.com:5432/prmpgujo"
#engine = create_engine(f'postgresql+psycopg2:// {connection_string}')


if database_exists(engine.url):
    # Delete PostgreSQL database 
    #drop_database(engine.url)
    # Create empty PostgreSQL database
    #create_database(engine.url)
    print ("db exists")
# Otherwise
else:
    # Create empty PostgreSQL database
    create_database(engine.url)

# try:
#     pd.read_sql('CREATE TABLE IF NOT EXISTS my_new_df (first_name varchar (255))',con = engine)
# #pd.read_sql('CREATE TABLE IF NOT EXISTS my_df ( first_name varchar(255), city_name varchar(255),age int)',con=engine)
# except:
#     print("error gone")
# print(pd.read_sql_query('select * from my_df', con=engine).head())

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
    
    #df = pd.read_csv(link)
    #print(df.head())
    print("worked")

Base.metadata.create_all(engine)
tables = engine.table_names()
print(tables)

if ("cleaned_df" in tables):
    date_df = pd.read_sql_query('select acq_date from cleaned_df', con=engine)
    date_check = date_df["acq_date"].iloc[-1]

    if ((date_check)!=todaysDate):

        scrape_data()

        print ("scraped")

    else:
        print("table exists")
else:
    
    scrape_data()
    print("data upto date")