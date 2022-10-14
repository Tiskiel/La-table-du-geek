import { nanoid } from "nanoid"

export const newPost = (name, id, description, url, categories, sousCategories, userId, mangaId) => {
    const post = {

        id : id,
        mangaId : mangaId,
        userId: userId,
        name : name,
        Description : description,
        imgDirect : url,
        categoriesId : categories,
        sousCategories : sousCategories

    }
    return post
}

export const id = () => {
    const id = nanoid()
    return id
}