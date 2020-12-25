from django.contrib.auth import get_user_model
from django.test import TestCase

from rest_framework.test import APIClient

from .models import Tweet
# Create your tests here.
User = get_user_model()

class TweetTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='Marishka', password='moo')
        Tweet.objects.create(content='Test 1st Tweet', user=self.user)
        Tweet.objects.create(content='Test 2nd Tweet', user=self.user)
        Tweet.objects.create(content='Test 3rd Tweet', user=self.user)
        self.current_count = Tweet.objects.all().count()

    def test_user_created(self):
        self.assertEqual(self.user.username, 'Marishka')
        # self.assertEqual(self.user.username, '1')

    def test_tweet_created(self):
        tweet_obj = Tweet.objects.create(content='Test 4th Tweet', user=self.user)
        self.assertEqual(tweet_obj.id, 4)
        self.assertEqual(tweet_obj.user, self.user)

    def get_client(self):
        client = APIClient()
        client.login(username=self.user.username, password='moo')
        return client

    def test_tweet_list(self):
        client = self.get_client()
        response = client.get('/api/tweets/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 3)
        print(response.json())

    def test_action_like(self):
        client = self.get_client()
        response = client.post('/api/tweets/action/', {'id': 1, 'action': 'like'})
        self.assertEqual(response.status_code, 200)
        like_count = response.json().get('likes')
        self.assertEqual(like_count, 1)

    def test_action_unlike(self):
        client = self.get_client()
        response = client.post('/api/tweets/action/', {'id': 2, 'action': 'unlike'})
        self.assertEqual(response.status_code, 200)
        like_count = response.json().get('likes')
        self.assertEqual(like_count, 0)

    def test_action_retweet(self):
        client = self.get_client()
        response = client.post('/api/tweets/action/', {'id': 2, 'action': 'retweet'})
        self.assertEqual(response.status_code, 201)
        data = response.json()
        new_tweet_id = data.get('id')
        self.assertNotEqual(2, new_tweet_id)
        self.assertEqual(self.current_count + 1, new_tweet_id)

    def test_tweet_create_api_view(self):
        request_data = {'content': 'This is my test tweet'}
        client = self.get_client()
        response = client.post('/api/tweets/create/', request_data)
        self.assertEqual(response.status_code, 201)
        response_data = response.json()
        new_tweet_id = response_data.get('id')
        self.assertEqual(self.current_count + 1, new_tweet_id)

    def test_tweet_detail_api_view(self):
        client = self.get_client()
        response = client.get('/api/tweets/1/')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        _id = data.get('id') # _ - for internal usa
        self.assertEqual(_id, 1)
