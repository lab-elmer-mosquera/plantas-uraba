/* Plantas de Urabá — datos del catálogo e imágenes (Wikimedia Commons) */
window.DATOS = {
  vivero: "Plantas de Urabá",
  region: "Urabá, Antioquia - Colombia",
  sitiourl: "https://plantas-uraba-lab-sena.netlify.app/",
  contacto: {
    telefono: "+57 300 000 0000",
    whatsapp: "+57 311 000 0000",
    email: "hola@plantasdeuraba.co"
  },
  portada: {
    hero: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Apartad%C3%B3_bananeras.jpg",
    vivero: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Quince_nursery_%28seedlings_was_grafted%29.jpg/960px-Quince_nursery_%28seedlings_was_grafted%29.jpg"
  },
  destacadas: ["banano", "maracuya", "cacao", "coco", "chontaduro", "roble", "saman", "borujo", "achiote"],
  categorias: [
    {
      id: "agricolas_frutales",
      nombre: "Agrícolas y Frutales",
      descripcion: "Base de la economía y la tradición agrícola de la región.",
      portada: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Musa_acuminata_Banan_kar%C5%82owaty_2019-07-12_01.jpg/960px-Musa_acuminata_Banan_kar%C5%82owaty_2019-07-12_01.jpg",
      plantas: [
        {
          id: "banano",
          nombre_comun: "Banano",
          nombre_cientifico: "Musa x acuminata",
          uso: "Comercial, exportación",
          descripcion: "El cultivo más icónico de Urabá, fundamental para el desarrollo económico local y con gran demanda internacional.",
          imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Musa_acuminata_Banan_kar%C5%82owaty_2019-07-12_01.jpg/960px-Musa_acuminata_Banan_kar%C5%82owaty_2019-07-12_01.jpg"
        },
        {
          id: "platanito",
          nombre_comun: "Plátano Hartón",
          nombre_cientifico: "Musa paradisiaca",
          uso: "Comercial, consumo interno",
          descripcion: "Especie de altísima demanda nacional, cultivada extensamente por pequeños y medianos productores como pilar alimenticio.",
          imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Plantain_Tree_IV.jpg/960px-Plantain_Tree_IV.jpg"
        },
        {
          id: "maracuya",
          nombre_comun: "Maracuyá",
          nombre_cientifico: "Passiflora edulis",
          uso: "Comercial, frutal",
          descripcion: "Conocido como el fruto de la pasión, es un cultivo de excelente adaptabilidad en la región y rápido crecimiento.",
          imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Passiflora_Edulis_Closed_Fruit.jpg/960px-Passiflora_Edulis_Closed_Fruit.jpg"
        },
        {
          id: "cacao",
          nombre_comun: "Cacao",
          nombre_cientifico: "Theobroma cacao",
          uso: "Agroindustrial",
          descripcion: "Cultivo en crecimiento en la subregión, destacado por generar granos de excelentes cualidades organolépticas.",
          imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Dried_Cacao_Pod_Held_in_Hand.jpg/960px-Dried_Cacao_Pod_Held_in_Hand.jpg"
        }
      ]
    },
    {
      id: "palmas",
      nombre: "Palmas",
      descripcion: "Especies palmáceas de gran rentabilidad económica y arraigo cultural.",
      portada: "https://upload.wikimedia.org/wikipedia/commons/8/80/Koh_Samui_Lipa_Noi2.jpg",
      plantas: [
        {
          id: "palmaAceite",
          nombre_comun: "Palma de Aceite",
          nombre_cientifico: "Elaeis guineensis",
          uso: "Agroindustrial",
          descripcion: "Cultivo extensivo que ha impulsado el desarrollo rural para la extracción de aceite de palma.",
          imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Elaeis_guineensis_oil_palm_fruit_Portoviejo_Ecuador.jpg/960px-Elaeis_guineensis_oil_palm_fruit_Portoviejo_Ecuador.jpg"
        },
        {
          id: "coco",
          nombre_comun: "Coco Criollo",
          nombre_cientifico: "Cocos nucifera",
          uso: "Comercial, frutal",
          descripcion: "Muy común en municipios costeros de Urabá, cultivado a menudo en asocio estratégico con el plátano.",
          imagen: "https://upload.wikimedia.org/wikipedia/commons/8/80/Koh_Samui_Lipa_Noi2.jpg"
        },
        {
          id: "chontaduro",
          nombre_comun: "Chontaduro",
          nombre_cientifico: "Bactris gasipaes",
          uso: "Alimenticio, maderable",
          descripcion: "Palma nativa cuyo fruto es altamente nutritivo y afrodisíaco; su tallo también es utilizado en herramientas y artesanías.",
          imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Peewah_%28Bactris_gasipaes%29_Fruit_-_Trinidad_and_Tobago.jpg/960px-Peewah_%28Bactris_gasipaes%29_Fruit_-_Trinidad_and_Tobago.jpg"
        }
      ]
    },
    {
      id: "maderables_forestales",
      nombre: "Maderables y Forestales",
      descripcion: "Árboles esenciales para proyectos de reforestación, sombra y aprovechamiento maderero.",
      portada: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Gmelina_Arborea.jpg/960px-Gmelina_Arborea.jpg",
      plantas: [
        {
          id: "melina",
          nombre_comun: "Melina",
          nombre_cientifico: "Gmelina arborea",
          uso: "Maderable comercial",
          descripcion: "Especie forestal de rápido crecimiento, muy utilizada en proyectos y plantaciones clonales de la zona.",
          imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Gmelina_Arborea.jpg/960px-Gmelina_Arborea.jpg"
        },
        {
          id: "roble",
          nombre_comun: "Roble",
          nombre_cientifico: "Tabebuia rosea",
          uso: "Maderable, conservación",
          descripcion: "Árbol nativo utilizado frecuentemente en siembras estratégicas para la recuperación de la selva húmeda tropical.",
          imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tabebuia_rosea_flower.jpg/960px-Tabebuia_rosea_flower.jpg"
        },
        {
          id: "guamo",
          nombre_comun: "Guamo",
          nombre_cientifico: "Inga edulis",
          uso: "Sombra, recuperación ecológica",
          descripcion: "Ideal para proveer sombra a otros cultivos (como el cacao) y excelente fijador de nitrógeno en el suelo.",
          imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Inga_edulis%2C_mature_and_juvenile_Guama_pods_%2810108341614%29.jpg/960px-Inga_edulis%2C_mature_and_juvenile_Guama_pods_%2810108341614%29.jpg"
        },
        {
          id: "saman",
          nombre_comun: "Samán",
          nombre_cientifico: "Samanea saman",
          uso: "Sombra, sistemas silvopastoriles",
          descripcion: "Especie de gran dosel utilizada habitualmente para dar sombra al ganado y proteger zonas de recarga hídrica.",
          imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Flooded_Albizia_Saman_%28rain_tree%29_in_the_Mekong.jpg/960px-Flooded_Albizia_Saman_%28rain_tree%29_in_the_Mekong.jpg"
        }
      ]
    },
    {
      id: "nativas_tradicionales",
      nombre: "Nativas y Tradicionales",
      descripcion: "Flora propia del trópico húmedo con importantes usos botánicos, culturales y medicinales.",
      portada: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Borojoa_patinoi.jpg/960px-Borojoa_patinoi.jpg",
      plantas: [
        {
          id: "borujo",
          nombre_comun: "Borojó",
          nombre_cientifico: "Borojoa patinoi",
          uso: "Frutal, tradicional",
          descripcion: "Fruto endémico del bosque húmedo tropical altamente valorado por sus propiedades energéticas y uso tradicional.",
          imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Borojoa_patinoi.jpg/960px-Borojoa_patinoi.jpg"
        },
        {
          id: "achiote",
          nombre_comun: "Achiote",
          nombre_cientifico: "Bixa orellana",
          uso: "Condimento, medicinal",
          descripcion: "Arbusto nativo cuyas semillas se utilizan mundialmente como colorante natural y en la medicina tradicional.",
          imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fruits_and_seeds_of_Bixa_orellana_%28Achiote%29.jpg/960px-Fruits_and_seeds_of_Bixa_orellana_%28Achiote%29.jpg"
        },
        {
          id: "bijao",
          nombre_comun: "Bijao",
          nombre_cientifico: "Calathea lutea",
          uso: "Empaque orgánico",
          descripcion: "Planta de hojas grandes utilizadas históricamente para envolver alimentos autóctonos debido a su resistencia y aroma.",
          imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Calathea_lutea_2.jpg/960px-Calathea_lutea_2.jpg"
        }
      ]
    }
  ],
  creditos: [
    { archivo: "Apartadó bananeras.jpg", autor: "Wikimedia Commons" },
    { archivo: "Musa acuminata Banan karłowaty 2019-07-12 01.jpg", autor: "Wikimedia Commons" },
    { archivo: "Plantain Tree IV.jpg", autor: "Wikimedia Commons" },
    { archivo: "Passiflora Edulis Closed Fruit.jpg", autor: "Wikimedia Commons" },
    { archivo: "Dried Cacao Pod Held in Hand.jpg", autor: "Wikimedia Commons" },
    { archivo: "Elaeis guineensis oil palm fruit Portoviejo Ecuador.jpg", autor: "Wikimedia Commons" },
    { archivo: "Koh Samui Lipa Noi2.jpg", autor: "Wikimedia Commons" },
    { archivo: "Peewah (Bactris gasipaes) Fruit - Trinidad and Tobago.jpg", autor: "Wikimedia Commons" },
    { archivo: "Gmelina Arborea.jpg", autor: "Wikimedia Commons" },
    { archivo: "Tabebuia rosea flower.jpg", autor: "Wikimedia Commons" },
    { archivo: "Inga edulis, mature and juvenile Guama pods (10108341614).jpg", autor: "Wikimedia Commons" },
    { archivo: "Flooded Albizia Saman (rain tree) in the Mekong.jpg", autor: "Wikimedia Commons" },
    { archivo: "Borojoa patinoi.jpg", autor: "Wikimedia Commons" },
    { archivo: "Fruits and seeds of Bixa orellana (Achiote).jpg", autor: "Wikimedia Commons" },
    { archivo: "Calathea lutea 2.jpg", autor: "Wikimedia Commons" },
    { archivo: "Quince nursery (seedlings was grafted).jpg", autor: "Wikimedia Commons" }
  ]
};

