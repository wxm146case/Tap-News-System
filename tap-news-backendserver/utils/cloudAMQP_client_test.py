from cloudAMQP_client import CloudAMQPClient

TEST_CLOUDAMQP_URL = "amqp://rsbhnnth:iDbF5_tdwWdWmJf_1qnrZ7blLjtQ5-Ws@wombat.rmq.cloudamqp.com/rsbhnnth"
TEST_QUEUE_NAME = "test"

def test_basic():
    client = CloudAMQPClient(TEST_CLOUDAMQP_URL, TEST_QUEUE_NAME)

    sentMsg = {'test':'test'}
    client.sendMessage(sentMsg)
    receivedMsg = client.getMessage()
    assert sentMsg == receivedMsg
    print('test_basic passed.')

if __name__ == "__main__":
    test_basic()