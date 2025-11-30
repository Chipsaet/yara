
export interface User {
  name: string;
  studentId: string;
  email: string;
  avatarUrl: string;
  major: string;
  enrollmentYear: number;
}

export interface Lesson {
  title: string;
  duration: string;
  videoUrl: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  imageUrl: string;
  lessons: Lesson[];
}

export interface OnlineClass {
  id: string;
  courseTitle: string;
  topic: string;
  instructor: string;
  dateTime: Date;
  meetingLink: string;
}
