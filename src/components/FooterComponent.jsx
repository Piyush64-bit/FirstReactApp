import React from 'react';
import { Container } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container className="text-center">
        &copy; {new Date().getFullYear()}  Designed & Developed by&nbsp; P I Y U $ H
      </Container>
    </footer>
  );
};

export default FooterComponent;
