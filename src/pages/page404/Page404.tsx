
import { Link } from 'react-router-dom';
import './page404.css';

export default function Page404() {
  return (
    <section className="section">
      <h1 className="title404">404! Ops... Algo deu errado!</h1>
      <h2 className="sub-title">Retorne a navegação clicando no botão abaixo:</h2>
      <Link className="button" to="/">Retornar</Link>
    </section>
  );
}
