const prompt = require("prompt-sync")({ sigint: true });

class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  addChild = (node) => {
    let limit = 2;
    // let childrenNum = 0;
    if (this.children.length <= limit) {
      this.children.push(node);
      //   childrenNum++;
    } else {
      console.log(`You have to let this child ${this.children} go`);
    }
  };
  removeChild = (node) => {
    this.children = this.children.filter((child) => child !== node);
  };

  traverse = () => {
    let nodes = [this];
    while (nodes.length > 0) {
      let currentNode = nodes.pop();
      console.log(currentNode.data);
      nodes = [...nodes, ...currentNode.children];
    }
  };
}

let childFullName = prompt("Enter child full name. Enter done if you finish");
childFullName = str.split(" ");
reversed = childFullName.reverse();

while (childFullName !== "done") {
  const familyName = new TreeNode(reversed[0]);
  const Father = new TreeNode(childFullName[1]);
  familyName.addChild(Father);
}

const child = new TreeNode(childFullName[2]);
Father.addChild(child);

familyName.traverse();
