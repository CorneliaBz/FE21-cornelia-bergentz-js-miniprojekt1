const body = document.querySelector(`body`);
const ul = document.createElement(`ul`);
body.appendChild(ul);

body.style.margin = `2rem`;
ul.style.padding = `0rem`;
ul.style.textAlign = `center`;

for(let i = 1; i<6; i++){
    const li = document.createElement(`li`); 
    ul.appendChild(li);

    li.innerText = `Rad ${[i]}`;
    const textStorlek = i*10;
    const borderStorlek = i*5; 
    const hue = 120+(i*15); 

    li.style.listStyleType = "none";
    li.style.fontSize = `${textStorlek}px`;
    li.style.color = `hsl(240, 90%, 70%)`;
    li.style.fontWeight = `bold`;
    li.style.borderTop = `${borderStorlek}px solid white`;
    li.style.backgroundColor = `hsl(${hue}, 90%, 85%)`;
}

const article = document.createElement(`article`);
body.appendChild(article);

article.style.display = `flex`;
article.style.justifyContent = `space-evenly`;
article.style.border = `1px solid black`;

const flexItem1 = document.createElement(`div`);
const flexItem2 = document.createElement(`div`);
const flexItem3 = document.createElement(`div`);

article.appendChild(flexItem1);
article.appendChild(flexItem2);
article.appendChild(flexItem3);

article.style.padding = `4rem`;

flexItem1.style.border = `10px solid hsl(240, 71%, 80%)`;
flexItem1.style.width = `3rem`;
flexItem2.style.border = `10px solid hsl(240, 71%, 80%)`;
flexItem2.style.width = `3rem`;
flexItem3.style.border = `10px solid hsl(240, 71%, 80%)`;
flexItem3.style.width = `3rem`;

for(let i=0; i<=9; i++){
    const h4 = document.createElement(`h4`);
    flexItem1.appendChild(h4);
    
    h4.innerText = i;
    h4.style.textAlign = `left`;
    h4.style.margin = `0rem`;
    h4.style.fontWeight = `lighter`;

    if(i == 4){
        h4.style.backgroundColor = `hsl(240, 71%, 80%)`;
        h4.style.color = `white`;
    }
    else if(i%2!==1){
        h4.style.backgroundColor = `black`;
        h4.style.color = `white`;
    }
}

for(let i=9; i>=0; i--){
    const h4 = document.createElement(`h4`);
    flexItem2.appendChild(h4);

    h4.innerText = i;
    h4.style.textAlign = `center`;
    h4.style.margin = `0rem`;
    h4.style.fontWeight = `lighter`;

    if(i == 8){
        h4.style.backgroundColor = `hsl(240, 71%, 80%)`;
        h4.style.color = `white`;   
    }
    else if(i%2!==1 && i<8){
        h4.style.backgroundColor = `black`;
        h4.style.color = `white`;
    }
}

const siffror = [`ett`, `två`, `tre`, `fyra`, `fem`, `sex`, `sju`, `åtta`, `nio`, `tio`]

for(let i=0; i<siffror.length; i++){
    const h4 = document.createElement(`h4`);
    flexItem3.appendChild(h4);
    h4.innerText = siffror[i];

    h4.style.textAlign = `right`;
    h4.style.margin = `0rem`;
    h4.style.fontWeight = `lighter`;

    if(siffror[i] === `sex`){
        h4.style.backgroundColor = `hsl(240, 71%, 80%)`;
    }
    else if(i%2!==1 && i<9){
        h4.style.backgroundColor = `black`;
        h4.style.color = `white`;
    }
}