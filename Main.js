
window.onload = loading();
    
function loading(){
    getAnime();
    getSteam();

}

/* Anime API */
function getAnime(){
    fetch('https://api.jikan.moe/v3/search/anime?q=onepunchman').then(res => res.json()).then((json)=>{
        var anime_data = json.results
        anime_data.length = 3
    
        
        function anime_layout(anime)
        {
            return `
                <div class="flex-row">
                    <a href="${anime.url}" class="anime_con" target="_blank">
                        <div class"anime_left">
                            <img src="${anime.image_url}">
                        </div>
                        <div class"anime_right">
                            <h3>${anime.title}</h3>
                        </div>
                    </div>
                    </a>
                <div>
            
            `
        }
        
        document.getElementById("anime").innerHTML = `
        <h2> ${anime_data.length} " results were found"</h2>
        ${anime_data.map(anime_layout)}
        `
 
    })
}

/* Steam API */
function getSteam(){
    fetch('https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=359550&count=3&maxlength=300&format=json').then(res => res.json()).then((json)=>{
    var steam_data = json.appnews.newsitems
    

    function steam_layout(item)
    {
        return `
                 <div class="flex-row">
                    <a href="${item.url}" class="steam_con" target="_blank">
                            <div class="steam_cont">${item.title}</div>
                    </a>
                <div>
        `
    }

    document.getElementById("steam").innerHTML = `
    <h2>This is the latest news concerning one of my favorite games</h2>
    ${steam_data.map(steam_layout)}
    `
})

}
    

/* Steam Profile facts */
    fetch('https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=54EABE1E89DC9241A7EA50A02F56F7A6&steamids=76561198412631196&format=json').then(res => res.json()).then((json)=>{
    var steamProf_data = json.response.players

    function profile_layout(item)
    {
        return `
        <div class="flex-row">
            <a href="${item.profileurl}" class="profile_con" target="_blank">
                <img src="${item.avatarFull}">
            </a>
        </div>
        `
    }


    document.getElementById("steam_prof").innerHTML = `
    <h2>My profile</h2>
    ${steamProf_data.map(profile_layout)}
    `
})


   

       
        

     

        
    