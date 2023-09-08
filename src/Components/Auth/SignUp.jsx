import { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import TextArea from 'antd/es/input/TextArea';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/User/userSlice';
import { saveUserDataToLocalStorage } from '../../server/authActions';
const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [clientReady, setClientReady] = useState(false);

    // To disable submit button at the beginning.
    useEffect(() => {
        setClientReady(true);
    }, []);
    const onChange = () => {

    };
    const onFinish = (values) => {
        dispatch(setUser(values));
        saveUserDataToLocalStorage(values);
        navigate('/');
    };
    return (
        <div style={{ width: '50%', height: '100vh', margin: "0 auto", background: "gray", padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Form form={form} name="horizontal_login" onFinish={onFinish}>
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="name" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="email"
                        placeholder="email"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item
                    name="phto-link"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phto-link!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="phto-link"
                        placeholder="phto-link"
                    />
                </Form.Item>
                <Form.Item
                    name="bio"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your bio!',
                        },
                    ]}
                >
                    <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange} />
                </Form.Item>
                <Form.Item shouldUpdate>
                    {() => (
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={
                                !clientReady ||
                                !form.isFieldsTouched(true) ||
                                !!form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
                        >
                            SignUp
                        </Button>
                    )}
                </Form.Item>
                <Link style={{ color: 'white' }} to={'/'}> Alredy have an account Account? Login</Link>
            </Form>
        </div>
    );
};
export default SignUp;