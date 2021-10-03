const profile = new Profile();
const ui = new UI()
const searchProfile = document.getElementById('searchProfile')

searchProfile.addEventListener('keyup',(e) => {
    
    ui.clear()

    let text = e.target.value

    if(!text == ""){
       profile.getProfile(text)
       .then(res => {
           if(res.profile.length === 0){
              ui.showAlert(text)
           }else{
              ui.showProfile(res.profile[0])
              ui.showTodo(res.todo)
           }
       })
       .catch(err => {
           ui.showAlert(text)
       })
    }
})