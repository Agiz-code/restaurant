import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            We are committed to a method of food production and distribution
            that is geographically localized whenever possible: 100% of our
            ground beef comes from right here in Glennville, Georgia!
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          Customer satisfaction becomes: Our restaurant strives to become our
          customer’s favorite place to eat and drink. Teamwork and trust become:
          We provide support for our employees and encourage them to make their
          own decisions. Sustainability becomes: We always source ingredients
          from sustainable, local suppliers.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
