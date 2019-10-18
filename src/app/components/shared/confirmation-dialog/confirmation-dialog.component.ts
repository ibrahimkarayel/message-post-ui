import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Post} from '../../model/post';
import {PostService} from '../../../shared/services/post.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  title: string;
  post: Post;

  constructor(private dialogRef: MatDialogRef<ConfirmationDialogComponent>, private postService: PostService,
              @Inject(MAT_DIALOG_DATA) private data: { post: Post }) {
    this.title = 'Are you sure about this ?';

  }

  ngOnInit() {
    this.post = this.data.post;
    console.log('ngOnInit ConfirmationDialogComponent: ' + JSON.stringify(this.post));

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick() {
    this.postService.deletePost(this.post.postId).subscribe(() => {
        this.dialogRef.close('Post removed');
      },
      error => {
        alert('Could not delete');
      });

  }

}
