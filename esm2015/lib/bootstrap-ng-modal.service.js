/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class BootstrapNgModalService {
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
/** @nocollapse */ BootstrapNgModalService.ngInjectableDef = i0.defineInjectable({ factory: function BootstrapNgModalService_Factory() { return new BootstrapNgModalService(); }, token: BootstrapNgModalService, providedIn: "root" });
function BootstrapNgModalService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BootstrapNgModalService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BootstrapNgModalService.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    BootstrapNgModalService.propDecorators;
    /** @type {?} */
    BootstrapNgModalService.prototype.modalId;
    /** @type {?} */
    BootstrapNgModalService.prototype.onCloseEvent;
    /** @type {?} */
    BootstrapNgModalService.prototype.onCancelEvent;
    /** @type {?} */
    BootstrapNgModalService.prototype.onOpen;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLW5nLW1vZGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ib290c3RyYXAtbmctbW9kYWwvIiwic291cmNlcyI6WyJsaWIvYm9vdHN0cmFwLW5nLW1vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPakUsTUFBTTtJQVFMO3NCQUZzQyxJQUFJLFlBQVksRUFBRTtLQUV2Qzs7Ozs7OztJQUVqQixJQUFJLENBQUMsT0FBTyxFQUFFLFlBQWEsRUFBRSxhQUFjO1FBQzFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFFckMscUJBQUksWUFBWSxxQkFBUSxPQUFPLENBQUUsQ0FBQztZQUNsQyxPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUM7WUFFNUIsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFCO1FBRUQsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLElBQUk7WUFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUUxQixFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDcEMsSUFBSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0tBQzNCOzs7OztJQUVELE1BQU0sQ0FBQyxJQUFLO1FBQ1gsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCOzs7OztJQUVELEtBQUssQ0FBQyxJQUFLO1FBQ1YsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCOzs7WUE3Q0QsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7Ozt1QkFPQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBOZ01vZGFsU2VydmljZSB7XG5cblx0bW9kYWxJZDogc3RyaW5nO1xuXHRvbkNsb3NlRXZlbnQ7XG5cdG9uQ2FuY2VsRXZlbnQ7XG5cblx0QE91dHB1dCgpIG9uT3BlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRvcGVuKG9wdGlvbnMsIG9uQ2xvc2VFdmVudD8sIG9uQ2FuY2VsRXZlbnQ/KSB7XG5cdFx0aWYgKG9wdGlvbnMgJiYgT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5tb2RhbElkID0gJyMnICsgb3B0aW9ucy5tb2RhbElkO1xuXG5cdFx0XHRsZXQgbW9kYWxPcHRpb25zID0geyAuLi5vcHRpb25zIH07XG5cdFx0XHRkZWxldGUgbW9kYWxPcHRpb25zLm1vZGFsSWQ7XG5cblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gJCh0aGlzLm1vZGFsSWQpLm1vZGFsKG1vZGFsT3B0aW9ucyksIDApO1xuXHRcdFx0dGhpcy5vbk9wZW4uZW1pdChvcHRpb25zKTtcblx0XHR9XG5cblx0XHRpZiAob25DbG9zZUV2ZW50KVxuXHRcdFx0dGhpcy5vbkNsb3NlRXZlbnQgPSBvbkNsb3NlRXZlbnQ7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5vbkNsb3NlRXZlbnQgPSBudWxsO1xuXG5cdFx0aWYgKG9uQ2FuY2VsRXZlbnQpXG5cdFx0XHR0aGlzLm9uQ2FuY2VsRXZlbnQgPSBvbkNhbmNlbEV2ZW50O1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMub25DYW5jZWxFdmVudCA9IG51bGw7XG5cdH1cblxuXHRjYW5jZWwoYXJncz8pIHtcblx0XHQkKHRoaXMubW9kYWxJZCkubW9kYWwoJ2hpZGUnKTtcblx0XHRpZiAodGhpcy5vbkNhbmNlbEV2ZW50KVxuXHRcdFx0dGhpcy5vbkNhbmNlbEV2ZW50KGFyZ3MpO1xuXHR9XG5cblx0Y2xvc2UoYXJncz8pIHtcblx0XHQkKHRoaXMubW9kYWxJZCkubW9kYWwoJ2hpZGUnKTtcblx0XHRpZiAodGhpcy5vbkNsb3NlRXZlbnQpXG5cdFx0XHR0aGlzLm9uQ2xvc2VFdmVudChhcmdzKTtcblx0fVxufVxuIl19