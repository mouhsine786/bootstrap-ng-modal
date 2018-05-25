/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { BootstrapNgModalService } from './bootstrap-ng-modal.service';
var BootstrapNgModalComponent = /** @class */ (function () {
    function BootstrapNgModalComponent(modalService) {
        this.modalService = modalService;
    }
    /**
     * @return {?}
     */
    BootstrapNgModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ self = this;
        this.modalService.onOpen.subscribe(function (option) {
            self.component = option.component;
        });
    };
    BootstrapNgModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bootstrap-ng-modal',
                    template: "<ng-container *ngComponentOutlet=\"component\"></ng-container>",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    BootstrapNgModalComponent.ctorParameters = function () { return [
        { type: BootstrapNgModalService, },
    ]; };
    return BootstrapNgModalComponent;
}());
export { BootstrapNgModalComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLW5nLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jvb3RzdHJhcC1uZy1tb2RhbC8iLCJzb3VyY2VzIjpbImxpYi9ib290c3RyYXAtbmctbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztJQVd0RSxtQ0FBb0IsWUFBcUM7UUFBckMsaUJBQVksR0FBWixZQUFZLENBQXlCO0tBQUs7Ozs7SUFFOUQsNENBQVE7OztJQUFSO1FBQ0MscUJBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztTQUNsQyxDQUFDLENBQUE7S0FDRjs7Z0JBaEJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsZ0VBQThEO29CQUN4RSxNQUFNLEVBQUUsRUFBRTtpQkFDVjs7OztnQkFOUSx1QkFBdUI7O29DQURoQzs7U0FRYSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vdHN0cmFwTmdNb2RhbFNlcnZpY2UgfSBmcm9tICcuL2Jvb3RzdHJhcC1uZy1tb2RhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYm9vdHN0cmFwLW5nLW1vZGFsJyxcblx0dGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudFwiPjwvbmctY29udGFpbmVyPmAsXG5cdHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwTmdNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29tcG9uZW50O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBCb290c3RyYXBOZ01vZGFsU2VydmljZSkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMubW9kYWxTZXJ2aWNlLm9uT3Blbi5zdWJzY3JpYmUob3B0aW9uID0+IHtcblx0XHRcdHNlbGYuY29tcG9uZW50ID0gb3B0aW9uLmNvbXBvbmVudDtcblx0XHR9KVxuXHR9XG5cbn0iXX0=