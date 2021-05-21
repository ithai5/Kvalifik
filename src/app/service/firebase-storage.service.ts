import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  constructor(private firebaseStorage: AngularFireStorage) { }

  uploadImageToStorage(imageId: string, picture: any): void{
    this.firebaseStorage.upload(imageId, picture);
  }

  downloadImageFromStorage(ImageId): Observable<any> {
    return this.firebaseStorage.ref(ImageId).getDownloadURL()
  }
}
