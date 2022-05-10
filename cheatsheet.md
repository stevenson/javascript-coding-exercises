## A. Personal Goal for Good Code
1. maintenable
    1. readble
2. scalable 
    1. time complexity
        - speed - execution time
        - affected by
            - operations
            - comparison
            - looping
            - outside function calls
    2. space complexity
        - memory - storage used
            - variables
            - data structures
            - function calls
            - allocations

## B. Big O Summary
1. **O(1)** - Constant
    - no loops
2. **O(log N)** - Logarithmic
    - usually searching algorithms have log n if they are sorted (Binary Search)
3. **O(n)** - Linear
    - for loops, while loops through n items
4. **O(n log(n))** - Log linear
    - usually sorting operations
5. **O(n^2)** - Quadratic
    - every element in a collection needs to be compared to ever other element. Two nested loops
6. **O(2^n)** - Exponential
    - recursive algorithms that solves a problem of size N
8. **O(n!)** - Factorial
    - you are adding a loop for every element

## C. Data Structures
### 1.Array
- Basic Functions
    1. pop *O(1)* 
    2. lookup *O(1)*
    3. push *O(1)*
        - append for dynamic arrays - *O(1)* to *O(n)*
        - in case they need to reallocate space
    4. unshift *O(n)* 
        - needs to move all the rest of the contents
    5. splice *O(n)* 
        - we loop through half of the array
- Strengths
    - good for fast lookups, push, or pop
    - good for ordered data
- Weaknesses
    - slow for inserts (you need to shift things)
    - slow for deletes (you need to shift things)
    - for most use of hashtables it may add to space complexity though saving on time complexity
- exercises:
    - https://leetcode.com/problems/two-sum/submissions/
    - https://leetcode.com/problems/maximum-subarray/description/
    - https://leetcode.com/problems/move-zeroes/description/
    - https://leetcode.com/problems/contains-duplicate/description/
    - https://leetcode.com/problems/rotate-array/description/
### 2. Hash Tables
- hash maps / key value pair 
- objects in js are basically hash tables
    - js also has maps and sets
- Basic Functions
    - insert - *O(1)* to *O(n)*
    - delete - *O(1)* to *O(n)*
    - search - *O(1)* to *O(n)*
- strengths:
    - generally fast insertion and lookups and flexible keys
- weakness:
    - there could be collision that would need resolution
    - has no concept of order
    - slow key iteration
### 3. Linked Lists
- allows access to the elements via traversal instead of index
- Basic Functions
    - prepend - *O(1)*
    - append - *O(1)*
    - lookup - *O(n)*
    - search - *O(n)*
    - delete - *O(n)*
- types
    - singly linked 
    - doubly linked
        - consumes more memory
- strengths
    - fast insertion and deletion if it is at the ends
        - does not have the problem of collision
        - it does not have the shift problem of arrays
    - there is order
    - ths size is flexible
- weakness
    - slow lookup
    - large memory size
### 4. Stacks and Queues
#### a. Stacks
- last in first out (LIFO)
- Basic Functions
    - pop *O(1)* 
    - push *O(1)*
    - peek *O(1)*
    - lookup - *O(n)*
- strengths:
    - fast operations 
    - ordered
- weakness:
    - single access
    - slow lookup
- examples: 
    - undo button
    - call stack
#### b. Queues
- First in first oput (FIFO)
- Basic Functions
    - dequeue / pop *O(1)* 
    - enqueue / push *O(1)*
    - peek *O(1)*
    - lookup - *O(n)*
- strengths:
    - fast operations 
    - ordered
- weakness:
    - it is slow when implemented using arrays because we always work with the 0th index causing every insert to shift the whole array.
    - single access
    - slow lookup
- examples: 
    - push based services - SQS
    - message queues
### 5. Binary trees
- a type of tree (parent-child relationship) which only has 2 children
    - examples: DOM, family trees, comment, abstract syntax tree
- Types of Binary Trees
#### a. perfect binary tree
- A perfect binary tree is a type of binary tree in which every internal node has exactly two child nodes and all the leaf nodes are at the same level.
- level n of a binary tree has 2 ^ nodes
    - 0 has 2^0 =1
    - 1 has 2^1 = 2
    - 2 4
    - 3 8   
- the number of nodes double every depth
- the number of leaves = other nodes +1
- the total nodes = 2^h - 1
    - the number of nodes = log (nodes) = log n
    - this means the number of decisions we would need to make at most is log n
