
// 1. ts引入Observable操作符
import { Observable, fromEvent } from 'rxjs';

// 2. create()方法创建Observalbe，并且传入observer，next(), complete(), 以及
var observable = Observable.create((observer: any) => {
    observer.next('Hello World!');
    observer.next('Hello Again!');
    observer.error('there is something wrong');
    observer.complete();
    observer.next('will not be executed!');
});

observable.subscribe(
    (x: any) => logItem(x),
    (error: any) => logItem('Error: ' + error),
    () => logItem('Completed')
);

function logItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}

let count: number = 0;
const btnEl = document.getElementsByClassName('btn')[0];
const click$ = fromEvent(btnEl, 'click');
click$.subscribe(val => {
    count += 1;
    console.log('click');
    showClickTimes(count);
});

const showClickTimes = (count: number) => {
    const node = document.getElementById('click-text');
    node.innerText = `have already clicked ${count}`;
}