window.UI = {
  esc: function (s) {
    return String(s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  },
  totalEspecies: function () {
    return window.DATOS.categorias.reduce(function (n, c) { return n + c.plantas.length; }, 0);
  },
  porId: function (id) {
    for (var i = 0; i < window.DATOS.categorias.length; i++) {
      for (var j = 0; j < window.DATOS.categorias[i].plantas.length; j++) {
        if (window.DATOS.categorias[i].plantas[j].id === id) {
          var p = window.DATOS.categorias[i].plantas[j];
          p.categoria = window.DATOS.categorias[i];
          return p;
        }
      }
    }
    return null;
  },
  plantCard: function (p) {
    return (
      '<article class="plant-card sketch" data-cat="' + this.esc(p.categoria.id) + '" data-id="' + this.esc(p.id) + '">' +
        '<div class="plant-photo"><img src="' + this.esc(p.imagen) + '" alt="' + this.esc(p.nombre_comun) + '" loading="lazy" decoding="async"></div>' +
        '<div class="plant-body">' +
          '<span class="uso">' + this.esc(p.uso) + '</span>' +
          '<h3>' + this.esc(p.nombre_comun) + '</h3>' +
          '<p class="sci"><em>' + this.esc(p.nombre_cientifico) + '</em></p>' +
          '<p class="desc">' + this.esc(p.descripcion) + '</p>' +
          '<span class="plant-link">Ver detalle <span class="arr">→</span></span>' +
        '</div>' +
      '</article>'
    );
  },
  catCard: function (c) {
    return (
      '<a class="cat-card sketch" href="catalogo.html#' + this.esc(c.id) + '">' +
        '<div class="cat-photo"><img src="' + this.esc(c.portada) + '" alt="' + this.esc(c.nombre) + '" loading="lazy" decoding="async"></div>' +
        '<div class="cat-body">' +
          '<h3>' + this.esc(c.nombre) + '</h3>' +
          '<p class="cat-count">' + c.plantas.length + ' especies</p>' +
          '<p class="cat-desc">' + this.esc(c.descripcion) + '</p>' +
          '<span class="cat-link">Explorar →</span>' +
        '</div>' +
      '</a>'
    );
  },
  initImgFallback: function () {
    document.querySelectorAll(".plant-photo img, .cat-photo img, .modal-img, .hero-img, .story-photo img").forEach(function (img) {
      img.addEventListener("error", function () {
        var box = img.closest(".plant-photo, .cat-photo, .story-photo");
        if (box) {
          img.style.display = "none";
          box.classList.add("no-img");
          if (!box.querySelector(".no-img-tag")) {
            var t = document.createElement("span");
            t.className = "no-img-tag";
            t.textContent = (img.alt || "Planta").charAt(0);
            box.appendChild(t);
          }
        }
      });
    });
  }
};
