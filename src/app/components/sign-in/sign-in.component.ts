import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth, RecaptchaVerifier, getAuth } from 'firebase/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  phoneForm: FormGroup;
  verificationCodeForm: FormGroup;
  verificationId: string | null = null;
  phoneNumber: string = '';
  recaptchaVerifier: RecaptchaVerifier | null = null;

  constructor(public authService: AuthService, private fb: FormBuilder) {
    this.phoneForm = this.fb.group({
      phoneNumber: ['', Validators.required],
    });

    this.verificationCodeForm = this.fb.group({
      verificationCode: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  onSignInSubmit(response: string) {
    if (response) {
      console.log('reCAPTCHA success:', response);
    }
  }

  sendOTP() {
    if (this.recaptchaVerifier) {
      this.recaptchaVerifier.clear();
    }

    const phoneNumber = this.phoneForm.get('phoneNumber')?.value;

    if (phoneNumber) {
      const auth = getAuth() as Auth;

      const containerElement = document.getElementById('recaptcha-sign-in');
      const existingWidget = containerElement?.querySelector('.grecaptcha-badge');

      if (!existingWidget) {
        this.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-sign-in', {
          size: 'invisible',
        });

        console.log(this.recaptchaVerifier);

        this.authService.sendOTP(phoneNumber, this.recaptchaVerifier)
          .then((verificationId) => {
            this.verificationId = verificationId;
            console.log('Verification ID:', verificationId);
          })
          .catch((error) => {
            console.error('Error sending OTP:', error);
          });
      } else {
        console.error('reCAPTCHA has already been rendered in this element');
      }
    } else {
      console.error('Invalid phone number');
    }
  }

  verifyOTP() {
    const verificationCode = this.verificationCodeForm.get('verificationCode')?.value;
  
    if (this.verificationId && verificationCode) {
      this.authService.verifyOTP(this.verificationId, verificationCode)
        .then(() => {
          console.log('OTP verification successful');
          // Additional actions after successful verification
        })
        .catch((error) => {
          console.error('Error verifying OTP:', error);
  
          // Check for specific error codes
          if (error.code === 'auth/invalid-verification-code') {
            console.error('Invalid verification code. Please check and try again.');
            // Additional actions for handling invalid verification code
          } else {
            console.error('Unhandled error:', error);
            // Handle other error cases
          }
        });
    } else {
      console.error('Invalid verification code or verification ID');
    }
  }
  
}
