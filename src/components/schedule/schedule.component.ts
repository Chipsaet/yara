
import { ChangeDetectionStrategy, Component, inject, signal, WritableSignal } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { DataService } from '../../services/data.service';
import { OnlineClass } from '../../models/models';
import { computed } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent {
  private dataService = inject(DataService);
  
  // Create a writable signal for the schedule to manage reminder state
  schedule: WritableSignal<(OnlineClass & { reminderSet?: boolean })[]> = signal([]);
  
  sortedSchedule = computed(() => {
    return [...this.schedule()].sort((a, b) => a.dateTime.getTime() - b.dateTime.getTime());
  });

  constructor() {
    // Initialize the signal with data from the service
    const initialSchedule = this.dataService.getSchedule()();
    this.schedule.set(initialSchedule.map(item => ({ ...item, reminderSet: false })));
  }

  formatClassDate(date: Date): string {
    if (!date) return '';
    return formatDate(date, 'fullDate', 'fa-IR');
  }
  
  formatClassTime(date: Date): string {
    if (!date) return '';
    return formatDate(date, 'H:mm', 'fa-IR');
  }

  setReminder(classId: string) {
    this.schedule.update(currentSchedule => {
      return currentSchedule.map(c => {
        if (c.id === classId) {
          if (!c.reminderSet) {
             alert(`یادآور برای کلاس "${c.courseTitle}" تنظیم شد.`);
          }
          return { ...c, reminderSet: true };
        }
        return c;
      });
    });
  }
}
