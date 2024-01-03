import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comment } from '../model/Comment';
import { CommentService } from '../services/comment.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent {
  @Input() filmId: number = 0;
  newComment: Comment = {
    user: '',
    email: '',
    comment: '',
    filmid: this.filmId,
  };

  @Input() comments: Comment[] = [];
  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute
  ) {}

  onSubmit(): void {
    this.route.params.subscribe((params) => {
      const filmId = parseInt(params['id']);
      this.newComment.filmid = filmId;
    });
    this.commentService.addComment(this.newComment).subscribe(
      (addedComment: Comment) => {
        console.log('Added comment:', addedComment);
        setTimeout(() => {
          location.reload();
        }, 100);
        // Perform any additional actions after adding the comment
      },
      (error) => {
        console.error('Error adding comment:', error);
      }
    );
  }
}
