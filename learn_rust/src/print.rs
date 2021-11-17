pub fn run() {

    // print to console
    println!("Hello from the print.rs file");

    // Basic formatting
    println!("Number: {}", 1);
    println!("{} is a {}", "kenneth", "robot🤖");

    // Positional Arguments
    println!("{0} is from {1} and {0} likes {2}", "Kenneth", "Mars", "Science");

    // Named Arguments
    println!("{name} likes to play {activity}",
    name = "Kenneth",
    activity = "PUBG"
    );

    // Placeholder
    println!("Binary: {:b} Hex: {:x} Octal {:o}", 10, 10, 10);

    // Placeholder for debug trait
    println!("{:?}", (12, true, "hello"));

    // Basic math
    println!("10 + 10 = {}", 10 + 10);
}
