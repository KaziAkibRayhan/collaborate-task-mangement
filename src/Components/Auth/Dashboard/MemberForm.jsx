import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Input, Button } from 'antd';
import { addMember } from '../../../Redux/User/memberSlice';

const MemberForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    const handleAddMember = () => {

        if (email.trim() === '') {
            return;
        }

        dispatch(addMember({ email }));
        setEmail('');
    };

    return (
        <div>
            <h3>Add a Member</h3>
            <Input
                type="email"
                placeholder="Member Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="primary" onClick={handleAddMember}>
                Add Member
            </Button>
        </div>
    );
};

export default MemberForm;
