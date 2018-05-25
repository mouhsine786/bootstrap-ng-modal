import { EventEmitter } from '@angular/core';
export declare class BootstrapNgModalService {
    modalId: string;
    onCloseEvent: any;
    onCancelEvent: any;
    onOpen: EventEmitter<any>;
    constructor();
    open(options: any, onCloseEvent?: any, onCancelEvent?: any): void;
    cancel(args?: any): void;
    close(args?: any): void;
}
