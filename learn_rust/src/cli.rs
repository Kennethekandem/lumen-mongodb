
use std::env;

pub fn run() {

    let args : Vec<String> = env::args().collect();
    let command = args[1].clone();
    let status = "100%";

    if command == "hello" {
        let name = "kenneth";
        println!("Hi {}, How are you?", name);
    } else if command == "status" {
        println!("Status is {}", status)
    } else {
        println!("That is not a valid command!");
    }

    // println!("command: {:?}", command);
}
