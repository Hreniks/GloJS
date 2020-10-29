'use strict';

function DomElement(selector,height,width,bg,fontSize){
    this.selector = selector;
    this.height = height;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    DomElement.prototype.createElement = function(){
        let className = selector.slice(1);
        let newDiv = document.createElement('div');
        let newP = document.createElement('p');
        
        if (selector.indexOf('.',0) === 0){
           newDiv.classList.add(className);
           document.body.append(newDiv);
           newDiv.style.height = height;
           newDiv.style.width = width;
           newDiv.style.backgroundColor = bg;
           newDiv.style.fontSize = fontSize;
           newDiv.textContent = 'div';
        }
        else if (selector.indexOf('#',0) === 0) {
           newP.id = className;
           document.body.append(newP);
           newP.style.height = height;
           newP.style.width = width;
           newP.style.backgroundColor = bg;
           newP.style.fontSize = fontSize;
           newP.textContent = 'p';
        }
    };
    //return createElement();
}
//selector,height,width,bg,fontSize
let start = new DomElement('#block','100px','100px','green','28pt');
start.createElement();
console.log('start: ', start);
