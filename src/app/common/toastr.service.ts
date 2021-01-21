import { InjectionToken } from '@angular/core';
import { Toastr } from './Toastr';

export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');