import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, of } from 'rxjs';
import { FileInfo } from '../../interface/file-info.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  URL = "https://api.github.com/repos"
  constructor(private http: HttpClient) { }

  getFiles(repo: string){
    return this.http.get<FileInfo[]>(`${this.URL}/${repo}`).pipe(first());
  }
}
