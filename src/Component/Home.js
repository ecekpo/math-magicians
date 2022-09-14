import List from './List';
import './CSS/Home.css';
import Footer from './Footer';

function Home() {
  return (
    <>
      <List />
      <div className="home-page">
        <h1 className="intro-page">Welcome to our Page!</h1>
        <h3 className="home-title">Calculator makes simple</h3>
        <p className="description">
          Getting started with the Calculator by clicking on the calculator link above.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
