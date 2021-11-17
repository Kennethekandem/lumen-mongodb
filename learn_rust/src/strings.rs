pub fn run() {

    // Growable string
    let mut hello = String::from("hello ");

    // get string length
    println!("Length: {}", hello.len());

     // Push char
    hello.push('W');

    // push string
    hello.push_str("orld");

    // get capacity in bytes
    println!("capacity: {}", hello.capacity());

    // is empty
    println!("Is empty: {}", hello.is_empty());

    // contains substrings
    println!("Contains 'World' {}", hello.contains("World"));

    // replace
    println!("Replace: {}", hello.replace("World", "there"));

    // Loop through string by whitespace
    for word in hello.split_whitespace() {
        println!("{}", word);
    }

    // Create string with capacity
    let mut s = String::with_capacity(10);
    s.push('a');
    s.push('b');

    // assertion testing
    assert_eq!(2, s.len());
    assert_eq!(10, s.capacity());

    println!("{}", s);
}
