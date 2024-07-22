import React from 'react'
import styles from './Cta.module.css'

function Cta() {
    return (
        <section className={styles.cta}>
            <div className={styles.conteudo4}>
                <p className={styles.p2}>Se você tem uma criança que já passou dos 7 anos e quer fazer parte da construção <br />d'<b>O Fabuloso Mundo das Crianças que se Amam</b>, se inscreva agora e vem comigo.<br /> Te espero do lado de cá.</p>
                <a className={styles.btn2} href="#inscricao">Quero participar gratuitamente!</a>
            </div>
        </section>
    )
}

export default Cta