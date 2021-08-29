import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImgSlider({ slide }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <Container>
      <div className="clearfix mt-5 mb-2">
        <h4 className="float-left" color="white">Trending</h4>
       
      </div>
      <Slider {...settings}>
        {slide.map(function(value) {
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
