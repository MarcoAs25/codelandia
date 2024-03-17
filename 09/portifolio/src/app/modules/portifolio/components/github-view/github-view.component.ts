import { GithubService } from './github.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { FileInfo } from '../../interface/file-info.interface';

@Component({
  selector: 'app-github-view',
  templateUrl: './github-view.component.html',
  styleUrls: ['./github-view.component.scss'],
  standalone: true,
  imports: [MatListModule, MatIconModule, MatDividerModule, CommonModule, MatCardModule]
})
export class GithubViewComponent  implements OnInit {
  @Input() repository!: string;

  initialUrl!: string;
  currentUrl!: string;

  files: FileInfo[] = []
  folders: FileInfo[] = []

  constructor(private service: GithubService){}
  ngOnInit(){
    this.initialUrl = `${this.repository}/contents`
    this.currentUrl = this.initialUrl;
    this.loadFilesFromFolder();
  }
  loadFilesFromFolder(){

    const key = this.currentUrl;
    const storedData = localStorage.getItem('data_request');
    if (storedData) {
      const data = JSON.parse(storedData);
      const expirationTime = 24 * 60 * 60 * 1000;
      const currentTime = new Date().getTime();

      if (currentTime - data < expirationTime) {
        const storedItem = localStorage.getItem(this.currentUrl);
        let localValue: FileInfo[] = [];

        if (storedItem !== null) {
            localValue = JSON.parse(storedItem);
            this.files = localValue.filter(file => file.type === 'file');
            this.folders = localValue.filter(file => file.type === 'dir');
            return;
        }
      }
    }

    this.service.getFiles(this.currentUrl).subscribe({
      next: (value) =>{
        this.files = value.filter(file => file.type === 'file');
        this.folders = value.filter(file => file.type === 'dir');
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(value));
        localStorage.setItem('data_request', JSON.stringify(new Date().getTime()));
      }
    });
  }

  onReturnFolder() {
    const index = this.currentUrl.lastIndexOf('/');
    if (index !== -1) {
      this.files.length = 0;
      this.folders.length = 0;
      this.currentUrl = this.currentUrl.substring(0, index);
      this.loadFilesFromFolder();
    }
  }
  onClickFolder(folder: FileInfo){
    this.files.length = 0;
    this.folders.length = 0;
    const listPath = folder.path.split('/');
    this.currentUrl += `/${listPath[listPath.length-1]}`;
    this.loadFilesFromFolder();
  }
  isRoot(){
    return this.currentUrl == this.initialUrl;
  }
}
