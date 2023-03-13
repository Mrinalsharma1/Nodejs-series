import React from 'react'

const Auth = () => {
    const auth = async () => {
        console.log('hello world')
        const response = await fetch(`http://localhost:5000/user/auth`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth_token')
            },
            // redirect: 'follow',
            // referrerPolicy: 'no-referrer',
            body: JSON.stringify({ name: 'sagar', email: 'sagar', password: 'root' })
        });
        const result = await response.json()
        console.log(result.msg === localStorage.getItem('auth_token'))
    }
    return (

        <div>Auth
            <div>
                <button onClick={auth}>
                    Check
                </button>
            </div>

        </div>
    )
}

export default Auth