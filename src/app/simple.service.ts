import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';

@Injectable ()
export class SimpleService {

    constructor ( private http : Http ) { }


    /**
     * Метод возвращает настройки пользователя
     * @param id
     * @param url
     * @return {Promise<Response>}
     */
    getData ( id, url ) {
        let ApiURL = '//google.ru/api.php'; // взят из конфига
        let token = 'sdfsdfsdfsdfsdfsdfsdf'; // Какой нибуть куки который нам дали при авторизации
        let headers = new Headers ( {
            'Content-Type' : "application/json; charset=UTF-8",
            'format' : "json",
            'URI' : url + '/' + id,
            'token' : token,

        } );
        let options = new RequestOptions ( { headers : headers } );

        // Тут должно вернуться то что пришло с сервера
        // return this.http.get ( ApiURL, options ).toPromise ();

        return new Promise ( resolve => {

            let data = {
                "tag" : "div",
                "content" : [
                    {
                        "tag" : "span",
                        "attributes" : {
                            "style" : "color: red"
                        },
                        "content" : [
                            { "text" : "Enter value:" }
                        ]
                    },
                    {
                        "tag" : "input",
                         "attributes" : {
                                "type" : "text",
                                "value" : "test",
                                "style" : "color: green"
                         }
                    },
                    {
                        "tag" : "ul",
                        "attributes" : {
                            "style" : "text-align: left"
                        },
                        "content" : [
                            {
                                "tag" : "li",
                                "attributes" : {
                                    "style" : "color: red"
                                },

                                "content" : [
                                    { "text" : "Один" }
                                ]

                            },
                            {
                                "tag" : "li",
                                "attributes" : {
                                    "style" : "color: blue"
                                },
                                "content" : [
                                    { "text" : "Два" }
                                ]

                            },
                            {
                                "tag" : "li",
                                "attributes" : {
                                    "style" : "color: green"
                                },
                                "content" : [
                                    { "text" : "три" }
                                ]

                            },
                        ]

                    }
                ]
            };
            setTimeout ( () => {
                resolve ( data )
            }, 2000 );

        } );
    }



}
