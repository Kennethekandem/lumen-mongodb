pub fn run() {
    let name = "Kenneth";
    let mut age = 37;
    println!("My name is {} and I am {}", name, age);

    age = 38;

    println!("My name is {} and I am {}", name, age);

    // Define Constant
    const ID: i32 = 001;

    println!("ID: {}", ID);

    // assign multiple vars
    let (my_name, my_age) = ("Kenneth", 22);
    println!("{} is {}", my_name, my_age);
}
