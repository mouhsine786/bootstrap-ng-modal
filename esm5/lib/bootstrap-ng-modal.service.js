/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
            var /** @type {?} */ modalOptions_1 = tslib_1.__assign({}, options);
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
    /** @type {?} */
    BootstrapNgModalService.prototype.modalId;
    /** @type {?} */
    BootstrapNgModalService.prototype.onCloseEvent;
    /** @type {?} */
    BootstrapNgModalService.prototype.onCancelEvent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLW5nLW1vZGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ib290c3RyYXAtbmctbW9kYWwvIiwic291cmNlcyI6WyJsaWIvYm9vdHN0cmFwLW5nLW1vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7SUFhMUM7S0FBaUI7Ozs7Ozs7SUFFakIsc0NBQUk7Ozs7OztJQUFKLFVBQUssT0FBTyxFQUFFLFlBQWEsRUFBRSxhQUFjO1FBQTNDLGlCQW1CQztRQWxCQSxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBRXJDLHFCQUFJLGNBQVksd0JBQVEsT0FBTyxDQUFFLENBQUM7WUFDbEMsT0FBTyxjQUFZLENBQUMsT0FBTyxDQUFDO1lBRTVCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBWSxDQUFDLEVBQW5DLENBQW1DLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDekQ7UUFFRCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFDaEIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDbEMsSUFBSTtZQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRTFCLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNwQyxJQUFJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7S0FDM0I7Ozs7O0lBRUQsd0NBQU07Ozs7SUFBTixVQUFPLElBQUs7UUFDWCxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUI7Ozs7O0lBRUQsdUNBQUs7Ozs7SUFBTCxVQUFNLElBQUs7UUFDVixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7O2dCQTFDRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7OztrQ0FORDs7U0FPYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwTmdNb2RhbFNlcnZpY2Uge1xuXG5cdG1vZGFsSWQ6IHN0cmluZztcblx0b25DbG9zZUV2ZW50O1xuXHRvbkNhbmNlbEV2ZW50O1xuXG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0b3BlbihvcHRpb25zLCBvbkNsb3NlRXZlbnQ/LCBvbkNhbmNlbEV2ZW50Pykge1xuXHRcdGlmIChvcHRpb25zICYmIE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMubW9kYWxJZCA9ICcjJyArIG9wdGlvbnMubW9kYWxJZDtcblxuXHRcdFx0bGV0IG1vZGFsT3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuXHRcdFx0ZGVsZXRlIG1vZGFsT3B0aW9ucy5tb2RhbElkO1xuXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+ICQodGhpcy5tb2RhbElkKS5tb2RhbChtb2RhbE9wdGlvbnMpLCAwKTtcblx0XHR9XG5cblx0XHRpZiAob25DbG9zZUV2ZW50KVxuXHRcdFx0dGhpcy5vbkNsb3NlRXZlbnQgPSBvbkNsb3NlRXZlbnQ7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5vbkNsb3NlRXZlbnQgPSBudWxsO1xuXG5cdFx0aWYgKG9uQ2FuY2VsRXZlbnQpXG5cdFx0XHR0aGlzLm9uQ2FuY2VsRXZlbnQgPSBvbkNhbmNlbEV2ZW50O1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMub25DYW5jZWxFdmVudCA9IG51bGw7XG5cdH1cblxuXHRjYW5jZWwoYXJncz8pIHtcblx0XHQkKHRoaXMubW9kYWxJZCkubW9kYWwoJ2hpZGUnKTtcblx0XHRpZiAodGhpcy5vbkNhbmNlbEV2ZW50KVxuXHRcdFx0dGhpcy5vbkNhbmNlbEV2ZW50KGFyZ3MpO1xuXHR9XG5cblx0Y2xvc2UoYXJncz8pIHtcblx0XHQkKHRoaXMubW9kYWxJZCkubW9kYWwoJ2hpZGUnKTtcblx0XHRpZiAodGhpcy5vbkNsb3NlRXZlbnQpXG5cdFx0XHR0aGlzLm9uQ2xvc2VFdmVudChhcmdzKTtcblx0fVxufVxuIl19