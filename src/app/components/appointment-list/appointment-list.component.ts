import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../models/appointment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {

    title:string=""
    description:string=""
    appointments: Appointment[]=[]
    createdDate:any

    ngOnInit(): void {
     let savedDate= localStorage.getItem("appointments")
     if(savedDate){
      this.appointments=JSON.parse(savedDate)
     }else{
      this.appointments=[]
     }
    }
    addAppointment() {
      if(this.title.trim().length && this.description.trim().length && this.createdDate){
        let newAppoiment:Appointment={
          id:Date.now(),
          title:this.title,
          description:this.description,
          createdDate:new Date(this.createdDate)
        }
        //Adding newAppointment to list
        this.appointments.push(newAppoiment);
        //erasing all the chosen value by user
        this.title="",
        this.description="",
        this.createdDate=new Date 
        //Storing updated list into local storage system
        localStorage.setItem("appointments",JSON.stringify(this.appointments))
      }
      
    }

    deleteAppointment(index:number) {
      this.appointments.splice(index,1);
      //updating local storage
      localStorage.setItem("appointments",JSON.stringify(this.appointments))
    }

}
