// <!-- Source from edward29 thank you boss -->
window.addEventListener('load', () => {
    const btn = document.querySelector("#btn");
    const img = document.querySelector(".img-con");
    const s = document.querySelector(".stop");
    const stopBtn = document.querySelector("#stopbtn");
    var audio = document.querySelector('#audio');
    const reload = document.querySelector("#reload");
    var count = 0;


    // alert
    const q = "Do you want to proceed?";
    
    if (confirm(q) == true) {
        // typing script
        var typed = new Typed(".typing", {
            strings: ["Oh, my baby, sweet like bubble gum Bouncin' like playin' ball 더 높이 올려줘 We're gonna fly away"],
            typeSpeed: 20,
            backSpeed: 30, 
            startDelay: 1,
            loop: false
        });
        
        var typed = new Typed(".typing2", {
            strings: ["Error!, Something unexpected occured"],
            typeSpeed: 50,
            backSpeed: 40,
            startDelay: 1000,
            loop: false
        });

        // image
        let kalog = document.querySelector("#kalog");
        let images = ['https://stickerly.pstatic.net/sticker_pack/JzIr5kVYwgpTNE8iQhAg/BC6LHW/2/5e90d5cf-07e8-4571-b54a-79212536af1b.png'];
        let cover = document.querySelector('#cv');
        

        // button show
        const myTimeout = setTimeout(showbtn, 10010);
        
        function showbtn() {
            if (btn.classList.contains("hide")) {
                btn.classList.add("show");
                btn.classList.remove("hide");
            } else{
                btn.classList.add("hide");
                btn.classList.remove("show");
            }
        }
        
        const hiding = {
            getPicShow(){
                if(btn.innerHTML === "Details"){
                    btn.innerHTML = "Hide";
                } else{
                    btn.innerHTML = "Details";
                }
        
                if (img.classList.contains("hide")) {
                    img.classList.add("show");
                    img.classList.remove("hide");
                } else{
                    img.classList.add("hide");
                    img.classList.remove("show");
                }
                
            },
            getBtnShow(){
                if (s.classList.contains("hide")) {
                    s.classList.add("show");
                    s.classList.remove("hide");
                } else{
                    s.classList.add("hide");
                    s.classList.remove("show");
                }
            },
            getAudio(){
                if(count == 0){
                    count = 1;
                    audio.play();
                    btn.innerHTML = "Hide";
                } else {
                    count = 0;
                    audio.pause();
                    btn.innerHTML = "Details";
                }
            }
        }
        
        
        // 1st button
        btn.addEventListener('click', () => {
        
            hiding.getPicShow();
            hiding.getBtnShow();
            hiding.getAudio();
        });
        
        // stop button for audio
        stopBtn.addEventListener('click', () => {
            hiding.getAudio();
            audio.pause();
            audio.currentTime = 0;
            hiding.getPicShow();
            hiding.getBtnShow();
            btn.innerHTML = "Details";
        });
    } else {
        document.querySelector(".msg").innerHTML = "<h4>Oh no you pressed cancel :(</h4>";

        if (reload.classList.contains("hide")) {
            reload.classList.add("show");
            reload.classList.remove("hide");
        } else {
            reload.classList.add("hide");
            reload.classList.remove("show");
        }

        reload.addEventListener('click', () => {
            location.reload();
        })

        return false;
    }
});