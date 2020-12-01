import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private primengConfig: PrimeNGConfig, private titleService: Title) {
        this.titleService.setTitle(this.title);
    }
    title = 'App';

    breadcrumbItems: MenuItem[];
    visibleSidebar;
    home: MenuItem;

    ngOnInit() {
        this.primengConfig.ripple = true;

        this.breadcrumbItems = [
            { label: 'Dashboard' }
        ];

        this.home = { icon: 'pi pi-home' };

    }
}
