import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animate', [
      transition('notactive => active', [
        style({ opacity: 0, height: 0 }),
        animate(300, style({ opacity: 1, height: '100px' }))
      ]),
      transition('active => notactive', [
        style({ opacity: 1, height: '100px' }),
        animate(300, style({ opacity: 0, height: '0px' }))
      ])
    ])
  ]
})
export class AppComponent {
  fruits: any[] = [
    { id: 1, name: 'mango', color: 'yellow', active: false },
    { id: 2, name: 'apple', color: 'red', active: false },
    { id: 3, name: 'banana', color: 'yellow', active: false },
    { id: 4, name: 'grapes', color: 'purple', active: false },
  ]
}
