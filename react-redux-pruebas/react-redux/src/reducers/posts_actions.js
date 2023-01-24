export const addPost = (date = Date.now(), title = "", content = "", authorId = null) => {
    const payload = {
        id:     null,
        date:   date,
        title:  title,
        content:content,
        authorId: authorId
    }
    return {type: "ADD_POST", payload}
}

export const removePost = (id) => {
    const payload = {
        id: id,
    }
    return {type: "REMOVE_POST", payload}
}
