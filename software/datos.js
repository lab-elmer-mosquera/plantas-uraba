/* Plantas de Urabá — datos del catálogo (100 especies) e imágenes (Wikimedia Commons) */
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
  destacadas: ["banano", "cacao", "maracuya", "guanabana", "pina", "aguacate", "melina", "campano-saman", "anturio", "monstera", "moringa", "limonaria"],
  categorias: [
    {
      id: "frutales",
      nombre: "Frutales y Agroindustria",
      descripcion: "Base agrícola de la región: frutas, cítricos y cultivos de agroindustria.",
      portada: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Musa_acuminata_Banan_kar%C5%82owaty_2019-07-12_01.jpg/960px-Musa_acuminata_Banan_kar%C5%82owaty_2019-07-12_01.jpg",
      plantas: [
        { id: "banano", nombre_comun: "Banano", nombre_cientifico: "Musa × paradisiaca", uso: "Comercial, exportación", descripcion: "Principal monocultivo de exportación de Urabá, clave para la economía regional.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Musa_acuminata_Banan_kar%C5%82owaty_2019-07-12_01.jpg/960px-Musa_acuminata_Banan_kar%C5%82owaty_2019-07-12_01.jpg" },
        { id: "platano", nombre_comun: "Plátano", nombre_cientifico: "Musa balbisiana", uso: "Comercial, consumo interno", descripcion: "Alimento básico de alto consumo nacional y exportación internacional.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Plantain_Tree_IV.jpg/960px-Plantain_Tree_IV.jpg" },
        { id: "palma-aceite", nombre_comun: "Palma de Aceite", nombre_cientifico: "Elaeis guineensis", uso: "Agroindustrial", descripcion: "Cultivo agroindustrial a gran escala para extracción de aceite vegetal y biodiésel.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Elaeis_guineensis_oil_palm_fruit_Portoviejo_Ecuador.jpg/960px-Elaeis_guineensis_oil_palm_fruit_Portoviejo_Ecuador.jpg" },
        { id: "cacao", nombre_comun: "Cacao", nombre_cientifico: "Theobroma cacao", uso: "Agroindustrial", descripcion: "Especie clave en sistemas agroforestales, de alta demanda por la industria chocolatera.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Dried_Cacao_Pod_Held_in_Hand.jpg/960px-Dried_Cacao_Pod_Held_in_Hand.jpg" },
        { id: "maracuya", nombre_comun: "Maracuyá", nombre_cientifico: "Passiflora edulis", uso: "Frutal, pulpas", descripcion: "Fruto de alto rendimiento comercializado para la elaboración de jugos y pulpas.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Passiflora_Edulis_Closed_Fruit.jpg/960px-Passiflora_Edulis_Closed_Fruit.jpg" },
        { id: "pina", nombre_comun: "Piña", nombre_cientifico: "Ananas comosus", uso: "Frutal, mercado fresco", descripcion: "Cultivo plano de gran adaptación en la zona, destinado al mercado fresco y procesado.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Pi%C3%B1a_%28Ananas_comosus%29%2C_Parque_Nacional_de_Lokobe%2C_Nosy_Be%2C_Madagascar%2C_2025-09-21%2C_DD_39.jpg/960px-Pi%C3%B1a_%28Ananas_comosus%29%2C_Parque_Nacional_de_Lokobe%2C_Nosy_Be%2C_Madagascar%2C_2025-09-21%2C_DD_39.jpg" },
        { id: "papaya", nombre_comun: "Papaya", nombre_cientifico: "Carica papaya", uso: "Frutal, plazas", descripcion: "Frutal de rápido ciclo productivo, ideal para venta continua en plazas y supermercados.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Carica_papaya_14_7_2012.jpg/960px-Carica_papaya_14_7_2012.jpg" },
        { id: "mango", nombre_comun: "Mango", nombre_cientifico: "Mangifera indica", uso: "Frutal, consumo e industrial", descripcion: "Fruto tropical muy cotizado en variedades para consumo fresco e industrial.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Apple_mango_and_cross_section_edit1.jpg/960px-Apple_mango_and_cross_section_edit1.jpg" },
        { id: "aguacate", nombre_comun: "Aguacate", nombre_cientifico: "Persea americana", uso: "Frutal, agroforestal", descripcion: "Variedades de bajura sembradas para abastecimiento regional y potencial agroforestal.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Persea_americana_fruits.JPG/960px-Persea_americana_fruits.JPG" },
        { id: "zapote-costeno", nombre_comun: "Zapote Costeño", nombre_cientifico: "Quararibea cordata", uso: "Frutal tradicional", descripcion: "Fruta tradicional de la región con excelente mercado local por su sabor y pulpa.", imagen: "https://upload.wikimedia.org/wikipedia/commons/8/86/Matisia_%28or_Quararibea%29_cordata_%2816540973423%29.jpg" },
        { id: "guanabana", nombre_comun: "Guanábana", nombre_cientifico: "Annona muricata", uso: "Frutal, industria de bebidas", descripcion: "Muy valorada en el mercado agroalimentario por su pulpa congelada e industria de bebidas.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Soursop%2C_Annona_muricata.jpg/960px-Soursop%2C_Annona_muricata.jpg" },
        { id: "guayaba", nombre_comun: "Guayaba", nombre_cientifico: "Psidium guajava", uso: "Materia prima, procesados", descripcion: "Materia prima de alto volumen para bocadillo, mermeladas y jugos procesados.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Psidium_guajava_%28Common_Guava%29_-_Branch_with_Developing_Fruits_and_Foliage.jpg/960px-Psidium_guajava_%28Common_Guava%29_-_Branch_with_Developing_Fruits_and_Foliage.jpg" },
        { id: "lulo", nombre_comun: "Lulo", nombre_cientifico: "Solanum quitoense", uso: "Frutal, bebidas", descripcion: "Fruta de alta demanda comercial en Colombia para bebidas y refrescos.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Lulo_-_Solanum_quitoense.jpg/960px-Lulo_-_Solanum_quitoense.jpg" },
        { id: "limon-tahiti", nombre_comun: "Limón Tahití", nombre_cientifico: "Citrus × latifolia", uso: "Cítrico, exportación", descripcion: "Cítrico de alta rotación para consumo nacional y exportación en fresco.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Citrus_aurantiifolia_by_Kadavoor.jpg/960px-Citrus_aurantiifolia_by_Kadavoor.jpg" },
        { id: "naranja-valencia", nombre_comun: "Naranja Valencia", nombre_cientifico: "Citrus × sinensis", uso: "Cítrico, jugos", descripcion: "Frutal cítrico estándar para la industria de jugos embotellados y mercados locales.", imagen: "" },
        { id: "tamarindo", nombre_comun: "Tamarindo", nombre_cientifico: "Tamarindus indica", uso: "Frutal, concentrados", descripcion: "Usado para concentrados, dulces tradicionales y salsas en la industria alimentaria.", imagen: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Tamarindus_indica_pods.JPG" },
        { id: "borujo", nombre_comun: "Borojó", nombre_cientifico: "Borojoa patinoi", uso: "Frutal nativo, energético", descripcion: "Fruto nativo del Pacífico y Urabá comercializado por sus propiedades energéticas.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Borojoa_patinoi.jpg/960px-Borojoa_patinoi.jpg" },
        { id: "maranon", nombre_comun: "Marañón", nombre_cientifico: "Anacardium occidentale", uso: "Frutal y nuez", descripcion: "Aprovechado comercialmente tanto por su seudofructo fresco como por su nuez.", imagen: "https://upload.wikimedia.org/wikipedia/commons/3/39/Anacardium_occidentale--_Cashew_apple_and_nut_%2830853573405%29.jpg" },
        { id: "chontaduro", nombre_comun: "Chontaduro", nombre_cientifico: "Bactris gasipaes", uso: "Palma frutal", descripcion: "Palma frutal de alta demanda en el mercado local por su valor nutricional.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Peewah_%28Bactris_gasipaes%29_Fruit_-_Trinidad_and_Tobago.jpg/960px-Peewah_%28Bactris_gasipaes%29_Fruit_-_Trinidad_and_Tobago.jpg" },
        { id: "carambolo", nombre_comun: "Carambolo", nombre_cientifico: "Averrhoa carambola", uso: "Frutal ornamental", descripcion: "Fruto ornamental y comestible, usado en decoración gastronómica y jugos.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Carambola_Starfruit.jpg/960px-Carambola_Starfruit.jpg" },
        { id: "mamey", nombre_comun: "Mamey", nombre_cientifico: "Mammea americana", uso: "Frutal, repostería", descripcion: "Fruta de pulpa firme y dulce apreciada en repostería y conservación.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Mammea_americana_%28Abricotier_des_Antilles_1%29.jpg/960px-Mammea_americana_%28Abricotier_des_Antilles_1%29.jpg" },
        { id: "nispero", nombre_comun: "Níspero", nombre_cientifico: "Manilkara zapota", uso: "Frutal, consumo fresco", descripcion: "Frutal tradicional con mercado enfocado en el consumo fresco.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Manilkara_zapota_02368.jpg/960px-Manilkara_zapota_02368.jpg" },
        { id: "anon", nombre_comun: "Anón", nombre_cientifico: "Annona squamosa", uso: "Frutal, consumo directo", descripcion: "Fruto dulce tropical de consumo directo con buena acogida regional.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Sugarapple.jpg/960px-Sugarapple.jpg" },
        { id: "grosella", nombre_comun: "Grosella", nombre_cientifico: "Phyllanthus acidus", uso: "Frutal, conservas", descripcion: "Utilizada principalmente para conservas, dulces acidulados y almíbares.", imagen: "" },
        { id: "caimito", nombre_comun: "Caimito", nombre_cientifico: "Chrysophyllum cainito", uso: "Frutal estacional", descripcion: "Frutal silvestre y de huerto comercializado en temporadas específicas.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Star_apple_%28Chrysophyllum_cainito%29_La%27ea_Buton_Island_5.jpg/960px-Star_apple_%28Chrysophyllum_cainito%29_La%27ea_Buton_Island_5.jpg" },
        { id: "mandarina", nombre_comun: "Mandarina", nombre_cientifico: "Citrus reticulata", uso: "Cítrico, consumo masivo", descripcion: "Cítrico de consumo masivo en fresco de gran rotación en centros urbanos.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Mandarin_Oranges_%28Citrus_Reticulata%29.jpg/960px-Mandarin_Oranges_%28Citrus_Reticulata%29.jpg" },
        { id: "toronja", nombre_comun: "Toronja", nombre_cientifico: "Citrus paradisi", uso: "Cítrico, bebidas", descripcion: "Cultivada para la industria de bebidas saludables y consumo fresco.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg/960px-Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg" },
        { id: "araza", nombre_comun: "Arazá", nombre_cientifico: "Eugenia stipitata", uso: "Frutal amazónico, pulpas", descripcion: "Frutal amazónico adaptado con alta proyección comercial para pulpas ácidas.", imagen: "" },
        { id: "badea", nombre_comun: "Badea", nombre_cientifico: "Passiflora quadrangularis", uso: "Pasiflorácea, refrescos", descripcion: "Pasiflorácea grande utilizada localmente para refrescos naturales.", imagen: "" },
        { id: "granadilla", nombre_comun: "Granadilla", nombre_cientifico: "Passiflora ligularis", uso: "Frutal de mesa", descripcion: "Fruta de mesa de alto valor comercial en mercados nacionales de alta gama.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Sweet_granadillas_%28Passiflora_ligularis%29_-_whole_and_cross_section.jpg/960px-Sweet_granadillas_%28Passiflora_ligularis%29_-_whole_and_cross_section.jpg" }
      ]
    },
    {
      id: "maderables",
      nombre: "Maderables, Forestales y Silvopastoriles",
      descripcion: "Especies de madera valiosa, reforestación y sombra para ganadería.",
      portada: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Gmelina_Arborea.jpg/960px-Gmelina_Arborea.jpg",
      plantas: [
        { id: "teca", nombre_comun: "Teca", nombre_cientifico: "Tectona grandis", uso: "Maderable de exportación", descripcion: "Madera preciosa de reforestación comercial con alto valor de exportación.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Kannimara_Teak_in_Parambikulam_Tiger_Reserve_on_13-01-2011_P1120625.jpg/960px-Kannimara_Teak_in_Parambikulam_Tiger_Reserve_on_13-01-2011_P1120625.jpg" },
        { id: "caoba", nombre_comun: "Caoba", nombre_cientifico: "Swietenia macrophylla", uso: "Maderable fino", descripcion: "Especie forestal fina muy codiciada para ebanistería y carpintería de lujo.", imagen: "" },
        { id: "nogal", nombre_comun: "Nogal Maderable", nombre_cientifico: "Cordia gerascanthus", uso: "Maderable, sombrío", descripcion: "Madera resistente empleada en construcciones y sombreado de cultivos.", imagen: "" },
        { id: "caucho", nombre_comun: "Caucho", nombre_cientifico: "Hevea brasiliensis", uso: "Agroforestal, látex", descripcion: "Especie agroforestal explotada para la extracción de látex y posterior uso maderero.", imagen: "" },
        { id: "flor-morado", nombre_comun: "Flor Morado / Guayacán", nombre_cientifico: "Tabebuia rosea", uso: "Maderable, paisajismo", descripcion: "Madera valiosa y árbol muy demandado para paisajismo urbano y comercial.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tabebuia_rosea_flower.jpg/960px-Tabebuia_rosea_flower.jpg" },
        { id: "ceiba-bongo", nombre_comun: "Ceiba Bongo", nombre_cientifico: "Ceiba pentandra", uso: "Maderable liviano", descripcion: "Árbol gigante de madera liviana usado para contrachapados y embalajes.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Kapok_on_a_branch_of_Ceiba_pentandra_%28white_silk-cotton_tree%29.jpg/960px-Kapok_on_a_branch_of_Ceiba_pentandra_%28white_silk-cotton_tree%29.jpg" },
        { id: "melina", nombre_comun: "Melina", nombre_cientifico: "Gmelina arborea", uso: "Maderable rápido", descripcion: "Maderable de crecimiento ultrarrápido para pulpa, estibas y aglomerados.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Gmelina_Arborea.jpg/960px-Gmelina_Arborea.jpg" },
        { id: "eucalipto", nombre_comun: "Eucalipto", nombre_cientifico: "Eucalyptus spp.", uso: "Varas y tutores", descripcion: "Utilizado masivamente para varas de tutorado, pilotes y leña comercial.", imagen: "" },
        { id: "acacia", nombre_comun: "Acacia", nombre_cientifico: "Acacia mangium", uso: "Restauración, leña", descripcion: "Fijadora de nitrógeno empleada en restauración de suelos y leña industrial.", imagen: "" },
        { id: "cedro-amargo", nombre_comun: "Cedro Amargo", nombre_cientifico: "Cedrela odorata", uso: "Madera fina", descripcion: "Madera fina tradicional muy buscada por su resistencia a plagas y calidad.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Cedrela_odorata_trunk.JPG/960px-Cedrela_odorata_trunk.JPG" },
        { id: "cativo", nombre_comun: "Cativo", nombre_cientifico: "Prioria copaifera", uso: "Forestal nativo", descripcion: "Especie nativa de zonas inundables con importancia histórica y forestal.", imagen: "" },
        { id: "abarco", nombre_comun: "Abarco", nombre_cientifico: "Cariniana pyriformis", uso: "Madera estructural", descripcion: "Madera estructural de altísima durabilidad y valor comercial.", imagen: "" },
        { id: "balsa", nombre_comun: "Balsa", nombre_cientifico: "Ochroma pyramidale", uso: "Madera liviana", descripcion: "Madera extremadamente liviana para uso industrial, maquetas y aislamiento.", imagen: "" },
        { id: "bambu", nombre_comun: "Bambú / Guadua", nombre_cientifico: "Guadua angustifolia", uso: "Construcción sostenible", descripcion: "Material sostenible de construcción, estructuras ecoturísticas y artesanías.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Guadua_angustifolia_1zz.jpg/960px-Guadua_angustifolia_1zz.jpg" },
        { id: "campano-saman", nombre_comun: "Campano / Samán", nombre_cientifico: "Albizia saman", uso: "Silvopastoril, sombra", descripcion: "Excelente árbol silvopastoril que brinda sombra al ganado y madera utilizable.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Flooded_Albizia_Saman_%28rain_tree%29_in_the_Mekong.jpg/960px-Flooded_Albizia_Saman_%28rain_tree%29_in_the_Mekong.jpg" },
        { id: "guayacan-amarillo", nombre_comun: "Guayacán Amarillo", nombre_cientifico: "Handroanthus chrysanthus", uso: "Madera pesada", descripcion: "Madera pesada e imputrescible, muy apreciada en ebanistería y ornamentación.", imagen: "" },
        { id: "caracoli", nombre_comun: "Caracolí", nombre_cientifico: "Anacardium excelsum", uso: "Protección hídrica", descripcion: "Protector de fuentes hídricas con madera empleada en cajonería.", imagen: "" },
        { id: "matarraton", nombre_comun: "Matarratón", nombre_cientifico: "Gliricidia sepium", uso: "Forraje, cercas vivas", descripcion: "Planta forrajera para cercas vivas y nutrición animal en ganadería.", imagen: "" },
        { id: "leucaena", nombre_comun: "Leucaena", nombre_cientifico: "Leucaena leucocephala", uso: "Forraje proteico", descripcion: "Leguminosa de alto contenido proteico para alimento bovino y recuperación de suelos.", imagen: "" },
        { id: "yarumo", nombre_comun: "Yarumo", nombre_cientifico: "Cecropia peltata", uso: "Restauración ecológica", descripcion: "Árbol de rápido crecimiento usado en restauración ecológica y medicina tradicional.", imagen: "" }
      ]
    },
    {
      id: "tuberculos",
      nombre: "Tubérculos, Hortalizas y Granos",
      descripcion: "Alimentos básicos de la canasta familiar y materias primas de la agroindustria.",
      portada: "https://upload.wikimedia.org/wikipedia/commons/3/37/Manihot_esculenta%2C_the_Cassava_plant_%2817254469394%29.jpg",
      plantas: [
        { id: "yuca", nombre_comun: "Yuca", nombre_cientifico: "Manihot esculenta", uso: "Tubérculo, almidón", descripcion: "Tubérculo básico de la canasta familiar y materia prima para almidón industrial.", imagen: "https://upload.wikimedia.org/wikipedia/commons/3/37/Manihot_esculenta%2C_the_Cassava_plant_%2817254469394%29.jpg" },
        { id: "name-espino", nombre_comun: "Ñame Espino", nombre_cientifico: "Dioscorea rotundata", uso: "Tubérculo, exportación", descripcion: "Variedad de ñame de alta demanda para consumo local y exportación marítima.", imagen: "" },
        { id: "name-diamante", nombre_comun: "Ñame Diamante", nombre_cientifico: "Dioscorea alata", uso: "Tubérculo", descripcion: "Tubérculo rústico comercializado ampliamente en los mercados del Caribe.", imagen: "" },
        { id: "maiz", nombre_comun: "Maíz", nombre_cientifico: "Zea mays", uso: "Grano básico", descripcion: "Grano básico sembrado en rotación o intercalado para alimento humano y avícola.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Zea_mays_%27arc_en_ciel_inca%27_MHNT.BOT.2015.34.2.jpg/960px-Zea_mays_%27arc_en_ciel_inca%27_MHNT.BOT.2015.34.2.jpg" },
        { id: "guandul", nombre_comun: "Guandul", nombre_cientifico: "Cajanus cajan", uso: "Leguminosa, grano", descripcion: "Leguminosa resistente a la sequía comercializada para consumo de grano seco o verde.", imagen: "" },
        { id: "ahuyama", nombre_comun: "Ahuyama / Zapallo", nombre_cientifico: "Cucurbita moschata", uso: "Hortaliza", descripcion: "Hortaliza de fácil manejo y amplia venta en plazas de mercado.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Cucurbita_moschata_Butternut_2012_G2.jpg/960px-Cucurbita_moschata_Butternut_2012_G2.jpg" },
        { id: "aji-dulce", nombre_comun: "Ají Dulce", nombre_cientifico: "Capsicum chinense", uso: "Condimento", descripcion: "Condimento clave en la gastronomía regional de altísima rotación comercial.", imagen: "" },
        { id: "aji-picante", nombre_comun: "Ají Picante / Tabasco", nombre_cientifico: "Capsicum frutescens", uso: "Salsas industriales", descripcion: "Cultivado para la industria procesadora de salsas y picantes.", imagen: "" },
        { id: "jengibre", nombre_comun: "Jengibre", nombre_cientifico: "Zingiber officinale", uso: "Rizoma aromático", descripcion: "Rizoma de gran demanda gastronómica y farmacéutica.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ginger_Root.jpg/960px-Ginger_Root.jpg" },
        { id: "curcuma", nombre_comun: "Cúrcuma", nombre_cientifico: "Curcuma longa", uso: "Colorante natural", descripcion: "Procesada comercialmente como colorante natural y suplemento de salud.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Curcuma_longa_roots.jpg/960px-Curcuma_longa_roots.jpg" },
        { id: "cilantro-ancho", nombre_comun: "Cilantro Ancho / Cimarrón", nombre_cientifico: "Eryngium foetidum", uso: "Sazonador", descripcion: "Hierba sazonadora fundamental cultivada para abastecimiento de mercados locales.", imagen: "" },
        { id: "berenjena", nombre_comun: "Berenjena", nombre_cientifico: "Solanum melongena", uso: "Hortaliza", descripcion: "Hortaliza de buena adaptación al clima cálido para consumo fresco.", imagen: "" },
        { id: "habichuela", nombre_comun: "Habichuela", nombre_cientifico: "Vigna unguiculata", uso: "Legumbre", descripcion: "Legumbre de ciclo corto para venta continua en verdulerías.", imagen: "" },
        { id: "batata", nombre_comun: "Batata / Camote", nombre_cientifico: "Ipomoea batatas", uso: "Tubérculo dulce", descripcion: "Tubérculo dulce en auge por sus propiedades nutricionales y uso industrial.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Ipomoea_batatas_%28Sweet_potato%29_in_China.jpg/960px-Ipomoea_batatas_%28Sweet_potato%29_in_China.jpg" },
        { id: "frijol-caupi", nombre_comun: "Fríjol Caupí", nombre_cientifico: "Vigna unguiculata", uso: "Leguminosa", descripcion: "Grano adaptable a climas cálidos para consumo de proteína vegetal económica.", imagen: "" }
      ]
    },
    {
      id: "ornamentales",
      nombre: "Ornamentales y Flores Tropicales",
      descripcion: "Follaje y flores exóticas para jardinería, interiorismo y exportación.",
      portada: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Anthurium_andreanum_2zz.jpg/960px-Anthurium_andreanum_2zz.jpg",
      plantas: [
        { id: "heliconia-ave", nombre_comun: "Heliconia Ave del Paraíso", nombre_cientifico: "Heliconia bihai", uso: "Flor cortada, exportación", descripcion: "Flor exótica cortada de larga duración, ideal para arreglos y exportación.", imagen: "" },
        { id: "heliconia-rostrata", nombre_comun: "Heliconia Rostrata", nombre_cientifico: "Heliconia rostrata", uso: "Flor cortada, diseño", descripcion: "Popular por sus inflorescencias colgantes comerciales en diseño floral.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Heliconia_Rostrata_-_72.jpg/960px-Heliconia_Rostrata_-_72.jpg" },
        { id: "heliconia-psittacorum", nombre_comun: "Heliconia Psittacorum", nombre_cientifico: "Heliconia psittacorum", uso: "Ornamental, jardín", descripcion: "Variedad más pequeña muy vendida para jardines urbanos y arreglos sencillos.", imagen: "" },
        { id: "anturio", nombre_comun: "Anturio Tropical", nombre_cientifico: "Anthurium andreanum", uso: "Flor cortada, interior", descripcion: "Planta de interior y flor cortada de alto valor en viveros.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Anthurium_andreanum_2zz.jpg/960px-Anthurium_andreanum_2zz.jpg" },
        { id: "palma-real", nombre_comun: "Palma Real", nombre_cientifico: "Roystonea regia", uso: "Paisajismo", descripcion: "Palma monumental cotizada para proyectos de paisajismo e interiorismo urbano.", imagen: "" },
        { id: "palma-areca", nombre_comun: "Palma Areca", nombre_cientifico: "Dypsis lutescens", uso: "Interior, cerramientos", descripcion: "Una de las plantas ornamentales más vendidas para interiores y cerramientos verdes.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Golden_cane_palm_%28Dypsis_lutescens%29_trunk%2C_Estufa_Fria%2C_Lisbon%2C_Portugal_julesvernex2.jpg/960px-Golden_cane_palm_%28Dypsis_lutescens%29_trunk%2C_Estufa_Fria%2C_Lisbon%2C_Portugal_julesvernex2.jpg" },
        { id: "palma-cera", nombre_comun: "Palma de Cera de Bajo", nombre_cientifico: "Arecaceae", uso: "Paisajismo tropical", descripcion: "Usada en paisajismo tropical por su porte elegante y estética.", imagen: "" },
        { id: "sansevieria", nombre_comun: "Sansevieria", nombre_cientifico: "Sansevieria trifasciata", uso: "Interior, maceta", descripcion: "Planta de interior ultrarresistente de muy alta demanda comercial en maceta.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Sansevieria_trifasciata_Plant_3264px.jpg/960px-Sansevieria_trifasciata_Plant_3264px.jpg" },
        { id: "veranera", nombre_comun: "Veranera / Trinitaria", nombre_cientifico: "Bougainvillea spectabilis", uso: "Trepadora ornamental", descripcion: "Arbustiva trepadora comercializada por sus llamativas y abundantes flores.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bougainvillea_glabra_20D_8543.jpg/960px-Bougainvillea_glabra_20D_8543.jpg" },
        { id: "palma-bisnieta", nombre_comun: "Palma Bisnieta", nombre_cientifico: "Caryota mitis", uso: "Jardín ornamental", descripcion: "Palma ornamental de follaje único usada en decoración de jardines.", imagen: "" },
        { id: "calatea", nombre_comun: "Calatea / Platanillo Ornamental", nombre_cientifico: "Calathea zebrina", uso: "Follaje decorativo", descripcion: "Planta de follaje decorativo para sombras e interiores.", imagen: "" },
        { id: "filodendro", nombre_comun: "Filodendro", nombre_cientifico: "Philodendron scandens", uso: "Interior, colgante", descripcion: "Trepadora o colgante de alta venta para decoración de oficinas y hogares.", imagen: "" },
        { id: "monstera", nombre_comun: "Monstera / Costilla de Adán", nombre_cientifico: "Monstera deliciosa", uso: "Follaje, tendencia", descripcion: "Planta tendencia en paisajismo por sus grandes hojas caladas.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Monstera_deliciosa_-_Wilhelma_01.jpg/960px-Monstera_deliciosa_-_Wilhelma_01.jpg" },
        { id: "croton", nombre_comun: "Crotón", nombre_cientifico: "Codiaeum variegatum", uso: "Follaje colorido", descripcion: "Arbusto ornamental comercializado por el colorido vivo de sus hojas.", imagen: "" },
        { id: "cordiline", nombre_comun: "Cordiline / Puntiaguda", nombre_cientifico: "Cordyline fruticosa", uso: "Follaje de contraste", descripcion: "Planta de follaje rojizo o morado usada para contrastes en jardinería.", imagen: "" },
        { id: "ixora", nombre_comun: "Ixora / Coralito", nombre_cientifico: "Ixora coccinea", uso: "Setos vivos", descripcion: "Arbusto de floración constante para setos vivos y jardines.", imagen: "" },
        { id: "jazmin-noche", nombre_comun: "Jazmín de Noche", nombre_cientifico: "Cestrum nocturnum", uso: "Ornamental aromática", descripcion: "Arbusto ornamental apreciado en viveros por el intenso aroma nocturno de sus flores.", imagen: "" },
        { id: "coleo", nombre_comun: "Manta de Cristo / Coleo", nombre_cientifico: "Solenostemon scutellarioides", uso: "Follaje vistoso", descripcion: "Planta económica de rápido crecimiento con hojas de colores vistosos.", imagen: "" },
        { id: "agave", nombre_comun: "Agave Azul / Ornamental", nombre_cientifico: "Agave tequilana", uso: "Paisajismo bajo mantenimiento", descripcion: "Planta suculenta usada en paisajismo de bajo mantenimiento y arquitectura.", imagen: "" },
        { id: "bromelia", nombre_comun: "Bromelia Tropical", nombre_cientifico: "Aechmea fasciata", uso: "Interior, epífita", descripcion: "Planta epífita decorativa muy vendida como regalo u ornamental de interior.", imagen: "" }
      ]
    },
    {
      id: "aromaticas",
      nombre: "Aromáticas, Medicinales y Agroecológicas",
      descripcion: "Hierbas y plantas de alto valor para la gastronomía, la salud y la agroecología.",
      portada: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Drumstick_tree_%28Moringa_oleifera%29.jpg/960px-Drumstick_tree_%28Moringa_oleifera%29.jpg",
      plantas: [
        { id: "limonaria", nombre_comun: "Limonaria / Pronto Alivio", nombre_cientifico: "Cymbopogon citratus", uso: "Aromática, infusiones", descripcion: "Hierba aromática vendida para infusión herbal y extracción de aceites.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Cymbopogon_citratus_lemongrass_plant_in_garden.jpg/960px-Cymbopogon_citratus_lemongrass_plant_in_garden.jpg" },
        { id: "albahaca", nombre_comun: "Albahaca", nombre_cientifico: "Ocimum basilicum", uso: "Gastronómica", descripcion: "Planta gastronómica y aromática de consumo continuo en fresco y maceta.", imagen: "" },
        { id: "moringa", nombre_comun: "Moringa", nombre_cientifico: "Moringa oleifera", uso: "Superalimento", descripcion: "Árbol multipropósito vendido en polvo o hojas secas como superalimento.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Drumstick_tree_%28Moringa_oleifera%29.jpg/960px-Drumstick_tree_%28Moringa_oleifera%29.jpg" },
        { id: "oreganon", nombre_comun: "Oreganón", nombre_cientifico: "Plectranthus amboinicus", uso: "Medicinal, condimento", descripcion: "Planta medicinal y condimento culinario de gran resistencia y venta local.", imagen: "" },
        { id: "sabila", nombre_comun: "Sábila", nombre_cientifico: "Aloe vera", uso: "Cosmética, medicinal", descripcion: "Materia prima de alta demanda para cosmética, remedios y productos de aseo.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Aloe_vera_plant_in_flower_pot.jpg/960px-Aloe_vera_plant_in_flower_pot.jpg" },
        { id: "menta", nombre_comun: "Menta", nombre_cientifico: "Mentha spicata", uso: "Aromática, coctelería", descripcion: "Aromática popular para coctelería, infusiones y productos farmacéuticos.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/00_1984_Gr%C3%BCne_Minze_%28Mentha_Spicata%29_-_Schmetterling_%28Weissling%29.jpg/960px-00_1984_Gr%C3%BCne_Minze_%28Mentha_Spicata%29_-_Schmetterling_%28Weissling%29.jpg" },
        { id: "toronjil", nombre_comun: "Toronjil", nombre_cientifico: "Melissa officinalis", uso: "Medicinal, infusión", descripcion: "Planta medicinal comercializada para infusiones relajantes y aromaterapia.", imagen: "" },
        { id: "anis-criollo", nombre_comun: "Anís Criollo", nombre_cientifico: "Pimpinella anisum", uso: "Licores, repostería", descripcion: "Utilizado en licores artesanales, repostería y medicina tradicional.", imagen: "" },
        { id: "valeriana", nombre_comun: "Valeriana Tropical", nombre_cientifico: "Valeriana officinalis", uso: "Medicinal, calmante", descripcion: "Raíz procesada y comercializada por sus propiedades tranquilizantes.", imagen: "" },
        { id: "chia", nombre_comun: "Chía", nombre_cientifico: "Salvia hispanica", uso: "Semilla nutricional", descripcion: "Semilla de alto valor nutricional producida para el mercado de vida saludable.", imagen: "" },
        { id: "altamisa", nombre_comun: "Altamisa", nombre_cientifico: "Ambrosia artemisiifolia", uso: "Medicinal tradicional", descripcion: "Planta medicinal nativa vendida en plazas para baños y terapias tradicionales.", imagen: "" },
        { id: "ruda", nombre_comun: "Ruda", nombre_cientifico: "Ruta graveolens", uso: "Medicinal, uso tradicional", descripcion: "Planta de amplio comercio en viveros para uso esotérico y medicinal.", imagen: "" },
        { id: "romero", nombre_comun: "Romero", nombre_cientifico: "Salvia rosmarinus", uso: "Condimento gourmet", descripcion: "Condimento gourmet y planta medicinal de alta rotación en vivero.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Rosmarinus_officinalis_MHNT.BOT.2008.1.19.jpg/960px-Rosmarinus_officinalis_MHNT.BOT.2008.1.19.jpg" },
        { id: "citronela", nombre_comun: "Citronela", nombre_cientifico: "Cymbopogon nardus", uso: "Repelente natural", descripcion: "Cultivada para la extracción de aceite repelente natural de insectos.", imagen: "" },
        { id: "prontoalivio", nombre_comun: "Prontoalivio de Mata", nombre_cientifico: "Lippia alba", uso: "Medicinal, infusiones", descripcion: "Arbusto medicinal tradicional usado ampliamente en la preparación de infusiones.", imagen: "" }
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
    { archivo: "Peewah (Bactris gasipaes) Fruit - Trinidad and Tobago.jpg", autor: "Wikimedia Commons" },
    { archivo: "Borojoa patinoi.jpg", autor: "Wikimedia Commons" },
    { archivo: "Piña (Ananas comosus), Parque Nacional de Lokobe, Nosy Be, Madagascar.jpg", autor: "Wikimedia Commons" },
    { archivo: "Carica papaya 14 7 2012.jpg", autor: "Wikimedia Commons" },
    { archivo: "Apple mango and cross section edit1.jpg", autor: "Wikimedia Commons" },
    { archivo: "Persea americana fruits.JPG", autor: "Wikimedia Commons" },
    { archivo: "Matisia (or Quararibea) cordata (16540973423).jpg", autor: "Wikimedia Commons" },
    { archivo: "Soursop, Annona muricata.jpg", autor: "Wikimedia Commons" },
    { archivo: "Psidium guajava (Common Guava) - Branch with Developing Fruits and Foliage.jpg", autor: "Wikimedia Commons" },
    { archivo: "Lulo - Solanum quitoense.jpg", autor: "Wikimedia Commons" },
    { archivo: "Citrus aurantiifolia by Kadavoor.jpg", autor: "Wikimedia Commons" },
    { archivo: "Tamarindus indica pods.JPG", autor: "Wikimedia Commons" },
    { archivo: "Anacardium occidentale - Cashew apple and nut (30853573405).jpg", autor: "Wikimedia Commons" },
    { archivo: "Carambola Starfruit.jpg", autor: "Wikimedia Commons" },
    { archivo: "Mammea americana (Abricotier des Antilles 1).jpg", autor: "Wikimedia Commons" },
    { archivo: "Manilkara zapota 02368.jpg", autor: "Wikimedia Commons" },
    { archivo: "Sugarapple.jpg", autor: "Wikimedia Commons" },
    { archivo: "Star apple (Chrysophyllum cainito) La'ea Buton Island 5.jpg", autor: "Wikimedia Commons" },
    { archivo: "Mandarin Oranges (Citrus Reticulata).jpg", autor: "Wikimedia Commons" },
    { archivo: "Citrus paradisi (Grapefruit, pink) white bg.jpg", autor: "Wikimedia Commons" },
    { archivo: "Sweet granadillas (Passiflora ligularis) - whole and cross section.jpg", autor: "Wikimedia Commons" },
    { archivo: "Kannimara Teak in Parambikulam Tiger Reserve.jpg", autor: "Wikimedia Commons" },
    { archivo: "Tabebuia rosea flower.jpg", autor: "Wikimedia Commons" },
    { archivo: "Kapok on a branch of Ceiba pentandra.jpg", autor: "Wikimedia Commons" },
    { archivo: "Gmelina Arborea.jpg", autor: "Wikimedia Commons" },
    { archivo: "Cedrela odorata trunk.JPG", autor: "Wikimedia Commons" },
    { archivo: "Guadua angustifolia 1zz.jpg", autor: "Wikimedia Commons" },
    { archivo: "Flooded Albizia Saman (rain tree) in the Mekong.jpg", autor: "Wikimedia Commons" },
    { archivo: "Manihot esculenta, the Cassava plant (17254469394).jpg", autor: "Wikimedia Commons" },
    { archivo: "Zea mays 'arc en ciel inca' MHNT.BOT.2015.34.2.jpg", autor: "Wikimedia Commons" },
    { archivo: "Cucurbita moschata Butternut 2012 G2.jpg", autor: "Wikimedia Commons" },
    { archivo: "Ginger Root.jpg", autor: "Wikimedia Commons" },
    { archivo: "Curcuma longa roots.jpg", autor: "Wikimedia Commons" },
    { archivo: "Ipomoea batatas (Sweet potato) in China.jpg", autor: "Wikimedia Commons" },
    { archivo: "Heliconia Rostrata - 72.jpg", autor: "Wikimedia Commons" },
    { archivo: "Anthurium andreanum 2zz.jpg", autor: "Wikimedia Commons" },
    { archivo: "Golden cane palm (Dypsis lutescens), Lisbon, Portugal.jpg", autor: "Wikimedia Commons" },
    { archivo: "Sansevieria trifasciata Plant 3264px.jpg", autor: "Wikimedia Commons" },
    { archivo: "Bougainvillea glabra 20D 8543.jpg", autor: "Wikimedia Commons" },
    { archivo: "Monstera deliciosa - Wilhelma 01.jpg", autor: "Wikimedia Commons" },
    { archivo: "Cymbopogon citratus lemongrass plant in garden.jpg", autor: "Wikimedia Commons" },
    { archivo: "Drumstick tree (Moringa oleifera).jpg", autor: "Wikimedia Commons" },
    { archivo: "Aloe vera plant in flower pot.jpg", autor: "Wikimedia Commons" },
    { archivo: "Mentha Spicata (Grüne Minze).jpg", autor: "Wikimedia Commons" },
    { archivo: "Rosmarinus officinalis MHNT.BOT.2008.1.19.jpg", autor: "Wikimedia Commons" },
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
  foto: function (p) {
    if (p.imagen) {
      return '<div class="plant-photo"><img src="' + this.esc(p.imagen) + '" alt="' + this.esc(p.nombre_comun) + '" loading="lazy" decoding="async"></div>';
    }
    return '<div class="plant-photo no-img"><span class="no-img-tag">' + this.esc(p.nombre_comun.charAt(0)) + '</span></div>';
  },
  plantCard: function (p) {
    return (
      '<article class="plant-card sketch" data-cat="' + this.esc(p.categoria.id) + '" data-id="' + this.esc(p.id) + '">' +
        this.foto(p) +
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
