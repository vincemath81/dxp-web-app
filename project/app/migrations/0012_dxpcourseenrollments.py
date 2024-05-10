# Generated by Django 5.0 on 2024-01-29 19:43

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_remove_dxpcourses_users_dxpcoursecompletions'),
    ]

    operations = [
        migrations.CreateModel(
            name='DXPCourseEnrollments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mdl_id', models.BigIntegerField(blank=True)),
                ('status', models.BooleanField(default=True)),
                ('start', models.BigIntegerField(blank=True)),
                ('end', models.BigIntegerField(blank=True)),
                ('started', models.BigIntegerField(blank=True)),
                ('completed', models.BigIntegerField(blank=True)),
                ('course_id', models.ManyToManyField(to='app.dxpcourses')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]