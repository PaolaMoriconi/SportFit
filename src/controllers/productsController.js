const products = [
  {
    id: 1,
    nombre: "Camiseta de boca para hombre",
    precio: 45000,
    descripcion: `Lleva a tu equipo a todos lados con la Camiseta adidas Boca Juniors Tercera,
          elaborada en poliéster,
          con tecnología de absorción del sudor AEROREADY.
          Rinde homenaje al campo de entrenamiento del club como se ve en el estampado
            CASA AMARILLA de la espalda. 
            Mostra tu pasión por el xeneize con el escudo 
            tejido en el pecho y alenta todos los días a tu equipo.`,
    image: "camisetaBocaHombre.jpg",
  },
  {
    id: 2,
    nombre: "Camiseta de boca para mujer",
    precio: 45000,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tenetur facilis ad aperiam dolores eius ratione vitae molestiae, neque inventore fugit repellat, perspiciatis temporibus veritatis eaque beatae, nam doloremque! Ex.",
    image: "/camisetaBocaMujer.jpg",
  },
  {
    id: 3,
    nombre: "Short de hombre ",
    precio: 25000,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tenetur facilis ad aperiam dolores eius ratione vitae molestiae, neque inventore fugit repellat, perspiciatis temporibus veritatis eaque beatae, nam doloremque! Ex.",
    image: "shortHombreGris.jpg",
  },
  {
    id: 4,
    nombre: "Short de mujer  ",
    precio: 25000,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tenetur facilis ad aperiam dolores eius ratione vitae molestiae, neque inventore fugit repellat, perspiciatis temporibus veritatis eaque beatae, nam doloremque! Ex.",
    image: "shortMujerRosa.jpg",
  },
  {
    id: 5,
    nombre: "Conjunto deportivo ",
    precio: 30000,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tenetur facilis ad aperiam dolores eius ratione vitae molestiae, neque inventore fugit repellat, perspiciatis temporibus veritatis eaque beatae, nam doloremque! Ex.",
    image: "conjuntoDeportivoHombre.jpg",
  },
  {
    id: 6,
    nombre: "Conjunto deportivo",
    precio: 30000,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tenetur facilis ad aperiam dolores eius ratione vitae molestiae, neque inventore fugit repellat, perspiciatis temporibus veritatis eaque beatae, nam doloremque! Ex.",
    image: "conjuntoDeportivoMujer.jpg",
  },
];

const productsController = {
  detail: (req, res) => {
    const { id } = req.params;
    const product = products.find((elemento) => elemento.id == id);
    res.render("./products/producDetail", { product });
  },
};

module.exports = productsController;
