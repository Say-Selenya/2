export default function Contacto() {
  return (
    <section>
      <h2 className="title-glow">Contacto</h2>
      <form>
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo" required />
        <textarea placeholder="Tu mensaje"></textarea>
        <button type="submit" className="btn-magic">Enviar</button>
      </form>
    </section>
  );
}