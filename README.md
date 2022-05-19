# 🕵️‍♀️ FBI - Facts 'Bout Ingredients

### Submitted to [RU Hacks 2022](https://ru-hacks-2022-digital-15171.devpost.com/) and received First Place overall!

##### We've noticed that we often find ourselves reading the nutritional and ingredient labels before deciding if we are going to buy something or not -- BUT how often do we actually understand what each of those ingredients do? How often do we actually know whether a random-chemical-sounding-ish name is good for us or not? FBI was made for us to crack down on these suspicious chemicals...





## What it does ❓
- Converts photos of food ingredient labels into researched descriptions of individual ingredients, rendered in an intuitive and readable format


## How we built it 🔨
- Our front-end and user-interface was designed and built using React
- API endpoints and all request handling was done with Python/Flask
- [PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) was utilized to perform accurate optical character recognition 

## Try it out 🏗
Set up repository
```
git clone https://github.com/addison-ch/FBI/
cd BarParks
```

Set up back-end server

   ```
   cd /api
pip install -r requirements.txt
flask run
   ```

Set up front-end client (seperate console window)
```
cd /client
npm install
npm start
```
## Images/Demo 📷
[![Watch the video](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/926/114/datas/original.png)](https://www.youtube.com/watch?v=igmloHsiuGA)
[![Watch the video](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/926/116/datas/original.png)](https://www.youtube.com/watch?v=igmloHsiuGA)
