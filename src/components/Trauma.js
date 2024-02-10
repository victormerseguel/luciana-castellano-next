import Title from "./Title";
import styles from "./Trauma.module.css";

const Trauma = () => {
  return (
    <section className={styles.trauma}>
      <div className={styles.trauma_content}>
        <div className={styles.trauma_left}>
          <img
            src="/assets/trauma-image.jpg"
            alt="Trauma Informed - Luciana Castellano"
          />
        </div>
        <div className={styles.trauma_right}>
          <Title text="Trauma Informed" />
          <p>
            Sou uma terapeuta Trauma Informed, ou seja, sou uma terapeuta
            informada sobre o trauma, pois entendo o quanto este olhar é
            fundamental para um bom relacionamento com o outro, principalmente
            nos serviços de saúde integral.
          </p>
          <p>
            Cada um de nós tem uma história, faz parte de uma cultura e recebeu
            determinado tipo de educação. E cada um destes aspectos importa, bem
            como as marcas vindas dessa história. Ter este olhar e este cuidado
            é essencial, ao meu ver para quem trabalha com a alma humana.
          </p>
          <p className="subtitle"> O que é o Trauma</p>
          <p>
            Todos nós passamos por traumas; uns de forma mais leve e outros de
            forma mais intensa. Trauma não é um evento em si, mas o que acontece
            dentro de nós (corpo, mente, alma) quando o evento ocorre. Tudo isso
            deixa marcas e estas levamos para a vida.
          </p>
          <p>
            Porém, essas marcas em algum momento nos ajudam e podemos por meio
            delas, descobrir a nossa potência, e então desta forma, integrar o
            que passou na nossa biografia.
          </p>
          <p>
            Entretanto, enquanto não nos tornamos concientes das nossas
            traumatizações e do que nos bloqueia, o que está no subconsciente
            que direciona a nossa vida.
          </p>
          <p>
            Aquilo que fica registrado em nossa memória corporal, em nosso
            subconsciente, as reações que nosso corpo e nossa mente têm quando
            alguma coisa acontece; tudo isso, por muitas vezes, dita a forma
            como nos relacionamos, interfere diretamente nas nossas decisões,
            nas nossas atitudes e, na maioria das vezes, são responsáveis pelas
            nossas principais barreiras no nosso processo de sermos pessoas
            melhores.
          </p>
          <p className="subtitle">Sintomas</p>
          <p>
            Ansiedade, nervosismo, tremores, explosões de raiva, desespero, medo
            excessivo; ou mesmo sono excessivo, cansaço, desânimo, apatia,
            incapacidade de amar ou se relacionar com outras pessoas, timidez
            excessiva, dificuldade de dormir, hipervigilância… Tudo isso pode
            estar relacionado a processos de traumatização e ter consciência
            disso é necessário para o trabalho que vem a seguir.
          </p>
          <p>
            Conhecer estas marcas, aprender a lidar como elas de forma
            consciente e integrar tudo o que foi à sua história com um novo
            olhar, o de potência, transformará a sua vida.
          </p>
          <p>
            “Todo ser humano tem um 'eu' verdadeiro e autêntico. Trauma é a
            desconexão com ele e a cura é a reconexão com ele.” - Dr. Gabor
            Maté.
          </p>
          <p className="subtitle">Como funciona o trabalho com trauma</p>
          <ol>
            <li>
              1. Primeiro precisamos conhecer que o trauma não é algo
              extraordinário, mas sim ordinário. Ele existe entre todos nós;
            </li>
            <li>
              2. Reconhecer, perceber e sentir os sintomas do trauma em nós, nos
              nossos corpos e mentes;
            </li>
            <li>
              3. Descobrir como as marcas dos nossos traumas se manifestam nos
              nossos comportamentos e relacionamentos;
            </li>
            <li>
              4. Se Reconectar com o seu ser essencial; aquele que existe por
              trás do trauma;
            </li>
            <li>
              5. Integrar o que aconteceu à sua biografia com autocompaixão,
              assumindo agora a sua vida com potência;
            </li>
          </ol>
          <p>
            * Este trabalho de cura é feito com muita segurança e compaixão.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trauma;
