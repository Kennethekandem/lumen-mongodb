/*tuples groups values of different types
Max is 12 elements
*/

pub fn run() {
    let person: (&str, &str, i8) = ("kenneth", "Mass", 30);

    print!("{} is from {} and is {}", person.0, person.1, person.2)
}
