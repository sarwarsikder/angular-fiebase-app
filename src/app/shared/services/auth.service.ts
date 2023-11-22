import { Injectable, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthCredential, PhoneAuthProvider, UserCredential, signInWithCredential } from 'firebase/auth';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  UserData: any;
  public isLoggedInSubject = new BehaviorSubject<boolean>(true);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private auth: Auth, private router: Router, public ngZone: NgZone) {
    const authRecaptcha: Auth = getAuth();
    onAuthStateChanged(this.auth, (user: any) => {
      if (user) {
        this.UserData = user;
        localStorage.setItem('user', JSON.stringify(this.UserData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  onSignInSubmit() {
    // Your logic for handling reCAPTCHA verification success
  }

  getAuthFire() {
    return this.auth.currentUser;
  }

  getAuthLocal() {
    const token = localStorage.getItem('user');
    const user = JSON.parse(token as string);
    return user;
  }

  get isLoggedIn(): boolean {
    const token = localStorage.getItem('user');
    const user = JSON.parse(token as string);
    return user !== null;
  }

  Register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        this.UserData = result.user;
        this.ngZone.run(() => {
          this.sendEmailVerification();
          this.router.navigate(['/dashboard']);
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  Login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((result: any) => {
        this.UserData = result.user;
        this.ngZone.run(() => {
          this.router.navigate(['/dashboard']);
        });
      })
      .catch((error) => {
        //this.toastr.success('Hello world!', 'Toastr fun!');
        window.alert(error.message);
      });
  }

  sendOTP(phoneNumber: string, appVerifier: RecaptchaVerifier): Promise<string> {
    return signInWithPhoneNumber(this.auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // Assuming confirmationResult.verificationId is the verification ID
        return confirmationResult.verificationId;
      })
      .catch((error) => {
        throw error;
      });
  }

  verifyOTP(verificationId: string, verificationCode: string): Promise<UserCredential> {
    const credential: AuthCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
    console.log(credential)
    return signInWithCredential(this.auth, credential);
  }


  Logout() {
    signOut(this.auth).then(() => this.router.navigate(['/login']));
  }

  GoogleAuth() {
    return this.loginWithPopup(new GoogleAuthProvider());
  }

  loginWithPopup(provider: any) {
    return signInWithPopup(this.auth, provider).then(() => {
      this.router.navigate(['dashboard']);
    });
  }

  async sendPasswordResetEmails(email: string) {
    sendPasswordResetEmail(this.auth, email)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  sendEmailVerification() {
    return sendEmailVerification(this.auth.currentUser!);
  }
}
