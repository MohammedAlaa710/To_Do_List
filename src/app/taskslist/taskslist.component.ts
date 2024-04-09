import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-taskslist',
  templateUrl: './taskslist.component.html',
  styleUrl: './taskslist.component.css'
})
export class TaskslistComponent {
  Tasks: { tasksNames: string; tasksDesc: string; tasksDates: string; isCompleted: boolean}[] = [];
  taskName:string="";
  taskDesc:string="";
  taskDate: string="";
  showRequiredField: boolean = false;
  isEditable: boolean=false;

  addTask(){
    if(this.taskName.trim() !=="" && this.taskDesc.trim() !=="" && this.taskDate.trim() !=="")
    {
      this.Tasks.push({
        tasksNames:this.taskName,
        tasksDesc:this.taskDesc,
        tasksDates: this.taskDate,
        isCompleted:false
      });
      this.showRequiredField = false;
    }
    else{
      this.showRequiredField = true;
    }
    this.taskName="";
    this.taskDesc="";
    this.taskDate="";
    console.log(this.Tasks);
  }
  deleteTask(index: number){
    this.Tasks.splice(index, 1);
  }
  editTask(index: number){
    this.isEditable =true;
  }
  saveTask(index: number, editedTaskName: string, editedTaskDesc:string, editedTaskDate: string){
    this.Tasks[index].tasksNames= editedTaskName;
    this.Tasks[index].tasksDesc= editedTaskDesc;
    this.Tasks[index].tasksDates=editedTaskDate;
    this.isEditable =false;
  }
  onCheck(index: number){
    this.Tasks[index].isCompleted= !this.Tasks[index].isCompleted;
  }
}
//abl el ta8yer mn date l string
