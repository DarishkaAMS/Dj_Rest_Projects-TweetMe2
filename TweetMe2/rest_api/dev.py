from django.contrib.auth import get_user_model
from rest_framework import authentication

User = get_user_model()

class DevAuthentication(authentication.BasicAuthentication):
    def authenticate(self, request):
        query_set = User.objects.filter(id=1)
        user = query_set.order_by('?').first() # by random
        return (user, None)