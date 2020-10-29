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
        let block;
        
        if (this.selector.indexOf('.',0) === 0){
           block = document.createElement('div');
           block.classList.add(className);
           document.body.append(block);
        }
        else if (this.selector.indexOf('#',0) === 0) {
           block = document.createElement('p');
           block.id = className;
           document.body.append(block);
        }
        block.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};`;
    };
    //return createElement();
}
//selector,height,width,bg,fontSize
let start = new DomElement('#block','100px','100px','green','28pt');
start.createElement();
console.log('start: ', start);
