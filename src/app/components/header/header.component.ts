import { Component, EventEmitter, Input } from "@angular/core";

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css',
        './header-search.css'
    ]
})

export class HeaderComponent {
    isMenuOpen = false;
    userName = '';
    userEmail = '';
    userAvatar = '';

    @Input() filter = new EventEmitter<string>();

    ngOnInit() {
        this.userName = localStorage.getItem('name');
        this.userEmail = localStorage.getItem('email');
        this.userAvatar = localStorage.getItem('avatar');
    }

    toogleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}