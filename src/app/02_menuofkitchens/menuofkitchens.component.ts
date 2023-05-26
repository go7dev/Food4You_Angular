import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuofkitchens',
  templateUrl: './menuofkitchens.component.html',
  styleUrls: ['./menuofkitchens.component.scss']
})
export class MenuofkitchensComponent implements OnInit, AfterViewInit{

  ngOnInit(): void {

  }

  constructor(){}

  ngAfterViewInit(): void {
    // this.openCity('London');
  }



  //   openCity(cityName: string, evt?: any) {

  //   var i, tabcontent, tablinks;

  //   tabcontent = document.getElementsByClassName("tabcontent");
  //   for (i = 0; i < tabcontent.length; i++) {
      
  //     const tabcontentElement = tabcontent[i] as HTMLElement;
  //     if(tabcontentElement){
  //       tabcontentElement.style.display = "none";
  //     }  
  //   }

  //   tablinks = document.getElementsByClassName("tablinks");
  //   for (i = 0; i < tablinks.length; i++) {
  //     tablinks[i].className = tablinks[i].className.replace(" active", "");
  //   }

  //   const cityElement = document.getElementById(cityName);
  //   if(cityElement){
  //     cityElement.style.display = "block";
  //   }

  //   if (evt){
  //   evt.currentTarget.className += " active";
  //   }
  // }

}
