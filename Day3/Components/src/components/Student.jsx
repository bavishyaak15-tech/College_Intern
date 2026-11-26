
function Student({ name, age, course }) {
  return (
    //<div>
      //<h1>Name : {name}</h1>
      //<h1>Age : {age}</h1>
      //<h1>Course : {course}</h1>
    //</div>

    //<div>
      //  <h1>Name : {props.name}</h1>
        //<h1>Age : {props.age}</h1>
        //<h1>Gender : {props.gender}</h1>
    //</div>

    <div>
        <h1>Name : {name}</h1>
        <h1>Age : {age}</h1>
        <h1>Gender : {gender}</h1>
    </div>
  );
}

export default Student;
