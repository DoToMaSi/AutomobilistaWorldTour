import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable()

export class ToastUtils {

  private activeToast: HTMLIonToastElement | null = null;

  constructor(private toastCtrl: ToastController) {}

  private async createToast(message: string, customDuration?: number, type = ToastType.Info) {
    if (this.activeToast) {
      await this.activeToast.dismiss();
      this.activeToast = null;
    }

    let cssClass = '';

    switch (type) {
      default:
      case ToastType.Info:
        // no class
        break;

      case ToastType.Success:
        cssClass = 'success-toast';
        break;

      case ToastType.Error:
        cssClass = 'error-toast';
        break;
    }

    this.activeToast = await this.toastCtrl.create({
      message,
      duration: customDuration || (2000 + (message.length * 65)),
      cssClass,
      position: 'bottom',
      buttons: [
        { text: 'OK' }
      ]
    })

    await this.activeToast.present();
  }

  display(message: string, customDuration?: number) {
    this.createToast(message, customDuration);
  }

  success(message: string, customDuration?: number) {
    this.createToast(message, customDuration, ToastType.Success);
  }

  error(message: string, customDuration?: number) {
    this.createToast(message, customDuration, ToastType.Error);
  }
}

enum ToastType {
  Info = 1,
  Success = 2,
  Error = 3,
}
