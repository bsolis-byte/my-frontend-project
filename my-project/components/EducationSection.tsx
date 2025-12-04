"use client";
import ScrollAnimation from "../components/ScrollAnimation";

export default function EducationSection() {
  return (
    <section className="edu-wrapper text-white px-6 min-h-screen flex flex-col justify-center items-center">

      {/* Title Animation */}
      <ScrollAnimation delay={100}>
        <h2 className="edu-title text-4xl font-bold mb-10 text-center">
          Education
        </h2>
      </ScrollAnimation>

      {/* Tertiary */}
      <ScrollAnimation delay={200}>
        <div className="edu-group mb-8 text-center">
          <h3 className="edu-heading text-2xl font-semibold">Tertiary Education</h3>
          <p className="edu-italic mt-1">
            Naga College Foundation (NCF)
          </p>
          <p className="edu-italic">
            Bachelor of Science in Computer Science (BSCS) | Second Year Student
          </p>
        </div>
      </ScrollAnimation>

      {/* Secondary */}
      <ScrollAnimation delay={300}>
        <div className="edu-group mb-8 text-center">
          <h3 className="edu-heading text-2xl font-semibold">Secondary Education</h3>
          <p className="edu-italic mt-1">
            Quipayo National High School
          </p>
          <p className="edu-italic">
            Senior High School | Strand: Computer System Servicing (CSS)
          </p>
        </div>
      </ScrollAnimation>

      {/* Primary */}
      <ScrollAnimation delay={400}>
        <div className="edu-group mb-8 text-center">
          <h3 className="edu-heading text-2xl font-semibold">Primary Education</h3>
          <p className="edu-italic mt-1">
            San Antonio Bombon Elementary School
          </p>
        </div>
      </ScrollAnimation>

    </section>
  );
}
