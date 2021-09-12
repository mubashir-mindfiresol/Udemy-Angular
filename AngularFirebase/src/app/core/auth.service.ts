import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from '@firebase/auth';
import { getStorage } from 'firebase/storage';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
