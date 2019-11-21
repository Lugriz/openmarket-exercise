import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-add-button',
    templateUrl: './add-button.component.html',
    styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent {

    @Input() public text: string;

    @Input() public modalText: string;

    @Input() public btnClass: string = '';

    @Input() public itemText: string = '';
    
    @Output() public onDone: EventEmitter<string> = new EventEmitter<string>();

    public activateModal: boolean = false;

    public done(): void {
        const value = this.itemText.trim();
        if (!value) return;
        this.onDone.emit(value);
        this.activateModal = false;
        this.itemText = '';
    }
}
