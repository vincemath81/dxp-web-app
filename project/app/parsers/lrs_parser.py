import requests
import json
import os
import app.parsers.VERB_CONSTANTS as CONSTANTS
from django.conf import settings
from requests.auth import HTTPBasicAuth
from types import SimpleNamespace

from app.response_models.lrs_completed_response import Statements
from app.view_models.completed_courses import Courses, CourseDetail

def parse_course_data(f, endpoint):
    x = json.load(f, object_hook=lambda d: SimpleNamespace(**d))

    # if CONSTANTS.COMPLETED_VERB in endpoint:
    #     print(x.more)

    statements = Statements()
    statements = x.statements
    details = []
    course_names = set()
    for statement in statements:
        if hasattr(statement.context.contextActivities, 'grouping'):
            source = statement.context.contextActivities.grouping[0].definition.name.en
        else:
            source = statement.context.contextActivities.category[0].definition.name.en
        if statement.object.definition.name.en not in course_names:
            details.append(CourseDetail(statement.object.id, statement.object.objectType, statement.object.definition.name.en, source))
            course_names.add(statement.object.definition.name.en)
    #courses = Courses(details[:5]) # just get 5 courses for now
    courses = Courses(details) # get all courses
    return courses.toJSON()

def initiate_pull(endpoint):
    # headers = {"X-Experience-API-Version": "1.0.3"}
    # response = requests.get(endpoint, auth=HTTPBasicAuth('195d7ea29a7ab72164e0ade7f489a1573bc0109d', '5763e715a1425beb69a16e404ed7382af7e8e891'), headers=headers, stream=True)
    # data = response.json()
    f = open(os.path.join(settings.BASE_DIR, 'static/registered_full.json'))
    return parse_course_data(f, endpoint)

    # return data