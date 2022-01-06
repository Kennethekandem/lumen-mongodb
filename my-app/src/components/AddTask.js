import { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Please enter a task')
            return
        }
        onAdd({
            text,
            day,
            reminder
        });
        setText("");
        setDay("");
        setReminder(false);

    }
    return(
        <form action="" className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="name">Task Name</label>
                <input type="text"
                       value={text}
                       onChange={(e) => setText(e.target.value)}
                       placeholder="Task Name"/>
            </div>
            <div className="form-control">
                <label htmlFor="name">Day & Time</label>
                <input type="text"
                       value={day}
                       onChange={(e) => setDay(e.target.value)}
                       placeholder="Add day"/>
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="name">Set Reminder</label>
                <input type="checkbox"
                       value={reminder}
                       checked={reminder}
                       onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" className='btn btn-block' value="Save Task"/>
        </form>
    )
}

export default AddTask;
