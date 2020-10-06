

/* Anime API */
fetch('https://api.jikan.moe/v3/search/anime?q=yugioh').then(res => res.json()).then((json)=>{
        var anime_data = json.results
        anime_data.length = 3
    
        
        function anime_layout(anime)
        {
            return `
                <div class="flex-row">
                    <a href="${anime.url}" class="anime_cont">
                        <div class"anime_left">
                            <img src="${anime.image_url}">
                        </div>
                        <div class"anime_right">
                            <div class="anime_name">${anime.title}
                        </div>
                    </div>
                    </a>
                <div>
            
            `
        }
        
        var ani_con = document.getElementById("anime").innerHTML = `
        <h1> ${anime_data.length} " results were found"</h1>
        ${anime_data.map(anime_layout)}
        `
 
    })
    
/* Steam API 
fetch('').then(res => res.json()).then((json)=>{
    var steam_data = json.results

    function steam_layout(item)
    {
        return `
        
        
        `
    }


    var steam_con = decument.getElementById("").innerHTML = `
    
    
    `


    */
 

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

   

       
        

     

        
    