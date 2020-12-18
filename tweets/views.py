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
        data['message'] = 'Sorry it is not found'
        status = 404
        # raise Http404
    return JsonResponse(data, status=status)  # json.dumps content_type='application/json'
