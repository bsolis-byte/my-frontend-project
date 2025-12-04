import ScrollAnimation from "./ScrollAnimation";

export default function HobbiesSection() {
  return (
    <section className="hobbies-wrapper">
      <div className="fade-in"></div>
      <ScrollAnimation delay={100}>
      <h2 className="hobbies-title">My Hobbies</h2>
      </ScrollAnimation>
      <div className="hobby-grid">

        {/* Hobby 1 */}
        <ScrollAnimation delay={100}>
          <div className="hobby-card">
            <div className="fade-in"></div>
            <img src="/pic2.png" alt="Playing guitar" className="hobby-img" />
            <h3 className="hobby-heading">Playing Guitar</h3>
            <p className="hobby-text">
              I enjoy playing guitar because it is my way to comfort myself or relax.
            </p>
          </div>
        </ScrollAnimation>

        {/* Hobby 2 */}
        <ScrollAnimation delay={200}>
          <div className="hobby-card">
            <div className="fade-in"></div>
            <img src="/pic1.png" alt="Travel" className="hobby-img" />
            <h3 className="hobby-heading">Travel</h3>
            <p className="hobby-text">
              I enjoy traveling because I love exploring new places and meeting new people.
            </p>
          </div>
        </ScrollAnimation>

        {/* Hobby 3 */}
        <ScrollAnimation delay={300}>
          <div className="hobby-card">
            <div className="fade-in"></div>
            <img src="/pic3.png" alt="Workout" className="hobby-img" />
            <h3 className="hobby-heading">Workout</h3>
            <p className="hobby-text">
              Staying fit with running and calisthenics.
            </p>
          </div>
        </ScrollAnimation>

      </div>
    </section>
  );
}
