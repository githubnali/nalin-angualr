import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private API_URL = 'https://apis.ccbp.in/jobs';

  constructor(private http: HttpClient) { }

  getJobs(): Observable<any> {
    return this.http.get(this.API_URL).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API Error!', error)
    return throwError(() => new Error(error.error?.msg ?? 'Server Error'))
  }
}

