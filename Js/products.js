let token = localStorage.getItem('token')
const URLProducts = 'https://back-sandbox.herokuapp.com/api/products?limit=29&offset=4'
const divcontainer = document.querySelector('#divcontainer')

const getProducts = async () => {
  try{
    const res = await fetch(URLProducts, {
      method: 'GET',
      headers:{
        Authorization: `Bearer ${token}`
      }
    });

    const json = await res.json();
    console.log(json.data.data);
    const { data } = json;
    renderProducts (data.data);

  }catch (error){
    console.log(error);
  };
};


const renderProducts = (productitos) => {
  console.log(divcontainer)
  productitos.forEach(products => {
    
    const h3 = document.createElement('h3');
    h3.textContent = products.name;

    const img = document.createElement('img');
    (products.photo && products.photo.includes(`data:image`)) ? img.src = products.photo: img.src="../img/noimage.jpg"
    img.className= 'imgdejs'

    const descrip = document.createElement('p');
    descrip.textContent = products.description;
    
    const strongprice = document.createElement('strong');
    const price = products.price;
    strongprice.textContent = `$${price}`

    const div = document.createElement('div');
    div.className= 'divdejs'

    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(descrip);
    div.appendChild(strongprice);
    
    divcontainer.appendChild(div);


  });
};

getProducts();

if(!token) {
window.location.href= '/login.html'
};

let caja = document.getElementById("subirArriba")
caja.addEventListener('click', function (){
  window.scrollTo({top:0,behavior:'smooth'});
});

window.addEventListener('scroll', function(){
  console.log(this.scrollY)
  if (this.scrollY <= 300){
    caja.style.display="none"
  } else {
    caja.style.display="flex"
  }
});

const deslog = document.getElementById("deslog");

deslog.addEventListener('click', function(){
  localStorage.removeItem('token')
});

