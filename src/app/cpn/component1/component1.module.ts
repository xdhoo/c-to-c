import { NgModule} from '@angular/core';
import { Component1Component } from './component1.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    exports:[Component1Component],
    declarations:[Component1Component]
})

export class Component1Module {}