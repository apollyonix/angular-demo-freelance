import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const JOB_API = environment.api + "/job/"

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpClient: HttpClient) { }

  createJob(job : {title: string, description: string, price: string}) : Observable<any> {
    return this.httpClient.post(JOB_API + "create", job);
  }

  getAllJobs() : Observable<any> {
    return this.httpClient.get(JOB_API + "all");
  }

  getJobsForCurrentUser() : Observable<any> {
    return this.httpClient.get(JOB_API + "user/jobs");
  }

  deleteJob(id: number) : Observable<any> {
    return this.httpClient.post(JOB_API + "delete/" + id, null);
  }

  getJobById(id: string) : Observable<any> {
    return this.httpClient.get(JOB_API + id);
  }
}
