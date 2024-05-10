from rest_framework import serializers
from . models import *
from django.contrib.auth import get_user_model, authenticate
from django.forms import ValidationError

UserModel = get_user_model()

class DXPCoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = DXPCourses
        fields = ['id_source', 'learning_path', 'full_name', 'short_name', 'category', 'course_id', 'summary', 'format', 'new_item', 'start_date', 'visible', 'created_date', 'modified_date']

class DXPEnrolledCoursesByUserSerializer(serializers.ModelSerializer):
    user_id = serializers.StringRelatedField()
    enrollments = serializers.RelatedField(source='course_id', read_only=True)

    class Meta:
        model = DXPCourseEnrollments
        fields = ('user_id', 'enrollments')
        depth = 1

    def retrieveEnrolledCourses(self, user_id):
        return DXPCourseEnrollments.objects.filter(user_id=user_id)


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'
    def create(self, clean_data):
        user_obj = UserModel.objects.create_user(email=clean_data['email'],
            password=clean_data['password'])
        user_obj.username = clean_data['username']
        user_obj.save()
        return user_obj
    
class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def check_user(self, clean_data):
        user = authenticate(username=clean_data['email'], password=clean_data['password'])
        if not user:
            raise ValidationError('user not found')
        return user
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'

# class LRSRequestSerializer(serializers.Serializer):
#     endpoint = serializers.CharField()

#     def check_non_empty_endpoint(self, clean_data):
#         if clean_data['endpoint'] is None:
#             raise ValidationError('please supply a non empty endpoint')
#         return user