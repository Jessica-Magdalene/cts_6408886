import React from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import { books, blogs, courses } from './data';
import './App.css';

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div className="container">
      {/* ✅ 1. Course Details First */}
      {showCourses && <CourseDetails courses={courses} />}

      {/* ✅ 2. Book Details Next */}
      {showBooks && <BookDetails books={books} />}

      {/* ✅ 3. Blog Details Last */}
      {showBlogs ? <BlogDetails blogs={blogs} /> : <p>Blog section hidden</p>}
    </div>
  );
}

export default App;

