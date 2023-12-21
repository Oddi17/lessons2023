const post = {
  id: 1,
  text: 'My first post',
  author: {
    id: 2,
    name: 'John Doe',
  },
  comments: [
    {
      id: 3,
      text: 'And first comment',
    },
    {
      id: 5,
      text: 'Second comment',
    },
  ],
}



const newPost = {...post}
newPost.author = {...post.author}

newPost.comments = []

post.comments.forEach((el) => {
    let newObj = Object.assign({},el)
    newPost.comments.push(newObj) 
})
// newPost.comments[0] = {...post.comments[0]}
// newPost.comments[1] = {...post.comments[1]}

console.log(post)
newPost.text = '0'
newPost.author.id = 9
newPost.comments[1].text = 'iiii'

console.log(newPost)
console.log(post)
