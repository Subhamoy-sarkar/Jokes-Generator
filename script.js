const jokes=document.querySelector('#joke1');
const jokesbtn=document.querySelector('#jokebtn');
const generateJokes=()=>{
    const setHeader={
        headers:{
            Accept:"application/json"
        }
    }
    fetch('https://icanhazdadjoke.com',setHeader)
    .then((res)=>res.json())
    .then((data)=>{
        jokes.innerHTML=data.joke;
    }).catch((error)=>{  
        console.log(error); 
    })
}
jokesbtn.addEventListener('click',generateJokes);

generateJokes();