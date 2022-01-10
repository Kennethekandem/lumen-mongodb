import {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from './components/Header';
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTask = async () => {
            const taskFromServer = await fetchTask();
            setTasks(taskFromServer);
        };
        getTask()
    }, []);

    // server url
    const url = 'http://localhost:3001/tasks';

    //fetch tasks
    const fetchTask = async () => {
        const response = await fetch(url);
        return await response.json();
    }

    //fetch task
    const fetchSingleTask = async (id) => {
        const response = await fetch(`${url}/${id}`);
        return await response.json();
    }

    // add task
    const addTask = async (task) => {
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();
        setTasks([...tasks, data]);

        /*setTasks([...tasks, {
            id: Math.floor(Math.random() * 10000) + 1,
            text: task.text,
            day: task.day,
            reminder: task.reminder
        }]);*/
    };

    // delete task
    const deleteTask = async (id) => {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
        setTasks(tasks.filter(task => task.id !== id));
    };

    // toggle reminder
    const toggleReminder = async (id) => {

        const taskToToggle = await fetchSingleTask(id);
        const updTask = {
            ...taskToToggle,
            reminder: !taskToToggle.reminder
        };
        const res = await fetch(`${url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updTask),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();
        setTasks(tasks.map(task => task.id === id ? {...task, reminder: data.reminder} : task));
        /*setTasks(tasks.map(task => {
            if (task.id === id) {
                task.reminder = !task.reminder;
            }
            return task;
        }));*/
    };

  return (
      <Router>
          <div className="container">
              <Header title='Task tracker'
                      onAdd={() => setShowAddTask(!showAddTask)}
                      showAdd={showAddTask}/>
              {showAddTask && <AddTask onAdd={addTask}/>}

              <Route path='/' exact render={() => (
                  <>
                      { tasks.length > 0 ? (<Tasks tasks={tasks}
                                                   onDelete={deleteTask}
                                                   onToggle={toggleReminder} />) : ('No task to show.')}
                  </>
              )} />
              <Route path='/about' component={About} />
              <Footer />
          </div>
      </Router>
  );
}

export default App
