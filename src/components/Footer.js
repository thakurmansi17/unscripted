const Footer = () => {
  return (
    <div style={{backgroundColor:"#ffc107"}}>
     <div className="social" style={{ display: "flex", justifyContent: "flex-start",padding:"0 0 0 100px" }}>
        <div><h3>Follow Us</h3></div>
        <div></div>
     </div>

     <div className="title" style={{ display: "flex", justifyContent: "flex-start",padding:"0 0 0 100px" }}>
        <div><h2>Unscripted</h2></div>
        <div></div>
     </div>

    
      <div style={{ display: "flex", justifyContent: "space-between" }} className="container">
        <div>
          <span>2021 ScoopWhoop Media Pvt Ltd</span>
        </div>
        <div>
          <ul style={{ listStyle: "none", display: "flex" }}>
            <li>Community Guidelines &nbsp;| &nbsp; </li>
            <li>Privacy Policy&nbsp; | &nbsp;</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
