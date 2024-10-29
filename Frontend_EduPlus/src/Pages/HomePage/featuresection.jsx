import React from 'react';
import FeaturesCard from './Components/featurescard'
const FeaturesSection = () => {
  return (
    <section className="features-section">
      <FeaturesCard
        title="Feature One"
        description="This is the description for Feature One uhtiuhgjshgkjshiurtiksunytiueyniguygdrkuhgknjrhygnjkhdgjgjhgosfhgihvitynisutniui yttiytviuyrutybbiuytviu ."
        imageUrl="img1.jpg"
      />
      <br />
      <FeaturesCard
        title="Feature Two"
        description="This is the description for Feature Two."
        imageUrl="img1.jpg"
      />
      <br />
      <FeaturesCard
        title="Feature Three"
        description="This is the description for Feature Three."
        imageUrl="img1.jpg"
      />
    </section>
  );
};
export default FeaturesSection;