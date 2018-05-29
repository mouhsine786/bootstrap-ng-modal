(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('bootstrap-ng-modal', ['exports', 'tslib', '@angular/core', '@angular/common'], factory) :
    (factory((global['bootstrap-ng-modal'] = {}),global.tslib,global.ng.core,global.ng.common));
}(this, (function (exports,tslib_1,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BootstrapNgModalService = (function () {
        function BootstrapNgModalService() {
            this.onOpen = new i0.EventEmitter();
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        BootstrapNgModalService.ctorParameters = function () { return []; };
        BootstrapNgModalService.propDecorators = {
            "onOpen": [{ type: i0.Output },],
        };
        /** @nocollapse */ BootstrapNgModalService.ngInjectableDef = i0.defineInjectable({ factory: function BootstrapNgModalService_Factory() { return new BootstrapNgModalService(); }, token: BootstrapNgModalService, providedIn: "root" });
        return BootstrapNgModalService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BootstrapNgModalComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: 'bootstrap-ng-modal',
                        template: '<ng-content></ng-content>',
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        BootstrapNgModalComponent.ctorParameters = function () {
            return [
                { type: BootstrapNgModalService, },
            ];
        };
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
                        imports: [
                            common.CommonModule
                        ],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLW5nLW1vZGFsLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYm9vdHN0cmFwLW5nLW1vZGFsL2xpYi9ib290c3RyYXAtbmctbW9kYWwuc2VydmljZS50cyIsIm5nOi8vYm9vdHN0cmFwLW5nLW1vZGFsL2xpYi9ib290c3RyYXAtbmctbW9kYWwuY29tcG9uZW50LnRzIiwibmc6Ly9ib290c3RyYXAtbmctbW9kYWwvbGliL2Jvb3RzdHJhcC1uZy1tb2RhbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBOZ01vZGFsU2VydmljZSB7XG5cblx0bW9kYWxJZDogc3RyaW5nO1xuXHRvbkNsb3NlRXZlbnQ7XG5cdG9uQ2FuY2VsRXZlbnQ7XG5cblx0QE91dHB1dCgpIG9uT3BlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRvcGVuKG9wdGlvbnMsIG9uQ2xvc2VFdmVudD8sIG9uQ2FuY2VsRXZlbnQ/KSB7XG5cdFx0aWYgKG9wdGlvbnMgJiYgT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5tb2RhbElkID0gJyMnICsgb3B0aW9ucy5tb2RhbElkO1xuXG5cdFx0XHRsZXQgbW9kYWxPcHRpb25zID0geyAuLi5vcHRpb25zIH07XG5cdFx0XHRkZWxldGUgbW9kYWxPcHRpb25zLm1vZGFsSWQ7XG5cblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gJCh0aGlzLm1vZGFsSWQpLm1vZGFsKG1vZGFsT3B0aW9ucyksIDApO1xuXHRcdFx0dGhpcy5vbk9wZW4uZW1pdChvcHRpb25zKTtcblx0XHR9XG5cblx0XHRpZiAob25DbG9zZUV2ZW50KVxuXHRcdFx0dGhpcy5vbkNsb3NlRXZlbnQgPSBvbkNsb3NlRXZlbnQ7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5vbkNsb3NlRXZlbnQgPSBudWxsO1xuXG5cdFx0aWYgKG9uQ2FuY2VsRXZlbnQpXG5cdFx0XHR0aGlzLm9uQ2FuY2VsRXZlbnQgPSBvbkNhbmNlbEV2ZW50O1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMub25DYW5jZWxFdmVudCA9IG51bGw7XG5cdH1cblxuXHRjYW5jZWwoYXJncz8pIHtcblx0XHQkKHRoaXMubW9kYWxJZCkubW9kYWwoJ2hpZGUnKTtcblx0XHRpZiAodGhpcy5vbkNhbmNlbEV2ZW50KVxuXHRcdFx0dGhpcy5vbkNhbmNlbEV2ZW50KGFyZ3MpO1xuXHR9XG5cblx0Y2xvc2UoYXJncz8pIHtcblx0XHQkKHRoaXMubW9kYWxJZCkubW9kYWwoJ2hpZGUnKTtcblx0XHRpZiAodGhpcy5vbkNsb3NlRXZlbnQpXG5cdFx0XHR0aGlzLm9uQ2xvc2VFdmVudChhcmdzKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb3RzdHJhcE5nTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9ib290c3RyYXAtbmctbW9kYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2Jvb3RzdHJhcC1uZy1tb2RhbCcsXG5cdHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG5cdHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwTmdNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29tcG9uZW50O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBCb290c3RyYXBOZ01vZGFsU2VydmljZSkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMubW9kYWxTZXJ2aWNlLm9uT3Blbi5zdWJzY3JpYmUob3B0aW9uID0+IHtcblx0XHRcdHNlbGYuY29tcG9uZW50ID0gb3B0aW9uLmNvbXBvbmVudDtcblx0XHR9KVxuXHR9XG5cbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJvb3RzdHJhcE5nTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2Jvb3RzdHJhcC1uZy1tb2RhbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW0Jvb3RzdHJhcE5nTW9kYWxDb21wb25lbnRdLFxuXHRleHBvcnRzOiBbQm9vdHN0cmFwTmdNb2RhbENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwTmdNb2RhbE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJJbmplY3RhYmxlIiwiT3V0cHV0IiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBZUM7MEJBRnNDLElBQUlBLGVBQVksRUFBRTtTQUV2Qzs7Ozs7OztRQUVqQixzQ0FBSTs7Ozs7O1lBQUosVUFBSyxPQUFPLEVBQUUsWUFBYSxFQUFFLGFBQWM7Z0JBQTNDLGlCQW9CQztnQkFuQkEsSUFBSSxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO29CQUVyQyxxQkFBSSxjQUFZLHdCQUFRLE9BQU8sQ0FBRSxDQUFDO29CQUNsQyxPQUFPLGNBQVksQ0FBQyxPQUFPLENBQUM7b0JBRTVCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBWSxDQUFDLEdBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzFCO2dCQUVELElBQUksWUFBWTtvQkFDZixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQzs7b0JBRWpDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUUxQixJQUFJLGFBQWE7b0JBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDOztvQkFFbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7YUFDM0I7Ozs7O1FBRUQsd0NBQU07Ozs7WUFBTixVQUFPLElBQUs7Z0JBQ1gsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlCLElBQUksSUFBSSxDQUFDLGFBQWE7b0JBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUI7Ozs7O1FBRUQsdUNBQUs7Ozs7WUFBTCxVQUFNLElBQUs7Z0JBQ1YsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlCLElBQUksSUFBSSxDQUFDLFlBQVk7b0JBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDekI7O29CQTdDREMsYUFBVSxTQUFDO3dCQUNYLFVBQVUsRUFBRSxNQUFNO3FCQUNsQjs7Ozs7K0JBT0NDLFNBQU07OztzQ0FiUjs7Ozs7OztBQ0FBO1FBWUMsbUNBQW9CLFlBQXFDO1lBQXJDLGlCQUFZLEdBQVosWUFBWSxDQUF5QjtTQUFLOzs7O1FBRTlELDRDQUFROzs7WUFBUjtnQkFDQyxxQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO29CQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7aUJBQ2xDLENBQUMsQ0FBQTthQUNGOztvQkFoQkRDLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixRQUFRLEVBQUUsMkJBQTJCO3dCQUNyQyxNQUFNLEVBQUUsRUFBRTtxQkFDVjs7Ozs7d0JBTlEsdUJBQXVCOzs7d0NBRGhDOzs7Ozs7O0FDQUE7Ozs7b0JBSUNDLFdBQVEsU0FBQzt3QkFDVCxPQUFPLEVBQUU7NEJBQ1JDLG1CQUFZO3lCQUNaO3dCQUNELFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN6QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztxQkFDcEM7O3FDQVZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9