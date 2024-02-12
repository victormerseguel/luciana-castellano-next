"use client";
import Image from "next/image";
import styles from "./Contacts.module.css";
import Title from "./Title";
import { useState } from "react";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.contacts}>
      <Image
        src="/assets/trauma-bg.jpg"
        alt="Background"
        fill
        className={styles.contacts_bg}
      />
      <div className={styles.contacts_content}>
        <Title text="Contato" />
        <p className="subtitle">VAMOS CONVERSAR?</p>
        <p className="text">
          Me mande sua dúvida, vai ser um prazer falar com você.
        </p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            Nome*
            <input
              type="text"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </label>
          <label>
            E-mail*
            <input
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>
          <label>
            Mensagem*
            <textarea
              value={message}
              onChange={({ target }) => setMessage(target.value)}
            ></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
