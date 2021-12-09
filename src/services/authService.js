const register = async (data) => {
    const user = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return user;
}

const login = async (email, password) => {

    const data = {
        email,
        password
    }

    const user = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return user;
}


module.exports = {
    register,
    login
}