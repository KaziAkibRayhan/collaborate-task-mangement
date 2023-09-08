import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TeamForm from './TeamForm';
import MemberForm from './MemberForm';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../../Redux/User/userSlice';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [tasks, setTasks] = useState([]);

    const handleTaskAdded = (task) => {
        setTasks([...tasks, task]);
    };

    const handleLogout = () => {
        dispatch(clearUser());
        localStorage.removeItem("user");
        navigate('/')
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>Collaborative Task Management App</h1>
                <Button onClick={handleLogout}>Logout</Button>
            </div>
            <TaskForm onTaskAdded={handleTaskAdded} />
            <TaskList tasks={tasks} />
            <TeamForm />
            <MemberForm />
        </div>
    );
};

export default Dashboard;
