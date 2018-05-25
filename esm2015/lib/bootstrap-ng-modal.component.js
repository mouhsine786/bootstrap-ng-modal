/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { BootstrapNgModalService } from './bootstrap-ng-modal.service';
export class BootstrapNgModalComponent {
    /**
     * @param {?} modalService
     */
    constructor(modalService) {
        this.modalService = modalService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        let /** @type {?} */ self = this;
        this.modalService.onOpen.subscribe(option => {
            self.component = option.component;
        });
    }
}
BootstrapNgModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'bootstrap-ng-modal',
                template: `<ng-container *ngComponentOutlet="component"></ng-container>`,
                styles: []
            },] },
];
/** @nocollapse */
BootstrapNgModalComponent.ctorParameters = () => [
    { type: BootstrapNgModalService, },
];
function BootstrapNgModalComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BootstrapNgModalComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BootstrapNgModalComponent.ctorParameters;
    /** @type {?} */
    BootstrapNgModalComponent.prototype.component;
    /** @type {?} */
    BootstrapNgModalComponent.prototype.modalService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLW5nLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jvb3RzdHJhcC1uZy1tb2RhbC8iLCJzb3VyY2VzIjpbImxpYi9ib290c3RyYXAtbmctbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBT3ZFLE1BQU07Ozs7SUFJTCxZQUFvQixZQUFxQztRQUFyQyxpQkFBWSxHQUFaLFlBQVksQ0FBeUI7S0FBSzs7OztJQUU5RCxRQUFRO1FBQ1AscUJBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1NBQ2xDLENBQUMsQ0FBQTtLQUNGOzs7WUFoQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSw4REFBOEQ7Z0JBQ3hFLE1BQU0sRUFBRSxFQUFFO2FBQ1Y7Ozs7WUFOUSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vdHN0cmFwTmdNb2RhbFNlcnZpY2UgfSBmcm9tICcuL2Jvb3RzdHJhcC1uZy1tb2RhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYm9vdHN0cmFwLW5nLW1vZGFsJyxcblx0dGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudFwiPjwvbmctY29udGFpbmVyPmAsXG5cdHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwTmdNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29tcG9uZW50O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBCb290c3RyYXBOZ01vZGFsU2VydmljZSkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMubW9kYWxTZXJ2aWNlLm9uT3Blbi5zdWJzY3JpYmUob3B0aW9uID0+IHtcblx0XHRcdHNlbGYuY29tcG9uZW50ID0gb3B0aW9uLmNvbXBvbmVudDtcblx0XHR9KVxuXHR9XG5cbn0iXX0=