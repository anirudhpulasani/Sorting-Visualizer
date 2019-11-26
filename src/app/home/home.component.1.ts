// Done:
// Bubble Sort.
// Selection Sort.
// Insertion Sort.

// Done without delay
// Merge Sort.
// Quick Sort.

// Not done
// Heap Sort.
// Shell sort.
// Recursive Bubble Sort.
// Recursive Insertion Sort.
// Iterative Merge Sort.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  run :Object
  values :Array<Number>
  colors = []

  constructor() { 
    this.run = {'Bubble sort':1, 'Selection sort': 2, 'Insertion sort':3, 'Merge sort':4, 'Quick sort':5, 'Heap sort':6, 'Shell sort':7};
    // this.values = [9,4,8,6,7,2,5,3,1];
    // this.values = [30,13,24,29,19,37,9,23,36,14,28,40,4,18,27,34,39,8,12,20,33,6,22,11,21,35,17,38,7,26,2,32,16,5,3,1,10,15,25,31];
    this.values = [5,1,12,15,16,2,12,14];
    for(let i=0;i<this.values.length;i++){
      this.colors[""+this.values[i]+""] = '#'+Math.floor(Math.random()*16777215).toString(16);
    }
  }

  ngOnInit() {
    
  }

  applyStyles(i) {
    const style = {'background':""+this.colors[i]+""};
    return style;
}

  showValue(value){    
    switch(value){
      case 1: 
        this.bubbleSort()
        break;
      case 2: 
        this.selectionSort()        
        break;
      case 3: 
        this.insertionSort()
        break;
    }
  }

  bubbleSort(){
    var i = 0;
    var j = 0;
    var items = this.values;
    var length = items.length;
    
    (function nextIteration() {
      if (j >= length - i - 1) {
        j = 0;
        i++;
      }
      if (i < length) {
        if (items[j] > items[j+1]) {
          var temp = items[j];
          items[j] = items[j+1];
          items[j+1] = temp;
        }
        j++;
        setTimeout(nextIteration, 25);
      } 
    })(); 
  }

  selectionSort(){
      var arr = this.values;
      var temp;    
      var i=0, j=i+1;    
      var minID = i;
  
      (function iterate(){    
          if(j > arr.length){
              i++;
              j=i+1;
              minID = i;
          }
          if(i < arr.length){
              if(arr[j] < arr[minID]){
                minID = j;
              }
              if(j == arr.length){
                temp = arr[i];
                arr[i] = arr[minID];
                arr[minID] = temp;
              }
              j++;
              setTimeout(iterate, 25);
          }
      })();    
  }

  insertionSort(){
    var arr = this.values;
    var len = arr.length;
    var i=0;

    (function iterate(){
      if(i < len){
          if(arr[i] > arr[i+1]){
              let k=0;
              while(arr[i] > arr[i+1]){
                  if(arr[i+1] < arr[k]){
                      var element = arr[i+1];
                      arr.splice(i+1, 1);
                      arr.splice(k, 0, element);                        
                  }
                  k++;
              }      
          }
          i++;
          setTimeout(iterate, 25);
      }
    })(); 
  };

  mergeSort(){

  }

  getNumber(value){
    return new Array(value);
  }
}