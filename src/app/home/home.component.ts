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
  arrLen :Number
  colors = []

  constructor() { 
    this.run = {'Bubble sort':1, 'Selection sort': 2, 'Insertion sort':3, 'Merge sort':4, 'Quick sort':5, 'Heap sort':6, 'Shell sort':7};
    // this.values = [9,4,8,6,7,2,5,3,1];
    // this.values = [19,9,4,16,15,8,6,14,7,13,2,18,20,5,17,3,12,1,10,11];
    this.values = [60,48,30,47,13,24,46,29,19,57,37,49,9,45,23,36,52,58,41,14,28,40,51,4,50,56,18,27,34,39,43,53,8,12,55,20,42,33,54,6,22,11,21,35,17,38,44,59,7,26,2,32,16,5,3,1,10,15,25,31];
    // this.values = [5,1,12,15,16,2,12,14];
    for(let i=0;i<this.values.length;i++){
      this.colors[""+this.values[i]+""] = '#'+Math.floor(Math.random()*16777215).toString(16);
    }
    this.arrLen = this.values.length;
  }

  ngOnInit() {
    
  }

  applyStyles(i) {
    const style = {'background':""+this.colors[i]+""};
    return style;
  }

  showValue(value){
    switch(value){
      case 0:
        this.reset();
        break;
      case 1: 
        this.bubbleSort()
        break;
      case 2: 
        this.selectionSort()        
        break;
      case 3: 
        this.insertionSort()
        break;
      case 4:
        this.mergeSort(this.values)
        break;
      case 5:
        this.quickSort(this.values,0,this.values.length-1)
        // this.quickSort(this.values)
        break;
    }
  }

  reset(){
    // this.values = [19,9,4,16,15,8,6,14,7,13,2,18,20,5,17,3,12,1,10,11];
    this.values = [60,48,30,47,13,24,46,29,19,57,37,49,9,45,23,36,52,58,41,14,28,40,51,4,50,56,18,27,34,39,43,53,8,12,55,20,42,33,54,6,22,11,21,35,17,38,44,59,7,26,2,32,16,5,3,1,10,15,25,31];
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
              setTimeout(iterate, 5);
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
          setTimeout(iterate, 75);
      }
    })(); 
  };

  mergeSort(values){
    setTimeout(() => {
      if(values.length<2){
        return values;
      }
      var mid = Math.floor(values.length/2);
      var left = values.splice(0,mid);    
      return this.merge(this.mergeSort(left),this.mergeSort(values));
    }, 2000);
  }

  merge(left, right){
    var arr = [];
    // console.log([...arr,...left,...right]);
    while(left.length && right.length){
        if(left[0] < right[0]){
          arr.push(left.shift());
        }
        else{
          arr.push(right.shift())
        }
    }
    // console.log([...arr,...left,...right]);
    return [...arr,...left,...right];
  }

  quickSort(arr,left,right){
    var index;
    setTimeout(() => {
      if(arr.length > 1){
        index = this.partition(arr, left, right); 
        if (left < index - 1) {
          this.quickSort(arr, left, index - 1);
        }
        if (index < right) {
          this.quickSort(arr, index, right);
        }
      }
    
      return arr;
    }, 200);
  }

  partition(arr,left,right){
      var pivot = arr[Math.floor((left+right)/2)];
      // console.log(arr,left,right);
      while(left<=right){
          while(arr[left] < pivot){
              left++;
          }
          while(arr[right] > pivot){
              right--;
          }
          // setTimeout(() => {   
          if(left<=right){
            // var temp = arr[left];
            
              console.log(arr[left],arr[right]);
              var temp = arr[left];
              arr[left] = arr[right];
              arr[right] = temp;            
            left++;
            right--;
          
          }
        // }, 100);
      }
      return left;
  }

  // original
  // quickSort(arr,left,right){
  //   var index;
  //   if(arr.length > 1){
  //       index = this.quickPartition(arr, left, right); 
  //       if (left < index - 1) {
  //         this.quickSort(arr, left, index - 1);
  //       }
  //       if (index < right) {
  //         this.quickSort(arr, index, right);
  //       }
  //   }    
  //   return arr;
  // }

  // quickPartition(arr,left,right){
  //   var pivot = arr[Math.floor((left+right)/2)];
  //   let temp;
  //   while(left<=right){
  //     while(arr[left] < pivot){
  //       left++;
  //     }
  //     while(arr[right] > pivot){
  //       right--;
  //     }
  //     if(left<=right){
  //       temp = arr[left];
  //       arr[left] = arr[right];
  //       arr[right] = temp;
  //       left++;
  //       right--;
  //     }
  //   }
  //   return left;
  // }

  getNumber(value){
    return new Array(value);
  }
}