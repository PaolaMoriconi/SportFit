const main = document.querySelector(".main__product");
const div = document.createElement("div");
div.style.background = "white";
div.style.height = "50vh";
div.style.alignItems = "center";
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.margin = "5vw";
const h1 = document.createElement("h1");
h1.style.fontWeight = "bold";
h1.innerText = "No tiene productos seleccionados en su carrito";
div.appendChild(h1);

if (cart.length == 0) {
  main.appendChild(div);
} else {
  console.log("hay productos");
  const productos = cart.map((element) => element.id);
  let productosSeleccionados;

  fetch(
    `http://${window.location.hostname}:${window.location.port}/apis/allproducts`
  ).then((response) => {
    response.json().then((respuesta) => {
      productosSeleccionados = respuesta.products.filter((elemento) =>
        productos.includes(`${elemento.id}`)
      );
      productosSeleccionados = productosSeleccionados.map((element) => {
        const producto = cart.find((producto) => producto.id == element.id);
        const cantidad = +producto.cantidad;
        return {
          ...element,
          cantidad,
        };
      });
      console.log(productosSeleccionados);
      const h2 = document.createElement("h2");
      h2.classList.add("titulo-principal");
      const divCarrito = document.createElement("div");
      divCarrito.classList.add("div-carrito");
      const divProductos = document.createElement("div");
      divProductos.classList.add("products");
      productosSeleccionados.forEach((producto) => {
        const productsArticle = document.createElement("article");
        productsArticle.classList.add("products__article");
        const a = document.createElement("a");
        a.href = `/products/detail/${producto.id}`;
        const img = document.createElement("img");
        img.src = `/images/products/${producto.images[0].name}`;
        img.alt = producto.name;
        img.classList.add("products__article__img");

        a.appendChild(img);
        //creacion de info

        const productsArticleInfo = document.createElement("div");
        productsArticleInfo.classList.add("products__article__info");
        const productName = document.createElement("h2");
        productName.innerText = producto.name;
        const iconsProducts = document.createElement("a");
        iconsProducts.classList.add("icons__products");
        const faCircleXmark = document.createElement("i");
        faCircleXmark.classList.add("fa-regular");
        faCircleXmark.classList.add("fa-circle-xmark");
        faCircleXmark.style.color = "red";
        faCircleXmark.style.fontSize = "1.2rem";
        faCircleXmark.style.fontWeight = "bold";

        faCircleXmark.addEventListener("click", function (e) {
          let cart = JSON.parse(sessionStorage.getItem("cart"));
          cart = cart.filter((element) => element.id != producto.id);
          console.log("cart", cart);
          sessionStorage.setItem("cart", JSON.stringify(cart));

          productosSeleccionados = productosSeleccionados.filter(
            (element) => element.id != producto.id
          );

          const suma = productosSeleccionados.reduce(
            (acumulador, currentValue) =>
              acumulador +
              (currentValue.price -
                (currentValue.price * currentValue.discount) / 100) *
                currentValue.cantidad,
            0
          );
          const total = document.querySelector("#total");
          const totalEnvio = document.querySelector("#totalenvio");
          total.innerText = `$${suma}`;
          totalEnvio.innerText = `$${suma}`;
          contador.innerText = cart.length;

          productsArticle.remove();
          if (cart.length == 0) {
            main.appendChild(div);
            divCarrito.style.display = 'none';
            divCarrito.style.visibility = 'hidden';
          }
        });

        productsArticleInfo.appendChild(productName);
        iconsProducts.appendChild(faCircleXmark);
        productsArticleInfo.appendChild(iconsProducts);

        if (producto.discount) {
          const p = document.createElement("p");
          p.innerText = `Antes: ${producto.price}`;
          const span = document.createElement("span");
          span.innerText = `Ahora: ${
            producto.price - (producto.price * producto.discount) / 100
          }`;

          productsArticleInfo.appendChild(p);
          productsArticleInfo.appendChild(span);
        } else {
          const span = document.createElement("span");
          span.innerText = `${producto.price}`;
          productsArticleInfo.appendChild(span);
        }

        //montando los elementos

        //creacion de select
        const select = document.createElement("div");
        select.classList.add("select");
        select.innerText="Cantidad";

        const cantidad = document.createElement("select");
        cantidad.name = "select";
        for (let i = 1; i < 6; i++) {
          let option = document.createElement("option");
          option.value = i;
          option.text = i;
          let unidades = cart.find((elemento) => elemento.id == producto.id);
          unidades.cantidad == i ? (option.selected = true) : null;
          cantidad.appendChild(option);
        }

        cantidad.addEventListener("change", function (e) {
          console.log("select", e.target.value);
          const cart = JSON.parse(sessionStorage.getItem("cart"));
          cart.map((element) => {
            if (element.id == producto.id) {
              element.cantidad = +e.target.value;
            }
          });
          sessionStorage.setItem("cart", JSON.stringify(cart));

          productosSeleccionados.map((element) => {
            if (element.id == producto.id) {
              element.cantidad = +e.target.value;
            }
          });
          console.log("producto id", producto.id);
          console.log(productosSeleccionados);
          const suma = productosSeleccionados.reduce(
            (acumulador, currentValue) =>
              acumulador +
              (currentValue.price -
                (currentValue.price * currentValue.discount) / 100) *
                currentValue.cantidad,
            0
          );
          const total = document.querySelector("#total");
          const totalEnvio = document.querySelector("#totalenvio");
          total.innerText = `$${suma}`;
          totalEnvio.innerText = `$${suma}`;
        });

        select.appendChild(cantidad);

        productsArticle.appendChild(a);
        productsArticle.appendChild(productsArticleInfo);
        productsArticle.appendChild(select);

        divProductos.appendChild(productsArticle);
      });
      divCarrito.appendChild(divProductos);
      main.appendChild(h2);
      main.appendChild(divCarrito);

      const section = document.createElement("section");
      section.classList.add("section__pagos");

      const sectionPagosDatos = document.createElement("div");
      sectionPagosDatos.classList.add("section__pagos__datos");

      const seguirComprando = document.createElement("a");
      seguirComprando.href = "/";
      seguirComprando.classList.add("codigo__de");
      const faArrowLeft = document.createElement("i");
      faArrowLeft.classList.add("fa-arrow-left");
      faArrowLeft.classList.add("fa-solid");
      faArrowLeft.innerText = "  SEGUIR COMPRANDO";
      seguirComprando.appendChild(faArrowLeft);
      sectionPagosDatos.appendChild(seguirComprando);

      const detalleDePedido = document.createElement("div");
      detalleDePedido.classList.add("detalle__pedido");
      const h3 = document.createElement("h3");
      h3.innerText = "DETALLE DEL PEDIDO";
      detalleDePedido.appendChild(h3);
      sectionPagosDatos.appendChild(detalleDePedido);

      //Total de productos
      const divTotal = document.createElement("div");
      divTotal.classList.add("div__total");
      const cantidadProductos = document.createElement("p");
      cantidadProductos.innerText = `${productosSeleccionados.length} Productos`;
      const totalP = document.createElement("span");
      let total = productosSeleccionados.reduce(
        (acumulador, currentValue) =>
          acumulador +
          (currentValue.price -
            (currentValue.price * currentValue.discount) / 100) *
            currentValue.cantidad,
        0
      );
      totalP.innerText = `$${total}`;
      totalP.id = "total";
      divTotal.appendChild(cantidadProductos);
      divTotal.appendChild(totalP);
      sectionPagosDatos.appendChild(divTotal);

      //Costo de Envio
      const envio = document.createElement("div");
      envio.classList.add("div__total");
      const entrega = document.createElement("p");
      entrega.innerText = "ENTREGA";
      const costo = document.createElement("span");
      total > 19999
        ? (costo.innerText = "GRATIS")
        : (costo.innerText = "$3999");
      envio.appendChild(entrega);
      envio.appendChild(costo);
      sectionPagosDatos.appendChild(envio);

      //Costo total + envio
      const costoTotal = document.createElement("div");
      costoTotal.classList.add("div__total");
      const pTotal = document.createElement("p");
      pTotal.innerText = "TOTAL";
      const spanTotal = document.createElement("span");
      total > 19999
        ? (spanTotal.innerText = `$${total}`)
        : (spanTotal.innerText = `$${total + 3999}`);
      spanTotal.id = "totalenvio";
      costoTotal.appendChild(pTotal);
      costoTotal.appendChild(spanTotal);
      sectionPagosDatos.appendChild(costoTotal);

      //div buttons
      const divButton = document.createElement("div");
      divButton.classList.add("button");
      const button = document.createElement("button");
      button.classList.add("button-pagar");
      button.innerText = "IR A PAGAR";
      const faArrowRight = document.createElement("i");
      faArrowRight.classList.add("fa-solid");
      faArrowRight.classList.add("fa-arrow-right");
      button.appendChild(faArrowRight);
      divButton.appendChild(button);
      sectionPagosDatos.appendChild(divButton);

      //Cambio Envio
      const envioCambio = document.createElement("div");
      envioCambio.classList.add("envio-cambio");
      const envioCambioP = document.createElement("p");
      const faTruck = document.createElement("i");
      faTruck.classList.add("fa-solid");
      faTruck.classList.add("fa-truck");
      envioCambioP.appendChild(faTruck);
      envioCambioP.innerText += "ENVIO GRATIS A PARTIR DE $19.999";

      const CambioP = document.createElement("p");
      const fasolid = document.createElement("i");
      fasolid.classList.add("fa-solid");
      fasolid.classList.add("fa-right-left");
      CambioP.appendChild(fasolid);
      CambioP.innerText += "CAMBIOS GRATIS";

      envioCambio.appendChild(envioCambioP);
      envioCambio.appendChild(CambioP);
      sectionPagosDatos.appendChild(envioCambio);

      section.appendChild(sectionPagosDatos);
      divCarrito.appendChild(section);
    });
  });
}
