import React from 'react';
import { Button } from 'react-bootstrap';
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';
import CardComponent from '../components/CardComponent';

const Display = ({ goToHome }) => {
  return (
    <>
      <NavbarComponent />
      <div className="text-center mt-4">
        <h2>Avaliable courses</h2>
        <div className="d-flex justify-content-center flex-wrap my-4">
          <CardComponent
            title="Master ChatGPT"
            text=""
            imageUrl="https://grootacademy.com/wp-content/uploads/2025/01/21.png"
          />
          <CardComponent
            title="Web Designing"
            text=""
            imageUrl="https://grootacademy.com/wp-content/uploads/2024/12/web-designing-programming-course-card-by-groot-academy.png"
          />
          <CardComponent
            title="Java Script"
            text=""
            imageUrl="https://grootacademy.com/wp-content/uploads/2024/12/java-script-programming-course-card-by-groot-academy.png"
          />
          <CardComponent
            title="Node JS"
            text=""
            imageUrl="https://grootacademy.com/wp-content/uploads/2024/12/nodeJs-programming-course-card-by-groot-academy.png"
          />
        </div>
        <div className="d-flex justify-content-center flex-wrap my-4">
          <CardComponent
            title="React"
            text=""
            imageUrl="https://grootacademy.com/wp-content/uploads/2024/12/react-js-javascript-framework-card-by-groot-academy.png"
          />
          <CardComponent
            title="Mashine Learning"
            text=""
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgisrjuZ4FcWIxBufnPu61xEzQL54UKaghbw&s"
          />
          <CardComponent
            title="Data Analysis"
            text=""
            imageUrl="https://grootlearning.com/wp-content/uploads/2024/12/data-analysis-with-python-course-card-by-groot-academy.png"
          />
          <CardComponent
            title="Learn Python"
            text=""
            imageUrl="https://grootacademy.com/wp-content/uploads/2024/12/python-programming-course-card-by-groot-academy.png"
          />
        </div>
        <Button variant="secondary" onClick={goToHome}>
          Back to Home Page
        </Button>
      </div>
      <FooterComponent />
    </>
  );
};

export default Display;
