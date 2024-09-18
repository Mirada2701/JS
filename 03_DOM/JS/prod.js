const list = document.getElementById("main");

const fishBtn = document.getElementById('fish');
const appleBtn = document.getElementById("apple");
const eggsBtn = document.getElementById("eggs");

const img = document.querySelectorAll('img');
console.log(img);

let i = 0;
for(const div of list.children)
{
    const link = document.createElement('a');
    link.href = 'https://www.tiktok.com/@alionakarpiuk/video/7296499118585793798';
    link.target = '_blank'; 

    link.appendChild(img[i]);
    div.appendChild(link);
    i++;
}


fishBtn.onclick = (event) =>{
    
    event.preventDefault();    

    const newFish = document.createElement("div");
    newFish.classList.add("item");

    const image = document.createElement("img");
    image.src = "./images/fish.jpg";

    const ref = document.createElement('a');
    ref.href = 'https://easyfish.club/rybni-poradi/shho-prygotuvaty-na-obid-z-ryby-15-czikavyh-reczeptiv/';
    ref.target = '_blank';
    ref.appendChild(image);
    newFish.appendChild(ref); 
    
    const par = document.createElement("p");
    par.textContent = "Fish";
    newFish.appendChild(par);

    list.append(newFish);
    
};

appleBtn.onclick = (event) =>{
    event.preventDefault();

    const newFish = document.createElement("div");
    newFish.classList.add("item");  

    const image = document.createElement("img");
    image.src = "./images/apple.png";

    const ref = document.createElement('a');
    ref.href = 'https://appleway.org.ua/recipes/yabluchniy-shtrudel/';
    ref.target = '_blank';
    ref.appendChild(image);
    newFish.appendChild(ref);        
    
    const par = document.createElement("p");
    par.textContent = "Apple";
    newFish.appendChild(par);   

    list.append(newFish);
    
};
eggsBtn.onclick = (event) =>{
    event.preventDefault();

    const newFish = document.createElement("div");
    newFish.classList.add("item");

    const image = document.createElement("img");   
    image.src = "./images/eggs.jpg";

    const ref = document.createElement('a');
    ref.href = 'https://smachnonews.24tv.ua/shho-mozhna-prigotuvati-yayets-20-retseptiv-kozhen-novini-dnya_n1607712';
    ref.target = '_blank';
    ref.appendChild(image);
    newFish.appendChild(ref);
    
    const par = document.createElement("p");
    par.textContent = "Eggs";
    newFish.appendChild(par);

    list.append(newFish);
    
};