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
        # added a follower
        first_user.profile.followers.add(second_user)
        second_user_following_whom = second_user.following.all()
        # from a user_m, check other user is being followed
        query_set = second_user_following_whom.filter(user=first_user)
        # check new user is not following anyone
        first_user_following_no_one = first_user.following.all()
        self.assertTrue(query_set.exists())
        self.assertFalse(first_user_following_no_one.exists())
