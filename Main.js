
window.onload = loading();
    
function loading(){
    getAnime();
    getSteam();

}

/* Anime API */
function getAnime(){
    fetch('https://api.jikan.moe/v3/search/anime?q=yugioh').then(res => res.json()).then((json)=>{
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
                    <a href="${item.url}" class="steam_con">
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
    

/* Fun facts 
    fetch('').then(res => res.json()).then((json)=>{
    var ff_data = json.results

    function f_facts_layout(item)
    {
        return `
        
        
        `
    }


    var ff_con = decument.getElementById("").innerHTML = `
    
    
    `


*/

   

       
        

     

        
    