

fetch('https://api.jikan.moe/v3/search/anime?q=yugioh').then(res => 
    res.json()).then((json)=>{
        var data = json.results
        data.length = 3
    
        
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
        
        var con = document.getElementById("anime").innerHTML = `
        <h1> ${data.length} " results were found"</h1>
        ${data.map(anime_layout)}
        `
 
    })


 
   

       
        

     

        
    