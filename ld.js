const linkTag = document.querySelector('link');
const btn = document.querySelector('#ld');
const btn_img = document.querySelector('#btn_img');
let defaultStyle = true;

function lightDark(){
    if(defaultStyle){
        linkTag.href = "style2.css";
        btn_img.src = "https://img.icons8.com/external-linear-outline-icons-papa-vector/78/external-Light-Mode-interface-linear-outline-icons-papa-vector.png";
        btn.querySelector('span').textContent = "Light Mode";
        defaultStyle = false;
    }else{
        linkTag.href = "style1.css";
        btn_img.src = "https://img.icons8.com/ios-filled/50/do-not-disturb-2.png";
        btn.querySelector('span').textContent = "Dark Mode";
        defaultStyle = true;
    }
}

btn.addEventListener('click', lightDark);