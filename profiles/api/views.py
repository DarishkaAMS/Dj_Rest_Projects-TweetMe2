from django.conf import settings
from django.contrib.auth import get_user_model
from django.http import HttpResponse, Http404, JsonResponse
from django.shortcuts import render, redirect
from django.utils.http import is_safe_url
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from ..forms import Profile
from ..serializers import PublicProfileSerializer

User = get_user_model()
ALLOWED_HOSTS = settings.ALLOWED_HOSTS


# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def user_profile_detail_view(request, username, *args, **kwargs):
#     current_user = request.user
#     to_follow_user = ??
#     return Response({}, status=200)

@api_view(['GET'])
def profile_detail_api_view(request, username, *args, **kwargs):
    # get the profile for the passed username
    query_set = Profile.objects.filter(user__username=username)
    if not query_set.exists():
        raise Response({"detail": "User not found"}, status=404)

    profile_obj = query_set.first()
    data = PublicProfileSerializer(instance=profile_obj, context={"request": request})
    return Response(data.data, status=200)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_follow_view(request, username, *args, **kwargs):
    current_user = request.user
    other_user_query_set = User.objects.filter(username=username)
    if current_user.username == username:
        current_user_followers = current_user.profile.followers.all()
        return Response({"count": current_user_followers.count()}, status=200)
    if not other_user_query_set.exists():
        return Response({}, status=404)
    other = other_user_query_set.first()
    profile = other.profile
    data = request.data or {}
    action = data.get("action")
    if action == "follow":
        profile.followers.add(current_user)
    elif action == "unfollow":
        profile.followers.remove(current_user)
    else:
        pass
    current_followers_query_set = profile.followers.all()
    return Response({"count": current_followers_query_set.count()}, status=200)
