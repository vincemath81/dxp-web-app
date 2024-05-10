import json
import app.parsers.VERB_CONSTANTS as CONSTANTS
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes
from . models import *
from . serializer import *
from app.parsers.lrs_parser import *
from django.http import JsonResponse
from rest_framework.response import Response
from django.contrib.auth import get_user_model, login, logout
from rest_framework.response import Response
from .serializer import UserRegisterSerializer, UserLoginSerializer, UserSerializer
from rest_framework import permissions, status

class DXPCoursesView(APIView):

    @permission_classes((AllowAny, ))
    def get(self, request):
        output = [{"id_source": output.id_source, "learning_path": output.learning_path, "full_name": output.full_name, "short_name": output.short_name, "category": output.category, 
                   "course_id": output.course_id, "summary": output.summary, "format": output.format, "new_item": output.new_item, "start_date": output.start_date, "visible": output.visible,
                   "created_date": output.created_date, "modified_date": output.modified_date}
                  for output in DXPCourses.objects.all()]
        return Response(output)
    
    @permission_classes((AllowAny, ))
    def post(self, request):
        serializer = DXPCoursesSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class DXPEnrolledCoursesByUserIdView(APIView):

    @permission_classes((AllowAny, ))
    def get(self, request, user_id):
        serializer = DXPEnrolledCoursesByUserSerializer(data={user_id: [user_id]})
        if serializer.is_valid(raise_exception=True):
            enrolled_courses = serializer.retrieveEnrolledCourses(user_id=user_id)
            queryset = enrolled_courses.values("id", "mdl_id", "status", "course_id_id", "user_id_id", "start", "end", "started", "id", "completed", "course_id__full_name")
            return Response({"enrolledCourses": list(queryset)})

class UserRegister(APIView):

    @permission_classes((AllowAny, ))
    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(request.data)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    

class UserLogin(APIView):
    #authentication_classes = (SessionAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)    

    def post(self, request):
        data = request.data
        #assert validate_email(data)
        #assert validate_password(data)
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.check_user(data)
            login(request, user)
            course_data = initiate_pull(CONSTANTS.ENROLLED_TEMP_ENDPOINT) 
            final_data = serializer.data     
            final_data.update({'Courses': course_data}) 
            print(final_data)
            return Response(final_data, status=status.HTTP_200_OK)
        

class LRSView(APIView):

    @permission_classes((AllowAny, ))
    def post(self, request):
        data = request.data
        dataDict = dict(data)
        response = initiate_pull(dataDict['endpoint'])
        return Response({'lrsData': response}, status=status.HTTP_200_OK)
        

class UserLogout(APIView):
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)
    

class UserView(APIView):

    @permission_classes((AllowAny, ))
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)
