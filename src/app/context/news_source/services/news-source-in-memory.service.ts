import { Injectable } from '@angular/core';
import { NewsSourceService } from '../domain/news_service';
import { NewsSource } from '../domain/news_source';
import { HttpClient } from '@angular/common/http';

//Domain
import { NewsSourceSearchCriteria } from '../domain/news_soruce_search_criteria';


@Injectable()
export class NewsSourceInMemoryService implements NewsSourceService {

  constructor(private http: HttpClient) { }

  async getNews(criteria: NewsSourceSearchCriteria): Promise<NewsSource[]> {

    return fakeData.map((articles: any) => {
      return NewsSource.fromPrimitives(articles)
    });

  }

}


const fakeData: any[] = [
  {
    "source": {
      "id": null,
      "name": "Soyfutbol.com"
    },
    "author": "EnriquePacheco",
    "title": "Liga MX: Mazatlán FC reporta tres contagios de virus en la Copa GNP por México - SOY FUTBOL",
    "description": "Tras los partidos contra Tigres y Atlas, el equipo violeta presentó los tres positivos",
    "url": "https://www.soyfutbol.com/ligas/Liga-MX-Mazatlan-FC-reporta-tres-contagios-de-virus-en-la-Copa-GNP-por-Mexico-20200711-0001.html",
    "urlToImage": "https://assets.soyfutbol.com/__export/1594467199466/sites/debate/img/2020/07/11/escudo_crop1594467182215.jpg_673822677.jpg",
    "publishedAt": "2020-07-11T11:33:25Z",
    "content": "A través de un comunicado oficial, el equipo del Mazatlán FC reportó la presencia de tres casos positivos en el primer equipo después de una segunda de practicarse una segunda prueba en búsqueda del … [+664 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "El Universal"
    },
    "author": null,
    "title": "Casos de Covid-19 en México, estado por estado al 10 de julio | El Universal - El Universal",
    "description": "La Secretaría de Salud federal reportó 289 mil 174 casos confirmados coronavirus en el país. Consulta aquí la evolución de la pandemia, estado por estado",
    "url": "https://www.eluniversal.com.mx/estados/casos-de-covid-19-en-mexico-estado-por-estado-al-10-de-julio",
    "urlToImage": "https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2020/07/11/nuevo_record_de_casos_diarios_de_contagios_por_covid-19_en_mexico_114868539.jpg?itok=yUjSg3Kk",
    "publishedAt": "2020-07-11T10:28:52Z",
    "content": "El comunicado técnico diario de la Secretaría de Salud del gobierno federal informa que al 10 de julio hay registro de 34 mil 191 muertos y 289 mil 174 casos confirmados acumulados de coronavirus en … [+18805 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Milenio"
    },
    "author": "Héctor González Villalba",
    "title": "Salvador Cabañas a 10 años de la tragedia: \"¿para qué fui al Bar-Bar?\" - Milenio",
    "description": "Se lo dice una y otra vez Salvador Cabañas: “¿Para qué fui?”. La madrugada del lunes 25 de enero del año 2010,",
    "url": "https://www.milenio.com/deportes/futbol/salvador-cabanas-10-anos-tragedia-bar-bar",
    "urlToImage": "https://www.milenio.com/uploads/media/2020/07/10/salvador-cabanas-la-aficion_0_2_881_548.jpg",
    "publishedAt": "2020-07-11T10:16:26Z",
    "content": "Se lo dice una y otra vez Salvador Cabañas: ¿Para qué fui?. La madrugada del lunes 25 de enero del año 2010, el paraguayo Salvador Cabañas fue baleado en el centro nocturno Bar-Bar de la Ciudad de Mé… [+5210 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "El Universal"
    },
    "author": null,
    "title": "López-Gatell admite rebrotes y echa la culpa a los estados | El Universal - El Universal",
    "description": "OMS dice que el país inició desconfinamiento pese a alta transmisión de virus; van 34 mil decesos por Covid; secretaría no presenta semáforo por desfase",
    "url": "https://www.eluniversal.com.mx/nacion/lopez-gatell-admite-rebrotes-y-echa-la-culpa-los-estados",
    "urlToImage": "https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2020/07/11/rebrote_covid_0.jpg?itok=NnBonmh_",
    "publishedAt": "2020-07-11T09:50:56Z",
    "content": "Luego de que el director ejecutivo de la Organización Mundial de la Salud (OMS) para Emergencias Sanitarias, Mike Ryan, considera que muchos países, entre ellos México, iniciaron el desconfinamiento … [+4004 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Publimetro.com.mx"
    },
    "author": "Gabriela Trujillo",
    "title": "La Casa de Papel: Aquí la fecha de su estreno y detalles de lo que vendrá en su quinta temporada - Publimetro México",
    "description": "Mira cuándo se realizará el estreno de la quinta temporada de La Casa de Papel y parte de lo que será su trama que tiene a los fans a la expectativa.",
    "url": "https://www.publimetro.com.mx/mx/entretenimiento/2020/07/11/la-casa-papel-estreno-quinta-temporada.html",
    "urlToImage": "https://media.metrolatam.com/2020/07/10/lacasapapel-799ee11d08b42bc59c6cffeb12aa41ce-1200x800.jpg",
    "publishedAt": "2020-07-11T09:00:00Z",
    "content": "La noticia de la quinta temporada de la exitosa serie de Netflix, La Casa de Papel, tiene a más de un fan a la expectativa, sobre todo para saber su fecha de estreno, pues el inesperado final de la c… [+1498 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Sinembargo.mx"
    },
    "author": "Dulce Olvera",
    "title": "Duarte trae en la bolsa varios de los nombres de Lozoya. Videgaray, para empezar. Agrega a Beltrones - SinEmbargo MX",
    "description": "El Gobierno federal y el de Chihuahua trabajan \"hasta donde tope\" para ahondar en la red de complicidad de César Duarte.",
    "url": "https://www.sinembargo.mx/11-07-2020/3820996",
    "urlToImage": "https://www.sinembargo.mx/wp-content/uploads/2020/07/videgaraymanliocorral.jpg",
    "publishedAt": "2020-07-11T05:05:00Z",
    "content": "Después de la detención con fines de extradición del exgobernador de Chihuahua César Duarte, el Gobierno federal y estatal trabajan “hasta donde tope” para ahondar en el cúmulo de vínculos y complici… [+14868 chars]"
  },
  {
    "source": {
      "id": "google-news",
      "name": "Google News"
    },
    "author": null,
    "title": "Sheinbaum informa colonias que menos usan cubrebocas en CDMX - En Punto - Noticieros Televisa",
    "description": null,
    "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9S19NMEczZ1pXVTjSAQA?oc=5",
    "urlToImage": null,
    "publishedAt": "2020-07-11T04:58:38Z",
    "content": null
  },
  {
    "source": {
      "id": null,
      "name": "Aristeguinoticias.com"
    },
    "author": null,
    "title": "Trump firmará decreto migratorio que encamina a la ciudadanía para \"dreamers\" - Aristeguinoticias",
    "description": "Desde cualquier medio, periodismo en libertad",
    "url": "https://aristeguinoticias.com/1007/mundo/trump-firmara-decreto-migratorio-que-encamina-a-la-ciudadania-para-dreamers/",
    "urlToImage": "https://aristeguinoticias.com/editorial/wp-content/uploads/2019/03/500x.png",
    "publishedAt": "2020-07-11T03:31:30Z",
    "content": null
  },
  {
    "source": {
      "id": "infobae",
      "name": "Infobae"
    },
    "author": "anónimo",
    "title": "“Es un hombre fabuloso”, dijo Donald Trump sobre AMLO y reveló su falta de empatía con Peña Nieto - infobae",
    "description": "El presidente de Estados Unidos afirmó que tuvo una estupenda reunión con su homologo mexicano; sin embargo, aseguró que la construcción del muro fronterizo continuará",
    "url": "https://www.infobae.com/america/mexico/2020/07/11/es-un-hombre-fabuloso-dijo-donald-trump-sobre-amlo-y-revelo-su-falta-de-empatia-con-pena-nieto/",
    "urlToImage": "https://www.infobae.com/new-resizer/XrTjfeGeEeOZX5Hn-TxUQfQr1xc=/1920x1280/filters:format(jpg):quality(100)//cloudfront-us-east-1.images.arcpublishing.com/infobae/TU4O5VVD3BDDDKCWNTZS3P7TCA.jpg",
    "publishedAt": "2020-07-11T03:27:00Z",
    "content": ""
  },
  {
    "source": {
      "id": "infobae",
      "name": "Infobae"
    },
    "author": "anónimo",
    "title": "Naya Rivera: así fue la llamada al 911 que reportó su desaparición - infobae",
    "description": "La policía informó que es muy probable no se pueda recuperar el cuerpo de la actriz",
    "url": "https://www.infobae.com/america/entretenimiento/2020/07/11/naya-rivera-asi-fue-la-llamada-al-911-que-reporto-su-desaparicion/",
    "urlToImage": "https://www.infobae.com/new-resizer/0AP7fHIGC7YhaxH17JPH4g0Zyq4=/3000x2000/filters:format(jpg):quality(100)//cloudfront-us-east-1.images.arcpublishing.com/infobae/V7HO3F2SXVE5VIMITZ2RASMXJE.jpg",
    "publishedAt": "2020-07-11T02:39:21Z",
    "content": ""
  },
  {
    "source": {
      "id": null,
      "name": "Televisa.com"
    },
    "author": "María del Rocío Ángeles Rivero",
    "title": "OMS advierte riesgo en México por desconfinamiento apresurado - Noticieros Televisa",
    "description": "La OMS advirtió de riesgos en México y otros países de América por desconfinamiento apresurado, a pesar de cifras de contagios de coronavirus",
    "url": "https://noticieros.televisa.com/ultimas-noticias/oms-advierte-riesgo-en-mexico-por-desconfinamiento-apresurado/",
    "urlToImage": "https://i1.wp.com/noticieros.televisa.com/wp-content/uploads/2020/07/zocalo-de-la-cdmx.jpg?fit=1200%2C675&ssl=1",
    "publishedAt": "2020-07-11T02:20:00Z",
    "content": "La Organización Mundial de la Salud (OMS) advirtió hoy sobre la decisión de algunos países, como México y otros en América, de reabrir sus economías pese a mantener altas cifras diarias de contagios … [+1257 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Levelup.com"
    },
    "author": null,
    "title": "Phil Spencer lanza crítica contra los exclusivos de consola - LEVELUP",
    "description": "El jefe de Xbox piensa que no se debe limitar a los jugadores y mucho menos por el hardware",
    "url": "https://www.levelup.com/noticias/581761/Phil-Spencer-lanza-critica-contra-los-exclusivos-de-consola",
    "urlToImage": "http://levelup.buscafs.com/uploads/images/653593_600x315.jpg",
    "publishedAt": "2020-07-11T02:10:00Z",
    "content": "Editorial: Gaming / Facebook / Twitter / YouTube / Instagram / Noticias / Discord / Foros\r\nUna de las propuestas que ha impulsado Phil Spencer para esta y la próxima generación es romper con las barr… [+1737 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "ELIMPARCIAL.COM"
    },
    "author": "EL IMPARCIAL | Noticias de México y el mundo",
    "title": "Coronavirus: cómo el hallazgo de rastros de covid en aguas residuales de 5 países (antes del brote en China... - ELIMPARCIAL.COM",
    "description": "Equipos científicos descubrieron la presencia del virus en muestras de aguas servidas recolectadas semanas y meses antes del brote de Wuhan. Te contamos cuáles son las implicaciones de este hallazgo.",
    "url": "https://www.elimparcial.com/mundo/Coronavirus-como-el-hallazgo-de-rastros-de-covid-en-aguas-residuales-de-5-paises-antes-del-brote-en-China-aumenta-el-misterio-sobre-su-origen-20200710-0001.html",
    "urlToImage": "https://assets.elimparcial.com/__export/1594431654182/sites/elimparcial/img/2020/07/10/coronavirus-4972480_1920_2.jpg_673822677.jpg",
    "publishedAt": "2020-07-11T01:39:00Z",
    "content": "Es un hallazgo que genera muchas preguntas y que podría modificar sustancialmente lo que se conoce hasta ahora sobre el virus causante del covid-19.\r\nInvestigadores de al menos cinco países, incluyen… [+13974 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Heraldodemexico.com.mx"
    },
    "author": "Heraldo de M�xico",
    "title": "Érika Zaba da a conocer que usa \"gotitas\" contra el COVID-19: VIDEO - El Heraldo de México",
    "description": "Similar a la f�rmula que en su momento explic� la secretaria de Gobernaci�n, Olga S�nchez Cordero, Zaba dijo que as� se sigue cuidando de la enfermedad",
    "url": "https://heraldodemexico.com.mx/espectaculos/2020/7/10/erika-zaba-da-conocer-que-usa-gotitas-contra-el-covid-19-video-106.html",
    "urlToImage": "https://heraldodemexico.com.mx/u/fotografias/m/2020/7/10/f1280x720-105_131780_5050.jpg",
    "publishedAt": "2020-07-11T00:59:55Z",
    "content": "rika Zaba, exintegrante de OV7, dio a conocer hace unos das que tanto ella como su familia haban dado positivo al COVID-19. Ahora, a travs de sus redes sociales, le platic a sus seguidores cmo han so… [+811 chars]"
  },
  {
    "source": {
      "id": "infobae",
      "name": "Infobae"
    },
    "author": "anónimo",
    "title": "Qué es el “síndrome del corazón roto” y por qué el coronavirus podría contribuir a un aumento en la cantidad de casos - infobae",
    "description": "La miocardiopatía estaría vinculada al estrés psicológico, social y económico causado por la pandemia, que incluye “cuarentena, falta de interacción social, reglas estrictas de distanciamiento físico y sus consecuencias económicas”",
    "url": "https://www.infobae.com/america/eeuu/2020/07/11/que-es-el-sindrome-del-corazon-roto-y-por-que-el-coronavirus-podria-contribuir-a-un-aumento-en-la-cantidad-de-casos/",
    "urlToImage": "https://www.infobae.com/new-resizer/5_vANKx2Q2tSUS_rFWJKVoH3uSI=/800x534/filters:format(jpg):quality(100)//cloudfront-us-east-1.images.arcpublishing.com/infobae/JOZ6WNTLVSHDCL3F2O3YQESRII.jpg",
    "publishedAt": "2020-07-11T00:46:27Z",
    "content": "Trabajadores de la salud examinan a sus pacientes en El Centro Regional Medical Center. (MUST CREDIT: Washington Post photo by Melina Mara)\r\nUn estudio sugiere que los efectos colaterales de la pande… [+5404 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Elceo.com"
    },
    "author": null,
    "title": "Elon Musk supera a Warren Buffett en el ranking de multimillonarios - El CEO",
    "description": "Elon Musk ahora es más rico que Warren Buffett . La fortuna del director ejecutivo de Tesla aumentó 6,100 millones de dólares, según el índice de multimillonarios de Bloomberg, después de que las acciones del fabricante de automóviles se elevaran 11%. Ahora M…",
    "url": "https://elceo.com/negocios/elon-musk-ya-es-mas-rico-que-warren-buffett-segun-el-ranking-de-multimillonarios-de-bloomberg/",
    "urlToImage": "https://elceo.com/wp-content/uploads/2020/07/elon-musk.jpg",
    "publishedAt": "2020-07-11T00:38:44Z",
    "content": "10 de julio 2020 | 7:38 pm\r\nElon Musk ahora es más rico que Warren Buffett .\r\nLa fortuna del director ejecutivo de Tesla aumentó 6,100 millones de dólares, según el índice de multimillonarios de Bloo… [+2394 chars]"
  },
  {
    "source": {
      "id": "infobae",
      "name": "Infobae"
    },
    "author": "anónimo",
    "title": "Julio A. Santaella, presidente del Inegi, dió positivo a COVID-19 - infobae",
    "description": "El economista informó vía Twitter que permanecerá aislado y atenderá a distancia sus funciones en el órgano de estadística",
    "url": "https://www.infobae.com/america/mexico/2020/07/10/julio-a-santaella-presidente-del-inegi-dio-positivo-a-covid-19/",
    "urlToImage": "https://www.infobae.com/new-resizer/1hJBkbc8CWaRTATfWAhfpvYtIpE=/1920x1080/filters:format(jpg):quality(100)//cloudfront-us-east-1.images.arcpublishing.com/infobae/337GVWSXENE7TEPKNREMAZYC5A.jpg",
    "publishedAt": "2020-07-10T23:07:40Z",
    "content": "Julio Alfonso Santaella Castell (Foto: Cuartoscuro)\r\nJulio Alfonso Santaella Castell, presidente de la junta de gobierno del Instituto Nacional, Estadística y Geografía (Inegi), informó esta tarde qu… [+4051 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Sinembargo.mx"
    },
    "author": "EFE",
    "title": "Cuidado: China encontró en el camarón rastros de SARS-CoV-2. Y México consume y exporta fuerte - SinEmbargo MX",
    "description": "En un comunicado, ese departamento informó de que las pruebas de ácido nucleico realizadas a los empaquetados de gambas de Industrial Pesquera Santa Priscila, Empacreci y Edpacif dieron positivo y que \"existe el riesgo\" de que transmitan el virus.",
    "url": "https://www.sinembargo.mx/10-07-2020/3821122",
    "urlToImage": "https://www.sinembargo.mx/wp-content/uploads/2020/07/camaron.jpg",
    "publishedAt": "2020-07-10T22:55:00Z",
    "content": "Ecuador cuestionó este viernes que cepas del SARS-CoV-2 hayan podido sobrevivir en camarón (gamba) blanco congelado exportado a China, después de que el país asiático suspendiera las importaciones tr… [+4593 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Eonline.com"
    },
    "author": "McKenna Aiello",
    "title": "Jada Pinkett Smith admite que sí mantuvo una relación con August Alsina - E! Online Latino | México",
    "description": "Jada lo confesó.",
    "url": "https://www.eonline.com/mx/news/1169642/jada-pinkett-smith-admite-que-s-iacute-mantuvo-una-relaci-oacute-n-con-august-alsina",
    "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/202061/rs_600x600-200701082910-600-Will-Jada-August-LT-070120-GettyImages-1174200504-Instagram.jpg?fit=around|1080:1080&output-quality=90&crop=1080:1080;center,top",
    "publishedAt": "2020-07-10T22:53:00Z",
    "content": "\"Esto es lo que diré. Las personas pueden tener cualquier idea que les guste, pero lo que no me agrada es que mi personaje esté en duda, cuando ciertas cosas son cuestionables y sé que no soy yo o sé… [+490 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Bolavip"
    },
    "author": "Diego Jara Ramírez",
    "title": "América cuenta con tres bajas para el Clásico Joven de mañana ante Cruz Azul por la Copa por México - América Monumental - Bolavip",
    "description": "Dos bajas solo por precaución y no agravar las molestias que tienen los jugadores, mientras que la otra es solo por descanso.",
    "url": "https://americamonumental.bolavip.com/ligamx/America-cuenta-con-tres-bajas-para-el-Clasico-Joven-de-manana-ante-Cruz-Azul-por-la-Copa-por-Mexico-20200710-0014.html",
    "urlToImage": "https://americamonumental.bolavip.com/__export/1594421202587/sites/bolavip/img/2020/07/10/paul-aguilar-america-baja-andres-ibarguen-santiago-caseres-cruz-azul-copa-por-mexico_crop1594421172660.jpg_2024461655.jpg",
    "publishedAt": "2020-07-10T22:46:00Z",
    "content": "América se prepara para disputar mañana sábado el último compromiso de la fase regular, en la cual se tendrá que enfrentar ante Cruz Azul en el Clásico Joven, duelo que arrancará a partir de las 21:0… [+1313 chars]"
  }
]