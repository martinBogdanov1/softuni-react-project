const register = async (data, path) => {
    const res = await fetch('http://localhost:5000/api/users' + path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    
    let jsonResult = await res.json();


    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
}

const login = async (email, password, path) => {

    const data = {
        email,
        password
    }

    const res = await fetch('http://localhost:5000/api/users' + path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
}


module.exports = {
    register,
    login
}