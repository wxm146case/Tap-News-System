import operations

def test_getOneNews_basic():
    news = operations.getOneNews()
    print(news)
    assert news is not None
    print('test_getOneNews_basic passed!')

def test_getNewsSummariesForUser_basic():
    news = operations.getNewsSummariesForUser('test', 1)
    assert len(news) > 0
    print('test_getNewsSummariesForUser_basic passed!')

def test_getNewsSummariesForUser_pagination():
    news_page_1 = operations.getNewsSummariesForUser('test', 1)
    news_page_2 = operations.getNewsSummariesForUser('test', 2)

    # Assert that there is no dupe news in two pages.
    digests_page_1_set = set([news['digest'] for news in news_page_1])
    digests_page_2_set = set([news['digest'] for news in news_page_2])

    assert len(digests_page_1_set.intersection(digests_page_2_set)) == 0
    print('test_getNewsSummariesForUser_pagination passed!')

if __name__ == "__main__":
    test_getOneNews_basic()
    test_getNewsSummariesForUser_basic()
    test_getNewsSummariesForUser_pagination()