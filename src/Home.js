import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Home = () => {
  return ( 
    <>
    <Navbar/>
    <body style={{backgroundColor:'#181f26'}}>
      <div className="container-fluid">
        <div className="row" id="hm">
          <div className="col-sm-1"></div>
          <div className="col-sm-5" id="Intro">
            <h1 id="intro">
                Multi Trait Prediction
            </h1>
            <p id="text1">
                Mrudha helps you to predict traits automatically.
                By providing basic information of your crop get approximate trait values.
                This portal uses machine learning techniques to predict traits with atmost accuracy.
                It also provides data for any reference required.
                We relayed on government portals for data.
                User is supposed to give genome sequence of 48 characters at specified location.
            </p>
          </div>
          <div className="col-sm-1" id="img1">
            <img src="Pic1.png" atl="Introduction image" width="680px"/>
          </div>

        </div>
      </div>
      <div className="Concept">
        <div className="heading">
            <h1>Why Multi Trait Prediction</h1>
        </div>
        <div className="content">
          <p>
            Multi-trait prediction in agriculture is vital for comprehensive insights into crop outcomes. Decision-makers, nationally and regionally, benefit from models predicting various characteristics simultaneously. Accurate predictions aid farmers in optimal crop selection and timing decisions. In nations like India, facing rapid population growth, focusing on advanced agricultural technologies is crucial. Early-stage multi-trait crop yield prediction, integral to precision agriculture, presents challenges due to complex, nonlinear growth patterns. Understanding these patterns requires a grasp of dynamic environmental factors (humidity, temperature, rainfall) and diverse management techniques (irrigation, herbicides, fertilizers). The proposed work gathers data over ten years from fields cultivating Cotton, Maize, Rice, Wheat, and Groundnut across 32 districts in Telangana, emphasizing the need for nuanced models to navigate varied conditions and contribute to sustainable agriculture.
          </p>
        </div>
      </div>
      <br /><br />
      <div className="buttun">s
        <Link to="/yield"><button id="btn">Get Predictions</button></Link>
      </div>

      <br /><br /><br /><br /><br /><br /><br />
      <div className="Miscellaneous">
        <h1 id="Mis">
          Miscellaneous
        </h1>
        <div className="boxes">
          <div className="box1">
            <h3 className="heading">Attributes</h3>
            <p id="matter">Multi Trait is primarily dependent on attributes like grain weight per spike (GWPS), plant height (PH), Irrigation level and ph of soil.Predicted of yield happened based on these parameters.Though there are other factors that influence yield due to lack of information other attributes are not included.</p>
          </div>
          <div className="box2">
            <h3 className="heading">Accuracy</h3>
            <p id="matter">Accuracy of our model is between 80-90%.Machine learning models are utilized for predicting yield.Machine Learning and AI are the techonologies used in many domains.These models helps to predict values based on past data</p>
          </div>
        </div>
      </div>
      <br /><br />
      <section id="explore" class="explore">
			<div class="container">
				<div class="section-header">
					<h2>Explore</h2>
					<p>Find out what each trait means</p>
				</div>
      </div>
				<div class="explore-content">
					<div class="single-explore-item">
						<div class="single-explore-txt"  id="trait1">
							<h2>Days to Heading (DH)</h2>
							<p>Days to heading is the duration from planting to the appearance of the wheat heads or flowering. It typically ranges from 60 to 120 days, depending on the variety and growing conditions.</p>
						</div>
					</div>
			
					<div class="single-explore-item">
						<div class="single-explore-txt"  id="trait2">
							<h2>Grain Filling Duration</h2>
							<p>Grain filling duration is the period between flowering and grain maturity. It lasts around 20 to 40 days, during which grains develop and accumulate starch.</p>
						</div>
					</div>

					<div class="single-explore-item">
						<div class="single-explore-txt" id="trait3">
							<h2>Grain Number Per Spike</h2>
							<p>This trait refers to the quantity of grains on each wheat spike. Varieties may have different capacities, impacting overall yield potential.</p>	
						</div>
					</div>

					<div class="single-explore-item">
						<div class="single-explore-txt" id="trait4">
							<h2>Grain Weight Per Spike</h2>
							<p>Grain weight per spike is the average weight of individual grains on a wheat spike. It influences the overall yield and quality of the harvest.</p>
						</div>
					</div>

					<div class="single-explore-item">
						<div class="single-explore-txt" id="trait5">
							<h2>Plant Height</h2>
							<p>Plant height is the vertical measurement from the base to the tip of the wheat plant. Varieties vary in height, affecting factors such as lodging resistance and ease of harvesting.</p>
						</div>
					</div>

					<div class="single-explore-item">
						<div class="single-explore-txt" id="trait6">
							<h2>Grain Yield</h2>
							<p>Grain yield is the total amount of wheat harvested per unit area. It depends on a combination of the aforementioned traits and is a crucial factor in assessing the productivity of a wheat variety.</p>
						</div>
					</div>			
				</div>
		  </section>
    </body>
    <Footer/>
    </>
   );
}
 
export default Home;

