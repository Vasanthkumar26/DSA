# Sample tree
#           A
#   B               C
# D     E       F       G

# DFS - Depth First Search is of three types

# 1. Pre-Order
# A -> B -> D -> E -> C -> F -> G
# 2. In-Order
# D -> B -> E -> A -> F -> C -> G
# 3. Post-Order
# D -> E -> B -> F -> G -> C -> A

# BFS - Breadth First Search
# A -> B -> C -> D -> E -> F -> G

class BinarySearchTreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
    
    def add_child(self, data):
        if data == self.data:
            return
        if data < self.data:
            if self.left:
                self.left.add_child(data)
            else:
                self.left = BinarySearchTreeNode(data)
        else:
            if self.right:
                self.right.add_child(data)
            else:
                self.right = BinarySearchTreeNode(data)
    
    def in_order_traversal(self):
        elements = []
        return elements