import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Premium({ image }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <div className="clearfix mt-5 mb-2">
        <h4 className="float-left" color="white">Premium</h4>
       
      </div>
      <Slider {...settings}>
        {image.map(function(value) {
          return (
            <React.Fragment>
                <Col>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={value.feature_img}
                    />
                    <Card.Body>
                      <span color="white">{value.title}</span>
                    </Card.Body>
                  </Card>
                </Col>
            </React.Fragment>
          );
        })}
      </Slider>
      {/*<Link className="float-right text-uppercase" to="/">
          View More
    </Link>*/}
    </Container>
  );
}
