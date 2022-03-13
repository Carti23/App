from django.urls import path
from .views import *

urlpatterns = [
    path('users/', UserAPI.as_view(), name='all-users'),
    path('users-create/', UserCreateApi.as_view(), name='create-user'),
    path('users/<int:pk>/update/', UserUpdateAPI.as_view(), name='update-user'),
    path('groups/', GroupAPI.as_view(), name='all-groups'),
    path('groups-create/', GroupCreateApi.as_view(), name='create-groups'),
    path('users/<int:pk>/', UserInfoAPI.as_view(), name='inf-user'),
    path('groups/<int:pk>/', GroupinfAPI.as_view(), name='update-group'),
    path('groups/<int:pk>/update/', GroupUpdateAPI.as_view(), name='das')
    

]
