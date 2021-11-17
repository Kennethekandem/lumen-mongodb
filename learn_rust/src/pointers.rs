// Pointers point to a resource in memory

pub fn run() {

    let array1: [i32; 3] = [1, 2, 3];
    let array2 = array1;

    /*
    With non-primitive, if you assign another variable to a piece of data, the first variable will no longer
     hold that value. You will need to use a reference (&) to point to the resource.
     */

    // vector
    let vec1: Vec<i32> = vec![1, 2, 3];
    let vec2 = &vec1;

    println!("Values: {:?}", (&vec1, vec2));
}
