

// heart button event listener
const hearts = document.getElementsByClassName('heart-btn');
for(const heart of hearts){
    
    heart.addEventListener('click', function(){
        const countOfheart = document.getElementById('heart-count').innerText;
        
    const countResult = Number(countOfheart) + 1;
    document.getElementById('heart-count').innerText = countResult;
    })
}



//copy button event listener
const copys = document.getElementsByClassName('copy-btn');
for(const copy of copys){
    
    copy.addEventListener('click', function(){
        const countOfCopy = document.getElementById('copy').innerText;
        
        
    const countCopyResult = Number(countOfCopy) + 1;
    document.getElementById('copy').innerText = countCopyResult;

    alert('copied your text');

    const callText = copy.parentNode.parentNode.children[3].innerText;
    navigator.clipboard.writeText(callText)
    console.log(callText);

    })
}


