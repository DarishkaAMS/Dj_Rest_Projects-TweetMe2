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
        # self.assertEqual(len(response.json()), 3)
        print(response.json())
