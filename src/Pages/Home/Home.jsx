import React from 'react';
import Banner from '../../Sections/Banner';
import WhyChooseUs from '../../Sections/WhyChooseUs';
import HowItWorks from '../../Sections/HowItWorks';
import FeaturedTasks from '../../Sections/FeaturedTasks';
import TopFreelancer from '../../Sections/TopFreelancer';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <FeaturedTasks></FeaturedTasks>
           <TopFreelancer></TopFreelancer>
           <WhyChooseUs></WhyChooseUs>
           <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;