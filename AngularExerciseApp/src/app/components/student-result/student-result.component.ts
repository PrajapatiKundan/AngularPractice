import { Student } from './../../models/student';
import { StudentService } from './../../services/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit {

  studentsList: Student[] = [];

  constructor(private _studentService: StudentService) { }

  ngOnInit(): void {
    this.studentsList = this._studentService.getStudentData();
  }

  findAverage(student: Student){
    const { physics, maths, chemistry } = student;
    return (( physics + maths + chemistry) / 3).toFixed(2);
  }
}
