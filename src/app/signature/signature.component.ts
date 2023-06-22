import { Component } from '@angular/core';
import { UploadServiceService } from '../services/upload-service.service';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent {


  selectedFile: File | undefined;

  constructor(private uploadService: UploadServiceService) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      this.uploadService.uploadFile(this.selectedFile);
    }
  }
}



