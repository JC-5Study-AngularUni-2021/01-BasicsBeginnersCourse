import { Component, OnInit, Input } from '@angular/core';

import { NOTES } from '../../assets/notes';
import { I_Notes } from './model/notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input()
  notesJSON: I_Notes[] = NOTES

  constructor() { 
    // console.log(this.notesJSON)
    
  }

  ngOnInit(): void {
  }

}
