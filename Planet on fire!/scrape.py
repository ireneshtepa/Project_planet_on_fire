from bs4 import BeautifulSoup
from splinter import Browser
browser = Browser('chrome', headless=True)
import requests
import pandas as pd

# URL of page to be scraped
url = "https://earthdata.nasa.gov/earth-observation-data/near-real-time/firms/active-fire-data#ed-firms-archive"

# Retrieve page with the requests module
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')
print(soup.prettify())

#grab third table (TXT data)
table = soup.find_all('table')[2]
print(table)

#grab link for 7 days data in the second column (with VIIRS 375 m data)
link = table.find_all('a', text='7d')[1]['href']
print(link)