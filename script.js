const btnElement=document.querySelector('.btn'); //button selector
const imgElement=document.querySelector('#qr-image'); //image selector

const boxElement=document.getElementById('img-box'); // image div selector

const inputElement=document.querySelector('input');


btnElement.addEventListener('click',()=>{

    //condition for empty input field
    if(inputElement.value.trim()==='') {
        alert('input field is empty! Please enter text/URL...');
        return;
    }
    imgElement.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputElement.value}`;

    boxElement.classList.add('show-img');
})