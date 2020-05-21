

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
comments.textContent = shoeInfo.remarks.forEach( function (comment) {
    const commentText = document.createElement("li")
    commentText.textContent = comment
    comments.append(commentText) 
    // console.log(comments.append(commentText)) 
})


    




