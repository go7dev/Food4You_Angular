import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//using Input, Output and EventEmitter from Angular/Core library
@Component({
  selector: 'app-TabMenu',
  templateUrl: './TabMenu.component.html',
  styleUrls: ['./TabMenu.component.scss']
})

export class TabMenuComponent implements OnInit{

constructor(){

}

//creating Input
@Input() CategoriesArray : string [] = [];

//creating Output
@Output() onTabChange = new EventEmitter<number>();

//defining a variable for an activatedCategory - initial value is set to "0" so that the first Tab of our TabMenu is active onInit
activatedCategory: number = 0;

ngOnInit(): void {
  this.addFlickerCSSEffects();
}


//sets the index value for the Tab to be activated on click and emits an event + passing that value to the mainBody.component.ts
setTab(index: number){
  this.activatedCategory = index;
  // debugger;
  this.onTabChange.emit(this.activatedCategory);
}

addFlickerCSSEffects(){
  document.querySelectorAll('a').forEach((item: HTMLElement, index: number) => {
    if (index !== this.activatedCategory) {
      item.classList.add('flicker');
    } else {
      item.classList.remove('flicker');
    }
  });
}


}


