(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('bootstrap-ng-modal', ['exports', 'tslib', '@angular/core'], factory) :
    (factory((global['bootstrap-ng-modal'] = {}),global.tslib,global.ng.core));
}(this, (function (exports,tslib_1,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BootstrapNgModalService = (function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        BootstrapNgModalService.ctorParameters = function () { return []; };
        /** @nocollapse */ BootstrapNgModalService.ngInjectableDef = i0.defineInjectable({ factory: function BootstrapNgModalService_Factory() { return new BootstrapNgModalService(); }, token: BootstrapNgModalService, providedIn: "root" });
        return BootstrapNgModalService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BootstrapNgModalComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var BootstrapNgModalModule = (function () {
        function BootstrapNgModalModule() {
        }
        BootstrapNgModalModule.decorators = [
            { type: i0.NgModule, args: [{
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

    exports.BootstrapNgModalService = BootstrapNgModalService;
    exports.BootstrapNgModalComponent = BootstrapNgModalComponent;
    exports.BootstrapNgModalModule = BootstrapNgModalModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLW5nLW1vZGFsLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYm9vdHN0cmFwLW5nLW1vZGFsL2xpYi9ib290c3RyYXAtbmctbW9kYWwuc2VydmljZS50cyIsIm5nOi8vYm9vdHN0cmFwLW5nLW1vZGFsL2xpYi9ib290c3RyYXAtbmctbW9kYWwuY29tcG9uZW50LnRzIiwibmc6Ly9ib290c3RyYXAtbmctbW9kYWwvbGliL2Jvb3RzdHJhcC1uZy1tb2RhbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcE5nTW9kYWxTZXJ2aWNlIHtcblxuXHRtb2RhbElkOiBzdHJpbmc7XG5cdG9uQ2xvc2VFdmVudDtcblx0b25DYW5jZWxFdmVudDtcblxuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdG9wZW4ob3B0aW9ucywgb25DbG9zZUV2ZW50Pywgb25DYW5jZWxFdmVudD8pIHtcblx0XHRpZiAob3B0aW9ucyAmJiBPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLm1vZGFsSWQgPSAnIycgKyBvcHRpb25zLm1vZGFsSWQ7XG5cblx0XHRcdGxldCBtb2RhbE9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcblx0XHRcdGRlbGV0ZSBtb2RhbE9wdGlvbnMubW9kYWxJZDtcblxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiAkKHRoaXMubW9kYWxJZCkubW9kYWwobW9kYWxPcHRpb25zKSwgMCk7XG5cdFx0fVxuXG5cdFx0aWYgKG9uQ2xvc2VFdmVudClcblx0XHRcdHRoaXMub25DbG9zZUV2ZW50ID0gb25DbG9zZUV2ZW50O1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMub25DbG9zZUV2ZW50ID0gbnVsbDtcblxuXHRcdGlmIChvbkNhbmNlbEV2ZW50KVxuXHRcdFx0dGhpcy5vbkNhbmNlbEV2ZW50ID0gb25DYW5jZWxFdmVudDtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLm9uQ2FuY2VsRXZlbnQgPSBudWxsO1xuXHR9XG5cblx0Y2FuY2VsKGFyZ3M/KSB7XG5cdFx0JCh0aGlzLm1vZGFsSWQpLm1vZGFsKCdoaWRlJyk7XG5cdFx0aWYgKHRoaXMub25DYW5jZWxFdmVudClcblx0XHRcdHRoaXMub25DYW5jZWxFdmVudChhcmdzKTtcblx0fVxuXG5cdGNsb3NlKGFyZ3M/KSB7XG5cdFx0JCh0aGlzLm1vZGFsSWQpLm1vZGFsKCdoaWRlJyk7XG5cdFx0aWYgKHRoaXMub25DbG9zZUV2ZW50KVxuXHRcdFx0dGhpcy5vbkNsb3NlRXZlbnQoYXJncyk7XG5cdH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Jvb3RzdHJhcC1uZy1tb2RhbCcsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwTmdNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vdHN0cmFwTmdNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vYm9vdHN0cmFwLW5nLW1vZGFsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQm9vdHN0cmFwTmdNb2RhbENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtCb290c3RyYXBOZ01vZGFsQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBOZ01vZGFsTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7UUFhQztTQUFpQjs7Ozs7OztRQUVqQixzQ0FBSTs7Ozs7O1lBQUosVUFBSyxPQUFPLEVBQUUsWUFBYSxFQUFFLGFBQWM7Z0JBQTNDLGlCQW1CQztnQkFsQkEsSUFBSSxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO29CQUVyQyxxQkFBSSxjQUFZLHdCQUFRLE9BQU8sQ0FBRSxDQUFDO29CQUNsQyxPQUFPLGNBQVksQ0FBQyxPQUFPLENBQUM7b0JBRTVCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBWSxDQUFDLEdBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDekQ7Z0JBRUQsSUFBSSxZQUFZO29CQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDOztvQkFFakMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBRTFCLElBQUksYUFBYTtvQkFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7O29CQUVuQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzthQUMzQjs7Ozs7UUFFRCx3Q0FBTTs7OztZQUFOLFVBQU8sSUFBSztnQkFDWCxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxJQUFJLENBQUMsYUFBYTtvQkFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMxQjs7Ozs7UUFFRCx1Q0FBSzs7OztZQUFMLFVBQU0sSUFBSztnQkFDVixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxJQUFJLENBQUMsWUFBWTtvQkFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6Qjs7b0JBMUNEQSxhQUFVLFNBQUM7d0JBQ1gsVUFBVSxFQUFFLE1BQU07cUJBQ2xCOzs7OztzQ0FORDs7Ozs7OztBQ0FBO1FBU0U7U0FBaUI7Ozs7UUFFakIsNENBQVE7OztZQUFSO2FBQ0M7O29CQVZGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjt3QkFDOUIsUUFBUSxFQUFFLDJCQUEyQjt3QkFDckMsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7d0NBTkQ7Ozs7Ozs7QUNBQTs7OztvQkFHQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN6QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztxQkFDckM7O3FDQVJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9