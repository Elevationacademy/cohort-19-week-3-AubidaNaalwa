const twitbtn = document.getElementById("twitbtn");
const twittext = document.getElementById("text-input");

const tweeter = () => {
    let count = 0;
    let postIdcounter = 0;
    let commentIdCounter =0;
    let posts = []
    const getCountID = () => {
        return postIdcounter;
    }
    const addId = () => {
        postIdcounter += 1;
    }

    const getCount = () => {
        return count;
    }
    const addCount = () => {
        postIdcocountunter += 1;
    }
    const subCount=() =>{
        count-=1;
    }
    const getcommentIdCounter = () => {
        return commentIdCounter;
    }
    const addcommentIdCounter = () => {
        commentIdCounter += 1;
    }
    const addPosts = (post) =>{
        posts.push(post);
    }
    const getPosts = () =>{
        return posts
    }
    const removePost= (id)=>{
        for(let i in post ){
            if(posts[i].id  === id){
                posts.splice(i,1)
            }
        }
    }
    const addcommnts = (id, comment) =>{
        for(let i in posts){
            if(posts[i].id === id){
                posts[i].comments.push(comment)
                addcommentIdCounter();
            }
        }
    }
    return {
        getCountID,
        addId,
        getCount,
        addCount,
        subCount,
        getcommentIdCounter,
        addcommentIdCounter,
        addPosts,
        getPosts,
        removePost,
        addcommnts
    }
}


const twt = tweeter()


twitbtn.onclick = () => {
    
    if (!twittext.value) {
        return;
    }
    let div = document.createElement("div");
    div.className = "post"
    div.id = "p" + twt.getCountID();
    twt.addId();

    text = document.createElement("div")
    text.innerText = twittext.value;
    text.className = 'text'
    let comment = document.createElement("div")
    comment.className = "comments"
    div.appendChild(text)
    div.appendChild(comment)
    let inputext = document.createElement("input")
    inputext.type = 'text'
    inputext.name = "commenttext"
    inputext.className = 'textinput'
    const newDiv = document.createElement("div")

    newDiv.appendChild(inputext)
    let commentbtn = document.createElement("button")
    commentbtn.className = 'commentbtn'
    commentbtn.innerText = 'comment'
    commentbtn.onclick = () => {
        twt.addcommnts("p" + (twt.getCountID()-1),{id : document.getElementById("p" + (twt.getCountID()-1)).childNodes[2].childNodes[0].value})
    }
    newDiv.appendChild(commentbtn)
    div.appendChild(newDiv)
    document.getElementById("grid-posts").appendChild(div)
    const com = [];
    twt.addPosts({id : "p" + (twt.getCountID()-1),post:twittext.value,comments : com})
}


