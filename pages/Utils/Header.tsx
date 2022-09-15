import React from 'react';
import "@css/Utils/Header.css";
import { useNavigate } from 'react-router';

const Header = () => {
    const navigate = useNavigate();
    const onClickLogo = () => {
        navigate('/');
        location.reload();
    }
    const onClickAuthBtn = (mode: string) => {
        if (mode === 'signup') navigate('/signup');
        else navigate('/login');
    }
    return (
        <div className='header'>
            <div className='header-wrapper'>
                <div className='header-logo' onClick={onClickLogo}>Quv Board</div>
                <div className='header-auth_box' >
                    <div className='button flex_vertical_middle' onClick={() =>
                        onClickAuthBtn('login')
                    }>
                        <div>Login</div>
                    </div>
                    <div className='button flex_vertical_middle' onClick={() =>
                        onClickAuthBtn('signup')
                    }>
                        <div>SignUp</div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Header;