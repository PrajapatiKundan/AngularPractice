import { Student } from './../models/student';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [
    {
      name: "Kundan",
      physics: 91,
      maths: 89,
      chemistry: 90
    },
    {
      name: "Sachin",
      physics: 85,
      maths: 80,
      chemistry: 72
    },
    {
      name: "Virat",
      physics: 90,
      maths: 80,
      chemistry: 70
    },
    {
      name: "Rohit",
      physics: 80,
      maths: 80,
      chemistry: 70
    }
  ]
  
  constructor() { }

  getStudentData(){
    return this.students
  }
}
