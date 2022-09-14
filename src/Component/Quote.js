import List from './List';
import './CSS/Quote.css';
import Footer from './Footer';

function Quote() {
  return (
    <>
      <List />
      <div className="quote">
        <p>
          Mathematics is not about numbers, equations, computations, or
          <br />
          algorithms: it is about understanding.
        </p>
        <p className="name">- William Paul Thurston</p>
      </div>
      <Footer />
    </>
  );
}

export default Quote;
