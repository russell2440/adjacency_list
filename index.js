class graph{
  constructor() {
    this.node_count = 0;
    this.adjacency_list = {};
  }
  add_vertex(node){
    this.adjacency_list[node] = [];
    this.node_count++;
  }
  add_edge(node1, node2){
    this.adjacency_list[node1].push(node2);
    this.adjacency_list[node2].push(node1);
  }
  show_connections(){
    const nodes = Object.keys(this.adjacency_list);
    for (let node of nodes){
      let adjacent_nodes = this.adjacency_list[node];
      let adjacent_nodes_str = "";
      let adjacent_node;
      for(adjacent_node of adjacent_nodes){
        adjacent_nodes_str += adjacent_node + " "
      }
      console.log(node + " --> " + adjacent_nodes_str);
    }
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