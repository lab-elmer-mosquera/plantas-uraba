/* Plantas de Urabá — catalog data (100 species) and images (Wikimedia Commons) */
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
      nombre: "Fruits and Agribusiness",
      descripcion: "Agricultural base of the region: fruits, citrus and agribusiness crops.",
      portada: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Musa_acuminata_Banan_kar%C5%82owaty_2019-07-12_01.jpg/960px-Musa_acuminata_Banan_kar%C5%82owaty_2019-07-12_01.jpg",
      plantas: [
        { id: "banano", nombre_comun: "Banana", nombre_cientifico: "Musa × paradisiaca", uso: "Commercial, export", descripcion: "Urabá's leading export monocrop, key to the regional economy.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Musa_acuminata_Banan_kar%C5%82owaty_2019-07-12_01.jpg/960px-Musa_acuminata_Banan_kar%C5%82owaty_2019-07-12_01.jpg" },
        { id: "platano", nombre_comun: "Plantain", nombre_cientifico: "Musa balbisiana", uso: "Commercial, domestic consumption", descripcion: "Staple food with high national consumption and international export.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Plantain_Tree_IV.jpg/960px-Plantain_Tree_IV.jpg" },
        { id: "palma-aceite", nombre_comun: "Oil Palm", nombre_cientifico: "Elaeis guineensis", uso: "Agroindustrial", descripcion: "Large-scale agroindustrial crop for vegetable oil extraction and biodiesel.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Elaeis_guineensis_oil_palm_fruit_Portoviejo_Ecuador.jpg/960px-Elaeis_guineensis_oil_palm_fruit_Portoviejo_Ecuador.jpg" },
        { id: "cacao", nombre_comun: "Cacao", nombre_cientifico: "Theobroma cacao", uso: "Agroindustrial", descripcion: "Key species in agroforestry systems, in high demand from the chocolate industry.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Dried_Cacao_Pod_Held_in_Hand.jpg/960px-Dried_Cacao_Pod_Held_in_Hand.jpg" },
        { id: "maracuya", nombre_comun: "Passion Fruit", nombre_cientifico: "Passiflora edulis", uso: "Fruit, pulps", descripcion: "High-yield fruit marketed for juices and pulp processing.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Passiflora_Edulis_Closed_Fruit.jpg/960px-Passiflora_Edulis_Closed_Fruit.jpg" },
        { id: "pina", nombre_comun: "Pineapple", nombre_cientifico: "Ananas comosus", uso: "Fruit, fresh market", descripcion: "Lowland crop well adapted to the area, for the fresh and processed market.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Pi%C3%B1a_%28Ananas_comosus%29%2C_Parque_Nacional_de_Lokobe%2C_Nosy_Be%2C_Madagascar%2C_2025-09-21%2C_DD_39.jpg/960px-Pi%C3%B1a_%28Ananas_comosus%29%2C_Parque_Nacional_de_Lokobe%2C_Nosy_Be%2C_Madagascar%2C_2025-09-21%2C_DD_39.jpg" },
        { id: "papaya", nombre_comun: "Papaya", nombre_cientifico: "Carica papaya", uso: "Fruit, marketplaces", descripcion: "Fast-cycle fruit tree, ideal for continuous sales in markets and supermarkets.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Carica_papaya_14_7_2012.jpg/960px-Carica_papaya_14_7_2012.jpg" },
        { id: "mango", nombre_comun: "Mango", nombre_cientifico: "Mangifera indica", uso: "Fruit, fresh and industrial", descripcion: "Highly prized tropical fruit with varieties for fresh consumption and industry.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Apple_mango_and_cross_section_edit1.jpg/960px-Apple_mango_and_cross_section_edit1.jpg" },
        { id: "aguacate", nombre_comun: "Avocado", nombre_cientifico: "Persea americana", uso: "Fruit, agroforestry", descripcion: "Lowland varieties grown for regional supply with agroforestry potential.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Persea_americana_fruits.JPG/960px-Persea_americana_fruits.JPG" },
        { id: "zapote-costeno", nombre_comun: "Chupa-Chupa", nombre_cientifico: "Quararibea cordata", uso: "Traditional fruit", descripcion: "Traditional regional fruit with a fine local market thanks to its flavor and pulp.", imagen: "https://upload.wikimedia.org/wikipedia/commons/8/86/Matisia_%28or_Quararibea%29_cordata_%2816540973423%29.jpg" },
        { id: "guanabana", nombre_comun: "Soursop", nombre_cientifico: "Annona muricata", uso: "Fruit, beverage industry", descripcion: "Highly valued in the agrifood market for frozen pulp and the beverage industry.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Soursop%2C_Annona_muricata.jpg/960px-Soursop%2C_Annona_muricata.jpg" },
        { id: "guayaba", nombre_comun: "Guava", nombre_cientifico: "Psidium guajava", uso: "Raw material, processed goods", descripcion: "High-volume raw material for paste, jams and processed juices.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Psidium_guajava_%28Common_Guava%29_-_Branch_with_Developing_Fruits_and_Foliage.jpg/960px-Psidium_guajava_%28Common_Guava%29_-_Branch_with_Developing_Fruits_and_Foliage.jpg" },
        { id: "lulo", nombre_comun: "Lulo", nombre_cientifico: "Solanum quitoense", uso: "Fruit, beverages", descripcion: "High-demand Colombian fruit used for drinks and juices.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Lulo_-_Solanum_quitoense.jpg/960px-Lulo_-_Solanum_quitoense.jpg" },
        { id: "limon-tahiti", nombre_comun: "Tahiti Lime", nombre_cientifico: "Citrus × latifolia", uso: "Citrus, export", descripcion: "High-turnover citrus for fresh domestic consumption and export.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Citrus_aurantiifolia_by_Kadavoor.jpg/960px-Citrus_aurantiifolia_by_Kadavoor.jpg" },
        { id: "naranja-valencia", nombre_comun: "Valencia Orange", nombre_cientifico: "Citrus × sinensis", uso: "Citrus, juices", descripcion: "Standard citrus for the bottled juice industry and local markets.", imagen: "" },
        { id: "tamarindo", nombre_comun: "Tamarind", nombre_cientifico: "Tamarindus indica", uso: "Fruit, concentrates", descripcion: "Used for concentrates, traditional sweets and sauces in the food industry.", imagen: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Tamarindus_indica_pods.JPG" },
        { id: "borujo", nombre_comun: "Borojo", nombre_cientifico: "Borojoa patinoi", uso: "Native fruit, energizing", descripcion: "Native fruit of the Pacific and Urabá, marketed for its energizing properties.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Borojoa_patinoi.jpg/960px-Borojoa_patinoi.jpg" },
        { id: "maranon", nombre_comun: "Cashew", nombre_cientifico: "Anacardium occidentale", uso: "Fruit and nut", descripcion: "Commercial use of both its fresh pseudo-fruit and its nut.", imagen: "https://upload.wikimedia.org/wikipedia/commons/3/39/Anacardium_occidentale--_Cashew_apple_and_nut_%2830853573405%29.jpg" },
        { id: "chontaduro", nombre_comun: "Peach Palm", nombre_cientifico: "Bactris gasipaes", uso: "Fruit palm", descripcion: "Fruit palm in high demand in the local market for its nutritional value.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Peewah_%28Bactris_gasipaes%29_Fruit_-_Trinidad_and_Tobago.jpg/960px-Peewah_%28Bactris_gasipaes%29_Fruit_-_Trinidad_and_Tobago.jpg" },
        { id: "carambolo", nombre_comun: "Star Fruit", nombre_cientifico: "Averrhoa carambola", uso: "Ornamental fruit", descripcion: "Ornamental and edible fruit used in gastronomic decoration and juices.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Carambola_Starfruit.jpg/960px-Carambola_Starfruit.jpg" },
        { id: "mamey", nombre_comun: "Mammee Apple", nombre_cientifico: "Mammea americana", uso: "Fruit, baking", descripcion: "Fruit with firm, sweet pulp appreciated in baking and preserves.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Mammea_americana_%28Abricotier_des_Antilles_1%29.jpg/960px-Mammea_americana_%28Abricotier_des_Antilles_1%29.jpg" },
        { id: "nispero", nombre_comun: "Sapodilla", nombre_cientifico: "Manilkara zapota", uso: "Fruit, fresh consumption", descripcion: "Traditional fruit tree with a market focused on fresh consumption.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Manilkara_zapota_02368.jpg/960px-Manilkara_zapota_02368.jpg" },
        { id: "anon", nombre_comun: "Sugar Apple", nombre_cientifico: "Annona squamosa", uso: "Fruit, direct consumption", descripcion: "Sweet tropical fruit for direct consumption with good regional reception.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Sugarapple.jpg/960px-Sugarapple.jpg" },
        { id: "grosella", nombre_comun: "Otaheite Gooseberry", nombre_cientifico: "Phyllanthus acidus", uso: "Fruit, preserves", descripcion: "Mainly used for preserves, tart sweets and syrups.", imagen: "" },
        { id: "caimito", nombre_comun: "Star Apple", nombre_cientifico: "Chrysophyllum cainito", uso: "Seasonal fruit", descripcion: "Wild and orchard fruit marketed in specific seasons.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Star_apple_%28Chrysophyllum_cainito%29_La%27ea_Buton_Island_5.jpg/960px-Star_apple_%28Chrysophyllum_cainito%29_La%27ea_Buton_Island_5.jpg" },
        { id: "mandarina", nombre_comun: "Tangerine", nombre_cientifico: "Citrus reticulata", uso: "Citrus, mass consumption", descripcion: "Mass-consumption citrus with high turnover in urban areas.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Mandarin_Oranges_%28Citrus_Reticulata%29.jpg/960px-Mandarin_Oranges_%28Citrus_Reticulata%29.jpg" },
        { id: "toronja", nombre_comun: "Grapefruit", nombre_cientifico: "Citrus paradisi", uso: "Citrus, beverages", descripcion: "Grown for the healthy beverage industry and fresh consumption.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg/960px-Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg" },
        { id: "araza", nombre_comun: "Arazá", nombre_cientifico: "Eugenia stipitata", uso: "Amazonian fruit, pulps", descripcion: "Amazonian fruit with growing commercial potential for tart pulps.", imagen: "" },
        { id: "badea", nombre_comun: "Giant Granadilla", nombre_cientifico: "Passiflora quadrangularis", uso: "Passionflower family, soft drinks", descripcion: "Large passionflower used locally for natural soft drinks.", imagen: "" },
        { id: "granadilla", nombre_comun: "Sweet Granadilla", nombre_cientifico: "Passiflora ligularis", uso: "Table fruit", descripcion: "High-value table fruit in premium national markets.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Sweet_granadillas_%28Passiflora_ligularis%29_-_whole_and_cross_section.jpg/960px-Sweet_granadillas_%28Passiflora_ligularis%29_-_whole_and_cross_section.jpg" }
      ]
    },
    {
      id: "maderables",
      nombre: "Timber, Forestry and Silvopastoral",
      descripcion: "Valuable timber species, reforestation and shade for livestock.",
      portada: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Gmelina_Arborea.jpg/960px-Gmelina_Arborea.jpg",
      plantas: [
        { id: "teca", nombre_comun: "Teak", nombre_cientifico: "Tectona grandis", uso: "Export timber", descripcion: "Prized timber from commercial reforestation with high export value.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Kannimara_Teak_in_Parambikulam_Tiger_Reserve_on_13-01-2011_P1120625.jpg/960px-Kannimara_Teak_in_Parambikulam_Tiger_Reserve_on_13-01-2011_P1120625.jpg" },
        { id: "caoba", nombre_comun: "Mahogany", nombre_cientifico: "Swietenia macrophylla", uso: "Fine timber", descripcion: "Highly prized fine timber species for cabinetmaking and luxury carpentry.", imagen: "" },
        { id: "nogal", nombre_comun: "Nogal (Timber Cordia)", nombre_cientifico: "Cordia gerascanthus", uso: "Timber, shade", descripcion: "Resistant timber used in construction and as shade for crops.", imagen: "" },
        { id: "caucho", nombre_comun: "Rubber Tree", nombre_cientifico: "Hevea brasiliensis", uso: "Agroforestry, latex", descripcion: "Agroforestry species exploited for latex extraction and later timber use.", imagen: "" },
        { id: "flor-morado", nombre_comun: "Pink Poui", nombre_cientifico: "Tabebuia rosea", uso: "Timber, landscaping", descripcion: "Valuable timber and a highly demanded tree for urban and commercial landscaping.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tabebuia_rosea_flower.jpg/960px-Tabebuia_rosea_flower.jpg" },
        { id: "ceiba-bongo", nombre_comun: "Kapok Tree", nombre_cientifico: "Ceiba pentandra", uso: "Light timber", descripcion: "Giant tree with light timber used for plywood and packaging.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Kapok_on_a_branch_of_Ceiba_pentandra_%28white_silk-cotton_tree%29.jpg/960px-Kapok_on_a_branch_of_Ceiba_pentandra_%28white_silk-cotton_tree%29.jpg" },
        { id: "melina", nombre_comun: "Melina", nombre_cientifico: "Gmelina arborea", uso: "Fast timber", descripcion: "Ultra-fast growing timber for pulp, pallets and particle board.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Gmelina_Arborea.jpg/960px-Gmelina_Arborea.jpg" },
        { id: "eucalipto", nombre_comun: "Eucalyptus", nombre_cientifico: "Eucalyptus spp.", uso: "Stakes and props", descripcion: "Massively used for trellising stakes, pilings and commercial firewood.", imagen: "" },
        { id: "acacia", nombre_comun: "Acacia", nombre_cientifico: "Acacia mangium", uso: "Restoration, firewood", descripcion: "Nitrogen fixer used in soil restoration and industrial firewood.", imagen: "" },
        { id: "cedro-amargo", nombre_comun: "Spanish Cedar", nombre_cientifico: "Cedrela odorata", uso: "Fine timber", descripcion: "Traditional fine timber prized for its pest resistance and quality.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Cedrela_odorata_trunk.JPG/960px-Cedrela_odorata_trunk.JPG" },
        { id: "cativo", nombre_comun: "Cativo", nombre_cientifico: "Prioria copaifera", uso: "Native forestry species", descripcion: "Native species of floodplains with historic and forestry importance.", imagen: "" },
        { id: "abarco", nombre_comun: "Abarco", nombre_cientifico: "Cariniana pyriformis", uso: "Structural timber", descripcion: "Structural timber of very high durability and commercial value.", imagen: "" },
        { id: "balsa", nombre_comun: "Balsa", nombre_cientifico: "Ochroma pyramidale", uso: "Light timber", descripcion: "Extremely light timber for industrial use, models and insulation.", imagen: "" },
        { id: "bambu", nombre_comun: "Bamboo / Guadua", nombre_cientifico: "Guadua angustifolia", uso: "Sustainable construction", descripcion: "Sustainable construction material for ecotourism structures and crafts.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Guadua_angustifolia_1zz.jpg/960px-Guadua_angustifolia_1zz.jpg" },
        { id: "campano-saman", nombre_comun: "Rain Tree", nombre_cientifico: "Albizia saman", uso: "Silvopastoral, shade", descripcion: "Excellent silvopastoral tree that shades cattle and yields usable timber.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Flooded_Albizia_Saman_%28rain_tree%29_in_the_Mekong.jpg/960px-Flooded_Albizia_Saman_%28rain_tree%29_in_the_Mekong.jpg" },
        { id: "guayacan-amarillo", nombre_comun: "Golden Trumpet Tree", nombre_cientifico: "Handroanthus chrysanthus", uso: "Heavy timber", descripcion: "Heavy, rot-proof timber highly prized in cabinetmaking and ornamentation.", imagen: "" },
        { id: "caracoli", nombre_comun: "Caracolí", nombre_cientifico: "Anacardium excelsum", uso: "Water source protection", descripcion: "Protector of water sources with timber used in boxmaking.", imagen: "" },
        { id: "matarraton", nombre_comun: "Gliricidia", nombre_cientifico: "Gliricidia sepium", uso: "Forage, living fences", descripcion: "Forage plant for living fences and livestock nutrition.", imagen: "" },
        { id: "leucaena", nombre_comun: "Leucaena", nombre_cientifico: "Leucaena leucocephala", uso: "Protein forage", descripcion: "High-protein legume for cattle feed and soil recovery.", imagen: "" },
        { id: "yarumo", nombre_comun: "Trumpet Tree", nombre_cientifico: "Cecropia peltata", uso: "Ecological restoration", descripcion: "Fast-growing tree used in ecological restoration and traditional medicine.", imagen: "" }
      ]
    },
    {
      id: "tuberculos",
      nombre: "Tubers, Vegetables and Grains",
      descripcion: "Staple foods of the household basket and raw materials for agribusiness.",
      portada: "https://upload.wikimedia.org/wikipedia/commons/3/37/Manihot_esculenta%2C_the_Cassava_plant_%2817254469394%29.jpg",
      plantas: [
        { id: "yuca", nombre_comun: "Cassava", nombre_cientifico: "Manihot esculenta", uso: "Tuber, starch", descripcion: "Staple tuber of the household basket and raw material for industrial starch.", imagen: "https://upload.wikimedia.org/wikipedia/commons/3/37/Manihot_esculenta%2C_the_Cassava_plant_%2817254469394%29.jpg" },
        { id: "name-espino", nombre_comun: "Espino Yam", nombre_cientifico: "Dioscorea rotundata", uso: "Tuber, export", descripcion: "Yam variety in high demand for local consumption and maritime export.", imagen: "" },
        { id: "name-diamante", nombre_comun: "Diamond Yam", nombre_cientifico: "Dioscorea alata", uso: "Tuber", descripcion: "Rustic tuber widely traded in Caribbean markets.", imagen: "" },
        { id: "maiz", nombre_comun: "Corn", nombre_cientifico: "Zea mays", uso: "Staple grain", descripcion: "Staple grain planted in rotation or intercropped for human and poultry feed.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Zea_mays_%27arc_en_ciel_inca%27_MHNT.BOT.2015.34.2.jpg/960px-Zea_mays_%27arc_en_ciel_inca%27_MHNT.BOT.2015.34.2.jpg" },
        { id: "guandul", nombre_comun: "Pigeon Pea", nombre_cientifico: "Cajanus cajan", uso: "Legume, grain", descripcion: "Drought-tolerant legume traded for dry or green grain consumption.", imagen: "" },
        { id: "ahuyama", nombre_comun: "Squash / Pumpkin", nombre_cientifico: "Cucurbita moschata", uso: "Vegetable", descripcion: "Easy-to-manage vegetable widely sold in markets.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Cucurbita_moschata_Butternut_2012_G2.jpg/960px-Cucurbita_moschata_Butternut_2012_G2.jpg" },
        { id: "aji-dulce", nombre_comun: "Sweet Chili Pepper", nombre_cientifico: "Capsicum chinense", uso: "Condiment", descripcion: "Key condiment in regional cuisine with very high commercial turnover.", imagen: "" },
        { id: "aji-picante", nombre_comun: "Hot Chili Pepper", nombre_cientifico: "Capsicum frutescens", uso: "Industrial sauces", descripcion: "Grown for the sauce and hot pepper processing industry.", imagen: "" },
        { id: "jengibre", nombre_comun: "Ginger", nombre_cientifico: "Zingiber officinale", uso: "Aromatic rhizome", descripcion: "Rhizome in great demand for gastronomy and pharmaceuticals.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ginger_Root.jpg/960px-Ginger_Root.jpg" },
        { id: "curcuma", nombre_comun: "Turmeric", nombre_cientifico: "Curcuma longa", uso: "Natural colorant", descripcion: "Processed commercially as a natural colorant and health supplement.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Curcuma_longa_roots.jpg/960px-Curcuma_longa_roots.jpg" },
        { id: "cilantro-ancho", nombre_comun: "Culantro", nombre_cientifico: "Eryngium foetidum", uso: "Seasoning", descripcion: "Essential seasoning herb grown to supply local markets.", imagen: "" },
        { id: "berenjena", nombre_comun: "Eggplant", nombre_cientifico: "Solanum melongena", uso: "Vegetable", descripcion: "Vegetable well adapted to warm climates for fresh consumption.", imagen: "" },
        { id: "habichuela", nombre_comun: "String Bean", nombre_cientifico: "Vigna unguiculata", uso: "Legume", descripcion: "Short-cycle legume for continuous sales in greengrocers.", imagen: "" },
        { id: "batata", nombre_comun: "Sweet Potato", nombre_cientifico: "Ipomoea batatas", uso: "Sweet tuber", descripcion: "Sweet tuber on the rise for its nutritional properties and industrial use.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Ipomoea_batatas_%28Sweet_potato%29_in_China.jpg/960px-Ipomoea_batatas_%28Sweet_potato%29_in_China.jpg" },
        { id: "frijol-caupi", nombre_comun: "Cowpea", nombre_cientifico: "Vigna unguiculata", uso: "Legume", descripcion: "Grain adapted to warm climates as an affordable vegetable protein.", imagen: "" }
      ]
    },
    {
      id: "ornamentales",
      nombre: "Ornamentals and Tropical Flowers",
      descripcion: "Exotic foliage and flowers for gardening, interiors and export.",
      portada: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Anthurium_andreanum_2zz.jpg/960px-Anthurium_andreanum_2zz.jpg",
      plantas: [
        { id: "heliconia-ave", nombre_comun: "Birds-of-Paradise Heliconia", nombre_cientifico: "Heliconia bihai", uso: "Cut flower, export", descripcion: "Long-lasting exotic cut flower, ideal for arrangements and export.", imagen: "" },
        { id: "heliconia-rostrata", nombre_comun: "Hanging Lobster Claw", nombre_cientifico: "Heliconia rostrata", uso: "Cut flower, design", descripcion: "Famous for its hanging inflorescences used in floral design.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Heliconia_Rostrata_-_72.jpg/960px-Heliconia_Rostrata_-_72.jpg" },
        { id: "heliconia-psittacorum", nombre_comun: "Parrot Heliconia", nombre_cientifico: "Heliconia psittacorum", uso: "Ornamental, garden", descripcion: "Smaller variety widely sold for urban gardens and simple arrangements.", imagen: "" },
        { id: "anturio", nombre_comun: "Tropical Anthurium", nombre_cientifico: "Anthurium andreanum", uso: "Cut flower, indoor", descripcion: "Indoor plant and cut flower of high value in nurseries.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Anthurium_andreanum_2zz.jpg/960px-Anthurium_andreanum_2zz.jpg" },
        { id: "palma-real", nombre_comun: "Royal Palm", nombre_cientifico: "Roystonea regia", uso: "Landscaping", descripcion: "Monumental palm prized for urban landscaping and interior projects.", imagen: "" },
        { id: "palma-areca", nombre_comun: "Areca Palm", nombre_cientifico: "Dypsis lutescens", uso: "Indoor, privacy screens", descripcion: "One of the best-selling ornamental plants for interiors and green screens.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Golden_cane_palm_%28Dypsis_lutescens%29_trunk%2C_Estufa_Fria%2C_Lisbon%2C_Portugal_julesvernex2.jpg/960px-Golden_cane_palm_%28Dypsis_lutescens%29_trunk%2C_Estufa_Fria%2C_Lisbon%2C_Portugal_julesvernex2.jpg" },
        { id: "palma-cera", nombre_comun: "Lowland Wax Palm", nombre_cientifico: "Arecaceae", uso: "Tropical landscaping", descripcion: "Used in tropical landscaping for its elegant, graceful form.", imagen: "" },
        { id: "sansevieria", nombre_comun: "Snake Plant", nombre_cientifico: "Sansevieria trifasciata", uso: "Indoor, potted", descripcion: "Ultra-resistant indoor plant in very high commercial demand in pots.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Sansevieria_trifasciata_Plant_3264px.jpg/960px-Sansevieria_trifasciata_Plant_3264px.jpg" },
        { id: "veranera", nombre_comun: "Bougainvillea", nombre_cientifico: "Bougainvillea spectabilis", uso: "Climbing ornamental", descripcion: "Climbing shrub marketed for its striking, abundant flowers.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bougainvillea_glabra_20D_8543.jpg/960px-Bougainvillea_glabra_20D_8543.jpg" },
        { id: "palma-bisnieta", nombre_comun: "Clustered Fishtail Palm", nombre_cientifico: "Caryota mitis", uso: "Garden ornamental", descripcion: "Ornamental palm with unique foliage used in garden decoration.", imagen: "" },
        { id: "calatea", nombre_comun: "Calathea (Ornamental)", nombre_cientifico: "Calathea zebrina", uso: "Decorative foliage", descripcion: "Decorative foliage plant for shade and indoor spaces.", imagen: "" },
        { id: "filodendro", nombre_comun: "Philodendron", nombre_cientifico: "Philodendron scandens", uso: "Indoor, hanging", descripcion: "Climbing or hanging plant in high demand for offices and homes.", imagen: "" },
        { id: "monstera", nombre_comun: "Monstera / Swiss Cheese Plant", nombre_cientifico: "Monstera deliciosa", uso: "Foliage, trend", descripcion: "Trend-setting plant in landscaping for its large split leaves.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Monstera_deliciosa_-_Wilhelma_01.jpg/960px-Monstera_deliciosa_-_Wilhelma_01.jpg" },
        { id: "croton", nombre_comun: "Croton", nombre_cientifico: "Codiaeum variegatum", uso: "Colorful foliage", descripcion: "Ornamental shrub marketed for the vivid color of its leaves.", imagen: "" },
        { id: "cordiline", nombre_comun: "Ti Plant", nombre_cientifico: "Cordyline fruticosa", uso: "Contrast foliage", descripcion: "Foliage plant with reddish or purple leaves used for garden contrast.", imagen: "" },
        { id: "ixora", nombre_comun: "Ixora", nombre_cientifico: "Ixora coccinea", uso: "Living hedges", descripcion: "Shrub with constant flowering for living hedges and gardens.", imagen: "" },
        { id: "jazmin-noche", nombre_comun: "Night-Blooming Jasmine", nombre_cientifico: "Cestrum nocturnum", uso: "Aromatic ornamental", descripcion: "Ornamental shrub prized in nurseries for the intense night scent of its flowers.", imagen: "" },
        { id: "coleo", nombre_comun: "Coleus", nombre_cientifico: "Solenostemon scutellarioides", uso: "Showy foliage", descripcion: "Fast-growing budget plant with showy colored leaves.", imagen: "" },
        { id: "agave", nombre_comun: "Blue Agave / Ornamental", nombre_cientifico: "Agave tequilana", uso: "Low-maintenance landscaping", descripcion: "Succulent used in low-maintenance landscaping and architecture.", imagen: "" },
        { id: "bromelia", nombre_comun: "Tropical Bromeliad", nombre_cientifico: "Aechmea fasciata", uso: "Indoor, epiphyte", descripcion: "Decorative epiphyte widely sold as a gift or indoor ornamental.", imagen: "" }
      ]
    },
    {
      id: "aromaticas",
      nombre: "Aromatic, Medicinal and Agroecological",
      descripcion: "Herbs and plants of high value for gastronomy, health and agroecology.",
      portada: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Drumstick_tree_%28Moringa_oleifera%29.jpg/960px-Drumstick_tree_%28Moringa_oleifera%29.jpg",
      plantas: [
        { id: "limonaria", nombre_comun: "Lemongrass", nombre_cientifico: "Cymbopogon citratus", uso: "Aromatic, infusions", descripcion: "Aromatic herb sold for herbal infusion and oil extraction.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Cymbopogon_citratus_lemongrass_plant_in_garden.jpg/960px-Cymbopogon_citratus_lemongrass_plant_in_garden.jpg" },
        { id: "albahaca", nombre_comun: "Basil", nombre_cientifico: "Ocimum basilicum", uso: "Gastronomic", descripcion: "Gastronomic and aromatic plant for continuous fresh and potted use.", imagen: "" },
        { id: "moringa", nombre_comun: "Moringa", nombre_cientifico: "Moringa oleifera", uso: "Superfood", descripcion: "Multipurpose tree sold as powder or dried leaves as a superfood.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Drumstick_tree_%28Moringa_oleifera%29.jpg/960px-Drumstick_tree_%28Moringa_oleifera%29.jpg" },
        { id: "oreganon", nombre_comun: "Cuban Oregano", nombre_cientifico: "Plectranthus amboinicus", uso: "Medicinal, condiment", descripcion: "Medicinal plant and culinary seasoning of great resistance and local sales.", imagen: "" },
        { id: "sabila", nombre_comun: "Aloe Vera", nombre_cientifico: "Aloe vera", uso: "Cosmetics, medicinal", descripcion: "Raw material in high demand for cosmetics, remedies and cleaning products.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Aloe_vera_plant_in_flower_pot.jpg/960px-Aloe_vera_plant_in_flower_pot.jpg" },
        { id: "menta", nombre_comun: "Mint", nombre_cientifico: "Mentha spicata", uso: "Aromatic, cocktails", descripcion: "Popular aromatic for cocktails, infusions and pharmaceutical products.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/00_1984_Gr%C3%BCne_Minze_%28Mentha_Spicata%29_-_Schmetterling_%28Weissling%29.jpg/960px-00_1984_Gr%C3%BCne_Minze_%28Mentha_Spicata%29_-_Schmetterling_%28Weissling%29.jpg" },
        { id: "toronjil", nombre_comun: "Lemon Balm", nombre_cientifico: "Melissa officinalis", uso: "Medicinal, infusion", descripcion: "Medicinal plant marketed for relaxing infusions and aromatherapy.", imagen: "" },
        { id: "anis-criollo", nombre_comun: "Anise", nombre_cientifico: "Pimpinella anisum", uso: "Liqueurs, baking", descripcion: "Used in craft liqueurs, baking and traditional medicine.", imagen: "" },
        { id: "valeriana", nombre_comun: "Tropical Valerian", nombre_cientifico: "Valeriana officinalis", uso: "Medicinal, calming", descripcion: "Root processed and marketed for its calming properties.", imagen: "" },
        { id: "chia", nombre_comun: "Chia", nombre_cientifico: "Salvia hispanica", uso: "Nutritional seed", descripcion: "High-nutrition seed produced for the healthy-living market.", imagen: "" },
        { id: "altamisa", nombre_comun: "Mugwort", nombre_cientifico: "Ambrosia artemisiifolia", uso: "Traditional medicine", descripcion: "Native medicinal plant sold in markets for baths and traditional therapies.", imagen: "" },
        { id: "ruda", nombre_comun: "Rue", nombre_cientifico: "Ruta graveolens", uso: "Medicinal, traditional use", descripcion: "Plant widely traded in nurseries for esoteric and medicinal use.", imagen: "" },
        { id: "romero", nombre_comun: "Rosemary", nombre_cientifico: "Salvia rosmarinus", uso: "Gourmet seasoning", descripcion: "Gourmet seasoning and medicinal plant of high nursery turnover.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Rosmarinus_officinalis_MHNT.BOT.2008.1.19.jpg/960px-Rosmarinus_officinalis_MHNT.BOT.2008.1.19.jpg" },
        { id: "citronela", nombre_comun: "Citronella", nombre_cientifico: "Cymbopogon nardus", uso: "Natural repellent", descripcion: "Grown for the extraction of a natural insect repellent oil.", imagen: "" },
        { id: "prontoalivio", nombre_comun: "Bushy Lippia", nombre_cientifico: "Lippia alba", uso: "Medicinal, infusions", descripcion: "Traditional medicinal shrub widely used to prepare infusions.", imagen: "" }
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
  base: "",
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
      return '<div class="plant-photo"><img class="card-img-top img-fluid" style="height:200px;width:100%;object-fit:cover" src="' + this.esc(p.imagen) + '" alt="' + this.esc(p.nombre_comun) + '" loading="lazy" decoding="async"></div>';
    }
    return '<div class="plant-photo card-img-top no-img d-flex align-items-center justify-content-center" style="height:200px"><span class="no-img-tag">' + this.esc(p.nombre_comun.charAt(0)) + '</span></div>';
  },
  plantCard: function (p) {
    return (
      '<article class="card h-100 plant-card shadow-sm" data-cat="' + this.esc(p.categoria.id) + '" data-id="' + this.esc(p.id) + '">' +
        this.foto(p) +
        '<div class="card-body d-flex flex-column">' +
          '<span class="badge text-bg-success align-self-start mb-2">' + this.esc(p.uso) + '</span>' +
          '<h3 class="card-title h6 mb-1">' + this.esc(p.nombre_comun) + '</h3>' +
          '<p class="mb-2 text-secondary fst-italic small"><em>' + this.esc(p.nombre_cientifico) + '</em></p>' +
          '<p class="card-text small text-secondary flex-grow-1 mb-3">' + this.esc(p.descripcion) + '</p>' +
          '<span class="btn btn-sm btn-outline-success align-self-start">View details <span class="arr">→</span></span>' +
        '</div>' +
      '</article>'
    );
  },
  catCard: function (c) {
    return (
      '<a class="card h-100 cat-card text-decoration-none text-body shadow-sm" href="' + this.base + 'catalogo.html#' + this.esc(c.id) + '">' +
        '<div class="cat-photo"><img class="card-img-top img-fluid" style="height:170px;width:100%;object-fit:cover" src="' + this.esc(c.portada) + '" alt="' + this.esc(c.nombre) + '" loading="lazy" decoding="async"></div>' +
        '<div class="card-body d-flex flex-column">' +
          '<h3 class="card-title h6 mb-1">' + this.esc(c.nombre) + '</h3>' +
          '<p class="text-success small mb-1">' + c.plantas.length + ' species</p>' +
          '<p class="card-text small text-secondary flex-grow-1 mb-3">' + this.esc(c.descripcion) + '</p>' +
          '<span class="btn btn-sm btn-success align-self-start">Explore <span class="arr">→</span></span>' +
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
          box.classList.add("no-img", "d-flex", "align-items-center", "justify-content-center");
          if (!box.querySelector(".no-img-tag")) {
            var t = document.createElement("span");
            t.className = "no-img-tag";
            t.textContent = (img.alt || "Plant").charAt(0);
            box.appendChild(t);
          }
        }
      });
    });
  }
};