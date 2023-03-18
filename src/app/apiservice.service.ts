import { Injectable } from '@angular/core';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, of, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor() {
    // console.log(this.items);

  }


  items:any[] = []


    apidata=fromFetch('https://dummyjson.com/products').pipe(
      switchMap((res)=>{

        if(res.ok) return res.json()

        else return  of ('{ error: true, message: `Error ${ response.status }')
      })
      ,catchError(err => {
    return of({ error: true, message: err.message })

      })
    )

  }




// const data$ = fromFetch('https://api.github.com/users?per_page=5').pipe(
//   switchMap(response => {
//     if (response.ok) {
//       // OK return data
//       return response.json();
//     } else {
//       // Server is returning a status requiring the client to try something else.
//       return of({ error: true, message: `Error ${ response.status }` });
//     }
//   }),
//   catchError(err => {
//     // Network or other error, handle appropriately
//     console.error(err);
//     return of({ error: true, message: err.message })
//   })
// );

// data$.subscribe({
//   next: result => console.log(result),
//   complete: () => console.log('done')
// });
