import { Input, Button, Checkbox } from 'antd';
import { useState } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@hooks';


const LoginPage = () => {

    const { login } = useAuth();

    const [email, setEmail] = useState('fkendir');

    const [emailStatus, setEmailStatus] = useState<"" | "warning" | "error" | undefined>('');

    const [password, setPassword] = useState('fkendir');

    const [passwordStatus, setPasswordStatus] = useState<"" | "warning" | "error" | undefined>('');

    const [rememberMe, setRememberMe] = useState(true);

    const navigate = useNavigate();

    const handleLogin = async () => {

        if (!email) {
            setEmailStatus('error');
            return;
        }

        if (!password) {
            setPasswordStatus('error');
            return;
        }

        setEmailStatus('');
        setPasswordStatus('');

        await login(email, password);
    };


    return (
        <>
            <Input placeholder="Username" className='!mb-4' value={email} required status={emailStatus} onChange={(e) => setEmail(e.target.value)} />

            <Input.Password className='!mb-4' required value={password} status={passwordStatus}
                placeholder="Password" onChange={(e) => setPassword(e.target.value)}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />

            <div className='flex flex-row justify-between mb-4'>
                <Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}>Remember Me</Checkbox>

                <a onClick={() => navigate('/auth/forgot-password')} className='text-blue-500 cursor-pointer'>Forgot Password?</a>

            </div>


            <Button type="primary" className='w-full' onClick={() => handleLogin()}>Login</Button>

        </>
    );

};

export default LoginPage;
