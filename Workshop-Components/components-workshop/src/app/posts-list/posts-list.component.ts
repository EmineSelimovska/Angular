import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Posts } from '../types/posts';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit{
  postsList: Posts[] = [];
  isLoading = true;
   constructor(private apiService: ApiService){
      
   }
   ngOnInit(): void {
    this.apiService.getPost(5).subscribe(
       {
        next: (posts) => {
        this.postsList = posts;
        this.isLoading = false;
        },
        error: (err) => {
          this.isLoading = false;
          console.error(`Error: ${err}`)
        }
       }
    )
   }
}
