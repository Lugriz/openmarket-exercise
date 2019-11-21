import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListItem } from './list-item';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

    @Input() public list: ListItem[] = [];

    @Output() public onDelete: EventEmitter<ListItem> = new EventEmitter<ListItem>();

    @Output() public onEdit: EventEmitter<ListItem> = new EventEmitter<ListItem>();

    public onAddItem(text: string, list: ListItem): void {
        list.openSublist = true;
        list.children.push( new ListItem(text) );
    }

    public onEditItem(text: string, item: ListItem): void {
        item.text = text;
        this.onEdit.emit(item);
    }

    public deleteItem(item: ListItem, index: number): void {
        this.list.splice(index, 1);
        this.onDelete.emit(item);
    }

    public onEditedItem(item: ListItem): void {
        console.log('Show a fancy toast when editing');
    }

    public onDeletedItem(item: ListItem): void {
        console.log('Show a fancy toast when deleting');
    }
}
