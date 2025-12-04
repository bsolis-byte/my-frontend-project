export default function EducationSection() {
  return (
    <section className="edu-wrapper">
      <h2 className="edu-title">Education</h2>

      {/* Tertiary */}
      <div className="edu-group">
        <h3 className="edu-heading">Tertiary Education</h3>
        <p>Naga College Foundation (NCF)</p>
        <p className="edu-italic">
          Bachelor of Science in Computer Science (BSCS) – Second Year Student
        </p>
      </div>

      {/* Secondary */}
      <div className="edu-group">
        <h3 className="edu-heading">Secondary Education</h3>
        <p>Quipayo National High School</p>
        <p className="edu-italic">
          Senior High School – Strand: Computer System Servicing (CSS)
        </p>
      </div>

      {/* Primary */}
      <div className="edu-group">
        <h3 className="edu-heading">Primary Education</h3>
        <p>San Antonio Bombon Elementary School</p>
      </div>
    </section>
  );
}