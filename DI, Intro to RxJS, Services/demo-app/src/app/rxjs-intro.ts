// const p = new Promise((resolve, reject) => {
//   console.log('from Promise Invoked');
//   setTimeout(() => {
//     resolve(1200);
//   }, 4000);
// });

import { Observable,map } from "rxjs";


// sync analogy Promise
[1].map((x) => x * 2).map((x)=> x * 10);

//async analogy Promise
Promise.resolve(100)
      .then((d) => d * 1.2)
      .then((x) => console.log('from Promise',x))

// sync analogy Observable
//[1, 2, 3, 4].map((x) => x * 2).map((x)=> x * 10);

function interval(intervalValue: number) {
return   new Observable<number>((observer: { next: (arg0: number) => void; }) => {
    // observer.next(100)
    // observer.next(4000)
    // observer.next(5000)
     let counter = 0
     const timer = setInterval(() => {
       observer.next(counter++);
     }, 2000)
    
     // this code is invoked on destroy 
    return() => {
     clearInterval(timer)
    }
   
   })
  
}
const stream$ = interval(3000)
  .pipe(map((x) => (x + 1) * 2)) // transfrom, filter, accumulate result
  .subscribe({
    next: (x) => console.log('data ', x),
    error: (err) => console.error(`Error occured: ${err}`),
    complete: () => console.log('Stram has been completed!'),
  });


  // setTimeout(() => {
//   stream$.subscribe({
//     next: (x) => console.log('data ', x),
//     error: (err) => console.error(`Error occured: ${err}`),
//     complete: () => console.log('Stram has been completed!'),
//   });
// }, 3000);
