
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { computed } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  private dataService = inject(DataService);
  user = this.dataService.getUser();
  courses = this.dataService.getCourses();
  schedule = this.dataService.getSchedule();

  nextClass = computed(() => {
    const sortedSchedule = [...this.schedule()].sort((a, b) => a.dateTime.getTime() - b.dateTime.getTime());
    return sortedSchedule.length > 0 ? sortedSchedule[0] : null;
  });

  formatClassDate(date: Date): string {
    if (!date) return '';
    return formatDate(date, 'EEEE, d MMMM, H:mm', 'fa-IR');
  }
}
