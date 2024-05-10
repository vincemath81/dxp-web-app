class CourseDetail:
    type = ''
    name = ''

class Course:
    id = ''
    definition: CourseDetail

class Actor:
    name = ''

class Statement:
    actor = Actor
    object = Course
    type = ''
    course_link = ''

    def __init__(self, name):
        self.name = name

class Statements:
    statements = [Statement]