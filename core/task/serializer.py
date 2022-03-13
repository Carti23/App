from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Group

# Serializer for users
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

#  Create a serializer for users
class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email')

# Careate a serializer for groups
class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'

# Create a sderializer for create a group
class GroupCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('name', 'description')

