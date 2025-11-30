
import { Injectable, signal } from '@angular/core';
import { User, Course, OnlineClass } from '../models/models';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly user = signal<User>({
    name: 'سارا رضایی',
    studentId: '987654321',
    email: 'sara.rezaei@university.edu',
    avatarUrl: 'https://picsum.photos/seed/sara/200',
    major: 'مهندسی کامپیوتر',
    enrollmentYear: 1400
  });

  private readonly courses = signal<Course[]>([
    {
      id: 'ng-101',
      title: 'مبانی انگولار',
      instructor: 'دکتر احمدی',
      description: 'آشنایی با مفاهیم پایه و ساختار فریم‌ورک انگولار برای ساخت برنامه‌های وب مدرن.',
      imageUrl: 'https://picsum.photos/seed/angular/600/400',
      lessons: [
        { title: 'مقدمه و نصب', duration: '۱۵ دقیقه', videoUrl: '#' },
        { title: 'کامپوننت‌ها و قالب‌ها', duration: '۴۵ دقیقه', videoUrl: '#' },
        { title: 'سیگنال‌ها و مدیریت وضعیت', duration: '۳۰ دقیقه', videoUrl: '#' }
      ]
    },
    {
      id: 'ts-201',
      title: 'تایپ‌اسکریپت پیشرفته',
      instructor: 'مهندس حسینی',
      description: 'یادگیری عمیق تایپ‌اسکریپت، شامل انواع پیشرفته، دکوراتورها و الگوهای طراحی.',
      imageUrl: 'https://picsum.photos/seed/typescript/600/400',
      lessons: [
        { title: 'Generic ها', duration: '۳۵ دقیقه', videoUrl: '#' },
        { title: 'Utility Types', duration: '۲۵ دقیقه', videoUrl: '#' },
        { title: 'الگوهای طراحی با تایپ‌اسکریپت', duration: '۵۰ دقیقه', videoUrl: '#' }
      ]
    },
    {
      id: 'ux-301',
      title: 'طراحی رابط و تجربه کاربری (UI/UX)',
      instructor: 'دکتر محمدی',
      description: 'اصول طراحی کاربرمحور، وایرفریمینگ، پروتوتایپینگ و تست کاربردپذیری.',
      imageUrl: 'https://picsum.photos/seed/ux/600/400',
      lessons: [
        { title: 'مبانی طراحی UI', duration: '۴۰ دقیقه', videoUrl: '#' },
        { title: 'تحقیقات کاربر (User Research)', duration: '۵۵ دقیقه', videoUrl: '#' },
        { title: 'ابزارهای طراحی (فیگما)', duration: '۶۰ دقیقه', videoUrl: '#' }
      ]
    }
  ]);
  
  private readonly schedule = signal<OnlineClass[]>([
      { 
        id: 'cl-01',
        courseTitle: 'مبانی انگولار', 
        topic: 'پرسش و پاسخ هفتگی', 
        instructor: 'دکتر احمدی',
        dateTime: this.addDays(new Date(), 2),
        meetingLink: 'https://meet.google.com/abc-defg-hij'
      },
      { 
        id: 'cl-02',
        courseTitle: 'طراحی رابط و تجربه کاربری (UI/UX)', 
        topic: 'مرور پروژه‌ها', 
        instructor: 'دکتر محمدی',
        dateTime: this.addDays(new Date(), 4),
        meetingLink: 'https://zoom.us/j/123456789'
      },
      { 
        id: 'cl-03',
        courseTitle: 'تایپ‌اسکریپت پیشرفته', 
        topic: 'بررسی الگوهای طراحی', 
        instructor: 'مهندس حسینی',
        dateTime: this.addDays(new Date(), 7),
        meetingLink: 'https://meet.google.com/klm-nopq-rst'
      },
  ]);

  private addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  getUser() {
    return this.user.asReadonly();
  }

  getCourses() {
    return this.courses.asReadonly();
  }

  getCourseById(id: string) {
    const course = this.courses().find(c => c.id === id);
    return of(course); // Return as observable for component logic
  }

  getSchedule() {
    return this.schedule.asReadonly();
  }
}
