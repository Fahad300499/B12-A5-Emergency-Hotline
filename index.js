



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
    



    const callText = copy.parentNode.parentNode.children[3].innerText;
    navigator.clipboard.writeText(callText)

    alert('copied  your number: ' + callText);
    

    })
}




// call button event listener
const CallBtns = document.getElementsByClassName('call-btn');
for(const callBtn of CallBtns){

    callBtn.addEventListener('click', function(){
        const coinBalance = document.getElementById('coin-balance').innerText;
        if(coinBalance > 0){
            

             const balance = Number(coinBalance) -20; 
             document.getElementById('coin-balance').innerText = balance;

        const instituation = callBtn.parentNode.parentNode.children[1].innerText;
        const instituationNum = callBtn.parentNode.parentNode.children[3].innerText;
        
        alert( '📞Calling '  + instituation + ': ' + instituationNum + ' ....');

            const asideContainer = document.getElementById('aside-container');
            const newDiv = document.createElement('div');
            const timeReal = new Date().toLocaleTimeString();
           
           

            newDiv.innerHTML=  `
                <div class="flex justify-between items-center bg-gray-100 p-3 rounded-xl mt-3">
                     <div>
                        <p class="font-bold">${instituation}</p>
                        <p>${instituationNum}</p>
                     </div>
                     <h1>${timeReal}</h1>
                </div>
            `

            asideContainer.appendChild(newDiv);

        }
        else{
            alert('❌ You dont have enough coins. You need at least 20 coins to make a call.');

        }
    })
}



// clear button event listener
document.getElementById('clear-btn')
    .addEventListener('click', function(){
            
        document.getElementById('aside-container').innerText = '';
    });



