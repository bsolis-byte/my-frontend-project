import ScrollAnimation from "../components/ScrollAnimation";

export default function Home() {
  return (
    <main className="hero-container">

      <ScrollAnimation delay={100}>
        <img src="/pic(1).png" alt="Profile Photo" className="hero-photo" />
      </ScrollAnimation>

      <ScrollAnimation delay={200}>
        <div className="hero-text-box">
          <h1 className="hero-title">Hi Welcome to my Portfolio</h1>

          <p className="hero-description">
            Hi i'm benedict but you can call me ben. Feel free to explore and 
            learn more about me. <br />
          </p>
        </div>
      </ScrollAnimation>

    </main>
  );
}
