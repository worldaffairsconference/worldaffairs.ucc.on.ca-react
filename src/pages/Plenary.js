import React, { useState } from 'react';
import { Container, Card, Row, Col, Image } from 'react-bootstrap';

const Speaker = (props) => {
  const data = props;
  import(`../img/speakers/${data.img}`).then((image) => {
    this.setState({ image });
  });
  return (
    <Row className="pb-2">
      <Col md={4}>
        <Image src={img} className="mx-auto d-block" fluid rounded />
      </Col>
      <Col md={8}>
        <h2 className="text-center text-md-left">{data.name}</h2>
        {data.text}
      </Col>
    </Row>
  );
};
const Plenary = (props) => {
  const data = props;
  const speakers = data.speaker.map((entry) => {
    return <Speaker name={entry.name} img={entry.img} text={entry.text} />;
  });
  return (
    <>
      <Container className="mt-4">
        <Card>
          <Card.Body>
            <h1 className="text-center">{data.title}</h1>
            <Card.Text>{data.text}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="mt-4">
          <Card.Title className="text-center" as="h1">
            Speakers
          </Card.Title>
          <hr />
          {speakers}
        </Card>
      </Container>
    </>
  );
};
export default Plenary;
