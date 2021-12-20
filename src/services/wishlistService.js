const create = async (data, token) => {
    const response = await fetch('http://localhost:5000/api/data/wishlist', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
        return result;
    } else {
        throw result;
    }
}

const getById = async (id) => {
    const response = await fetch('http://localhost:5000/api/data/wishlist/' + id)
    const data = await response.json();

    return data
}

const remove = async (userId, pid, token) => {
    const response = await fetch('http://localhost:5000/api/data/wishlist', {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
        body: JSON.stringify({ userId, pid })
    });
    const data = await response.json();
    
    if (response.ok) {
        return data;
    } else {
        throw new Error('Something happened');
    }
}


module.exports = {
    create,
    getById,
    remove
}