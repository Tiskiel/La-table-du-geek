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

export const id = () => {
    const id = nanoid()
    return id
}