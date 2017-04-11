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


    getChildNode ( content, parent ) {
        content.forEach ( domObject => {
            let parentTag = domObject[ 'tag' ];
            let contentCh = domObject[ 'content' ];
            let node:any;
            if(parentTag){
                // сделаем родительский элемент
                node = document.createElement ( parentTag );
                // установим атрибуты если они есть
                if ( domObject && domObject[ 'attributes' ] ) {
                    let atributes = domObject[ 'attributes' ];
                    Object.keys ( atributes ).forEach ( attr => {
                        node.setAttribute(attr,atributes[attr])
                    } );
                }
            }else{
                node = document.createTextNode(domObject['text']);
            }

            parent.appendChild ( node );
            if ( parentTag && contentCh ) {
                this.getChildNode ( contentCh , node );
            }
        } )

    }


    buildDom ( domObject : any ) {
        console.log ( domObject );

        // получим родителький элемент
        let parentTag = domObject[ 'tag' ];

        // сделаем родительский элемент
        let node = document.createElement ( parentTag );

        // получил элемент куда будем вставлять
        let parentNode = document.getElementById ( 'content' );
        // вставим данные на страницу
        parentNode.appendChild ( node );
        // получим данные о дочерних элементах


        this.getChildNode ( domObject[ 'content' ], node );
    }


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

                    this.buildDom ( res );
                }


            } );

    }

    ngOnInit () {


    }

}
