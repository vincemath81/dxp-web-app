import json
from time import sleep


def perform_data_extract():
    print("This function has been executed")
    #json_data = open('small_course_sample_data.json')
    data1 = json.load(
  {
    "course_name": "Alteryx 101",
    "course_short_name": "A101",
    "course_id": "MDDD0001",
    "course_description": "Foundations of data analytics",
    "course_sections": 5,
    "course_activities": 10,
    "course_db_id": 94162,
    "course_link": "https:\\/\\/lma-air.ccz.air.bil\\/oodle\\/course\\/view.aha?id=94162",
    "instructor_last_name": "Moody",
    "instructor_first_name": "Sally",
    "instructor_id": 1873117553,
    "instructor_email": "Sally.Moody@green.bil"
   }
#   {
#     "course_name": "Introduction to Modeler",
#     "course_short_name": "MODEL",
#     "course_id": "MDDD0003",
#     "course_description": "Create predictive models",
#     "course_sections": 15,
#     "course_activities": 8,
#     "course_db_id": 89003,
#     "course_link": "https:\\/\\/lma-air.ccz.air.bil\\/oodle\\/course\\/view.aha?id=89003",
#     "instructor_last_name": "Gonzales",
#     "instructor_first_name": "Michael",
#     "instructor_id": 9362098512,
#     "instructor_email": "Michael.Gonzales@yut.bil"
#   }
)
    data2 = json.dumps(data1)
    print(data2)