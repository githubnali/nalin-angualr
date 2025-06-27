import { Component, OnInit  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-jobby-app',
  imports: [HttpClientModule],
  templateUrl: './jobby-app.component.html',
  styleUrl: './jobby-app.component.scss'
})
export class JobbyAppComponent implements OnInit {
  jobs: any[] = [];
  isLoading = true;
  errMsg = '';

  constructor(private jobService: JobService){}

  ngOnInit(){
    this.jobService.getJobs().subscribe({
      next: (res) => {
        console.log(res.jobs);
        console.log(res.body);
        this.jobs = res.jobs;
        this.isLoading = false;
      },
      error: (error) => {
        this.errMsg = error.message;
        this.isLoading = false

      }
    })
  }
}
