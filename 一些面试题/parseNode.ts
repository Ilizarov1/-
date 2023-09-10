// 数组转树结构
const arr = [
    {
        id: 2,
        name: '部门B',
        parentId: 0
    },
    {
        id: 3,
        name: '部门C',
        parentId: 1
    },
    {
        id: 1,
        name: '部门A',
        parentId: 2
    },
    {
        id: 4,
        name: '部门D',
        parentId: 1
    },
    {
        id: 5,
        name: '部门E',
        parentId: 2
    },
    {
        id: 6,
        name: '部门F',
        parentId: 3
    },
    {
        id: 7,
        name: '部门G',
        parentId: 2
    },
    {
        id: 8,
        name: '部门H',
        parentId: 4
    }
];

class TreeNode {
    id: number;
    name: string;
    children: TreeNode[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.children = [];
    }
}

interface MyNode {
    id: number;
    name: string;
    parentId: number;
}

function parseArray2Tree(array: MyNode[]) {
    const nodeMap = new Map<number, TreeNode>();
    array.map((val) => {
        if (!nodeMap.get(val.id)) {
            nodeMap.set(val.id, new TreeNode(val.id, val.name));
        }
    });
    array.map((val) => {
        if (!nodeMap.get(val.parentId)) {
            nodeMap.set(val.parentId, new TreeNode(val.parentId, 'root'));
        }
        nodeMap.get(val.parentId)?.children.push(nodeMap.get(val.id)!);
    });

    return nodeMap.get(0);
}

console.log(parseArray2Tree(arr));
