

// heart button event listener
const hearts = document.getElementsByClassName('heart-btn');
for(const heart of hearts){
    
    heart.addEventListener('click', function(){
        const countOfheart = document.getElementById('heart-count').innerText;
        
    const countResult = Number(countOfheart) + 1;
    document.getElementById('heart-count').innerText = countResult;
    })
}

