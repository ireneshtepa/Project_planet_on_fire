
import json
import pymongo
import glob
import os
from dateutil.parser import parse
import math



# Setup connection to mongodb
#conn = "mongodb+srv://Yatish:1234@cluster0-4l19n.mongodb.net/test?retryWrites=true&w=majority"
#client = pymongo.MongoClient(conn)
client = pymongo.MongoClient("mongodb+srv://Yatish:1234@cluster0-4l19n.mongodb.net/HistoricData?retryWrites=true&w=majority")
#db = client.test


# Select database and collection to use
db = client.HistoricData
path_folder = 'final continent historical files'

mydata = []
collection = db.continents_data

#continent_names = ["africa","asia","australia","europe","north_america","south_amercia"]
continent_names = []
for i, foldername in enumerate(glob.glob(path_folder+"/*")):
    continent_names.append(foldername)
    # collection = db.continents_data
    # collection.delete_many({})
    #path_+filename = path_folder+"/*"
    country_name = []
    for i, filename in enumerate(glob.glob(continent_names[i]+"/*")):
        country_name.append(filename)
    print (len(country_name))
    #total_country = len(country_name)
    json_files = []

    for country in country_name:
        try:
            with open(country) as f:
                file_data = json.load(f)
                json_files.append(file_data)
        except:
            print("no errors")
        continue
    mydata.append(json_files)    

collection.delete_many({})
mydata_dict = {"data":mydata}
collection = db.continents_data
collection.insert_one(mydata_dict)
client.close()
#print (continent_names)
print("upload done")
# path = 'final continent historical files/australia'
# country_name = []
# for i, filename in enumerate(glob.glob(path+"/*")):
#     country_name.append(filename)
# print (len(country_name))
# #total_country = len(country_name)

# json_files = []
# for country in country_name:
#     try:
#         with open(country) as f:
#             file_data = json.load(f)
#             json_files.append(file_data)
#     except:
#         print("no errors")
#     continue
# print (len(json_files))
# mydata.append(json_files)    

# collection.delete_many({})
# mydata_dict = {"data":mydata}
# collection = db.continents_data
# collection.insert_one(mydata_dict)
# client.close()
# #print (continent_names)
# print("upload done")



























#print(json_files)

#print((json_files[0]["Data"]))
#trydate = (json_files[0][0]["acq_date"])
#print((json_files[0]["Data"][1]))
# mydata = []
#print(len(json_files))

# for i in json_files:
#     for j in i:
#         mydata.append(j["acq_date"])

# for i in json_files:
#     mydata.append(i)
#try_data = []


# def split(a, n):
#     k, m = divmod(len(a), n)
#     return (a[i * k + min(i, m):(i + 1) * k + min(i + 1, m)] for i in range(n))
# print (split(range((json_files)),6))


# def divide_chunks(l, n): 
      
#     # looping till length l 
#     for i in range(0, len(l), n):  
#         yield l[i:i + n]

# n=6

# splitted_files = list(divide_chunks(json_files, n)) 
# print (len(splitted_files))

# au_2015_1 = []
# au_2015_2 = []
# au_2016_1 = []
# au_2016_2 = []
# au_2017_1 = []
# au_2017_2 = []
# au_2018_1 = []
# au_2018_2 = []
# au_2019_1 = []
# au_2019_2 = []


# for j in json_files[0]["Data"]:  
#     if parse(j["Date"]) <= parse ("2015-06-30"):
#         au_2015_1.append(j)
#     elif parse(j["Date"]) > parse ("2015-06-30") and parse(j["Date"]) <= parse ("2015-12-31"):
#         au_2015_2.append(j)
#     elif parse(j["Date"]) > parse ("2015-12-31") and parse(j["Date"]) <= parse ("2016-06-30"):
#         au_2016_1.append(j)
#     elif parse(j["Date"]) > parse ("2016-06-30") and parse(j["Date"]) <= parse ("2016-12-31"):
#         au_2016_2.append(j)
#     elif parse(j["Date"]) > parse ("2016-12-31") and parse(j["Date"]) <= parse ("2017-06-30"):
#         au_2017_1.append(j)
#     elif parse(j["Date"]) > parse ("2017-06-30") and parse(j["Date"]) <= parse ("2017-12-31"):
#         au_2017_2.append(j)
#     elif parse(j["Date"]) > parse ("2017-12-31") and parse(j["Date"]) <= parse ("2018-06-30"):
#         au_2018_1.append(j)
#     elif parse(j["Date"]) > parse ("2018-06-30") and parse(j["Date"]) <= parse ("2018-12-31"):
#         au_2018_2.append(j)
#     elif parse(j["Date"]) > parse ("2018-12-31") and parse(j["Date"]) <= parse ("2019-06-30"):
#         au_2019_1.append(j)
#     else:
#         au_2019_2.append(j)        
# #print(len(mydates))
# print(len(au_2015_1))
# print(len(au_2015_2))
# print(len(au_2016_1))
# print(len(au_2016_2))
# print(len(au_2017_1))
# print(len(au_2017_2))
# print(len(au_2018_1))
# print(len(au_2018_2))
# print(len(au_2019_1))
# print(len(au_2019_2))



# mydate_dict_1 = {"Australia - 2015-1":au_2015_1}
# mydate_dict_2 = {"Australia - 2015-2":au_2015_2}
# mydate_dict_3 = {"Australia - 2016-1":au_2016_1}
# mydate_dict_4 = {"Australia - 2016-2":au_2016_2}
# mydate_dict_5 = {"Australia - 2017-1":au_2017_1}
# mydate_dict_6 = {"Australia - 2017-2":au_2017_2}
# mydate_dict_7 = {"Australia - 2018-1":au_2018_1}
# mydate_dict_8 = {"Australia - 2018-2":au_2018_2}
# mydate_dict_9 = {"Australia - 2019-1":au_2019_1}
# mydate_dict_10 = {"Australia - 2019-2":au_2019_2}
#  #mydate_dict_6 = {"North America Historic Data - 2019":na_grp_6}
#print(mydate_dict_1)


# collection.insert_one(mydate_dict_2)
# collection.insert_one(mydate_dict_3)
# collection.insert_one(mydate_dict_4)
# collection.insert_one(mydate_dict_5)
# collection.insert_one(mydate_dict_6)
# collection.insert_one(mydate_dict_7)
# collection.insert_one(mydate_dict_8)
# collection.insert_one(mydate_dict_9)
# collection.insert_one(mydate_dict_10)


