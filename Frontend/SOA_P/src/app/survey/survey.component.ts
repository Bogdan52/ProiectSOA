import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})

export class SurveyComponent implements OnInit {
  form!: FormGroup;
  from = new FormGroup({
      multumit: new FormControl(false),
      opinion: new FormControl(''),
      rateapp: new FormControl(1)
  })
  isSubmited: boolean = false;

  constructor(private readonly fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      multumit: [''],
      opinion:[''],
      rateapp: ['']
     });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      multumit: [false],
      opinion:['', Validators.required],
      rateapp: ['1', Validators.required]
    });
    
  }

  onSubmit() {
    this.isSubmited = true;
    
    var data = {multumit: Boolean(this.form.get('multumit')?.value), opinion:this.form.get('opinion')?.value, rateapp: Number(this.form.get('rateapp')?.value)}
    console.log(data)
    this.http.post('http://localhost:8000/survey?multumit='+data.multumit+"&opinion=" +data.opinion+"&rateapp=" + data.rateapp, {})
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }
}
