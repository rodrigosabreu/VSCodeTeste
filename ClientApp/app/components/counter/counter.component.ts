import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 1;

    public incrementCounter() {
        this.currentCount = this.currentCount * 3;
    }
}
