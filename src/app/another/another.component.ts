import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {

  constructor() { }

  @Input()
  data;

  ngOnInit() {
    this.buildDom(this.data);
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

}
