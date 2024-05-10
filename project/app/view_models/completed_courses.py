import json

class CourseDetail:
    id = ''
    type = ''
    name = ''
    source = ''

    def __init__(self, id, type, name, source):
        self.id = id
        self.type = type
        self.name = name
        self.source = source

class Courses:
    details = [CourseDetail]

    def __init__(self, details):
        self.details = details

    def toJSON(self):
        return json.dumps(
            self,
            default=lambda o: o.__dict__, 
            sort_keys=True,
            indent=None)