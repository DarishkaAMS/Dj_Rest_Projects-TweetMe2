from django.http import HttpResponse, Http404, JsonResponse
from django.shortcuts import render

from .models import Tweet


def home_view(request, *args, **kwargs):
    return HttpResponse('<h1>Hello</h1>')


def tweet_detail_view(request, tweet_id, *args, **kwargs):
    """
    REST API VIEW
    Consume by JavaScript or Swift or Java/iOS/Android
    return json dat
    """
    try:
        obj = Tweet.objects.get(id=tweet_id)
    except:
        raise Http404

    data = {
        'id': tweet_id,
        'content': obj.content,
        # 'img_path': obj.image.url
    }

    return JsonResponse(data)  # json.dumps content_type='application/json'
