export const downloadFile = async (id) => {
    // console.log("response")
    const response = await fetch(`http://localhost:8080/api/download/${id}`, {
        method: 'GET',
        headers: {
            'authorization': "Bearer " + localStorage.getItem('token')
        }
    })
    // console.log(response)
    return response
}

export const getFiles = async (setData) => {
    const response = await fetch(`http://localhost:8080/api/files-user`, {
        method: 'GET',
        headers: {
            'authorization': "Bearer " + localStorage.getItem('token')
        }
    })
    setData(await response.json())
}

export const getUserFileCount = async (setData) => {
    const response = await fetch(`http://localhost:8080/api/count-file`, {
        method: 'GET',
        headers: {
            'authorization': "Bearer " + localStorage.getItem('token')
        }
    })
    setData(await response.json())
}

export const getAllUsers = async (setData) => {
    const response = await fetch(`http://localhost:8080/api/users`, {
        method: 'GET',
        headers: {
            'authorization': "Bearer " + localStorage.getItem('token')
        }
    })
    setData(await response.json())
}

export const deleteUser = async (id) => {
    const response = await fetch(`http://localhost:8080/api/users/${id}`, {
        method: 'DELETE',
        headers: {
            'authorization': "Bearer " + localStorage.getItem('token')
        }
    })
    console.log("DELETE USER")
    return response.json()
}

export const loginFetch = async (name, email, password) => {
    const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'x-access-token': location.Storage('')
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    })
    return response
}
export const getLaunchById = (id) => (
    fetch(`http://localhost:8080/file/${id}`)
        .then(res => res.json())
)

export const deleteFile = async (id) => {
    const response = await fetch(`http://localhost:8080/api/delete-file/${id}`, {
        method: 'DELETE',
        headers: {
            'authorization': "Bearer " + localStorage.getItem('token')
        }
    })
    return response.json()
}

export const uploadFile = async (formData) => {
    const response = await fetch(`http://localhost:8080/api/create-file`, {
        method: 'POST',
        headers: {
            'authorization': "Bearer " + localStorage.getItem('token')
        },
        body: formData
    })
    return response.json()
}