cd ./tap-news-webserver/server
npm start &

cd ../../tap-news-backendserver
python3 service.py &

cd ../news_recommendation_service
python3 recommendation_service.py &

echo "==================================="
read -p "PRESS [ENTER] TO TERMINATE PROCESSES." PRESSKEY

kill $(jobs -p)