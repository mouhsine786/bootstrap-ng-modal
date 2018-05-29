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
                template: '<ng-content></ng-content>',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLW5nLW1vZGFsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9ib290c3RyYXAtbmctbW9kYWwvbGliL2Jvb3RzdHJhcC1uZy1tb2RhbC5zZXJ2aWNlLnRzIiwibmc6Ly9ib290c3RyYXAtbmctbW9kYWwvbGliL2Jvb3RzdHJhcC1uZy1tb2RhbC5jb21wb25lbnQudHMiLCJuZzovL2Jvb3RzdHJhcC1uZy1tb2RhbC9saWIvYm9vdHN0cmFwLW5nLW1vZGFsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcE5nTW9kYWxTZXJ2aWNlIHtcblxuXHRtb2RhbElkOiBzdHJpbmc7XG5cdG9uQ2xvc2VFdmVudDtcblx0b25DYW5jZWxFdmVudDtcblxuXHRAT3V0cHV0KCkgb25PcGVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdG9wZW4ob3B0aW9ucywgb25DbG9zZUV2ZW50Pywgb25DYW5jZWxFdmVudD8pIHtcblx0XHRpZiAob3B0aW9ucyAmJiBPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLm1vZGFsSWQgPSAnIycgKyBvcHRpb25zLm1vZGFsSWQ7XG5cblx0XHRcdGxldCBtb2RhbE9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcblx0XHRcdGRlbGV0ZSBtb2RhbE9wdGlvbnMubW9kYWxJZDtcblxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiAkKHRoaXMubW9kYWxJZCkubW9kYWwobW9kYWxPcHRpb25zKSwgMCk7XG5cdFx0XHR0aGlzLm9uT3Blbi5lbWl0KG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGlmIChvbkNsb3NlRXZlbnQpXG5cdFx0XHR0aGlzLm9uQ2xvc2VFdmVudCA9IG9uQ2xvc2VFdmVudDtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLm9uQ2xvc2VFdmVudCA9IG51bGw7XG5cblx0XHRpZiAob25DYW5jZWxFdmVudClcblx0XHRcdHRoaXMub25DYW5jZWxFdmVudCA9IG9uQ2FuY2VsRXZlbnQ7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5vbkNhbmNlbEV2ZW50ID0gbnVsbDtcblx0fVxuXG5cdGNhbmNlbChhcmdzPykge1xuXHRcdCQodGhpcy5tb2RhbElkKS5tb2RhbCgnaGlkZScpO1xuXHRcdGlmICh0aGlzLm9uQ2FuY2VsRXZlbnQpXG5cdFx0XHR0aGlzLm9uQ2FuY2VsRXZlbnQoYXJncyk7XG5cdH1cblxuXHRjbG9zZShhcmdzPykge1xuXHRcdCQodGhpcy5tb2RhbElkKS5tb2RhbCgnaGlkZScpO1xuXHRcdGlmICh0aGlzLm9uQ2xvc2VFdmVudClcblx0XHRcdHRoaXMub25DbG9zZUV2ZW50KGFyZ3MpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vdHN0cmFwTmdNb2RhbFNlcnZpY2UgfSBmcm9tICcuL2Jvb3RzdHJhcC1uZy1tb2RhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYm9vdHN0cmFwLW5nLW1vZGFsJyxcblx0dGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcblx0c3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBOZ01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb21wb25lbnQ7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IEJvb3RzdHJhcE5nTW9kYWxTZXJ2aWNlKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5tb2RhbFNlcnZpY2Uub25PcGVuLnN1YnNjcmliZShvcHRpb24gPT4ge1xuXHRcdFx0c2VsZi5jb21wb25lbnQgPSBvcHRpb24uY29tcG9uZW50O1xuXHRcdH0pXG5cdH1cblxufSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQm9vdHN0cmFwTmdNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vYm9vdHN0cmFwLW5nLW1vZGFsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbQm9vdHN0cmFwTmdNb2RhbENvbXBvbmVudF0sXG5cdGV4cG9ydHM6IFtCb290c3RyYXBOZ01vZGFsQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBOZ01vZGFsTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQWVDO3NCQUZzQyxJQUFJLFlBQVksRUFBRTtLQUV2Qzs7Ozs7OztJQUVqQixJQUFJLENBQUMsT0FBTyxFQUFFLFlBQWEsRUFBRSxhQUFjO1FBQzFDLElBQUksT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBRXJDLHFCQUFJLFlBQVkscUJBQVEsT0FBTyxDQUFFLENBQUM7WUFDbEMsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDO1lBRTVCLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFCO1FBRUQsSUFBSSxZQUFZO1lBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7O1lBRWpDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRTFCLElBQUksYUFBYTtZQUNoQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQzs7WUFFbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7S0FDM0I7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQUs7UUFDWCxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxhQUFhO1lBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUI7Ozs7O0lBRUQsS0FBSyxDQUFDLElBQUs7UUFDVixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxZQUFZO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7OztZQTdDRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7O3VCQU9DLE1BQU07Ozs7Ozs7O0FDYlI7Ozs7SUFZQyxZQUFvQixZQUFxQztRQUFyQyxpQkFBWSxHQUFaLFlBQVksQ0FBeUI7S0FBSzs7OztJQUU5RCxRQUFRO1FBQ1AscUJBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7U0FDbEMsQ0FBQyxDQUFBO0tBQ0Y7OztZQWhCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsTUFBTSxFQUFFLEVBQUU7YUFDVjs7OztZQU5RLHVCQUF1Qjs7Ozs7OztBQ0RoQzs7O1lBSUMsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2dCQUNELFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN6QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUNwQzs7Ozs7Ozs7Ozs7Ozs7OyJ9