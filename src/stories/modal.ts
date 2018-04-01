import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-basic',
  template: `
    <ng-template #content let-c="close" let-d="dismiss">
        <div class="modal-header">
            <h4 class="modal-title">Modal title</h4>
            <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <p>One fine body&hellip;</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-outline-dark" (click)="c('Close click')">Close</button>
        </div>
    </ng-template>

    <button class="btn btn-lg btn-outline-primary" (click)="open(content)">Launch demo modal</button>

    <hr>

    <pre>{{closeResult}}</pre>
  `
})
class NgbdModalBasic {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

storiesOf('Modal', module)
  .add('basic', () => ({
    moduleMetadata: {
      imports: [NgbModule.forRoot()],
    },
    component: NgbdModalBasic
  }))
