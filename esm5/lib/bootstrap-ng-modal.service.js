/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
var BootstrapNgModalService = /** @class */ (function () {
    function BootstrapNgModalService() {
        this.onOpen = new EventEmitter();
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
            var /** @type {?} */ modalOptions_1 = tslib_1.__assign({}, options);
            delete modalOptions_1.modalId;
            setTimeout(function () { return $(_this.modalId).modal(modalOptions_1); }, 0);
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
    BootstrapNgModalService.propDecorators = {
        "onOpen": [{ type: Output },],
    };
    /** @nocollapse */ BootstrapNgModalService.ngInjectableDef = i0.defineInjectable({ factory: function BootstrapNgModalService_Factory() { return new BootstrapNgModalService(); }, token: BootstrapNgModalService, providedIn: "root" });
    return BootstrapNgModalService;
}());
export { BootstrapNgModalService };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLW5nLW1vZGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ib290c3RyYXAtbmctbW9kYWwvIiwic291cmNlcyI6WyJsaWIvYm9vdHN0cmFwLW5nLW1vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztJQWVoRTtzQkFGc0MsSUFBSSxZQUFZLEVBQUU7S0FFdkM7Ozs7Ozs7SUFFakIsc0NBQUk7Ozs7OztJQUFKLFVBQUssT0FBTyxFQUFFLFlBQWEsRUFBRSxhQUFjO1FBQTNDLGlCQW9CQztRQW5CQSxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBRXJDLHFCQUFJLGNBQVksd0JBQVEsT0FBTyxDQUFFLENBQUM7WUFDbEMsT0FBTyxjQUFZLENBQUMsT0FBTyxDQUFDO1lBRTVCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBWSxDQUFDLEVBQW5DLENBQW1DLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUI7UUFFRCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFDaEIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDbEMsSUFBSTtZQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRTFCLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNwQyxJQUFJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7S0FDM0I7Ozs7O0lBRUQsd0NBQU07Ozs7SUFBTixVQUFPLElBQUs7UUFDWCxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUI7Ozs7O0lBRUQsdUNBQUs7Ozs7SUFBTCxVQUFNLElBQUs7UUFDVixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7O2dCQTdDRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7OzsyQkFPQyxNQUFNOzs7a0NBYlI7O1NBT2EsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBOZ01vZGFsU2VydmljZSB7XG5cblx0bW9kYWxJZDogc3RyaW5nO1xuXHRvbkNsb3NlRXZlbnQ7XG5cdG9uQ2FuY2VsRXZlbnQ7XG5cblx0QE91dHB1dCgpIG9uT3BlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRvcGVuKG9wdGlvbnMsIG9uQ2xvc2VFdmVudD8sIG9uQ2FuY2VsRXZlbnQ/KSB7XG5cdFx0aWYgKG9wdGlvbnMgJiYgT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5tb2RhbElkID0gJyMnICsgb3B0aW9ucy5tb2RhbElkO1xuXG5cdFx0XHRsZXQgbW9kYWxPcHRpb25zID0geyAuLi5vcHRpb25zIH07XG5cdFx0XHRkZWxldGUgbW9kYWxPcHRpb25zLm1vZGFsSWQ7XG5cblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gJCh0aGlzLm1vZGFsSWQpLm1vZGFsKG1vZGFsT3B0aW9ucyksIDApO1xuXHRcdFx0dGhpcy5vbk9wZW4uZW1pdChvcHRpb25zKTtcblx0XHR9XG5cblx0XHRpZiAob25DbG9zZUV2ZW50KVxuXHRcdFx0dGhpcy5vbkNsb3NlRXZlbnQgPSBvbkNsb3NlRXZlbnQ7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5vbkNsb3NlRXZlbnQgPSBudWxsO1xuXG5cdFx0aWYgKG9uQ2FuY2VsRXZlbnQpXG5cdFx0XHR0aGlzLm9uQ2FuY2VsRXZlbnQgPSBvbkNhbmNlbEV2ZW50O1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMub25DYW5jZWxFdmVudCA9IG51bGw7XG5cdH1cblxuXHRjYW5jZWwoYXJncz8pIHtcblx0XHQkKHRoaXMubW9kYWxJZCkubW9kYWwoJ2hpZGUnKTtcblx0XHRpZiAodGhpcy5vbkNhbmNlbEV2ZW50KVxuXHRcdFx0dGhpcy5vbkNhbmNlbEV2ZW50KGFyZ3MpO1xuXHR9XG5cblx0Y2xvc2UoYXJncz8pIHtcblx0XHQkKHRoaXMubW9kYWxJZCkubW9kYWwoJ2hpZGUnKTtcblx0XHRpZiAodGhpcy5vbkNsb3NlRXZlbnQpXG5cdFx0XHR0aGlzLm9uQ2xvc2VFdmVudChhcmdzKTtcblx0fVxufVxuIl19