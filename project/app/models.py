from django.db import models
from datetime import datetime, timedelta
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

def default_start_time():
    now = datetime.now()
    start = now.replace(hour=22, minute=0, second=0, microsecond=0)
    return start if start > now else start + timedelta(days=1)  

class AppUserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError('A password is required.')
        email = self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        user.save()
        return user
    def create_superuser(self, email, password=None):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError('A password is required.')
        user = self.create_user(email, password)
        user.is_superuser = True
        user.save()
        return user
    
class AppUser(AbstractBaseUser, PermissionsMixin):
    id = models.AutoField(primary_key=True)
    deleted = models.BooleanField(default=False)
    suspended = models.BooleanField(default=False)
    edipi = models.CharField(max_length=100, default="asdufyas7df87sdfsdyfsd9fs9d")
    email = models.EmailField(max_length=50, unique=True)
    username = models.CharField(max_length=50)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=30)
    middle_name = models.CharField(max_length=20)
    rank = models.CharField(max_length=10, default='SGT')
    cellular = models.CharField(max_length=15, default='2134343223')
    base = models.CharField(max_length=20, default='lackland')
    country = models.CharField(max_length=15, blank=True)
    time_zone = models.CharField(max_length=5, blank=True)
    first_access_date = models.DateTimeField(default=datetime.now, blank=True)
    last_access_date = models.DateTimeField(default=datetime.now, blank=True)
    current_login = models.DateTimeField(default=datetime.now, blank=True)
    last_login = models.DateTimeField(default=datetime.now, blank=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    objects = AppUserManager()
    def __str__(self):
        return self.username

class DXPCourses(models.Model):
    id_source = models.CharField(max_length=50, blank=True)
    learning_path = models.CharField(max_length=100, blank=True)
    full_name = models.CharField(max_length=255, blank=True)
    short_name = models.CharField(max_length=255, blank=True)
    category = models.CharField(max_length=255, blank=True)
    course_id = models.CharField(max_length=100, blank=True)
    summary = models.CharField(max_length=300, blank=True)
    format = models.CharField(max_length=21, blank=True)
    new_item = models.BooleanField(default=True)
    start_date = models.DateTimeField(default=datetime.now, blank=True)
    visible = models.BooleanField(default=True)
    created_date = models.DateTimeField(default=datetime.now, blank=True)
    modified_date = models.DateTimeField(default=datetime.now, blank=True)
    def __str__(self):
        return self.full_name

class DXPCourseCompletions(models.Model):
    mdl_id = models.BigIntegerField(blank=True)
    edipi = models.CharField(max_length=100)
    user_id = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    course = models.ForeignKey(DXPCourses, related_name='completions', on_delete=models.CASCADE, null=True)
    enrolled =  models.TimeField(default=default_start_time)
    started =  models.TimeField(default=default_start_time)
    completed =  models.TimeField(default=default_start_time)
    def __str__(self):
        return self.course

class DXPCourseEnrollments(models.Model):
    mdl_id = models.BigIntegerField(blank=True)
    status = models.BooleanField(default=True)
    course_id = models.ForeignKey(DXPCourses, related_name='enrollments', on_delete=models.CASCADE, null=True)
    user_id = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    start = models.BigIntegerField(blank=True)
    end = models.BigIntegerField(blank=True)
    started = models.BigIntegerField(blank=True)
    completed = models.BigIntegerField(blank=True)
    def __str__(self):
        return self.course_id

class CourseExtractJob:
    def ExecuteCourseExtraction():
        print('yeppers!')