import { __assign } from 'tslib';
import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BootstrapNgModalService = /** @class */ (function () {
    function BootstrapNgModalService() {
    }
    /**
     * @param {?} options
     * @param {?=} onCloseEvent
     * @param {?=} onCancelEvent
     * @return {?}
     */
    BootstrapNgModalService.prototype.open = /**
     * @param {?} options
     * @param {?=} onCloseEvent
     * @param {?=} onCancelEvent
     * @return {?}
     */
    function (options, onCloseEvent, onCancelEvent) {
        var _this = this;
        if (options && Object.keys(options).length > 0) {
            this.modalId = '#' + options.modalId;
            var /** @type {?} */ modalOptions_1 = __assign({}, options);
            delete modalOptions_1.modalId;
            setTimeout(function () { return $(_this.modalId).modal(modalOptions_1); }, 0);
        }
        if (onCloseEvent)
            this.onCloseEvent = onCloseEvent;
        else
            this.onCloseEvent = null;
        if (onCancelEvent)
            this.onCancelEvent = onCancelEvent;
        else
            this.onCancelEvent = null;
    };
    /**
     * @param {?=} args
     * @return {?}
     */
    BootstrapNgModalService.prototype.cancel = /**
     * @param {?=} args
     * @return {?}
     */
    function (args) {
        $(this.modalId).modal('hide');
        if (this.onCancelEvent)
            this.onCancelEvent(args);
    };
    /**
     * @param {?=} args
     * @return {?}
     */
    BootstrapNgModalService.prototype.close = /**
     * @param {?=} args
     * @return {?}
     */
    function (args) {
        $(this.modalId).modal('hide');
        if (this.onCloseEvent)
            this.onCloseEvent(args);
    };
    BootstrapNgModalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    BootstrapNgModalService.ctorParameters = function () { return []; };
    /** @nocollapse */ BootstrapNgModalService.ngInjectableDef = defineInjectable({ factory: function BootstrapNgModalService_Factory() { return new BootstrapNgModalService(); }, token: BootstrapNgModalService, providedIn: "root" });
    return BootstrapNgModalService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BootstrapNgModalComponent = /** @class */ (function () {
    function BootstrapNgModalComponent() {
    }
    /**
     * @return {?}
     */
    BootstrapNgModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BootstrapNgModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bootstrap-ng-modal',
                    template: "<ng-content></ng-content>",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    BootstrapNgModalComponent.ctorParameters = function () { return []; };
    return BootstrapNgModalComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BootstrapNgModalModule = /** @class */ (function () {
    function BootstrapNgModalModule() {
    }
    BootstrapNgModalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [BootstrapNgModalComponent],
                    exports: [BootstrapNgModalComponent]
                },] },
    ];
    return BootstrapNgModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { BootstrapNgModalService, BootstrapNgModalComponent, BootstrapNgModalModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLW5nLW1vZGFsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9ib290c3RyYXAtbmctbW9kYWwvbGliL2Jvb3RzdHJhcC1uZy1tb2RhbC5zZXJ2aWNlLnRzIiwibmc6Ly9ib290c3RyYXAtbmctbW9kYWwvbGliL2Jvb3RzdHJhcC1uZy1tb2RhbC5jb21wb25lbnQudHMiLCJuZzovL2Jvb3RzdHJhcC1uZy1tb2RhbC9saWIvYm9vdHN0cmFwLW5nLW1vZGFsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwTmdNb2RhbFNlcnZpY2Uge1xuXG5cdG1vZGFsSWQ6IHN0cmluZztcblx0b25DbG9zZUV2ZW50O1xuXHRvbkNhbmNlbEV2ZW50O1xuXG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0b3BlbihvcHRpb25zLCBvbkNsb3NlRXZlbnQ/LCBvbkNhbmNlbEV2ZW50Pykge1xuXHRcdGlmIChvcHRpb25zICYmIE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMubW9kYWxJZCA9ICcjJyArIG9wdGlvbnMubW9kYWxJZDtcblxuXHRcdFx0bGV0IG1vZGFsT3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuXHRcdFx0ZGVsZXRlIG1vZGFsT3B0aW9ucy5tb2RhbElkO1xuXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+ICQodGhpcy5tb2RhbElkKS5tb2RhbChtb2RhbE9wdGlvbnMpLCAwKTtcblx0XHR9XG5cblx0XHRpZiAob25DbG9zZUV2ZW50KVxuXHRcdFx0dGhpcy5vbkNsb3NlRXZlbnQgPSBvbkNsb3NlRXZlbnQ7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5vbkNsb3NlRXZlbnQgPSBudWxsO1xuXG5cdFx0aWYgKG9uQ2FuY2VsRXZlbnQpXG5cdFx0XHR0aGlzLm9uQ2FuY2VsRXZlbnQgPSBvbkNhbmNlbEV2ZW50O1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMub25DYW5jZWxFdmVudCA9IG51bGw7XG5cdH1cblxuXHRjYW5jZWwoYXJncz8pIHtcblx0XHQkKHRoaXMubW9kYWxJZCkubW9kYWwoJ2hpZGUnKTtcblx0XHRpZiAodGhpcy5vbkNhbmNlbEV2ZW50KVxuXHRcdFx0dGhpcy5vbkNhbmNlbEV2ZW50KGFyZ3MpO1xuXHR9XG5cblx0Y2xvc2UoYXJncz8pIHtcblx0XHQkKHRoaXMubW9kYWxJZCkubW9kYWwoJ2hpZGUnKTtcblx0XHRpZiAodGhpcy5vbkNsb3NlRXZlbnQpXG5cdFx0XHR0aGlzLm9uQ2xvc2VFdmVudChhcmdzKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm9vdHN0cmFwLW5nLW1vZGFsJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBOZ01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb290c3RyYXBOZ01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9ib290c3RyYXAtbmctbW9kYWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtCb290c3RyYXBOZ01vZGFsQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0Jvb3RzdHJhcE5nTW9kYWxDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcE5nTW9kYWxNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFhQztLQUFpQjs7Ozs7OztJQUVqQixzQ0FBSTs7Ozs7O0lBQUosVUFBSyxPQUFPLEVBQUUsWUFBYSxFQUFFLGFBQWM7UUFBM0MsaUJBbUJDO1FBbEJBLElBQUksT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBRXJDLHFCQUFJLGNBQVksZ0JBQVEsT0FBTyxDQUFFLENBQUM7WUFDbEMsT0FBTyxjQUFZLENBQUMsT0FBTyxDQUFDO1lBRTVCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBWSxDQUFDLEdBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUVELElBQUksWUFBWTtZQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDOztZQUVqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUUxQixJQUFJLGFBQWE7WUFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7O1lBRW5DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0tBQzNCOzs7OztJQUVELHdDQUFNOzs7O0lBQU4sVUFBTyxJQUFLO1FBQ1gsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsYUFBYTtZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCOzs7OztJQUVELHVDQUFLOzs7O0lBQUwsVUFBTSxJQUFLO1FBQ1YsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsWUFBWTtZQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCOztnQkExQ0QsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7Ozs7a0NBTkQ7Ozs7Ozs7QUNBQTtJQVNFO0tBQWlCOzs7O0lBRWpCLDRDQUFROzs7SUFBUjtLQUNDOztnQkFWRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7b0NBTkQ7Ozs7Ozs7QUNBQTs7OztnQkFHQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQ3pDLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO2lCQUNyQzs7aUNBUkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==