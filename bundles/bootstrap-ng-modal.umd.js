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
                        template: "<ng-container *ngComponentOutlet=\"component\"></ng-container>",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLW5nLW1vZGFsLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYm9vdHN0cmFwLW5nLW1vZGFsL2xpYi9ib290c3RyYXAtbmctbW9kYWwuc2VydmljZS50cyIsIm5nOi8vYm9vdHN0cmFwLW5nLW1vZGFsL2xpYi9ib290c3RyYXAtbmctbW9kYWwuY29tcG9uZW50LnRzIiwibmc6Ly9ib290c3RyYXAtbmctbW9kYWwvbGliL2Jvb3RzdHJhcC1uZy1tb2RhbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBOZ01vZGFsU2VydmljZSB7XG5cblx0bW9kYWxJZDogc3RyaW5nO1xuXHRvbkNsb3NlRXZlbnQ7XG5cdG9uQ2FuY2VsRXZlbnQ7XG5cblx0QE91dHB1dCgpIG9uT3BlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRvcGVuKG9wdGlvbnMsIG9uQ2xvc2VFdmVudD8sIG9uQ2FuY2VsRXZlbnQ/KSB7XG5cdFx0aWYgKG9wdGlvbnMgJiYgT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5tb2RhbElkID0gJyMnICsgb3B0aW9ucy5tb2RhbElkO1xuXG5cdFx0XHRsZXQgbW9kYWxPcHRpb25zID0geyAuLi5vcHRpb25zIH07XG5cdFx0XHRkZWxldGUgbW9kYWxPcHRpb25zLm1vZGFsSWQ7XG5cblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gJCh0aGlzLm1vZGFsSWQpLm1vZGFsKG1vZGFsT3B0aW9ucyksIDApO1xuXHRcdFx0dGhpcy5vbk9wZW4uZW1pdChvcHRpb25zKTtcblx0XHR9XG5cblx0XHRpZiAob25DbG9zZUV2ZW50KVxuXHRcdFx0dGhpcy5vbkNsb3NlRXZlbnQgPSBvbkNsb3NlRXZlbnQ7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5vbkNsb3NlRXZlbnQgPSBudWxsO1xuXG5cdFx0aWYgKG9uQ2FuY2VsRXZlbnQpXG5cdFx0XHR0aGlzLm9uQ2FuY2VsRXZlbnQgPSBvbkNhbmNlbEV2ZW50O1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMub25DYW5jZWxFdmVudCA9IG51bGw7XG5cdH1cblxuXHRjYW5jZWwoYXJncz8pIHtcblx0XHQkKHRoaXMubW9kYWxJZCkubW9kYWwoJ2hpZGUnKTtcblx0XHRpZiAodGhpcy5vbkNhbmNlbEV2ZW50KVxuXHRcdFx0dGhpcy5vbkNhbmNlbEV2ZW50KGFyZ3MpO1xuXHR9XG5cblx0Y2xvc2UoYXJncz8pIHtcblx0XHQkKHRoaXMubW9kYWxJZCkubW9kYWwoJ2hpZGUnKTtcblx0XHRpZiAodGhpcy5vbkNsb3NlRXZlbnQpXG5cdFx0XHR0aGlzLm9uQ2xvc2VFdmVudChhcmdzKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb3RzdHJhcE5nTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9ib290c3RyYXAtbmctbW9kYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2Jvb3RzdHJhcC1uZy1tb2RhbCcsXG5cdHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRcIj48L25nLWNvbnRhaW5lcj5gLFxuXHRzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcE5nTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbXBvbmVudDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogQm9vdHN0cmFwTmdNb2RhbFNlcnZpY2UpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGxldCBzZWxmID0gdGhpcztcblx0XHR0aGlzLm1vZGFsU2VydmljZS5vbk9wZW4uc3Vic2NyaWJlKG9wdGlvbiA9PiB7XG5cdFx0XHRzZWxmLmNvbXBvbmVudCA9IG9wdGlvbi5jb21wb25lbnQ7XG5cdFx0fSlcblx0fVxuXG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCb290c3RyYXBOZ01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9ib290c3RyYXAtbmctbW9kYWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtCb290c3RyYXBOZ01vZGFsQ29tcG9uZW50XSxcblx0ZXhwb3J0czogW0Jvb3RzdHJhcE5nTW9kYWxDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcE5nTW9kYWxNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiSW5qZWN0YWJsZSIsIk91dHB1dCIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQWVDOzBCQUZzQyxJQUFJQSxlQUFZLEVBQUU7U0FFdkM7Ozs7Ozs7UUFFakIsc0NBQUk7Ozs7OztZQUFKLFVBQUssT0FBTyxFQUFFLFlBQWEsRUFBRSxhQUFjO2dCQUEzQyxpQkFvQkM7Z0JBbkJBLElBQUksT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztvQkFFckMscUJBQUksY0FBWSx3QkFBUSxPQUFPLENBQUUsQ0FBQztvQkFDbEMsT0FBTyxjQUFZLENBQUMsT0FBTyxDQUFDO29CQUU1QixVQUFVLENBQUMsY0FBTSxPQUFBLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQVksQ0FBQyxHQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMxQjtnQkFFRCxJQUFJLFlBQVk7b0JBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7O29CQUVqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFFMUIsSUFBSSxhQUFhO29CQUNoQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQzs7b0JBRW5DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2FBQzNCOzs7OztRQUVELHdDQUFNOzs7O1lBQU4sVUFBTyxJQUFLO2dCQUNYLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QixJQUFJLElBQUksQ0FBQyxhQUFhO29CQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFCOzs7OztRQUVELHVDQUFLOzs7O1lBQUwsVUFBTSxJQUFLO2dCQUNWLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QixJQUFJLElBQUksQ0FBQyxZQUFZO29CQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pCOztvQkE3Q0RDLGFBQVUsU0FBQzt3QkFDWCxVQUFVLEVBQUUsTUFBTTtxQkFDbEI7Ozs7OytCQU9DQyxTQUFNOzs7c0NBYlI7Ozs7Ozs7QUNBQTtRQVlDLG1DQUFvQixZQUFxQztZQUFyQyxpQkFBWSxHQUFaLFlBQVksQ0FBeUI7U0FBSzs7OztRQUU5RCw0Q0FBUTs7O1lBQVI7Z0JBQ0MscUJBQUksSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtvQkFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO2lCQUNsQyxDQUFDLENBQUE7YUFDRjs7b0JBaEJEQyxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLG9CQUFvQjt3QkFDOUIsUUFBUSxFQUFFLGdFQUE4RDt3QkFDeEUsTUFBTSxFQUFFLEVBQUU7cUJBQ1Y7Ozs7O3dCQU5RLHVCQUF1Qjs7O3dDQURoQzs7Ozs7OztBQ0FBOzs7O29CQUlDQyxXQUFRLFNBQUM7d0JBQ1QsT0FBTyxFQUFFOzRCQUNSQyxtQkFBWTt5QkFDWjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzt3QkFDekMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7cUJBQ3BDOztxQ0FWRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==