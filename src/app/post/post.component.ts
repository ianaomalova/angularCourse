import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post = {text: "", title: ""}
  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>()
  constructor() {
  }
  ngOnInit() {

  }

  remove() {
    this.onRemove.emit(this.post.id);
  }
}
