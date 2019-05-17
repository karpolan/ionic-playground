import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Platform } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formContact: FormGroup;
  submitAttempt = false;
  submitSuccess = false;

  constructor(public formBuilder: FormBuilder,
              public platform: Platform,
              private emailComposer: EmailComposer) {
    this.formContact = formBuilder.group({
      name: [''],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(128)])],
      message: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {}

  onFormSubmit() {
    if (this.formContact.valid) {
      // console.log('onFormSubmit() success.', this.formContact.value);
      this.sendMessage(this.formContact.get('email').value, this.formContact.get('message').value);
      this.formContact.patchValue({message: ''});
      this.submitSuccess = true;
      this.submitAttempt = false; // Always reset on success
    } else {
      // console.warn('onFormSubmit() failed.', this.formContact.value);
      this.submitAttempt = true;
    }
  }

  sendMessage(email: string, text: string) {
    // console.log('sendMessage()', email, text);

    this.emailComposer.isAvailable()
      .then((available: boolean) => {
        if (available) {
          console.log('emailComposer is available');

          // We can send emails
          let os = 'Unknown';
          if (this.platform.is('ios')) { os = 'iOS' };
          if (this.platform.is('android')) { os = 'Android' };
          const body = `
${text}
-- 
Generated b "Ionic Playground" app on ${os} system.`;
          const emailObject = {
            to: 'software@karpolan.com',
            cc: email,
            subject: 'From Ionic Playground application',
            body,
            isHtml: false
          };
          // Send a text message using default options
          return this.emailComposer.open(emailObject);

        } else {
          console.warn('emailComposer is not available');
          return false;
        }

      })
      .catch((err) => {
        console.warn('emailComposer failed.', err);
        return false;
      });
  }

}
