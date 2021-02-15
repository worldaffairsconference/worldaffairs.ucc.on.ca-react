import React from 'react';
import { Image, Container, Row, Col, Card } from 'react-bootstrap';
import GClarke from '../img/speakers/gclarke2.png';

const Keynote = () => {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <h1 className="text-center">
            WAC 2021 Keynote Speaker:
            <i>Dr. George Elliott Clarke</i>
          </h1>
          <hr />
          <Row className="pb-2">
            <Col md={12}>
              <Image src={GClarke} className="mx-auto d-block" fluid rounded />
            </Col>
          </Row>
          <Row className="pb-2">
            <Col md={12}>
              <br />
              Poet, novelist, playwright, and critic Dr. George Elliott Clarke
              was born near Windsor, Nova Scotia, and grew up in Halifax. He
              earned his BA from the University of Waterloo, MA from Dalhousie
              University, and Ph.D. from Queen&apos;s University in Kingston,
              Ontario. Dr. Clarke is the recipient of many honors for his work,
              including numerous honorary doctorates; a Doctor of Law (LL.D)
              from Dalhousie University, and 3 Doctors of Letters from the
              University of New Brunswick, the University of Alberta, and Saint
              Mary’s University.
              <br />
              <br />
              He is the author of numerous collections of poetry including
              Saltwater Spirituals and Deeper Blues (1983), Lush Dreams, Blue
              Exile: Fugitive Poems 1978-2993 (1994), Execution Poems: The Black
              Acadian Tragedy of George and Rue (2001), which won the Governor
              General’s Literary Award, Illuminated Verses (2005), Black (2006),
              and the dramatic poem Trudeau: Long March, Shining Path (2007).
              Dr. Clarke’s work reflects his interests in the Black culture of
              Atlantic Canada, an experience and identity he has described as
              &quot;Africadian.&quot; He has explored the cultural and social
              histories of Black Canadians across various genres, frequently
              braiding together archival research and personal experience. He is
              the author of the verse-novel Whylah Falls (1990), which he later
              adapted for the radio and stage. Dr. Clarke has been instrumental
              in promoting the work of writers of African descent, especially
              those of Nova Scotia, publishing Odysseys Home: Mapping
              African-Canadian Literature in 2002.
              <br />
              <br />
              Dr. Clarke has received many awards for his work over the years
              including the Dr. Martin Luther King Jr. Achievement Award, the
              Pierre Elliott Trudeau Fellowship Prize, the Planet Africa
              Renaissance Award, the Governor General’s Award for poetry, and
              the Eric Hoffer Book Award for Poetry. In 2006, Dr. Clarke was
              appointed to the Order of Nova Scotia and later appointed to the
              Order of Canada in 2008 at the rank Officer. In 2009, he was a
              co-recipient of the William P. Hubbard Award for Race Relations
              from the City of Toronto for his outstanding achievements and
              commitment in making a distinct difference in racial relations in
              Toronto. Dr. Clarke was chosen expressly for &quot;his local and
              national leadership role in creating an understanding and
              awareness of African and black culture and excellence in his
              contribution to redefining culture.&quot; In November 2012, Dr.
              Clarke became Toronto’s fourth Poet Laureate, and in 2016, he
              became Canada&apos;s seventh Parliamentary Poet Laureate.
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Keynote;