#### b. full binary tree
- A full Binary tree is a special type of binary tree in which every parent node/internal node has either two or no children. It is also known as a proper binary tree. 
#### c.  complete binary tree
- A complete binary tree is a binary tree in which all the levels are completely filled except possibly the lowest one, which is filled from the left. A complete binary tree is just like a full binary tree, but with two major differences. All the leaf elements must lean towards the left.
#### d. binary search tree
- each node cannot have more thant 2 children
- all right child are > root
- all left child are < root
- strengths:
    - Better than O(n) for search
        - binary search trees are great for searches
        - bst have an O(log n) search speed
        - unbalanced bst are searched in O(n)
        - a balanced bst are searched in O(log n)
    - the tree preserves relationships
- weakness
    - it has no O(1) operations
    - the operations are almost always O(log n) when balanced
- Special BST for balancing:
    1. AVL tree
    2. Red Black tree
#### e. heap
-  a heap is a complete binary tree with the parent always being either always higher or lower than the children... hence there is the max heap or min heap.
- unlike a binary tree we do not have to rebalance a binary heap. it is always left to right insersion. (this means they can be easily implemented in arrays.)
- special types
    1. priority queues
        - from the top left then right
        - strength:
            - find max and find min are *O(1)*
            - insertion is done in order ( there is a priority for insertion)
            - fast insert
            - great in finding hte max or minimum
        - weakness
            - slow insert
#### f. trie
- prefix tree
- it is useful for autocompletion and suggesting things
- strengths:
    - finding a word depends on the length of the word
### 6. Graphs
- strength:
    - good for modelling relationship (neo4j)
- weakness
    - it is slow and big and might be expensive to implement


## D. Problem Solving
### 1. Given
    a. collection 
        - are they sorted
        - what type of values do they have
            1. numbers - are they always positive?
    b. consider edge scenarios
        - null, empty, zeros
        - missing inputs parameters
        - large inputs
    c. consider async codes
### 2. consider using recursion
    a Strengths
        - recursion can keep your code dry
        - recursion can increase readability
    b weakness
        - recursion uses a large stack
        - anything that can be done recursively can be done iteratively
    c. when to use recurssions:
        i. everytime you are using a tree or converting a tree, use recursion
        ii. it is good for divide and conquer type of questions.
            if a problem can be divided into subproblems that are as follows:
            - subproblems are smaller instances of the same problem.
            - subproblems are identical in nature.
            - the solution to each subproblem can be combined to solve the problem at hand.
    d. writing recurssion:
        i. write a base case which will end the recursion
        ii. remember to return the base case so it will be bubbled up.
    c. recurssion optimization
        - recursion optimization: tail call optimization
## E. sorting algorithms
### 1. considerations
    - when comparing (ie javascript )
        - comparing string uses unicode most of the time
        - there might be issues with languages that have a lot of special characters
        - the comparison is affected by the browser 
        - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    - when dealing with large number of items, sorting will need to deal with that large set
### 2. Simple Comparison Sort 
    a. **bubble sort**
        i. algo
            - bubble up the largest value
            - example
                - 6 5 3 1 8 7 2 4   - 0 --> n
                - 5 6 3 1 8 7 2 4
                - 5 3 6 1 8 7 2 4
                - 5 3 1 6 8 7 2 4
                - 5 3 1 6 7 8 2 4
                - 5 3 1 6 7 2 8 4
                - 5 3 1 6 7 2 4 8   
        ii strengths:
            - useful for teaching
        iii weakness:
            - inefficient and not really used
    b. **selection sort** 
        i. algo
            -
            - example            
        ii strengths:
            - useful for teaching
        iii weakness:
            - inefficient and not really used
    c. **insertion sort**
        i. algo:
            - given 6 5 3 1 8 7 2 4 0 - 
                - 6 
                - 5 6 
                - 3 5 6
                - 1 3 5 6
                - 1 3 5 6 8
                - 1 3 5 6 7 8
                - 1 2 3 5 6 7 8
                - 1 2 3 4 5 6 7 8
        ii strengths:
            - uses very little space
            - is fast in scenarios where the inputs are very small in size and partially sorted
        iii weakness:
