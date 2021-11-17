// Vectors - Are resizable arrays

use std::mem;

pub fn run() {

    let mut numbers: Vec<i32> = vec![1, 2, 3, 4, 5];

    // reassign values
    numbers[2] = 20;

    // Add onto vector
    numbers.push(5);
    numbers.push(6);

    // pop off last value
    numbers.pop();

    println!("{:?}", numbers);

    // get single value
    println!("Single value: {}", numbers[0]);

    // get array length

    println!("Vector length: {}", numbers.len());

    // array allocated stack
    println!("This vector occupies {} bytes", mem::size_of_val(&numbers));

    // get slice
    let slice: &[i32] = &numbers;
    println!("Slice: {:?}", slice);

    // loop through vector values
    for x in numbers.iter() {
        println!("Numbers: {}", x);
    }

    // loop and mutate values
    for x in numbers.iter_mut() {
        *x *= 2;
    }
    println!("Number vec: {:?}", numbers)

}
