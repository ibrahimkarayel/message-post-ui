import {Component, Input, OnInit} from '@angular/core';
import {User} from '../model/user';
import {Post} from '../model/post';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AuthService} from '../../shared/services/auth.service';
import {PostService} from '../../shared/services/post.service';
import {PostDialogComponent} from '../shared/post-dialog/post-dialog.component';
import {ConfirmationDialogComponent} from '../shared/confirmation-dialog/confirmation-dialog.component';
import {PostComment} from '../model/post-comment';

@Component({
  selector: 'app-posts',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() user: User;
  @Input() selectedPost: Post;
  @Input() newPost: Post;
  blogMessageForm: FormGroup;
  myform: FormData;
  postResult: Post[];
  title = 'angular-confirmation-dialog';

  constructor(private dialog: MatDialog,
              private fb: FormBuilder,
              private authService: AuthService,
              private postService: PostService) {
  }

  ngOnInit() {
    this.user = this.authService.getLoggedInUser;
    this.newPost = new Post();
    this.newPost.author = this.user;
    console.log(this.user);
    this.getAllPost();
  }


  getAllPost() {
    this.postService.getAllPosts().subscribe((posts: Post[]) => {
        if (posts) {
          this.postResult = posts;
        }
      },
      error => {
        alert('Error');
      });
  }

  refresh() {
    this.getAllPost();
  }


  savePost({author, subject, content, isUpdate}: Post) {
    isUpdate = false;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      author, subject, content, isUpdate,
    };
    const dialogRef = this.dialog.open(PostDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((post: Post) => {
        console.log('Dialog output:', post);
        if (post) {
          this.postResult.push(post);
        }
      },
      error => {
        alert('Save failed !!!');
      });
  }

  editPost({postId, author, subject, content, isUpdate}: Post) {
    isUpdate = true;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      postId, author, subject, content, isUpdate
    };
    const dialogRef = this.dialog.open(PostDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((resultPost: Post) => {
        if (resultPost) {
          const index = this.postResult.findIndex(value => value.postId === resultPost.postId);
          this.postResult[index] = resultPost;
        }
      },
      error => {
        alert('Update Failed');
      });
  }


  removePost(post: Post) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      post
    };
    const dialogRef = this.dialog.open(ConfirmationDialogComponent,
      dialogConfig);
    dialogRef.afterClosed().subscribe((postId: any) => {
        console.log('Dialog output postId:', postId);
        if (postId) {
          const index = this.postResult.findIndex(value => value.postId === postId);
          this.postResult.splice(index, 1);
          console.log(this.postResult);
        }
      },
      error => {
        alert('Delete Failed !!!');
      });

  }

  saveComment(myForm: NgForm) {
    console.log(JSON.stringify(myForm.value));
    const postId = myForm.value['postId'];
    const message = myForm.value['message'];
    if (myForm.valid) {
      this.postService.saveComment(new PostComment(postId, this.user, message)).subscribe((post: Post) => {
          console.log(JSON.stringify(post));
          if (post) {
            const index = this.postResult.findIndex(value => value.postId === post.postId);
            this.postResult[index] = post;
          }
        },
        error => {
          alert('Error');
        });
      console.log('Form Submitted!');
      myForm.reset();
    }
  }

  /*removeComment(comment: PostComment, postId: number) {
    debugger;
    if (comment) {
      comment.postId = postId;
      this.postService.deleteComment(comment, postId).subscribe((post: any) => {
          console.log(JSON.stringify(post));
          if (post) {
            let index = this.postResult.items.findIndex(value => value.postId === post.postId);
            this.postResult.items[index] = post;
          }
          if (post.items) {
            console.log(JSON.stringify((post.items)));
          }
        },
        error => {
          alert('Error');
        });
    }
  }*/


}
