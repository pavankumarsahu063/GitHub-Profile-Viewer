  const searchBtn=document.getElementById("btn")
        const profile=document.querySelector(".profile-Container")
     
        searchBtn.addEventListener("click",async (e)=>{
            const username=document.getElementById("inputText").value;
            const response=await fetch(`https://api.github.com/users/${username}`);
            const data=await response.json();
            console.log(data)
            
             profile.textContent=""
            let div=document.createElement("div")
             div.className="profile"

            div.innerHTML+=`
            
                <img src="${data.avatar_url}" alt="profile">
                <h1>Name : ${data.name} </h1>
                <h1>User Name: ${data.login} </h1>
                <h1>Bio: ${data.bio} </h1>
                <h1>Account Created At: ${data.created_at}</h1>
                <h1>Working At: ${data.company} </h1>
                <h1>Git Hub Url: ${data.url}</h1>
                <h1>Follwing: ${data.following}</h1>
                <h1>Followers: ${data.followers}</h1>

            `
            profile.append(div)
           

        })

        document.getElementById("dark-btn").addEventListener("click",()=>{
            document.body.classList.toggle("dark-mode");
            profile.classList.toggle("dark-mode");
        })
