"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./styles.module.scss";

type IForm = {
  email: string;
  name: string;
  title: string;
  contentEmail: string;
};

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <main className={styles.mainContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Digite o seu e-email
          <input
            type="email"
            placeholder="johndoe@email.com"
            {...register("email")}
          />
        </label>
        <label>
          Digite o seu nome
          <input type="text" placeholder="john doe" {...register("name")} />
        </label>

        <label>
          Titulo do e-mail
          <input type="text" {...register("title")} />
        </label>

        <label>
          Conteúdo do e-mail
          <textarea {...register("contentEmail")}></textarea>
        </label>

        <button type="submit">Enviar e-mail</button>
      </form>
    </main>
  );
}
