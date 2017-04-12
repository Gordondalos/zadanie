import { NgModule }      from '@angular/core';


// parts module
import { PartsModule }   from '../parts/parts.module';
import { DynamicDetail } from "./ditail.view";
import { DynamicTemplateBuilder } from "./template.bulder";
import { DynamicTypeBuilder } from "./type.bulder";
import { COMPILER_PROVIDERS } from "@angular/compiler";




@NgModule({
    imports:      [ PartsModule ],
    declarations: [ DynamicDetail ],
    exports:      [ DynamicDetail],
    providers: [COMPILER_PROVIDERS],
})

export class DynamicModule {

    static forRoot()
    {
        return {
            ngModule: DynamicModule,
            providers: [ // singletons accross the whole app
                DynamicTemplateBuilder,
                DynamicTypeBuilder
            ],
        };
    }
}