### 3. Divide and Conquer Comparison Sort
    a. **merge sort**
        i. algo
            - divide the items into groups of 1
        ii.strength
            - it is stable
                -https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important
            - it is fast O(n log n)
            - good when you dont care about space complexity
        iii. weakness
            - it takes a larger space complexity O(n)
    b. **quicksort**
        i. algo
            - it uses a pivoting technique
                - 3 7 8 5 2 1 9 5 4 - pick a random pivot 4
                    - all number less than 4 at its left and higher than 4 to the right
                - 3 7 8 5 2 1 9 5 4 - 3 v 4 ok
                - 3 7 8 5 2 1 9 5 4 - 7 v 4 pivot
                    - move 4 left
                    - move 7 to 4's position
                    - move 5 to 7's position
                    - 3 5 8 5 2 1 9 4 7
                - 3 5 8 5 2 1 9 4 7 - 5 v 4 pivot
                - 3 9 8 5 2 1 4 5 7 - 9 v 4 pivot
                - 3 1 8 5 2 4 9 5 7 - 1 v 4 ok
                - 3 1 8 5 2 4 9 5 7 - 8 v 4 pivot
                - 3 1 2 5 4 8 9 5 7 - 2 v 4 ok
                - 3 1 2 5 4 8 9 5 7 - 5 v 4 pivot
                - 3 1 2 4 5 8 9 5 7 - 4 is in the right position
                    - left - 
                        - 3 1 2 - pivot at 2
                        - 3 1 2 - 3 v 2 - pivot
                        - 1 2 3 - 1 v 2 - ok
                    - right
                        - 5 8 9 5 7 - pivot at 7
                        - 5 8 9 5 7 - 5 v 7 ok
                        - 5 8 9 5 7 - 8 v 7 pivot
                        - 5 5 9 7 8 - 5 v 7 ok
                        - 5 5 9 7 8 - 9 v 7 pivot
                        - 5 5 7 9 8 - divide and conquer
                            - left 
                                - 5 5 - ok
                            - right
                                - 9 8
                                - 8 9 - ok
                        -5 5 7 8 9
                    -1 2 3 4 5 5 7 8 9
        ii. strengths
            -
        iii. weakness
            - worst case is really bad O(n^2)
                - you need to pick the right pivot
    c. **Heapsort**
        i. algo
            - https://brilliant.org/wiki/heap-sort/
            - kinda similar to mergesort and quick sort but has better space complexity
            - 
        ii.strength
            - space complexity O(1) - sorts in place
        iii. weakness
            - slower than quick sort in most cases
### 4. non comparison sort
    - leverages how data is stored 0's and 1's 
    - counting sort and radix sort are examples of this
        - it only works with numbers within a specific type of data
    - it is not that much faster than O(n log n)  --- O(nk)
## F. search algorithms
### 1. Linear Search - O(n)
    - sequentialy search through the list
### 2. Binary Search - O(log n)
    - if the contents are sorted, we can discard half the items.
        - we can keep going to the middle index
    - Strength
        - organizing the storage keeps each step simpler maintaining a BST lets the search go faster
    - Weakness
        - if we still don't have a Binary Search Tree, we might need to visit every node
### 3. Graphs and Traversals - going through each node
    - this could be more expensive O(n) - all traversal is O(n)
    a. Unweighted Traversals
        - https://visualgo.net/en/dfsbfs
        i.**BFS** - breadth first search
            - start with the root node and move left to right in each level
            - strengths
                - it is very good for the shortest path (find the closer nodes)
                    - recommendation engines
                        - what are the closest relation to another node
                        - closest to something you bought
                    - basis for peer to peer networks
                        - closest friend on fb
                        - what friends should be recommended to me
                    - maps
                - if the node is likely at the higher level of the tree... it works better
                - it is good for deeper trees because DFS is weak agains deep trees
                - useful in validating a binary search tree
            - weakness
                - higher memory requirement        
        ii. **DFS** - depth first search
            - go down to the leaf and go up when the leaf is found
            - types:
                1. **inOrder**
                    - allows us to get the oder based on sorting
                2. **preOrder**
                    - allows us to get the values and recreate the tree
                3. **postOrder**
                    - children come before the parent
            - strength
                - lower memory requirement
                    - a recursive implementation costs O(h) where h is the hight of the tree
                    - iterative implementation costs O(n) number of nodes complexity
                - if the node is likely at the lower level of the tree... it works better
                - answers the question: does the path exists?
                - might work better with a very wide tree (not a binary tree) 
                    - BFS needs to track the nodes of the current level
            - weakness            
                - it can be slow for very deep trees
                - it is NOT very good for the shortest path
    b. Shortest Path on a weighted Graph:
        i **Bellman-Ford**
            - strength
                - can accomodate negative weights
            - weakness
                - it is not the most efficient algorithm O(n^2) in time complexity
        ii. **Dijkstra**
            - strength
                - faster than bellman ford
            - weakness
                - cannot accomodate negative weights
## G. Optimization
### 1. dynamic programming
    - memoization - Caching solutions to subproblems






## V. Reference 1
- https://www.bigocheatsheet.com/
- https://visualgo.net/en/bst
- https://www.toptal.com/developers/sorting-algorithms
- brilliant.org
