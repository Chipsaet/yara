
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Course } from '../../models/models';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDetailComponent {
  private route = inject(ActivatedRoute);
  private dataService = inject(DataService);
  private routeSub: Subscription;

  course = signal<Course | undefined>(undefined);

  constructor() {
    this.routeSub = this.route.params.subscribe(params => {
      const courseId = params['id'];
      if (courseId) {
        this.dataService.getCourseById(courseId).subscribe(courseData => {
          this.course.set(courseData);
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
