import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  persons: any[] = [
    {
      name: 'Raj Patel',
      email: 'raj@example.com',
      dol: '1987-11-30',
      avatar: 'https://via.placeholder.com/150',
      country: 'India',
    },
    {
      name: 'Priya Sharma',
      email: 'priya@example.com',
      dol: '1992-08-18',
      avatar: 'https://via.placeholder.com/150',
      country: 'India',
    },
    {
      name: 'Amit Kumar',
      email: 'amit@example.com',
      dol: '1980-04-25',
      avatar: 'https://via.placeholder.com/150',
      country: 'India',
    },
    {
      name: 'Neha Singh',
      email: 'neha@example.com',
      dol: '1995-02-12',
      avatar: 'https://via.placeholder.com/150',
      country: 'India',
    },
  ];
  selectedPerson: any = {};

  personForm!: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
  
    this.personForm = this.fb.group({
      name: ['', ],
      email: ['', ],
      dol: ['', ],
      avatar: ['', ],
      country: ['', ]
    });
  }
  isEdit=false
  submitForm() {
    if (this.isEdit) {
      const index = this.persons.findIndex(person => person === this.selectedPerson);
      if (index !== -1) {
        this.persons[index] = this.personForm.value;
        alert("Profile Uptedeted sucssesfully!!")
      }
      this.selectedPerson = null;
    } else {
      this.persons.unshift(this.personForm.value);
      alert("Profile Submited sucssesfully!!")
    }
    this.personForm.reset();
  }
  
  
  searchText: string = '';
  get filteredPersons() {
    return this.persons.filter((person: any) =>
      person.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  edit(data: any) {
    this.isEdit=true
    this.selectedPerson = data;
    this.personForm.patchValue({
      name: data.name,
      email: data.email,
      dol: data.dol,
      avatar: data.avatar,
      country: data.country
    });
  }
  

  
}
