## I. Personal Goal for Good Code
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

## II. Big O Summary
1. **O(1)**
    - Constant
    - no loops
2. **O(log N)**
    - Logarithmic
    - usually searching algorithms have log n if they are sorted (Binary Search)
3. **(n)**
    - Linear
    - for loops, while loops through n items
4. **O(n log(n))**
    - Log linear
    - usually sorting operations
5. **O(n^2)**
    - Quadratic
    - every element in a collection needs to be compared to ever other element. Two nested loops
6. **O(2^n)**
    - Exponential
    - recursive algorithms that solves a problem of size N
8. **O(n!)** 
    - Factorial
    - you are adding a loop for every element

## III. Data Structures
### A.Array
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
### B. Hash Tables
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
### C. Linked Lists
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
### D. Stacks and Queues
1. Stacks
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
2. Queues
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
### F. binary trees
- a type of tree (parent-child relationship) which only has 2 children
    - examples: DOM, family trees, comment, abstract syntax tree
- Types of Binary Trees
    1. perfect binary tree
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
    2. full binary tree
    3. binary search tree
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
8. **Graphs**


## IV. Problem Solving
1. Given
    1. collection 
        - are they sorted
        - what type of values do they have
            1. numbers - are they always positive?
2. consider edge scenarios
    1. null, empty, zeros
    2. missing inputs parameters
    3. large inputs
3. consider async codes

## V. Reference 1
- https://www.bigocheatsheet.com/