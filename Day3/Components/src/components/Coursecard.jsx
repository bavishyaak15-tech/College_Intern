
function CourseCard({
  title,
  category,
  description,
  duration,
  image,
}) {
  return (
    <div className="course-card">
      <img src={image} alt={title} />

      <div className="course-content">
        <span className="course-category">
          {category}
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="course-bottom">
          <span>{duration}</span>
          <a href="#contact">Learn More →</a>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
