import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'custom-textarea',
	templateUrl: './textarea.component.html',
	styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	@Input() classname: string;
	@Input() name: string;
	@Input() id: string;
	@Input() row: string;
	@Input() column: string;

	constructor() { }

	ngOnInit() {
	}

	onSearchChange(searchValue: string): void { 
		console.log(searchValue);
	}

}
