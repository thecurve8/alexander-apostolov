import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About } from '@components';
//, Education, Jobs, Featured, Projects, Contact

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
    <Layout location={location}>
      <StyledMainContainer className="fillHeight">
        <Hero />
        <About />

      </StyledMainContainer>
    </Layout>
);

/*
        <About />
        <Education />
        <Featured />
        <Projects />
        <Jobs />
        <Contact />
 */

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
