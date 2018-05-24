/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class BootstrapNgModalService {
    constructor() { }
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
/** @nocollapse */ BootstrapNgModalService.ngInjectableDef = i0.defineInjectable({ factory: function BootstrapNgModalService_Factory() { return new BootstrapNgModalService(); }, token: BootstrapNgModalService, providedIn: "root" });
function BootstrapNgModalService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BootstrapNgModalService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BootstrapNgModalService.ctorParameters;
    /** @type {?} */
    BootstrapNgModalService.prototype.modalId;
    /** @type {?} */
    BootstrapNgModalService.prototype.onCloseEvent;
    /** @type {?} */
    BootstrapNgModalService.prototype.onCancelEvent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLW5nLW1vZGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ib290c3RyYXAtbmctbW9kYWwvIiwic291cmNlcyI6WyJsaWIvYm9vdHN0cmFwLW5nLW1vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTzNDLE1BQU07SUFNTCxpQkFBaUI7Ozs7Ozs7SUFFakIsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFhLEVBQUUsYUFBYztRQUMxQyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBRXJDLHFCQUFJLFlBQVkscUJBQVEsT0FBTyxDQUFFLENBQUM7WUFDbEMsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDO1lBRTVCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUVELEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUNoQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNsQyxJQUFJO1lBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFMUIsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ3BDLElBQUk7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztLQUMzQjs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBSztRQUNYLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQjs7Ozs7SUFFRCxLQUFLLENBQUMsSUFBSztRQUNWLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6Qjs7O1lBMUNELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBOZ01vZGFsU2VydmljZSB7XG5cblx0bW9kYWxJZDogc3RyaW5nO1xuXHRvbkNsb3NlRXZlbnQ7XG5cdG9uQ2FuY2VsRXZlbnQ7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRvcGVuKG9wdGlvbnMsIG9uQ2xvc2VFdmVudD8sIG9uQ2FuY2VsRXZlbnQ/KSB7XG5cdFx0aWYgKG9wdGlvbnMgJiYgT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5tb2RhbElkID0gJyMnICsgb3B0aW9ucy5tb2RhbElkO1xuXG5cdFx0XHRsZXQgbW9kYWxPcHRpb25zID0geyAuLi5vcHRpb25zIH07XG5cdFx0XHRkZWxldGUgbW9kYWxPcHRpb25zLm1vZGFsSWQ7XG5cblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gJCh0aGlzLm1vZGFsSWQpLm1vZGFsKG1vZGFsT3B0aW9ucyksIDApO1xuXHRcdH1cblxuXHRcdGlmIChvbkNsb3NlRXZlbnQpXG5cdFx0XHR0aGlzLm9uQ2xvc2VFdmVudCA9IG9uQ2xvc2VFdmVudDtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLm9uQ2xvc2VFdmVudCA9IG51bGw7XG5cblx0XHRpZiAob25DYW5jZWxFdmVudClcblx0XHRcdHRoaXMub25DYW5jZWxFdmVudCA9IG9uQ2FuY2VsRXZlbnQ7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5vbkNhbmNlbEV2ZW50ID0gbnVsbDtcblx0fVxuXG5cdGNhbmNlbChhcmdzPykge1xuXHRcdCQodGhpcy5tb2RhbElkKS5tb2RhbCgnaGlkZScpO1xuXHRcdGlmICh0aGlzLm9uQ2FuY2VsRXZlbnQpXG5cdFx0XHR0aGlzLm9uQ2FuY2VsRXZlbnQoYXJncyk7XG5cdH1cblxuXHRjbG9zZShhcmdzPykge1xuXHRcdCQodGhpcy5tb2RhbElkKS5tb2RhbCgnaGlkZScpO1xuXHRcdGlmICh0aGlzLm9uQ2xvc2VFdmVudClcblx0XHRcdHRoaXMub25DbG9zZUV2ZW50KGFyZ3MpO1xuXHR9XG59XG4iXX0=