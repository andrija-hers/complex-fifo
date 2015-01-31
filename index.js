var List = require('complex-list');

function trueReturner(){
  return true;
}

function FIFO(){
  List.call(this,trueReturner);
  this.tail = this.head;
}
FIFO.prototype = Object.create(List.prototype,{constructor:{
  value: FIFO,
  enumerable: false,
  configurable: false,
  writable: false
}});
FIFO.prototype.destroy = function(){
  this.tail = null;
  List.prototype.destroy.call(this);
};
FIFO.prototype.push = function(obj){
  this.add(obj);
};
FIFO.prototype.pop = function(){
  var ret = this.head.content;
  this.removeOne(this.head);
  return ret;
};


module.exports = FIFO;
