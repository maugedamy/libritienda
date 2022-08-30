import { DB } from "./api/APIFirebase";
import {
  doc,
  collection,
  getDocs,
  query,
  where,
  getDoc,
  setDoc,
  serverTimestamp,
  updateDoc
} from "firebase/firestore";

const librosjson = [
  {
    id: 5656,
    title: "ROTA SE CAMINA IGUAL",

    description:
      "Rota impone un nuevo lenguaje. Un discurso fiel y contundente que nombra de forma precisa y lacerante las vivencias humanas por las que atravesamos todos. Apoyada en la herida como parte inevitable de la vida, la autora nos invita a reflexionar acerca de cómo y de qué forma podemos transitar con los dolores que nos perforan el alma y nos marcan un nuevo destino. Con un lenguaje sencillo y con la capacidad magistral de poner en palabras las emociones, nos lleva por todos los huecos de la subjetividad humana para darnos, en cada texto, la llave que nos permita abrir esa puerta que uno mantiene cerrada. Este libro es un viaje al interior de las emociones, con el que podemos identificarnos y hacernos carne a través de las heridas del desamor, del abandono, de las pérdidas, de la soledad y de la desolación. Lorena Pronsky nos muestra cómo puede volverse a construir un nuevo mundo, aún con esas grietas que la vida nos impone. Este es un viaje de regreso hacia nosotros mismos, en donde nos cruzaremos con dos opciones: aferrarnos a un dolor que nos deja en pausa o asumir la realidad que nos toca vivir, entendiendo que rota puede caminarse igual.",
    price: 3100,
    category: "espanol",
    pictureUrl:
      "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/695957.jpg",
    collection: false,
  },
  {
    id: 5657,
    title: "EL CASO ALASKA SANDERS",
    description:
      "«Sé lo que has hecho». Este mensaje, encontrado en el bolsillo del pantalón de Alaska Sanders, cuyo cadáver apareció el 3 de abril de 1999 al borde del lago de Mount Pleasant, una pequeña localidad de New Hampshire, es la clave de la nueva y apasionante investigación que, once años después de poner entre rejas a sus presuntos culpables, vuelve a reunir al escritor Marcus Goldman y al sargento Perry Gahalowood. En esta ocasión contarán con la inestimable ayuda de una joven agente de policía, Lauren Donovan, empeñada en resolver la trama de secretos que se esconde tras el caso. A medida que vayan descubriendo quién era realmente Alaska Sanders, irán resurgiendo también los fantasmas del pasado y, entre ellos, especialmente el de Harry Quebert.",
    price: 4999,
    category: "espanol",
    pictureUrl:
      "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/695975.jpg",
    collection: false,
  },
  {
    id: 5658,
    title: "LAS PALABRAS JUSTAS",
    description:
      "Milena Busquets practica en estos diarios una escritura de pinceladas impresionistas y logra que de lo cotidiano; de lo en apariencia anodino; emerja la epifania. Este es un diario sobre dias tristes y dias felices r´La euforia y la felicidad absolutas estan a un milimetro del ataque de panico´r; escrito sin trampa ni carton; sin falsos pudores; ni engolada pompa. Escrito siguiendo esta premisa: ´Uno escribe solo ante el peligro; no hay otra manera honesta de hacerlo; el menor atisbo de autocomplacencia es una senal de cobardia. Escribes contra ti primero y luego contra todo el mundo. Te pones a ti mismo contra las cuerdas; es el trabajo mas solitario del mundo; no te tienes ni a ti; te presentas completamente despojado; es peor que el amor.´ En estas paginas asoman de tanto en tanto las mascarillas; pero sobre todo asoma la vida: los hijos; los amores; las clases de yoga; las visitas al psiquiatra; los encuentros fortuitos; los reencuentros; los paseos por el barrio; la escritura como una gimnasia diaria... Y aparecen tambien la seduccion y el paso del tiempo; las disquisiciones sobre la verdadera elegancia; Proust; las lecciones literarias y vitales de Chejov; la emocion hasta las lagrimas ante la celebracion de la vida del West Side Story de Spielberg o un divertidisimo listado de tipologias de lectores observados durante las largas sesiones de firmas en ferias. Y el amor; siempre el amor: ´En el amor nada es una perdida de tiempo; todo sirve; la experiencia mas banal; mas absurda; mas ridicula; mas humillante; mas dolorosa; sirve; nada cae nunca en saco roto. Es imposible perder el tiempo con el amor; enamorarse raunque solo sea durante dos dias; aunque sea tontamente; aunque sea por despecho o por aburrimiento o por curiosidadr sirve siempre precisamente para lo contrario; para ganar tiempo.´ Con esa capacidad tan suya de combinar en su justa medida lo frivolo y lo profundo; Milena Busquets practica en estos diarios una escritura de pinceladas impresionistas y logra que de lo cotidiano; de lo en apariencia anodino; emerja la epifania: la novedosa carga erotica del gesto de recolocarle a un amigo la mascarilla que lleva mal puesta en una libreria; los zapatos del psiquiatra que asoman coquetos por debajo de la mesa; el vecino que llora en plena calle; el antiguo portero que trae a la memoria la antigua casa... Existe en esta ventana a la intimidad algo genuinamente femenino que se narra con una vitalidad y una ironia inimitables.",
    price: 1950,
    category: "espanol",
    pictureUrl:
      "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/696109.jpg",
    collection: false,
  },
  {
    id: 5659,
    title: "Harry Potter - Colección completa",
    description:
      "La colección completa de los libros de Harry Potter, la saga más mágica de todos los tiempos. Salamandra presenta la saga de «Harry Potter» en una edición renovada y única en un estuche con las siete novelas de Harry Potter. Con el rediseño de cubierta a cargo del galardonado ilustrador Jonny Duddle, estos libros son una nueva propuesta, muy atractiva, para acercar Harry Potter a todos los públicos: desde coleccionistas hasta los lectores más jóvenes.",
    price: 16499,
    category: "espanol",
    pictureUrl:
      "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/679227.jpg",
    collection: true,
  },
  {
    id: 5660,
    title:
      "Harry Potter Film Vault Comp box Set: The Complete Series (libro en Inglés)",
    description:
      "J.K. Rowling's seven bestselling Harry Potter books are available in a stunning paperback boxed set! The Harry Potter series has been hailed as “one for the ages” by Stephen King and “a spellbinding saga’ by USA Today. And most recently, The New York Times called Harry Potter and the Deathly Hallows the “fastest selling book in history.” This is the ultimate Harry Potter collection for Harry Potter fans of all ages!",
    price: 21841,
    category: "ingles",
    pictureUrl:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/d7/03/d7031f3c91af23d5f95bf35c97a9dac1.jpg",
    collection: true,
  },
  {
    id: 5661,
    title: "Selected Works of Virginia Woolf (6 Books) (libro en Inglés)",
    description:
      "This omnibus edition includes seven novels arranged chronologically - Jacob's Room, Mrs Dalloway, To the Lighthouse, Orlando, The Waves, The Years and Between the Acts - and two essays, A Room of One's Own and Three Guineas, Woolf's reply to a letter posing the question 'How are we to prevent war?' in 1938.",
    price: 11700,
    category: "ingles",
    pictureUrl:
      "https://images.cdn1.buscalibre.com/fit-in/360x360/07/68/0768b7e51b2f85c6c4b37d265ba2bcc8.jpg",
    collection: true,
  },
  {
    id: 5662,
    title: "Colección Literatura y Feminismo",
    description:
      "Tres libros imprescindibles escritos por mujeres que pensaron su tiempo, que analizaron el rol asignado históricamente a la mujer y que se animaron a escribirlo como ensayo o como ficción. Tres libros clave para comprender el presente y trabajar para modificar el futuro.",
    price: 7300,
    category: "espanol",
    pictureUrl:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/168/109/products/cuentos-intimos-un-cuarto-propio-lady-susan1-cd8318913f6cc96c0816396904426510-1024-1024.jpg",
    collection: true,
  },
  {
    id: 5662,
    title: "Coleccion Completa Sherlock Holmes - Estuche 8 Libros",
    description:
      "Escrito por Sir Arthur Conan Doyle entre los años 1867 y 1927, el legendario Sherlock Holmes empleó su dominio del razonamiento deductivo y la investigación experta para resolver una serie de casos complejos y desgarradores. Desde su casa, 221B Baker Street en Londres, el legendario Sherlock Holmes (acompañado por su leal compañero y cronista, el Dr. Watson) desconcertó a los policías y se hizo famoso en todo el mundo por sus notables observaciones y hábitos aún más excéntricos. Desde la primera aparición de Holmes en Un Estudio en escarlata (1887) y “El Sabueso de los Baskerville” (1901–1902), a través de la colección de historias, esta edición cuenta con todo el catálogo de Holmes en un estuche con 8 volumenes.",
    price: 13800,
    category: "espanol",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_611294-MLA50215288760_062022-O.webp",
    collection: true,
  },
  {
    id: 5663,
    title: "Sherlock Holmes Complete Collection",
    description:
      "With a luxurious, foiled arlin cover and gilded page edgees, this deluxe and expansive edition, produced in association with The Sherlock Holmes Museum at 221B Baker Street, is the definitive collection for fans of the great detective. It contains all of Conan Doyle's stories four novels and a colossal 56 short stories complete and unabridged, encompassing the entirety of the legendary author's Sherlock Holmes work. When Sir Arthur Conan Doyle introduced the world to Sherlock Holmes and Dr. Watson in 1887's A Study in Scarlet, a true icon of literature was born. Since then, their humble address at 221B Baker Street has become almost as famous as the great detective himself, with the incredible popularity of Sherlock Holmes's adventures never wavering over the last 130 years.",
    price: 16700,
    category: "ingles",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_616791-MLA49775739936_042022-O.webp",
    collection: true,
  },
];

