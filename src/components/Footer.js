import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; SmartShop</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
