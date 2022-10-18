import { nanoid } from "nanoid"

export const newPost = (name, id, description, url, sousCategories, userId) => {
    const post = {

        id : id,
        userId: userId,
        name : name,
        Description : description,
        imgDirect : url,
        sousCategories : sousCategories

    }
    return post
}

export const addPost = (name, id, description, url, sousCategories, userId) => {
    const post = {

        id : id,
        userId: userId,
        name : name,
        Description : description,
        imgDirect : url,
        sousCategories : sousCategories

    }
    return post
}

export const addUser = (id, username, password, lastname, name, mailadress) => {

    const user = {
        id : id,
        name : name,
        last_name : lastname,
        username : username,
        password : password,
        mailadress : mailadress
    }

    
}

export const id = () => {
    const id = nanoid()
    return id
}