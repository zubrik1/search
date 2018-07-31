import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form: FormGroup;
  preSubmitInvalid = false;
  constructor() { }

  ngOnInit() {
     this.form = new FormGroup({
      searchField: new FormControl('', Validators.required),
      searchSystem: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.preSubmitInvalid = true;
    } else if (this.form.valid) {
      this.preSubmitInvalid = false;

      const system = this.form.get('searchSystem').value;
      const request = this.form.get('searchField').value.split(' ').join('+');
      document.location.href = this.getUrl(system, request);
    }
  }

  getUrl(system, request) {
   if (system === 'ask.com') {
    return  `https://${system}/web?q=${request}`;
   }
    return  `https://${system}/search?q=${request}`;
  }

}
