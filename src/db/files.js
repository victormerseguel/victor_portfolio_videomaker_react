import caterina1 from "../assets/thumb_caterina1.jpg";
import sbcirco from "../assets/thumb_sbcirco.jpg";
import leticia from "../assets/thumb_leticia.jpg";
import square from "../assets/thumb_square.jpg";
import caterina2 from "../assets/thumb_caterina2.jpg";
import paineiras from "../assets/thumb_paineiras.jpg";
import mediotec from "../assets/thumb_mediotec.jpg";
import saraf from "../assets/thumb_saraf.jpg";
import xoaluguel from "../assets/thumb_xoaluguel.jpg";
import serie from "../assets/thumb_serie.jpg";

const files = [
  {
    id: "caterina1",
    nome: "Caterina 1",
    imgURL: caterina1,
    patch: "851958290",
    descriptType: "Esquete Internet",
    descripTitle: "Medo",
    descripClient: "Luciana Castellano",
    order: "05",
  },

  {
    id: "sbcirco",
    nome: "São Bercirco",
    imgURL: sbcirco,
    patch: "851958834",
    descriptType: "Color Grading",
    descripTitle: "São Bercirco",
    descripClient: "dir. Mariana França",
    order: "02",
  },
  {
    id: "leticia",
    nome: "Letícia",
    imgURL: leticia,
    patch: "851958625",
    descriptType: "Promocional",
    descripTitle: "Fisioterapia",
    descripClient: "Letícia Mello",
    order: "03",
  },
  {
    id: "square",
    nome: "Square",
    imgURL: square,
    patch: "851958902",
    descriptType: "Promocional",
    descripTitle: "Infraestrutura",
    descripClient: "Square - Soluções em Tecnologia",
    order: "04",
  },
  {
    id: "caterina2",
    nome: "Caterina 2",
    imgURL: caterina2,
    patch: "851958536",
    descriptType: "Esquete Internet",
    descripTitle: "É Importante Errar",
    descripClient: "Luciana Castellano",
    order: "10",
  },
  {
    id: "paineiras",
    nome: "Paineiras",
    imgURL: paineiras,
    patch: "851958721",
    descriptType: "Mosaico Musical",
    descripTitle: "Um Canto para as Mães",
    descripClient: "Coral Paineiras",
    order: "07",
  },
  {
    id: "mediotec_dunas",
    nome: "Mediotec",
    imgURL: mediotec,
    patch: "851958669",
    descriptType: "Produção Musical Completa",
    descripTitle: "Dunas",
    descripClient: "MEDIOTEC Música",
    order: "08",
  },
  {
    id: "saraf",
    nome: "Saraf",
    imgURL: saraf,
    patch: "851958777",
    descriptType: "Conteúdo",
    descripTitle: "Inventário de Ativos",
    descripClient: "SARAF Controle Patrimonial",
    order: "06",
  },
  {
    id: "xoaluguel",
    nome: "Xô Aluguel Online",
    imgURL: xoaluguel,
    patch: "887349801",
    descriptType: "Vídeo de Vendas",
    descripTitle: "Xô Aluguel Online",
    descripClient: "ANDUMA Empreendimentos Imobiliários",
    order: "09",
  },
  {
    id: "serie",
    nome: "Série",
    imgURL: serie,
    patch: "887349801",
    descriptType: "Mini Web Série",
    descripTitle: "Mafalda - Ep. 01",
    descripClient: "Caminhos Potentes",
    order: "01",
  },
];

export const orderedFiles = files.sort((a, b) => {
  return a.order < b.order ? -1 : a.order > b.order ? 1 : 0;
});
