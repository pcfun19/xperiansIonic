import { Component, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Platform, ModalController } from '@ionic/angular';

@Component({
  templateUrl: 'ExpandPostModal.html',
  selector: 'expand-post-modal',
})

export class ExpandPostModal {

  // Data passed in by componentProps
  @Input() image: string;
  @Input() description: string;

  data = [];
  constructor(navParams: NavParams, public modalController: ModalController) {
    // componentProps can also be accessed at construction time using NavParams
    this.data['image'] = navParams.get('image')
    console.log(navParams.get('image'));
  }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}