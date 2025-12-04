import ScrollAnimation from "./ScrollAnimation";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">

        <ScrollAnimation delay={100}>
          <div className="contact-icons">
            <img src="/fb.png" alt="Facebook" />
            <img src="/email.png" alt="Email" />
            <img src="/cp.png" alt="Phone" />
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <div className="contact-text">
            <h2>Benedict Solis</h2>
            <p>bsolis@ebox.ncf.edu.ph</p>
            <p>0991224567</p>
          </div>
        </ScrollAnimation>

      </div>
    </section>
  );
}
