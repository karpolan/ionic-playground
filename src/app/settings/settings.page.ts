import { Component, OnInit } from '@angular/core';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private openNativeSettings: OpenNativeSettings, public platform: Platform) {
  }

  ngOnInit() {
  }

  onNativeSettings(settings: string) {
    console.log('onNativeSettings(%s)', settings);
    this.openNativeSettings.open(settings)
      .then((val) => {
        // Opened successfully
        // throw new Error('Some error message here'); // For testing
      })
      .catch((err) => {
        const errorMessage = `Can not open "${settings}" native settings. ${err}`;
        console.error(errorMessage);
        alert(errorMessage);
      });
  }

}
