# bootstrap-ng-modal

# Pre requirements
- Bootstrap
- JQuery

## How to use

### Define your modal component
```sh
model.component.html
<div class="modal fade bd-example-modal-lg" id="myModel" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Large Modal</h5>
        <button type="button" class="close" (click)="modalService.cancel()" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      	<div>{{user | json}}</div>
      </div>
    </div>
  </div>
</div>
```

```sh
model.component.ts
import { Component, OnInit, Input } from '@angular/core';

import { BootstrapNgModalService } from 'bootstrap-ng-modal';

@Component({
	selector: 'app-modal',
	templateUrl: './modal-one.component.html',
	styleUrls: ['./modal-one.component.css']
})
export class ModalOneComponent implements OnInit {

	@Input() user;

	constructor(public modalService: BootstrapNgModalService) { }

	ngOnInit() {
	}

}
```

### Use the modal any the component
```sh
example.component.html
<button type="button" class="btn btn-success ml-3" (click)="openModal({})">New</button>
<bootstrap-ng-modal>
  <app-modal [user]="user"></app-modal>
</bootstrap-ng-modal>
```

```sh
example.component.ts
import { Component, OnInit } from '@angular/core';

import { BootstrapNgModalService } from 'bootstrap-ng-modal';

@Component({
	selector: 'app-example',
	templateUrl: './example.component.html',
	styleUrls: ['./example.component.css']
})
export class ModalOneComponent implements OnInit {

	user;

	constructor(public modalService: BootstrapNgModalService) { }

	ngOnInit() {
	}

	openModal(obj) {
		this.user = obj;
		this.modalService
			.open({
				modalId: 'myModal',
				backdrop: true | false, // optional - by default true
				keyboard: true | false, // optional - by default true
				focus: true | false // optional - by default true
			}, data => {
				console.log('onClose', data);
			}, data => {
				console.log('onCancel', data);
			});
	}

}
```