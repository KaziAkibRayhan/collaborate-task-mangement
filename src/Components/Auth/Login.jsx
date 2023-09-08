import { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const [form] = Form.useForm();
    const [clientReady, setClientReady] = useState(false);


    useEffect(() => {
        setClientReady(true);
    }, []);
    const navigate = useNavigate();
    const onFinish = async (values) => {
        try {
            const storedUserData = JSON.parse(localStorage.getItem('user'));

            if (storedUserData && storedUserData.email === values.email) {
                navigate('/dashboard');
            } else {
                message.error('Login failed. Please check your email and password.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            message.error('An error occurred during login. Please try again later.');
        }
    };

    return (
        <div style={{ width: '50%', height: '100vh', margin: "0 auto", background: "gray", padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Form form={form} name="horizontal_login" onFinish={onFinish}>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
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
                            Log in
                        </Button>
                    )}
                </Form.Item>
                <Link style={{ color: 'white' }} to={'/signup'}> Do not have an account SignUp</Link>
            </Form>
        </div>
    );
};
export default Login;