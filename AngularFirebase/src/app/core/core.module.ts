import { NgModule } from '@angular/core';

import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [],
  imports: [
    AuthModule,
  ],
  providers: [AuthService]
})
export class CoreModule { }
