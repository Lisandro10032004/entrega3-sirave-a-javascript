const nombre = document.getElementById("nombre"),
password = document.getElementById("password")
btnlogin = document.getElementById("btnlogin"),
body = document.getElementById("body")

btnlogin.addEventListener('click', () => {
    localStorage.setItem('nombre', nombre.value)
    localStorage.setItem("contraseña", password.value)
})




localStorage.setItem('nombre', nombre.value)



btnlogin.onclick = () =>{
body.innerHTML = `<div class="">
   
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LOGO GENÉRICO</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
      <form class="d-flex" role="search">
        <input
          id="buscador"
          value=""
          name="buscador"
          class="form-control me-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  </div>
</nav>


<h1 id="titulo" class="text-center">BIenvenido/a</h1>

<div class="container container-grid">
  <div class="card tarjeta mt-5 producto" style="width: 15rem">
    <h5 class="card-title text-center">nokia 1100</h5>
    <img
      class="imgProducto"
      src="data:image/jpeg;base64,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"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body ">
      <p class="card-text">  en 12 cuotas sin interés.</p>
      <p    class="btn btn-primary">comprar</p>
    </div>
  </div>

  <div class="card tarjeta mt-5 producto" style="width: 15rem">
    <h5 class="card-title text-center">samsung e20</h5>
    <img
      class="imgProducto"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZjqwXxsVWujmtpvLzYwhb-X-lphT8zLTGQ&usqp=CAU"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body ">
      <p class="card-text">  en 12 cuotas sin interés.</p>
      <p    class="btn btn-primary">comprar</p>
    </div>
  </div>

  <div class="card tarjeta mt-5 producto" style="width: 15rem">
    <h5 class="card-title text-center">nokia 2000</h5>
    <img
      class="imgProducto"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-q83eleZ3T_tZE8NxSUGddSMjx3lJLRpxGezW3sOlLooWlw53JPlvSnBan6RfrTKpJw&usqp=CAU"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body ">
      <p class="card-text">  en 12 cuotas sin interés.</p>
      <p    class="btn btn-primary">comprar</p>
    </div>
  </div>

  <div class="card tarjeta mt-5 producto" style="width: 15rem">
    <h5 class="card-title text-center">motorola eplay</h5>
    <img
      class="imgProducto"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7xAamKyk6u4vt0wrYV_4tyhKUYvx6YdgqQ&usqp=CAU"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body ">
      <p class="card-text">  en 12 cuotas sin interés.</p>
      <p    class="btn btn-primary">comprar</p>
    </div>
  </div>

  <div class="card tarjeta mt-5 producto" style="width: 15rem">
    <h5 class="card-title text-center">xiaomi plus</h5>
    <img
      class="imgProducto"
      src="data:image/jpeg;base64,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"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body ">
      <p class="card-text">  en 12 cuotas sin interés.</p>
      <p    class="btn btn-primary">comprar</p>
    </div>
  </div>

  <div class="card tarjeta mt-5 producto" style="width: 15rem">
    <h5 class="card-title text-center">iphone 13 pro max</h5>
    <img
      class="imgProducto"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmdJt51VvA1mnAcYT_QpnyXflz1mnzkPV5ag&usqp=CAU="
      class="card-img-top"
      alt="..."
    />
    <div class="card-body ">
      <p class="card-text">  en 12 cuotas sin interés.</p>
      <p    class="btn btn-primary">comprar</p>
    </div>
  </div>

  <div class="card tarjeta mt-5 producto" style="width: 15rem">
    <h5 class="card-title text-center">iphone 100</h5>
    <img
      class="imgProducto"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKcITqMv4D45hWP9s35fEFHNNjyV2m3eA9w&usqp=CAU"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body ">
      <p class="card-text">  en 12 cuotas sin interés.</p>
      <p    class="btn btn-primary">comprar</p>
    </div>
  </div>

  <div class="card tarjeta mt-5 producto" style="width: 15rem">
    <h5 class="card-title text-center">iphone 17 pro max ultra </h5>
    <img
      class="imgProducto"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7xAamKyk6u4vt0wrYV_4tyhKUYvx6YdgqQ&usqp=CAU"
      alt="..."
    />
    <div class="card-body ">
      <p class="card-text">  en 12 cuotas sin interés.</p>
      <p    class="btn btn-primary">comprar</p>
    </div>
  </div>
  <div class="card tarjeta mt-5 producto" style="width: 15rem">
    <h5 class="card-title text-center">xiaomi eplay ultra</h5>
    <img
      class="imgProducto"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZjqwXxsVWujmtpvLzYwhb-X-lphT8zLTGQ&usqp=CAU"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body ">
      <p class="card-text">  en 12 cuotas sin interés.</p>
      <p    class="btn btn-primary">comprar</p>
    </div>
  </div>
  <div class="card tarjeta mt-5 producto" style="width: 15rem">
    <h5 class="card-title text-center">samsung galaxy</h5>
    <img
      class="imgProducto"
      src="data:image/jpeg;base64,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"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body ">
      <p class="card-text">  en 12 cuotas sin interés.</p>
      <p    class="btn btn-primary">comprar</p>
    </div>
  </div>
</div>
</div>`
}





document.addEventListener("keyup", e=>{

if (e.target.matches("#buscador")){

    document.querySelectorAll(".producto").forEach(elemento =>{
        elemento.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ?elemento.classList.remove("d-none")
        :elemento.classList.add("d-none")
    })
}

})

