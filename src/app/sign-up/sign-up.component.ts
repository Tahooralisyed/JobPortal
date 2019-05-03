import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl  } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  profileForm: FormGroup;



  onSubmit() {
    if (this.profileForm.valid) {
      console.log('form submitted', this.profileForm.value);
      this.profileForm.reset();
    } else {
      // validate all form fields
      console.log('please enter values in form');
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      phoneNo: [''],
      emailId: [''],
      Password: ['']
    });
  }
  get firstName() { return this.profileForm.get('firstName'); }
  get lastName() { return this.profileForm.get('lastName'); }
  get phoneNo() { return this.profileForm.get('phoneNo'); }
  get emailId() { return this.profileForm.get('emailId'); }
  get Password() { return this.profileForm.get('Password'); }


}
