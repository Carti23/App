# Generated by Django 3.1.2 on 2022-03-09 15:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0002_group_author'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='group',
            name='author',
        ),
    ]