type EnrolledCourses = {
  id_source: string;
  learning_path: string;
  full_name: string;
  short_name: string;
  category: string;
  course_id: string;
  summary: string;
  format: string;
  new_item: boolean;
  start_date: string;
  visible: boolean;
  created_date: string;
  modified_date: string;
};

export type EnrolledCoursesResponse = {
  enrolledCourses: EnrolledCourses[];
};
