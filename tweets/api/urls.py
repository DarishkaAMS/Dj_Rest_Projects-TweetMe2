from django.urls import path, re_path, include

from .views import (
    tweet_action_view,
    tweet_create_view,
    tweet_delete_view,
    local_tweets_detail_view,
    local_tweets_list_view,
    )

'''
CLIENT 
Base ENDPOINT /api/tweets/
'''

urlpatterns = [
    path('', local_tweets_list_view),
    path('action/', tweet_action_view),
    path('create/', tweet_create_view),
    path('<int:tweet_id>/', local_tweets_detail_view),
    path('<int:tweet_id>/delete/', tweet_delete_view),
]
