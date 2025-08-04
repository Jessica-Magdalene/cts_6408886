// src/CourseDetails.js
import React from 'react';

function CourseDetails({ courses }) {
  return (
    <div className="mystyle1">
      <h1>Course Details</h1>
      {courses.length > 0 ? (
        <>
          {courses.map((course) =>
            course.name === 'React' ? ( // Conditional rendering using ternary
              <div key={course.id}>
                <strong>{course.name}</strong>
                <p>{course.date}</p>
              </div>
            ) : (
              <div key={course.id}>
                <b>{course.name}</b>
                <p>{course.date}</p>
              </div>
            )
          )}
        </>
      ) : (
        <p>No courses found.</p>
      )}
    </div>
  );
}

export default CourseDetails;
