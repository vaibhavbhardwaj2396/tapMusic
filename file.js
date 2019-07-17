window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sounds")
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual')
    const colors=[
        "#36d394",
        "#501792",
        "#db2929",
        "#d3d3d3",
        "#0c09d4",
        "#77b30a"
    ]
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
           sounds[index].currentTime=0;         
            sounds[index].play();

            createBubble(index);
        })
    })

    //create function to create bubble

    const createBubble=(index)=>{
        const bubble=document.createElement('div')
        visual.appendChild(bubble)
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation= 'jump 1s ease'
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this)
        })
    }
})



