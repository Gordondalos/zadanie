import { Component, OnInit } from '@angular/core';
import { SimpleService } from "./simple.service";

@Component ( {
    selector : 'app-root',
    templateUrl : './app.component.html',
    styleUrls : [ './app.component.css' ]
} )
export class AppComponent {

    simpleService : SimpleService;

    constructor ( simpleService : SimpleService ) {
        this.simpleService = simpleService;

    }


    data:any;


    getData () {
        this.simpleService.getData ( 1, '/tags/' )
            .then ( res => {
                if ( typeof res[ "_body" ] === 'string' ) {
                    let data = JSON.parse ( res[ "_body" ] );
                    if ( data && data[ 0 ] != "AbpMUserError" ) {
                        // тут что то делаем с данными
                    } else {
                        console.log ( 'ошибка сервер ничего не вернул' );
                    }
                } else {

                    this.data = res;

                }


            } );

    }

    ngOnInit () {


    }

}
