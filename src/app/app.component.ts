import { Component } from '@angular/core';
import { ListItem } from '@components/list-item';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public list: ListItem[] = [
        new ListItem('About me, open source projects and activities: https://lugriz.github.io')
    ];

    public onAddItem(itemText: string): void {
        this.list.push( new ListItem(itemText) );
    }

    public onEditedItem(item: ListItem): void {
        console.log('Show a fancy toast when editing');
    }

    public onDeletedItem(item: ListItem): void {
        console.log('Show a fancy toast when deleting');
    }
}
