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
                    template: '<ng-content></ng-content>',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLW5nLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jvb3RzdHJhcC1uZy1tb2RhbC8iLCJzb3VyY2VzIjpbImxpYi9ib290c3RyYXAtbmctbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztJQVd0RSxtQ0FBb0IsWUFBcUM7UUFBckMsaUJBQVksR0FBWixZQUFZLENBQXlCO0tBQUs7Ozs7SUFFOUQsNENBQVE7OztJQUFSO1FBQ0MscUJBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztTQUNsQyxDQUFDLENBQUE7S0FDRjs7Z0JBaEJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxNQUFNLEVBQUUsRUFBRTtpQkFDVjs7OztnQkFOUSx1QkFBdUI7O29DQURoQzs7U0FRYSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vdHN0cmFwTmdNb2RhbFNlcnZpY2UgfSBmcm9tICcuL2Jvb3RzdHJhcC1uZy1tb2RhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYm9vdHN0cmFwLW5nLW1vZGFsJyxcblx0dGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcblx0c3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBOZ01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb21wb25lbnQ7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IEJvb3RzdHJhcE5nTW9kYWxTZXJ2aWNlKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5tb2RhbFNlcnZpY2Uub25PcGVuLnN1YnNjcmliZShvcHRpb24gPT4ge1xuXHRcdFx0c2VsZi5jb21wb25lbnQgPSBvcHRpb24uY29tcG9uZW50O1xuXHRcdH0pXG5cdH1cblxufSJdfQ==