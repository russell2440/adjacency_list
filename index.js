class graph{
  constructor() {

  }
  add_vertex(node){

  }
  add_edge(node1, node2){

  }
  show_connections(){

    //console.log(node + "-->" + connections);
  }
}

console.log("I LOVE myself!!!: graph class unit test");

var cg = new graph();

cg.add_vertex('0');
cg.add_vertex('1');
cg.add_vertex('2');
cg.add_vertex('3');
cg.add_vertex('4');
cg.add_vertex('5');
cg.add_vertex('6');

cg.add_edge('3', '1');
cg.add_edge('3', '4');
cg.add_edge('4', '2');
cg.add_edge('4', '5');
cg.add_edge('5', '6');
cg.add_edge('1', '2');
cg.add_edge('1', '0');
cg.add_edge('2', '0');

cg.show_connections();