pub fn run() {

    // if/else
    let age: u8 = 21;
    let check_id: bool = true;
    let knows_person_of_age: bool = true;

    if  age >= 21 && check_id || knows_person_of_age {
        println!("Bartender: What will you like to drink");
    }
    else if age < 21 && check_id {
        println!("Bartender: Sorry, you have to leave");
    } else {
        println!("Bartender: I will need to see your ID");
    }

    // shorthand if/else
    let is_of_age = if age >= 21 { true } else { false };
    println!("Is of age: {}", is_of_age);
}
