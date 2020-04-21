import json
import pymongo

def mongoData_historic(continent):
   #mongo = PyMongo(app, uri="mongodb://localhost:27017/fire")
   #mongoDict = {} 
   #mongoMydata = (mongo.db.northamerica)
   client = pymongo.MongoClient("mongodb+srv://Yatish:1234@cluster0-4l19n.mongodb.net/HistoricData?retryWrites=true&w=majority")
   #mongoMydata = (mongo.db.northamerica)
   db = client.HistoricData
   collection = db.continents_data
   continents = ["Africa", "Asia", "Australia", "Europe", "North America", "South America"]

   # index = continents.index(continent)
   # db.continents_data.aggregate([
#    {
#      $project:
#       {
#          data: { $arrayElemAt: [ $data, index ] },
#       }
#    }
# ])
   
   mongo_historic_data = (collection)
   return getContinentData(mongo_historic_data, continent, continents.index(continent))

def getContinentData(continet_historic_data, continent, position):
   historic_data_list =[]
   historic_data_dict = {} 
   for x in continet_historic_data.find({}):
      x.pop('_id')
      historic_data_list.append(x)
      #print(historic_data_list)
      historic_data_dict[continent] = historic_data_list[0]["data"][position]
   #print(historic_data_dict)
   return(historic_data_dict)

mongoData_historic("Australia")

# def mongoData_2016():
#    #mongo = PyMongo(app, uri="mongodb://localhost:27017/fire")
#    #mongoDict = {} 
#    #mongoMydata = (mongo.db.northamerica)
#    client = pymongo.MongoClient("mongodb+srv://Yatish:1234@cluster0-4l19n.mongodb.net/HistoricData?retryWrites=true&w=majority")
#    #mongoMydata = (mongo.db.northamerica)
#    db = client.HistoricData
#    collection = db.australia

#    dates_2016 =[]
#    dates_2016_dict = {} 
#    mongo_2016 = (collection)   
#    for x in mongo_2016.distinct("Australia - 2016-1"):
#       #x.pop('_id')
#       #x.pop("North America Historic Dates - 2015")
#       #x.pop("North America Historic Dates - 2017")
#       #x.pop("North America Historic Dates - 2018")
#       #x.pop("North America Historic Dates - 2019")
#       dates_2016.append(x)
#    for x in mongo_2016.distinct("Australia - 2016-2"):
#       dates_2016.append(x)
#    dates_2016_dict["Australia - 2016"] = dates_2016
# #    dates_2016 = mongo_2016.find({"North America Historic Dates - 2016"})
# #    dates_2016_dict["North America Historic Dates - 2016"] = dates_2016
#    #print (dates_2016_dict)
#    return(dates_2016_dict)
# mongoData_2016()

# def mongoData_2017():
#    #mongo = PyMongo(app, uri="mongodb://localhost:27017/fire")
#    #mongoDict = {} 
#    #mongoMydata = (mongo.db.northamerica)
#    client = pymongo.MongoClient("mongodb+srv://Yatish:1234@cluster0-4l19n.mongodb.net/HistoricData?retryWrites=true&w=majority")
#    #mongoMydata = (mongo.db.northamerica)
#    db = client.HistoricData
#    collection = db.australia

#    dates_2017 =[]
#    dates_2017_dict = {} 
#    mongo_2017 = (collection)   
#    for x in mongo_2017.distinct("Australia - 2017-1"):
#       #x.pop('_id')
#       #x.pop("North America Historic Dates - 2015")
#       #x.pop("North America Historic Dates - 2016")
#       #x.pop("North America Historic Dates - 2018")
#       #x.pop("North America Historic Dates - 2019")
#       dates_2017.append(x)
#    for x in mongo_2017.distinct("Australia - 2017-2"):
#       dates_2017.append(x)
#    dates_2017_dict["Australia - 2017"] = dates_2017
# #    dates_2017 = mongo_2017.find({"North America Historic Dates - 2017"})
# #    dates_2017_dict["North America Historic Dates - 2017"] = dates_2017
#    #print (dates_2017_dict)
#    return(dates_2017_dict)
# mongoData_2017()

# def mongoData_2018():
#    #mongo = PyMongo(app, uri="mongodb://localhost:27017/fire")
#    #mongoDict = {} 
#    #mongoMydata = (mongo.db.northamerica)
#    client = pymongo.MongoClient("mongodb+srv://Yatish:1234@cluster0-4l19n.mongodb.net/HistoricData?retryWrites=true&w=majority")
#    #mongoMydata = (mongo.db.northamerica)
#    db = client.HistoricData
#    collection = db.australia

#    dates_2018 =[]
#    dates_2018_dict = {} 
#    mongo_2018 = (collection)   
#    for x in mongo_2018.distinct("Australia - 2018-1"):
#       #x.pop('_id')
#       #x.pop("North America Historic Dates - 2015")
#       #x.pop("North America Historic Dates - 2016")
#       #x.pop("North America Historic Dates - 2017")
#       #x.pop("North America Historic Dates - 2019")
#       dates_2018.append(x)
#    for x in mongo_2018.distinct("Australia - 2018-2"):
#       dates_2018.append(x)
#    dates_2018_dict["Australia - 2018"] = dates_2018
# #    dates_2018 = mongo_2018.find({"North America Historic Dates - 2018"})
# #    dates_2018_dict["North America Historic Dates - 2018"] = dates_2018
#    #print (dates_2018_dict)
#    return(dates_2018_dict)
# mongoData_2018()

# def mongoData_2019():
#    #mongo = PyMongo(app, uri="mongodb://localhost:27017/fire")
#    #mongoDict = {} 
#    #mongoMydata = (mongo.db.northamerica)
#    client = pymongo.MongoClient("mongodb+srv://Yatish:1234@cluster0-4l19n.mongodb.net/HistoricData?retryWrites=true&w=majority")
#    #mongoMydata = (mongo.db.northamerica)
#    db = client.HistoricData
#    collection = db.australia

#    dates_2019 =[]
#    dates_2019_dict = {} 
#    mongo_2019 = (collection)   
#    for x in mongo_2019.distinct("Australia - 2019-1"):
#       #x.pop('_id')
#       #x.pop("North America Historic Dates - 2015")
#       #x.pop("North America Historic Dates - 2016")
#       #x.pop("North America Historic Dates - 2017")
#       #x.pop("North America Historic Dates - 2018")
#       dates_2019.append(x)
#    for x in mongo_2019.distinct("Australia - 2019-2"):
#       dates_2019.append(x)
#    dates_2019_dict["Australia - 2019"] = dates_2019
# #    dates_2019 = mongo_2019.find({"North America Historic Dates - 2019"})
# #    dates_2019_dict["North America Historic Dates - 2019"] = dates_2019
#    #print (dates_2019_dict)
#    return(dates_2019_dict)
# mongoData_2019()