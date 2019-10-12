import { Injectable } from '@angular/core';
import { IModal } from '../types/IModal';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    private modals: Map<IModal['id'], IModal> = new Map();

    add(modal: IModal) {
        this.modals.set(modal.id, modal);
    }

    remove(id: IModal['id']) {
        this.modals.delete(id);
    }

    open(id: IModal['id']) {
        const modal = this.modals.get(id);

        modal.open();
    }

    close(id: IModal['id']) {
        const modal = this.modals.get(id);

        modal.close();
    }
}
