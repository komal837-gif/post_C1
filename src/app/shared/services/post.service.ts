import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ipost } from '../model/post';
import { map, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
emitNewPost:Subject<Ipost> = new Subject()
emitRemoveId:Subject<string> = new Subject()
emitEditObj:Subject<Ipost> = new Subject()
emitUpdatedObj:Subject<Ipost> = new Subject()

emitUpdatedObj$:Observable<Ipost> = this.emitUpdatedObj.asObservable()
emitEditObj$:Observable<Ipost> = this.emitEditObj.asObservable()
emitRemoveId$:Observable<string> = this.emitRemoveId.asObservable()
emitNewpost$:Observable<Ipost> = this.emitNewPost.asObservable()



UpdateObj(post:Ipost){
  this.emitUpdatedObj.next(post)
}

EditObj(post:Ipost){
  this.emitEditObj.next(post)
}

removeId(id:string){
  this.emitRemoveId.next(id)
}

newPost(post:Ipost){
  this.emitNewPost.next(post)
}

BASE_URL = environment.BASE_URL
POST_URL = `${this.BASE_URL}/blogs.json`

  constructor(private http:HttpClient) { }

  fetchAllBlogs(){
    return this.http.get<Ipost[]>(this.POST_URL)
      .pipe(
        map(obj=>{
          let postArr:Ipost[] = []

          for(const key in obj){
            postArr.push({...obj[key],id:key})
          }
          return postArr
        })  
      )
  }

  createPost(post:Ipost):Observable<any>{
    return this.http.post<any>(this.POST_URL,post)
  }

  removePost(id:string):Observable<any>{
    let REMOVE_URL = `${this.BASE_URL}/blogs/${id}.json`
    return this.http.delete<any>(REMOVE_URL)
  }
  
  updatedPost(post:Ipost):Observable<any>{
    let UPDATE_URL = `${this.BASE_URL}/blogs/${post.id}.json`
    return this.http.patch<any>(UPDATE_URL,post)
  }
}
