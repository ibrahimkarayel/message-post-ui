import {User} from './user';
import {PostComment} from './post-comment';

export class Post {
  postId: string;
  author: User;
  subject: string;
  content: string;
  creationDate: Date;
  changeDate?: Date;
  comments: Array<PostComment>;
  isUpdate?: boolean;


  constructor(postId?: string, author?: User, subject?: string, content?: string) {
    this.postId = postId;
    this.author = author;
    this.subject = subject;
    this.content = content;
  }
}
