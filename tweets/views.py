import random
from django.http import HttpResponse, Http404, JsonResponse
from django.shortcuts import render

from .models import Tweet


def home_view(request, *args, **kwargs):
    return render(request, 'pages/home.html', context={}, status=200)


def tweet_list_view(request, *args, **kwargd):
    """
    REST API VIEW
    Consume by JavaScript or Swift or Java/iOS/Android
    return json dat
    """
    query_set = Tweet.objects.all()
    tweets_list = [{'id': q.id, 'content': q.content, 'likes': random.randint(0, 15)} for q in query_set]
    data = {
        'is_user': False,
        'response': tweets_list
    }
    return JsonResponse(data)


def tweet_detail_view(request, tweet_id, *args, **kwargs):
    """
    REST API VIEW
    Consume by JavaScript or Swift or Java/iOS/Android
    return json dat
    """
    data = {
        'id': tweet_id,
        # 'content': obj.content,
        # 'img_path': obj.image.url
    }
    status = 200
    try:
        obj = Tweet.objects.get(id=tweet_id)
        data['content'] = obj.content
    except:
        data['message'] = 'Sorry this page is not found'
        status = 404
        # raise Http404
    return JsonResponse(data, status=status)  # json.dumps content_type='application/json'
