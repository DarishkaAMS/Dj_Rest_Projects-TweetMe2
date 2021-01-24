from django.test import TestCase
from django.contrib.auth import get_user_model

from .models import Profile
# Create your tests here.

User = get_user_model()


class ProfileTestCase(TestCase):
    def setUp(self):
        self.user_m = User.objects.create_user(username='Marishka', password='moo')
        self.user_b = User.objects.create_user(username='Barishka', password='boo')

    def test_profile_created_via_signal(self):
        query_set = Profile.objects.all()
        self.assertEqual(query_set.count(), 2)

    def test_following(self):
        first_user = self.user_m
        second_user = self.user_b
        first_user.profile.followers.add(second_user)
        query_set = second_user.following.filter(user=first_user)
        self.assertTrue(query_set.exists())
