import './login.css';

function Login() {
    return (
        <div className="loginPage">
            <div className="frame">
                <div>
                    <div className="wrapImage">
                        <img src="" alt="avatar" className="avatar" />
                    </div>
                    <div>
                        <h1>Chat App</h1>
                    </div>
                </div>
                <div className="wrapper">
                    <input type="text" className="inputField" placeholder="email or phone number" />
                </div>
                <div className="wrapper">
                    <input type="text" className="inputField" placeholder="email or phone number" />
                </div>
                <div className="wrapper">
                    <input type="submit" value="Đăng nhập" />
                </div>
            </div>
        </div>
    );
}

export default Login;
