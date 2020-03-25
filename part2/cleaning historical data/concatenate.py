import json
import glob

result = []
for f in glob.glob("*.json"):
    with open(f, "r") as infile:
        try:
            res = json.load(infile)
            for i in res:
                result.append(i)
        
        except ValueError:
            print(f)

with open("merged.json", "w") as outfile:
    json.dump(result, outfile)



