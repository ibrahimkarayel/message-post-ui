import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../components/model/post';
import {PostComment} from '../../components/model/post-comment';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.baseUrl + 'posts');
  }

  savePost(postRequest: Post): Observable<Post> {
    return this.http.post<Post>(environment.baseUrl + '/posts/post', postRequest);
  }

  updatePost(postRequest: Post): Observable<Post> {
    return this.http.put<Post>(environment.baseUrl + '/posts/post/' + postRequest.postId, postRequest);
  }

  deletePost(postId: string): Observable<void> {
    return this.http.delete<void>(environment.baseUrl + '/posts/post/' + postId);
  }

  saveComment(comment: PostComment): Observable<Post> {
    return this.http.post<Post>(environment.baseUrl + '/posts/post/comment/' + comment.postId, comment);
  }

  /* deleteComment(comment: PostComment, postId: number): Observable<any> {
     // @ts-ignore
     return this.http.delete(environment.baseUrlComment + "/" ,  postId, comment);
   }*/
}
