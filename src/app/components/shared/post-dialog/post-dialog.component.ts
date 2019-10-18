import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../../shared/services/post.service';
import {Post} from '../../model/post';


@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {

  form: FormGroup;
  title: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PostDialogComponent>, private postService: PostService,
    @Inject(MAT_DIALOG_DATA) {postId, author, subject, content, isUpdate}: Post) {

    if (postId != null) {
      this.title = 'Edit Post';
    } else {
      this.title = 'Add Post';
    }

    this.form = fb.group({
      subject: [subject, Validators.required],
      content: [content, Validators.required],
      postId: [postId],
      author: [author],
      isUpdate: [isUpdate]
    });

  }

  ngOnInit() {

  }

  saveOrUpdate() {
    if (!this.form.value.isUpdate && !this.form.value.postId) {
      this.postService.savePost(this.form.value).subscribe((post: Post) => {
          if (post) {
            this.dialogRef.close(post);
          }
        },
        error => {
          alert('Save Failed !!!');
        });
    } else {
      this.postService.updatePost(this.form.value).subscribe((post: Post) => {
          console.log(JSON.stringify(post));
          if (post) {
            this.form.reset();
            this.dialogRef.close(post);
          }
        },
        error => {
          alert('Update Failed !!!');
        });
    }

  }

  close() {
    this.dialogRef.close();
  }
}
