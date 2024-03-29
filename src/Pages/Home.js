import Fade from 'react-reveal/Fade';

import NavBar from '../Components/NavBar';

function Home() {
  return (
    <div className="navbarMargin">
      <NavBar />

      <main className="home" id="home">
        <Fade bottom>
          <article className="about">
            <h1>SOFT</h1>
            <p>
              Get to know now the best products for{' '}
              <span style={{ color: 'var(--color)' }}>Free Fire</span>,{' '}
              <span style={{ color: 'var(--color)' }}>Valorant</span> and others
              games with prices that fit your budget! We offer an amazing
              selection of tools and resources that will enhance your gaming
              experience.
            </p>
            <a href="https://discord.gg/rKcmgSZVu5">
              <button>Discord</button>
            </a>
          </article>
        </Fade>
        <figure>
          <img src="imgs/painel.png" alt="security" />
        </figure>
      </main>
    </div>
  );
}

export default Home;
