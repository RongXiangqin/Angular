import { Component, OnInit  } from '@angular/core';
import { List }    from './list';
import { ListService } from './list.service';
@Component({
  selector: 'list-root',
  templateUrl: './list.component.html',
  styleUrls:['./list.component.css'],
})
export class ListComponent implements OnInit {
	lists: List[];

	constructor(private listService: ListService) { }

	model:List={
	serve:"",
	name:"",
	num:"",
	tel:"",
	sex:"",
	normal:"",
	age:"",
	job:"",	
	date:new Date(),
	telnum:"",
			
}


  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: 完成后移除
  get diagnostic() { 
  	return JSON.stringify(this.model); 
  }

active = true;
 
add():void {
        	console.log(this.model) 
    		 this.listService
        	.postList(this.model)
        	.then(()=>{
        	this.getList()
        	})   	
                    
}

getList(): void {
    this.listService
        .getList()
        .then(lists => {this.lists = lists;
        	console.log(this.lists);
        });
  }
ngOnInit(): void {
    this.getList();
    
  }

}
