from django.db import models
from django.contrib.auth.models import User

# Create a Group Model
class Group(models.Model):
    users = models.ManyToManyField(User)
    name = models.CharField(max_length=250)
    description = models.TextField()
    
    def __str__(self):
        return self.name
