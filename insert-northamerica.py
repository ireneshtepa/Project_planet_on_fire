
import json
import pymongo

# Setup connection to mongodb
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# Select database and collection to use
db = client.fire
collection = db.northamerica

with open('historical_data/AandB.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/aruba.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/bahamas.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/barbados.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/belize.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/bermuda.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/britishvirgin.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/canada.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/caymanislands.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()


with open('historical_data/costarica.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/cuba.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/curacao.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()


with open('historical_data/dominica.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/dominicanrepublic.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/elsalvador.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()


with open('historical_data/greenland.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/grenada.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/guadeloupe.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/guatemala.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/haiti.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/honduras.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()


with open('historical_data/jamaica.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/martinique.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()


with open('historical_data/mexico.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()


with open('historical_data/monserrat.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/nicaragua.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/panama.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/puertorico.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/saintkittsandnevis.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/saintmartin.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/sintmaarten.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/trinidadandtobago.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()


with open('historical_data/turkandcaicos.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/usa.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/usaminor.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

with open('historical_data/usavirgin.json') as f:
    file_data = json.load(f)
    collection.insert_many(file_data)
    client.close()

