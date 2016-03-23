# ng2-bs3-modal [![npm version](https://badge.fury.io/js/ng2-bs3-modal.svg)](http://badge.fury.io/js/ng2-bs3-modal) [![npm downloads](https://img.shields.io/npm/dm/ng2-bs3-modal.svg)](https://npmjs.org/ng2-bs3-modal) [![Build Status](https://travis-ci.org/dougludlow/ng2-bs3-modal.svg?branch=master)](https://travis-ci.org/dougludlow/ng2-bs3-modal)
Angular2 Bootstrap3 Modal Component

## Demo
http://dougludlow.github.io/ng2-bs3-modal/

## Requirements

`ng2-bs3-modal` depends on bootstrap which depends on jquery, you'll need to include both scripts before ng2-bs3-modal:

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.js"></script>
  

Or, if you're using systemjs, configure it to load them. And import them in your typscript.

## Install

    npm install ng2-bs3-modal
    
Include a reference to the bundle in your html

    <script src="node_modules/ng2-bs3-modal/bundles/ng2-bs3-modal.js"></script>
    
Or if you're using SystemJS, add a mapping to your System.config:

    System.config({
        map: {
            'ng2-bs3-modal': 'node_modules/ng2-bs3-modal'
        }
    });

Then import and include in your component's directives:

    import { MODAL_DIRECTIVES } from 'ng2-bs3-modal/ng2-bs3-modal';

    @Component({
        directives: [MODAL_DIRECTIVES]
    })
    
## API

### Inputs

- `animation: boolean`, default: `true`

   Specify `false` to simply show the modal rather than having it fade in/out of view.
   
- `backdrop: string | boolean`, default: `true`

   Specify `'static'` for a backdrop which doesn't close the modal on click or `false` for no backdrop.
   
- `keyboard: boolean`, default: `true`

   Closes the modal when escape key is pressed. Specify `false` to disable.
   
- `size: string`, default: `undefined`

   Specify `'sm'` for small and `'lg'` for large.

### Outputs

- `onClose: EventEmitter`

   Emits when `ModalComponent.close()` is called. 

- `onDismiss: EventEmitter`
    
   Emits when `ModalComponent.dismiss()` is called, or when the modal is dismissed with the keyboard or backdrop. 

## Examples

### Default modal

    <button type="button" class="btn btn-default" (click)="modal.open()">Open me!</button>
    
    <modal #modal>
        <modal-header [show-close]="true">
            <h4 class="modal-title">I'm a modal!</h4>
        </modal-header>
        <modal-body>
            Hello World!
        </modal-body>
        <modal-footer [show-default-buttons]="true"></modal-footer>
    </modal>
![Example](demo/images/modal.png)
    
### Static modal

This will create a modal that cannot be closed with the escape key or by clicking outside of the modal.

    <button type="button" class="btn btn-default" (click)="modal.open()">Open me!</button>
    
    <modal #modal [keyboard]="false" [backdrop]="'static'">
        <modal-header [show-close]="false">
            <h4 class="modal-title">I'm a modal!</h4>
        </modal-header>
        <modal-body>
            Hello World!
        </modal-body>
        <modal-footer [show-default-buttons]="true"></modal-footer>
    </modal>
    
 ### Closing the modal from the host/parent component
 
    @Component({
        selector: 'parent-component',
        template: `
            <modal #myModal>
                ...
            </modal>
        `
    })
    export class ParentComponent {
        @ViewChild('myModal')
        modal: ModalComponent

        close() {
            this.modal.close();
        }
    }