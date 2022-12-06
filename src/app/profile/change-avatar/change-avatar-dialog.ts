import {Component, Inject, OnDestroy, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Dimensions, ImageCroppedEvent} from "ngx-image-cropper";
import {UploadService} from "../../service/upload/upload.service";
import {TokenService} from "../../service/token/token.service";
import {ProfileService} from "../../service/profile/profile.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'change-avatar-dialog',
  templateUrl: 'change-avatar-dialog.html'
})
export class ChangeAvatarDialog implements OnInit, OnDestroy {
  imageChangedEvent: any;
  croppedImage: any;
  progress = 0;
  subscription!: Subscription;

  constructor(
    private uploadService: UploadService,
    public dialogRef: MatDialogRef<ChangeAvatarDialog>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private tokenService: TokenService,
    private profileService: ProfileService
  ) {
    this.imageChangedEvent = data;
  }

  ngOnInit(): void {
    this.subscription = this.uploadService.progress$.subscribe({
      next: (progress) => this.progress = progress
    });
    this.progress = 0;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  imageLoaded() {

  }

  cropperReady($event: Dimensions) {

  }

  loadImageFailed() {

  }

  uploadAvatar() {
    this.uploadService.uploadBase64('/images/avatars/' + this.tokenService.getUsername() + '.png', this.getBase64Image(this.croppedImage))
      .then(url => {
          this.profileService.changeAvatar(url).subscribe({
            complete: () => {
              this.tokenService.setAvatar(url);
              this.progress = 0;
              this.dialogRef.close(url);
            }
          })
        }
      )
    ;
  }

  getBase64Image(base64string: string) {
    return base64string.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
