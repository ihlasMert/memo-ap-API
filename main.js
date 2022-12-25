let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");

let url = "https://picsum.photos/v2/list?page=2&limit=100";

/* let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];
 */
let getMeme = () => {
/*   let randomSubreddit =
    subreddits[Math.floor(Math.random() * subreddits.length)]; */
  //Fetch data
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        console.log((data));
        console.log((data.author));
    });

 /*  console.log(randomSubreddit); */
  let memeImg = new Image();
  //DİSPLAY meme image and title only after the image loads
  memeImg.onload=()=>{
    meme.src = data.url
    title.innerHTML = data.title
  }
  memeImg.src = data.url;
};

getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);
