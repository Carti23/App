from django.shortcuts import render
from .serializer import  UserSerializer, GroupSerializer, UserCreateSerializer, GroupCreateSerializer
from django.contrib.auth.models import User
from rest_framework import generics
from .models import Group
from .permissions import IsAnAuthor
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from django.http import HttpResponse
from rest_framework.response import Response

# List API for user
class UserAPI(generics.ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

# Create a user
class UserCreateApi(generics.CreateAPIView):
    serializer_class = UserCreateSerializer
    queryset = User.objects.all()

# Display inf about user
class UserInfoAPI(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

# Display inf about group
class GroupinfAPI(generics.RetrieveAPIView):
    serializer_class = GroupSerializer
    queryset = Group.objects.all()

# Update a user 
class UserUpdateAPI(generics.UpdateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()


# List all groups
class GroupAPI(generics.ListAPIView):
    serializer_class = GroupSerializer
    queryset = Group.objects.all()


# Cereate Group
class GroupCreateApi(generics.CreateAPIView):
    serializer_class = GroupCreateSerializer
    queryset = Group.objects.all()


# Update Groups
class GroupUpdateAPI(generics.UpdateAPIView):
    serializer_class = GroupCreateSerializer
    queryset = Group.objects.all()

    def delete(self, request, pk):
        groups = Group.objects.filter(pk=pk)
        if groups.count() > 0:
           groups.delete()
           return Response("Femails deleted", status=status.HTTP_204_NO_CONTENT)
        return Response("Unable to find the femails.", status=status.HTTP_404_OK)



