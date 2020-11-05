moudle = () =>{
    posts = []
    newpost = {
        id:0,
        content:"first post",
        comments : [
            {
                id:0,
                contetnt:"first comment"
            }
        ]
    }
    let postId = 0;
    const addPost = (post) =>{
        post["id"] = postId;
        posts.push(post);
        postId++;
        return postId-1;
    }
    const returnPost = (post) =>{
        for(let i of posts){
            if(i.content === post){
                return i;
            }
        }
        return null
    }  
    const removeACommentFromAPost =(post,comment) => {
        for(let i of posts){
            if(i.content === post){
                for(let j in posts.comments)
                    if(comment === posts.comments[j].content){
                        posts.comments.splice(j,1)
                    }
            }
        }
    }

    const removeAPost = (post) =>{
        for(let i in posts){
            if(i.content === post){
                posts.splice(i,1)
            }
        }
    }
    const addAcommentToApost = (post, comment) => { 
        for(let i of posts){
            if(i.content === post){
               posts.comments.push({id:i.content.length-1,
                comment:comment});
            }
        }
    }
    const getTheIDofAPost = (post) =>{
        for(let i of posts){
            if(i.content === post){
               return i.id;
            }
        }
        return null
    }
    const gettheIdofThecomment =(post,comment) => {
        for(let i of posts){
            if(i.content === post){
                for(let j in posts.comments)
                    if(comment === posts.comments[j].content){
                        return posts.comments[j].id;
                }
            }
        }
        return null
    }

return{
    addPost,
    returnPost,
    removeACommentFromAPost,
    removeAPost,
    addAcommentToApost,
    getTheIDofAPost,
    gettheIdofThecomment
}


}