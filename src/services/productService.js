const getAll = async () => {
    const response = await fetch('http://localhost:5000/api/data/products');
    const data = await response.json();

    return data;
}

const getById = async (id) => {
    const response = await fetch('http://localhost:5000/api/data/products/' + id);
    const data = await response.json();

    return data
}

const create = async (item, token) => {
    const res = await fetch('http://localhost:5000/api/data/products', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
        body: JSON.stringify(item)
    });

    const data = await res.json();

    if (res.ok) {
        return data;
    } else {
        throw data;
    }
}

const edit = async (item, pid, token) => {
    const res = await fetch('http://localhost:5000/api/data/products/' + pid, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
        body: JSON.stringify(item)
    });

    const data = await res.json();

    if (res.ok) {
        return data;
    } else {
        throw data;
    }
}

const remove = async (pid, token) => {
    const res = await fetch('http://localhost:5000/api/data/products/' + pid, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        }
    });

    if (res.ok) {
        return 'Success';
    } else {
        throw new Error('Something happened');
    }
}

const getMany = async (array, token) => {
    const res = await fetch('http://localhost:5000/api/data/products/wishlist', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
        body: JSON.stringify(array)
    });

    if (res.ok) {
        return res.json();
    } else {
        throw new Error('Something happened');
    }
}

module.exports = {
    getAll,
    getById,
    create,
    edit,
    remove,
    getMany
}