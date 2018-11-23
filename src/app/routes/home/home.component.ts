import { Component, OnInit } from '@angular/core';
import { FileUploaderService } from '../../core/services/file-uploader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public congratulation = 'Congratulation !';
  constructor(public fileUploaderService: FileUploaderService) {}

  ngOnInit(): void {}

  public uploadFile(event) {
    this.fileUploaderService.uploadFile(event);
  }
}
