
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './courses.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent {
  private dataService = inject(DataService);
  courses = this.dataService.getCourses();
}
