import React from "react";
import { Button } from "../../GlobalStyles";
import {
  HeroContainer,
  HeroContent,
  HeroContentText,
  HeroTitle,
  HeroTitleText,
  HeroSubTitle,
  HeroText,
  HeroBtn,
} from "./Hero.styles";

function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroContentText>
          <HeroTitle>
            <HeroTitleText>Healthy and Spicy</HeroTitleText>
            <HeroTitleText>Meals All Day</HeroTitleText>
          </HeroTitle>
          <HeroSubTitle>For a longer Life</HeroSubTitle>
          <HeroText>
            Get a fresh and tasty recepies that are well balanced and will
            improve your wellness, plus add nutrients to your body.
          </HeroText>
          <HeroBtn to="/order-now">
            <Button primary big bigFont bigRadius>
              Pick your meals
            </Button>
          </HeroBtn>
        </HeroContentText>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
