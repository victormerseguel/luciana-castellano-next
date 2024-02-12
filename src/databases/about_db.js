const clarice_birthday = new Date("2014-09-15");
const rafa_birthday = new Date("2009-11-08");
const today = new Date("2024-02-01");

const calc = (birthday) => {
  let year = today.getFullYear() - birthday.getFullYear();

  if (
    today.getMonth() < birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() &&
      today.getDay() < birthday.getDay())
  ) {
    year--;
  }

  return year;
};

export const about_db = `subttl - OLÁ, EU SOU A LUH!
Minha vida sempre foi regada à muita curiosidade e desejo de entender o ser humano e seus comportamentos. Desde pequena sou curiosa pelas histórias e pelos caminhos que as pessoas trilham ao longo de suas trajetórias. Dediquei toda uma vida a me autoconhecer e a gerar reflexão à todos a minha volta, seja pela arte e minhas peças de teatro, seja pelos meus múltiplos ofícios.
Meu contato e estudos no desenvolvimento humano iniciou-se há mais de 22 anos, mesma época em me formava como atriz. Minhas formações na área do desenvolvimento passam por diversas técnicas de terapias integrativas, Hipnoterapia para crianças e jovens, Hatha Yoga e especialização em Yoga Kids, além de Educação Parental pela Positive Discipline Association. Sou ainda facilitadora de meditação e autoconhecimento.
Hoje, para praticar minha metodologia, eu misturo um pouco de tudo o que sou e aprendi ao longo da minha jornada, mesclando técnicas energéticas, psicoterapia, terapia somática, arte e exercícios para autorregulação.
Em 2021, meu trabalho terapêutico já estava bem voltado à “Criança Interior”, pois entendia o quando a nossa infância impacta por toda a nossa vida. Foi quando comecei a aprofundar os meus estudos em Trauma e na neurociência do Trauma, que foi quando o meu trabalho e Servir ganharam um novo significado.
Em 2022 realizei também um sonho: criar um curso de autoconhecimento e educação emocional para o público infanto-juvenil contribuindo por seus futuros e fortalecimento de vínculo com seus pais.
(Clique aqui e descubra mais sobre a Jornada Caminho Potentes)
Para finalizar, sou mãe de dois: o Rafael de ${calc(
  rafa_birthday
)} anos e a Clarice de ${calc(clarice_birthday)}.
Em poucas palavras, essa sou eu. E você, quem é? Me deixe descobrir!`;
