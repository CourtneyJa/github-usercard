/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const gitCards = document.querySelector('.cards');

axios.get('https://api.github.com/users/courtneyja')
     .then((results)=>{
       const newCard = createGit(results.data);
       gitCards.appendChild(newCard);
     })
     .catch((error)=>{
       console.log(error);
     })    

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

//const followersArray = [ "tetondan","dustinmyers","justsml","luishrd","bigknell"];

  /* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function createGit(data){

  //set elements
  const gitCard = document.createElement('div')
  const gitImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const gitName = document.createElement('p')
  const location = document.createElement('p')
  const gitProf = document.createElement('p')
  const gitLink = document.createElement('a')
  const gitLikes = document.createElement('p')
  const gitLiked = document.createElement('p')
  const gitBio = document.createElement('p')

  //set up structure
  gitCard.appendChild(gitImg)
  gitCard.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(gitName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(gitProf)
  cardInfo.appendChild(gitLikes)
  cardInfo.appendChild(gitLiked)
  cardInfo.appendChild(gitBio)
  gitProf.appendChild(gitLink)

  //add some class
  gitCard.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  gitName.classList.add('username')

  //set content
  gitImg.src = data.avatar_url;
  gitProf.textContent = "Profile: ";
  name.textContent = data.name;
  gitLink.textContent = data.html_url;
  gitName.textContent = data.login;
  location.textContent = data.location;
  gitLikes.textContent = `Followers: ${data.followers}`;
  gitLiked.textContent = `Following: ${data.followers}`;
  gitBio.textContent = data.bio;

  //link attribute
  gitLink.setAttribute("href", data.html_url);
 
  //return it all
  return gitCard;

}

//create follower cards 
const followersArray = [ "tetondan","dustinmyers","justsml","luishrd","bigknell"];

followersArray.forEach(user =>{
  axios.get(`https://api.github.com/users/${user}`)
       .then(result=>{
         gitCards.appendChild(createGit(result.data));
       })
       .catch(error =>{
         console.log(error);
       });
       
});

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
