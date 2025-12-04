export default function HobbiesSection() {
  return (
    <section className="hobbies-wrapper">

      <h2 className="hobbies-title">My Hobbies</h2>

      <div className="hobby-grid">

        {/* Hobby 1 */}
        <div className="hobby-card">
          <img src="/pic2.png" alt="Playing guitar" className="hobby-img" />
          <h3 className="hobby-heading">Playing guitar</h3>
          <p className="hobby-text">
            I enjoy playing guitar because it is my way to comfort myself or relieve me from stress of school works.
          </p>
        </div>

        {/* Hobby 2 */}
        <div className="hobby-card">
          <img src="/pic1.png" alt="Travel" className="hobby-img" />
          <h3 className="hobby-heading">Travel</h3>
          <p className="hobby-text">
            I enjoy traveling because i love exploring new places and meeting new people.
          </p>
        </div>

        {/* Hobby 3 */}
        <div className="hobby-card">
          <img src="/pic3.png" alt="Workout" className="hobby-img" />
          <h3 className="hobby-heading">Workout</h3>
          <p className="hobby-text">
            Staying fit with running and calisthenics.
          </p>
        </div>

      </div>
    </section>
  );
}