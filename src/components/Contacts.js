"use client";
import Image from "next/image";
import styles from "./Contacts.module.css";
import Title from "./Title";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameValid, setNameValid] = useState(null);
  const [emailValid, setEmailValid] = useState(null);
  const [messageValid, setMessageValid] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    name === "" ? setNameValid(false) : setNameValid(true);
    email === "" ? setEmailValid(false) : setEmailValid(true);
    message === "" ? setMessageValid(false) : setMessageValid(true);

    try {
      if (name === "" || email === "" || message === "") return;

      const templateParams = {
        from_name: name,
        email,
        message,
      };

      const response = await emailjs.send(
        "service_3941nzi",
        "template_cjyhfaa",
        templateParams,
        "Z_xumeCK9WYhzdKVw"
      );
      console.log("Email enviado", response.status, response.text);

      setName("");
      setEmail("");
      setMessage("");
      setNameValid(null);
      setEmailValid(null);
      setMessageValid(null);
    } catch (error) {
      console.log("Errror: ", error);
    }
  };

  return (
    <section className={styles.contacts} id="contacts">
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
          <label className={nameValid === false ? styles.incomplete : null}>
            Nome*
            <input
              type="text"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </label>
          <label className={emailValid === false ? styles.incomplete : null}>
            E-mail*
            <input
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>
          <label className={messageValid === false ? styles.incomplete : null}>
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
