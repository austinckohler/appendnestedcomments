

const shoeInfo = {
    "url": "https://images.unsplash.com/photo-1517928677948-132e5ff116a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80",
    "name": "person sitting in dessert with SHOES!",
    "remarks": [   
            {
                "comment": "lets get this on the page!"
            }]
    }


const image = document.querySelector("#image")
image.src = shoeInfo.url

const title = document.querySelector("#name")
title.textContent = shoeInfo.name

// comments is the UL
const comments = document.querySelector("#comments")
shoeInfo.remarks.forEach( function (comment) {
    const commentText = document.createElement("li")
    commentText.textContent = comment.comment
    comments.append(commentText) 
    
})
// I want to take the comment from each remark make an li (commentText), set it's textContent with the comment's string, and have that appended to the ul (#comments). In order to do that i need to iterate through each shoeInfo.remarks.




