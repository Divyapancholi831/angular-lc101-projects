import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   //chores = ['Complete LaunchCode prep work', 'Buy groceries','clean bathroom'];
   //todoTitles = ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores"];
   chores=[{title:"yesterday's chores",task:['Empty dishwasher', 'Start LaunchCode prep work', 'Buy groceries']},
   {title:"Today's Chores",task:['Load dishwasher', 'Finish LaunchCode prep work', 'Buy the groceries you forgot']},
   {title:"Tomorrow's Chores",task:['Empty dishwasher AGAIN', 'Play with LaunchCode practice code', 'Groceries AGAIN']}
   ];
   constructor() { }

   ngOnInit() {
   }

}
