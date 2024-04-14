const root=document.getElementById('root');
const displayEl=document.createElement('div');
displayEl.setAttribute('id','display');
let num=13;
displayEl.textContent=num;
root.appendChild(displayEl)
const btn=document.createElement('button');
btn.textContent='increase';
root.appendChild(btn);

btn.addEventListener('click',function () {
    num=num + 1;
    displayEl.textContent=num;
})