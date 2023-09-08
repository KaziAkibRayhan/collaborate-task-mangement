// TeamForm.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Input, Button } from 'antd';
import { addTeam } from '../../../Redux/User/teamsSlice';

const { TextArea } = Input;

const TeamForm = () => {
    const dispatch = useDispatch();
    const [teamName, setTeamName] = useState('');
    const [teamDescription, setTeamDescription] = useState('');

    const handleAddTeam = () => {

        if (teamName.trim() === '') {
            return;
        }

        dispatch(addTeam({ name: teamName, description: teamDescription }));
        setTeamName('');
        setTeamDescription('');
    };

    return (
        <div>
            <h3>Add a Team</h3>
            <Input
                placeholder="Team Name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
            />
            <TextArea
                placeholder="Team Description"
                value={teamDescription}
                onChange={(e) => setTeamDescription(e.target.value)}
                autoSize={{ minRows: 2 }}
            />
            <Button type="primary" onClick={handleAddTeam}>
                Add Team
            </Button>
        </div>
    );
};

export default TeamForm;
