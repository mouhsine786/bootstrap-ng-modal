import { Injectable, EventEmitter, Output, Component, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BootstrapNgModalService {
    constructor() {
        this.onOpen = new EventEmitter();
    }
    /**
     * @param {?} options
     * @param {?=} onCloseEvent
     * @param {?=} onCancelEvent
     * @return {?}
     */
    open(options, onCloseEvent, onCancelEvent) {
        if (options && Object.keys(options).length > 0) {
            this.modalId = '#' + options.modalId;
            let /** @type {?} */ modalOptions = Object.assign({}, options);
            delete modalOptions.modalId;
            setTimeout(() => $(this.modalId).modal(modalOptions), 0);
            this.onOpen.emit(options);
        }
        if (onCloseEvent)
            this.onCloseEvent = onCloseEvent;
        else
            this.onCloseEvent = null;
        if (onCancelEvent)
            this.onCancelEvent = onCancelEvent;
        else
            this.onCancelEvent = null;
    }
    /**
     * @param {?=} args
     * @return {?}
     */
    cancel(args) {
        $(this.modalId).modal('hide');
        if (this.onCancelEvent)
            this.onCancelEvent(args);
    }
    /**
     * @param {?=} args
     * @return {?}
     */
    close(args) {
        $(this.modalId).modal('hide');
        if (this.onCloseEvent)
            this.onCloseEvent(args);
    }
}
BootstrapNgModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
BootstrapNgModalService.ctorParameters = () => [];
BootstrapNgModalService.propDecorators = {
    "onOpen": [{ type: Output },],
};
/** @nocollapse */ BootstrapNgModalService.ngInjectableDef = defineInjectable({ factory: function BootstrapNgModalService_Factory() { return new BootstrapNgModalService(); }, token: BootstrapNgModalService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BootstrapNgModalComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BootstrapNgModalModule {
}
BootstrapNgModalModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [BootstrapNgModalComponent],
                exports: [BootstrapNgModalComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { BootstrapNgModalService, BootstrapNgModalComponent, BootstrapNgModalModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLW5nLW1vZGFsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9ib290c3RyYXAtbmctbW9kYWwvbGliL2Jvb3RzdHJhcC1uZy1tb2RhbC5zZXJ2aWNlLnRzIiwibmc6Ly9ib290c3RyYXAtbmctbW9kYWwvbGliL2Jvb3RzdHJhcC1uZy1tb2RhbC5jb21wb25lbnQudHMiLCJuZzovL2Jvb3RzdHJhcC1uZy1tb2RhbC9saWIvYm9vdHN0cmFwLW5nLW1vZGFsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcE5nTW9kYWxTZXJ2aWNlIHtcblxuXHRtb2RhbElkOiBzdHJpbmc7XG5cdG9uQ2xvc2VFdmVudDtcblx0b25DYW5jZWxFdmVudDtcblxuXHRAT3V0cHV0KCkgb25PcGVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdG9wZW4ob3B0aW9ucywgb25DbG9zZUV2ZW50Pywgb25DYW5jZWxFdmVudD8pIHtcblx0XHRpZiAob3B0aW9ucyAmJiBPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLm1vZGFsSWQgPSAnIycgKyBvcHRpb25zLm1vZGFsSWQ7XG5cblx0XHRcdGxldCBtb2RhbE9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcblx0XHRcdGRlbGV0ZSBtb2RhbE9wdGlvbnMubW9kYWxJZDtcblxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiAkKHRoaXMubW9kYWxJZCkubW9kYWwobW9kYWxPcHRpb25zKSwgMCk7XG5cdFx0XHR0aGlzLm9uT3Blbi5lbWl0KG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGlmIChvbkNsb3NlRXZlbnQpXG5cdFx0XHR0aGlzLm9uQ2xvc2VFdmVudCA9IG9uQ2xvc2VFdmVudDtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLm9uQ2xvc2VFdmVudCA9IG51bGw7XG5cblx0XHRpZiAob25DYW5jZWxFdmVudClcblx0XHRcdHRoaXMub25DYW5jZWxFdmVudCA9IG9uQ2FuY2VsRXZlbnQ7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5vbkNhbmNlbEV2ZW50ID0gbnVsbDtcblx0fVxuXG5cdGNhbmNlbChhcmdzPykge1xuXHRcdCQodGhpcy5tb2RhbElkKS5tb2RhbCgnaGlkZScpO1xuXHRcdGlmICh0aGlzLm9uQ2FuY2VsRXZlbnQpXG5cdFx0XHR0aGlzLm9uQ2FuY2VsRXZlbnQoYXJncyk7XG5cdH1cblxuXHRjbG9zZShhcmdzPykge1xuXHRcdCQodGhpcy5tb2RhbElkKS5tb2RhbCgnaGlkZScpO1xuXHRcdGlmICh0aGlzLm9uQ2xvc2VFdmVudClcblx0XHRcdHRoaXMub25DbG9zZUV2ZW50KGFyZ3MpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vdHN0cmFwTmdNb2RhbFNlcnZpY2UgfSBmcm9tICcuL2Jvb3RzdHJhcC1uZy1tb2RhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYm9vdHN0cmFwLW5nLW1vZGFsJyxcblx0dGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudFwiPjwvbmctY29udGFpbmVyPmAsXG5cdHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwTmdNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29tcG9uZW50O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBCb290c3RyYXBOZ01vZGFsU2VydmljZSkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMubW9kYWxTZXJ2aWNlLm9uT3Blbi5zdWJzY3JpYmUob3B0aW9uID0+IHtcblx0XHRcdHNlbGYuY29tcG9uZW50ID0gb3B0aW9uLmNvbXBvbmVudDtcblx0XHR9KVxuXHR9XG5cbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJvb3RzdHJhcE5nTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2Jvb3RzdHJhcC1uZy1tb2RhbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW0Jvb3RzdHJhcE5nTW9kYWxDb21wb25lbnRdLFxuXHRleHBvcnRzOiBbQm9vdHN0cmFwTmdNb2RhbENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwTmdNb2RhbE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFlQztzQkFGc0MsSUFBSSxZQUFZLEVBQUU7S0FFdkM7Ozs7Ozs7SUFFakIsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFhLEVBQUUsYUFBYztRQUMxQyxJQUFJLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUVyQyxxQkFBSSxZQUFZLHFCQUFRLE9BQU8sQ0FBRSxDQUFDO1lBQ2xDLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQztZQUU1QixVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQjtRQUVELElBQUksWUFBWTtZQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDOztZQUVqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUUxQixJQUFJLGFBQWE7WUFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7O1lBRW5DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0tBQzNCOzs7OztJQUVELE1BQU0sQ0FBQyxJQUFLO1FBQ1gsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsYUFBYTtZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCOzs7OztJQUVELEtBQUssQ0FBQyxJQUFLO1FBQ1YsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsWUFBWTtZQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCOzs7WUE3Q0QsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7Ozt1QkFPQyxNQUFNOzs7Ozs7OztBQ2JSOzs7O0lBWUMsWUFBb0IsWUFBcUM7UUFBckMsaUJBQVksR0FBWixZQUFZLENBQXlCO0tBQUs7Ozs7SUFFOUQsUUFBUTtRQUNQLHFCQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1NBQ2xDLENBQUMsQ0FBQTtLQUNGOzs7WUFoQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSw4REFBOEQ7Z0JBQ3hFLE1BQU0sRUFBRSxFQUFFO2FBQ1Y7Ozs7WUFOUSx1QkFBdUI7Ozs7Ozs7QUNEaEM7OztZQUlDLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtpQkFDWjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDekMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDcEM7Ozs7Ozs7Ozs7Ozs7OzsifQ==