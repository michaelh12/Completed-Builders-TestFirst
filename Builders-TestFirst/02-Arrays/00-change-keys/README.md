## Change Keys

Write a function, `changeKeys`, which will take an array of musical keys and transpose those keys a specified number of steps.

In music the chromatic scale has the following notes `[A, A#, B, C, C#, D, D#, E, F, F#, G, G#]`.  A '#' is "sharp" notation.  A#, or A sharp, is in between A and B.  Your function `changeKeys()` should take an array of notes and a number between 1-9 as the number of steps. The function should return an array with all the notes in the array transposed up that many steps. 

#### Examples


`var keys = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];`

- INPUT: `changeKeys(['E', 'F'], 1)`
- OUTPUT: `['F', 'F#']`

- INPUT: `changeKeys(['G'], 5)`
- OUTPUT: `['C']`