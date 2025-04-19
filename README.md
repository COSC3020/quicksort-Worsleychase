# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.


# Solution

Worst case only happens when the pivot is the smallest or largest element. This means that each stack iteration the problem size is only reduced by 1 element. We then need to parse over the entire array again, which is linear (O(n)), this leads to the recurrence relation:

$$ T(n) = T(n-1) + O(n)$$

Expand to get:

$T(n) = (n−1) + (n−2) + T(n−2)$

We can see the pattern forming, yielding a simpler equation:

$T(n) = \frac{(n-1)(n-2)}{2} \approx \frac{n^2-n}{2}$

The fastest growing term here is $n^2$, therefore our worst case runtime complexity is:

$$\Theta(n^2)$$

# Disclaimer

I used [this](https://en.wikipedia.org/wiki/Quicksort) to help with the overall theory and designs behind quicksort.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