export const getLibros = (categoryId) => {
  return new Promise((resolve, reject) => {
    const colRef = collection(DB, "libros");
    getDocs(colRef).then(
      (snapshot) => {
        console.log(">>snapshot.docs: ", snapshot.docs);

        const librosConFormato = snapshot.docs.map((rawDoc) => {
          return {
            id: rawDoc.id,
            ...rawDoc.data(),
          };
        });

        console.log(">>Libros: ", librosConFormato);
        resolve(librosConFormato);
      },
      (error) => {
        reject("Error al cargar libros", error);
      }
    );
  });
};

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(librosjson);
//       }, 500);
//     });
// });

// export const getLibrosByCategory = (categoryId) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(librosjson.filter((lib) => (categoryId === 'colecciones' && lib.collection === true) || lib.category === categoryId));
//     }, 500);
//   });
// };

export const getLibrosByCategory = async (categoryId) => {
  let consulta;

  if (categoryId === "colecciones") {
    consulta = query(collection(DB, "libros"), where("collection", "==", true));
  } else {
    consulta = query(
      collection(DB, "libros"),
      where("category", "==", categoryId)
    );
  }

  const querySnapshot = await getDocs(consulta);
  const librosConsulta = querySnapshot.docs.map((rawDoc) => ({
    id: rawDoc.id,
    ...rawDoc.data(),
  }));

  return librosConsulta;
};

export const getLibroById = (id) => {
  return new Promise((resolve, reject) => {
    const colRef = doc(DB, "libros", id);
    getDoc(colRef).then(
      (docLibro) => {
        console.log(">>snapshot.docs: ", docLibro.doc);

        if (docLibro.exists()) {
          const librosConFormato = {
            id: id,
            ...docLibro.data(),
          };

          console.log(">>Libros: ", librosConFormato);
          resolve(librosConFormato);
        }
      },
      (error) => {
        reject("Error al cargar libros", error);
      }
    );
  });
};

export const createOrderInFirestore = async (order) => {
  // Add a new document with a generated id
  order.date = serverTimestamp();
  const newOrderRef = doc(collection(DB, "orders"));
  await setDoc(newOrderRef, order);
  return newOrderRef;
};

// export const updateStock = async (libroCarrito) => {
//   const itemRef = doc(DB, "products", libroCarrito.id);
//   await updateDoc(itemRef, {
//     stock: increment(-libroCarrito.qtyItem),
//   });
// };
