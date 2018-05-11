# Tap-News-System
This is a real time news scraping and recommendation system. The system uses a news pipeline to scrape latest news from various of sources such CNN, BBC. To render the news, I built a single-page web application using React. In addition, in order to customize news list for users, I designed and built a training pipeline for news topic modeling using Tensorflow.

● Implemented a data pipeline which monitors, scrapes and dedupes latest news (MongoDB, Redis, RabbitMQ, TF-IDF);

● Built a single-page web application for users to browse news (React, Node.js, RPC, SOA, JWT);

● Implemented a click event log processor which collects users’ click logs, then updates a news preference model for each user (NLP);

● Designed and built an offline training pipeline for news topic modeling (Tensorflow, DNN, NLP);

● Deployed an online classifying service for news topic modeling using the trained model.

# Architecture
![image](https://github.com/wxm146case/Tap-News-System/blob/master/structure.PNG)

# Life Cycle
![image](https://github.com/wxm146case/Tap-News-System/blob/master/life%20cycle.PNG)

# ScreenShot
![image](https://github.com/wxm146case/Tap-News-System/blob/master/log%20in.png)
![image](https://github.com/wxm146case/Tap-News-System/blob/master/newsList.png)
