import {
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import { IModal } from '../../types/IModal';
import { DOCUMENT } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
    selector: 'skr-modal',
    template: `
        <skr-color-scheme [theme]="'blue'">
            <p-dialog
                [visible]="visible"
                [modal]="true"
                [width]="width"
                [height]="height"
                [minHeight]="0"
                [maximizable]="false"
                [draggable]="false"
                [resizable]="false"
                [closable]="false"
            >
                <p-header>
                    <div class="title">{{ title }}</div>
                    <div class="header-actions">
                        <div class="header-action" (click)="handleCloseModal()">
                            <div class="close-button">
                                <skr-close-icon></skr-close-icon>
                            </div>
                        </div>
                    </div>
                </p-header>
                <div class="modal-grid"><ng-content></ng-content></div>
            </p-dialog>
        </skr-color-scheme>
    `,
    styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements IModal, OnInit, OnDestroy {
    @Input() public id: IModal['id'];
    @Input() public title: string;
    @Input() public width: number;
    @Input() public height: number;

    @Output() public onClose: EventEmitter<void> = new EventEmitter();

    public visible: boolean;

    private document: Document;

    constructor(
        @Inject(DOCUMENT) document: any,
        private modalService: ModalService,
        private element: ElementRef
    ) {
        this.document = document;
    }

    ngOnInit(): void {
        if (this.id.trim().length === 0) {
            throw new Error('modal must have an id');
        }

        this.document.body.appendChild(this.element.nativeElement);
        this.modalService.add(this);
    }

    ngOnDestroy(): void {
        this.modalService.remove(this.id);

        this.element.nativeElement.remove();
    }

    open(): void {
        this.visible = true;
    }

    close(): void {
        this.visible = false;
    }

    public handleCloseModal(): void {
        this.close();
        this.onClose.emit();
    }

    @HostListener('document:keydown', ['$event'])
    public hotKeyListener(event: KeyboardEvent): void {
        if (event.key === 'Escape') {
            this.handleCloseModal();
        }
    }
}
