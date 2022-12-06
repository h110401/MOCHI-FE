import {Injectable} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {getDownloadURL} from "@angular/fire/storage";


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  progress = new BehaviorSubject<number>(0);
  progress$ = this.progress.asObservable();

  constructor(private storage: AngularFireStorage) {
  }

  uploadFile(path: string, file: File) {
    return new Promise((resolve, reject) => {
      let ref = this.storage.ref(path);
      let task = ref.put(file).task;
      task.on('state_changed', {
        next: (snapshot) => {
          let bytesTransferred = snapshot.bytesTransferred;
          let totalBytes = snapshot.totalBytes;
          this.progress.next(bytesTransferred / totalBytes * 100);
        },
        error: (error) => reject(error),
        complete: () => {
          getDownloadURL(task.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          })
        }
      })
    })
  }

  uploadBase64(path: string, data: any) {
    return new Promise<string>((resolve, reject) => {
      let task = this.storage.ref(path).putString(data, 'base64', {contentType: 'image/png'}).task;
      task.on('state_changed', {
        next: (snapshot) => {
          let bytesTransferred = snapshot.bytesTransferred;
          let totalBytes = snapshot.totalBytes;
          this.progress.next(bytesTransferred / totalBytes * 100);
        },
        error: (error) => reject(error),
        complete: () => {
          getDownloadURL(task.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          })
        }
      })
    })

  }
}
