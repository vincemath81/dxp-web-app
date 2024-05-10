"""
URL configuration for project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path, include
from app.views import *
from django.http import HttpResponse
from rest_framework import routers
router = routers.DefaultRouter()

def http_response(request):
    return HttpResponse('<h1>Testing</h1>')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('courses', DXPCoursesView.as_view(), name="courses"),
    path('register', UserRegister.as_view(), name='register'),
    path('lrs', LRSView.as_view(), name='lrs'),
    path('login', UserLogin.as_view(), name='login'),
    path('logout', UserLogout.as_view(), name='logout'),
    path('user', UserView.as_view(), name='user'),
    path('api', include(router.urls)),
    path('api/dxpcourses', DXPCoursesView.as_view(), name="getAllDxpCourses"),
    path('api/dxpcoursesenrolled/<int:user_id>', DXPEnrolledCoursesByUserIdView.as_view(), name="getAllDxpCoursesByUser"),
    #re_path(r'^.*$', CurrentCoursesView.as_view(), name="anything"),
    #re_path('', http_response),
]
