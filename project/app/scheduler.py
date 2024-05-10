import logging;

from apscheduler.schedulers.background import BackgroundScheduler
from django_apscheduler.jobstores import register_events, register_job
from app.jobs.data_extract import perform_data_extract

from django.conf import settings

scheduler = BackgroundScheduler(settings.SCHEDULER_CONFIG)

def start():
    print('scheduler has been started inside scheduler.py')
    if settings.DEBUG:
        logging.basicConfig()
        logging.getLogger('apscheduler').setLevel(logging.DEBUG)

    # - Add a scheduled job to the job store on application initialization
    # - The job will execute the perform_data_extract method that extracts course data once a day (for now testing in second intervals)
    scheduler.add_job(perform_data_extract, 'interval', id="execute_course_extraction", seconds=20, replace_existing=True)

     # Add the scheduled jobs to the Django admin interface
    register_events(scheduler)

    scheduler.start()