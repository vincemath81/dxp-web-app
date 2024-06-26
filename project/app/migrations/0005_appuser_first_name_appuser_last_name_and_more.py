# Generated by Django 5.0 on 2024-01-17 15:52

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_currentcourses_expiringcourses_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='appuser',
            name='first_name',
            field=models.CharField(default="", max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='appuser',
            name='last_name',
            field=models.CharField(default="", max_length=30),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='appuser',
            name='middle_name',
            field=models.CharField(default="", max_length=20),
            preserve_default=False,
        ),
    ]
