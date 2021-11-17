// Structs are used to create custom data types

// Traditional Struct
/*struct Color {
    red: u8,
    green: u8,
    blue: u8
}*/

// Tuple Struct
// struct Color (u8, u8, u8);

// person struct
struct Person {
    firstname: String,
    lastname: String
}

impl Person {

    // construct person
    fn new(first: &str, last: &str) -> Person {
        Person {
            firstname: first.to_string(),
            lastname: last.to_string()
        }
    }

    // get fullname
    fn full_name(&self) -> String {
        format!("{} {}", self.firstname, self.lastname)
    }

    // set last name
    fn set_last_name(&mut self, last: &str) {
        self.lastname = last.to_string()
    }

    // name to tuple
    fn tuple(self) -> (String, String) {
        (self.firstname, self.lastname)
    }
}

pub fn run() {
    /*let mut c = Color {
        red: 255,
        green: 0,
        blue: 0
    };

    c.red = 200;

    println!("Color: {} {} {}", c.red, c.green, c.blue);*/

    /*let mut c = Color(255, 0, 0);
    c.1 = 200;

    println!("Color: {} {} {}", c.0, c.1, c.2);*/

    let mut p = Person::new("Mary", "doe");
    println!("Person full name: {}", p.full_name());
    p.set_last_name("Williams");
    println!("Person: {} {}", p.firstname, p.lastname);
    println!("Person tuple: {:?}", p.tuple())
}
