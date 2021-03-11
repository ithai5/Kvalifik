import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  @Output() fileUploading: EventEmitter<any> = new EventEmitter<any>();
  file = new FormGroup({
    fileUrl : new FormControl()
  });
  constructor() {}

  ngOnInit(): void {
  }
  fileUploaded(): void{
    this.fileUploading.emit(this.file.value.fileUrl);
  }

}
