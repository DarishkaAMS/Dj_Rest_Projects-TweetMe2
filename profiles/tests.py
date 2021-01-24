from django.test import TestCase
from django.contrib.auth import get_user_model

from .models import Profile
# Create your tests here.

User = get_user_model()


class ProfileTestCase(TestCase):
    def setUp(self):
        self.user_m = User.objects.create_user(username='Marishka', password='moo')
        self.user_b = User.objects.create_user(username='Barishka', password='boo')

