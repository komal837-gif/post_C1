import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Ipost } from '../../model/post';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
postArr:Array<Ipost> = []
  constructor(private postService:PostService,
    private snack:SnackBarService
  ) { }

  ngOnInit(): void {
    this.getAllPosts()
    this. getNewPost()
    this.getRemoveId()
    this.updatePost()
  }

  getAllPosts(){
    this.postService.fetchAllBlogs().subscribe({
        next:data=>{
          this.postArr = data;
          this.snack.showSuccessMsg(`All ${data.length} movies are fetched successfully!!`)
        },
        error:err=>{
          this.snack.showError(err)
        }
    })
  }

  getNewPost(){
    this.postService.emitNewpost$.subscribe({
        next:data=>{
          this.postArr.unshift(data)
          this.snack.showSuccessMsg(`The post with id ${data.id} is added successfully!!`)
        },
        error:err=>{
          this.snack.showError(err)
        }
    })
  }

  getRemoveId(){
    this.postService.emitRemoveId$.subscribe({
      next:data=>{
        let getIndex = this.postArr.findIndex(post=> post.id === data)
        this.postArr.splice(getIndex,1)
        this.snack.showSuccessMsg(`The post with id ${data} is removed successfully!!`)
      }
    })
  }

  updatePost(){
    this.postService.emitUpdatedObj$.subscribe({
      next:data=>{
        let index = this.postArr.findIndex(post=> post.id === data.id)
        this.postArr[index] = data
        this.snack.showSuccessMsg(`The post with id ${data.id} is updated successfully!!`)
      }
    })
  }

}
