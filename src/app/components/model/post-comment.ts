import {User} from './user';

export class PostComment {
  postId?: string;
  author: User;
  content: string;
  creationDate: Date;
  changeDate?: Date;

  constructor(postId: string, author: User, content: string) {
    this.postId = postId;
    this.author = author;
    this.content = content;
  }

}
