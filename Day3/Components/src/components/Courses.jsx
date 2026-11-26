
import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Web Development",
    category: "DEVELOPMENT",
    description: "Learn HTML, CSS, JavaScript, and React.",
    duration: "8 Weeks",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Artificial Intelligence",
    category: "AI & ML",
    description: "Explore machine learning and AI applications.",
    duration: "10 Weeks",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    title: "Data Science",
    category: "DATA ANALYTICS",
    description: "Learn Python, data analysis, and visualization.",
    duration: "6 Weeks",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
];

function Courses() {
  return (
    <section className="courses section" id="courses">
      <div className="section-heading">
        <p className="section-tag">OUR COURSES</p>
        <h2>Explore Our Popular Courses</h2>
      </div>

      <div className="course-grid">
        {courses.map(
          ({ title, category, description, duration, image }) => (
            <CourseCard
              key={title}
              title={title}
              category={category}
              description={description}
              duration={duration}
              image={image}
            />
          )
        )}
      </div>
    </section>
  );
}

export default Courses;
