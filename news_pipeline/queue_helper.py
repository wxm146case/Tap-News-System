import os
import sys

# import common package in parent directory
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'common'))

from cloudAMQP_client import CloudAMQPClient

SCRAPE_NEWS_TASK_QUEUE_URL = "amqp://xwovqrjz:iRBK06kHo8q8G5g9I2AjvGHmO6ArZn6p@wombat.rmq.cloudamqp.com/xwovqrjz"
SCRAPE_NEWS_TASK_QUEUE_NAME = "tap-news-scrape-news-task-queue"

DEDUPE_NEWS_TASK_QUEUE_URL = "amqp://cxbvzhhv:xFiYCmEgRR8jNd3JFEQQXqptVurwpHhb@wombat.rmq.cloudamqp.com/cxbvzhhv"
DEDUPE_NEWS_TASK_QUEUE_NAME = "tap-news-deque-news-task-queue"

def clearQueue(queue_url, queue_name):
    scrape_news_queue_client = CloudAMQPClient(queue_url, queue_name)

    num_of_messages = 0

    while True:
        if scrape_news_queue_client is not None:
            msg = scrape_news_queue_client.getMessage()
            if msg is None:
                print("Cleared %d messages." % num_of_messages)
                return
            num_of_messages += 1


if __name__ == "__main__":
    clearQueue(SCRAPE_NEWS_TASK_QUEUE_URL, SCRAPE_NEWS_TASK_QUEUE_NAME)
    clearQueue(DEDUPE_NEWS_TASK_QUEUE_URL, DEDUPE_NEWS_TASK_QUEUE_NAME)