const submitBtn = document.querySelector('.submit_button')
const userName = document.querySelector('#user')
const comment = document.querySelector('#comment')
const likeIcon = document.querySelector('.heart_icon2')
const count = document.querySelector('.count')
const commentsCont = document.querySelector('.comments_container')

likeIcon.addEventListener('click', likeVideo)
submitBtn.addEventListener('click', submitFeedback)

feedbackArr = []
let positiveFeedback = false
let likesCount = 0

function submitFeedback(e){
  const userForm = userName.value
  const commentForm = comment.value
  console.log(userForm, commentForm)
  if(userForm && commentForm !== ''){
    newFeedback = {
      "id": Math.floor((Math.random() * 1000)+ 1),
      "userName": userForm,
      "userComment": commentForm,
      "typeOfFeedback": positiveFeedback
    }
    feedbackArr.push(newFeedback)
    console.log(newFeedback)

    if(positiveFeedback === true){
      addLikes()
    }

    resetForm()
    addFeedback(newFeedback)
  }
  e.preventDefault()
}
function likeVideo(){
  likeIcon.classList.toggle('liked')
  if (likeIcon.classList.contains('liked')){
    likeIcon.innerHTML = `<p class="heart_icon3">&#9829</p>`
    positiveFeedback = true
    
  }
  else{
    likeIcon.innerHTML = `<p class="heart_icon2">&#9829</p>`
    positiveFeedback = false
}
}

function addLikes(){
  likesCount++
  count.innerHTML = likesCount
}


function resetForm(){
  userName.value=''
  comment.value=''
  likeIcon.innerHTML=`<p class="heart_icon2">&#9829</p>`
  positiveFeedback = false
}

function addFeedback(item){
  const letter = (item.userName).charAt(0)
  console.log(letter)
  const div = document.createElement('div')
  div.classList = 'comment_card'
  
  
  commentsCont = `<div class="pic">
      ${letter}
     </div>

     <div class="comment_info">
       <small class="nickname">${item.userName}</small>
    <p class="comment">
      ${item.userComment}
    </p>
    <div class="comment_bottom">
      <div class="heart_icon">
        <p class="heart_icon2">&#9829</p
      </div>
      <button>
        Reply
      </button>
     </div>
    </div>`

    div.visible = true;

} 

