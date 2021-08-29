import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import styled from "styled-components";
import Footer from "./Footer";
import Slider from "./ImgSlider";
import Trending from "./Trending"
import Premium from "./Premium"
const Home = () => {
  const [products, setProducts] = useState([]);

  const clickHandler = () => {};

  useEffect(() => {
    axios
      .get("https://www.scoopwhoop.com/uns/api/v1/videos/?filter_type=carousel")
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  console.log("Output:", products);

  // eslint-disable-next-line no-lone-blocks
  return (
    <div style={{backgroundColor:"#212529"}}>
      <Nav></Nav>
      <Slider slide={products}></Slider> 
      <Trending trend={products}></Trending>
      <Premium image={products}></Premium>
      {/*{cards.map(card => 
             (<Card data={card}></Card>
             ))}
          <Footer></Footer>*/}
    </div>
  );
};


export default Home;
