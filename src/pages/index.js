import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Education, Jobs, Featured, Projects, Contact} from '@components';

/*
Index Page component
Main page of the website.

Arguments
=========
location: PropTypes.object.isRequired
    url of the main page i.e '/'
 */

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
    <Layout location={location}>
      <StyledMainContainer className="fillHeight">
        <Hero />
        <About />
        <Education />
        <Featured />
        <Projects />
        <Jobs />
        <Contact />
      </StyledMainContainer>
    </Layout>
);


IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
