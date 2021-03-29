import { useState } from 'react';

const AdminLogin = () => {
    const [username, setUserName] = useState([]);
    const [password, setPassword] = useState([]);

    const _handleSubmit = async (e) => {
        e.preventDefault();
        const adminData = await fetch('http://127.0.0.1:3232/login/adminlogin', {
            method: 'Get',
            headers: { 'Content-Type': 'application/json'},
            Body: JSON.stringify({
                username: username,
                password: password,
            })
        }).then(
            (response) => (response.json())
        );
        console.log("Here is the admin data:", adminData);
    }

    const _onUserName = (e) => {
        setUserName(e.target.value)
    }
        
     
    
    const _onPassword = (e) => {
        setPassword(e.target.value)
    }
    
        return (
            <div>
                 <form onSubmit={_handleSubmit}>
                            <label>
                                <input 
                                name="name"
                                placeholder="Enter your name"
                                type="text"
                                onChange={_onUserName}
                                />
                                &nbsp;
                                <input 
                                name="password"
                                placeholder="Enter password"
                                type="password"
                                onChange={_onPassword}
                                />
                            </label>
                                <button type="submit"> Login </button>
                        </form>
                
            </div>
        )
}

export default AdminLogin