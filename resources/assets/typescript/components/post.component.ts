import { Component } from '@angular/core'

@Component({
    selector: 'post-component',
    template: require('../../jade/_post.component.jade'),
    styles: [ require('../../sass/components/_post.component.sass') ]
})
export class PostComponent {}