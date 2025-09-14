import React from 'react';
import Banner from '../../Sections/Banner';
import WhyChooseUs from '../../Sections/WhyChooseUs';
import HowItWorks from '../../Sections/HowItWorks';
import FeaturedTasks from '../../Sections/FeaturedTasks';
import TopFreelancer from '../../Sections/TopFreelancer';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>TaskNest | Home</title>
        <meta
          name="description"
          content="Welcome to TaskNest, your go-to platform for connecting freelancers with clients. Explore tasks, hire top talent, and grow your freelance career."
        />
            </Helmet>
           <Banner></Banner>
           <FeaturedTasks></FeaturedTasks>
           <TopFreelancer></TopFreelancer>
           <WhyChooseUs></WhyChooseUs>
           <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;