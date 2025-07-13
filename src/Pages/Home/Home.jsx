import React from 'react';
import Banner from '../../Sections/Banner';
import WhyChooseUs from '../../Sections/WhyChooseUs';
import HowItWorks from '../../Sections/HowItWorks';
import FeaturedTasks from '../../Sections/FeaturedTasks';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <FeaturedTasks></FeaturedTasks>
           <WhyChooseUs></WhyChooseUs>
           <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;