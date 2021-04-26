import { OnInit, Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    @Output() menuToogle: EventEmitter<boolean> = new EventEmitter();
    @Input() opened: boolean = false;

    constructor() {

    }
    ngOnInit(): void {
    }

    toogle() {
        this.opened = !this.opened;
        this.menuToogle.emit(this.opened);
        console.log(this.opened);
    }
}