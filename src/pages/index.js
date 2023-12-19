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

const IndexPage = ({ location }) => {
    const [darkMode, setDarkMode] = React.useState(false)
    const toggleDarkMode = () => {
        setDarkMode(prev => !prev)
    }
    return (
    <div className={darkMode ? 'app dark' : 'app'}>
        <Layout location={location}>
            <StyledMainContainer className="fillHeight">

                <Hero/>

                    <button onClick={toggleDarkMode}>
                        toggle dark mode
                    </button>

                <About/>
                <Education/>
                <Featured/>
                <Projects/>
                <Jobs/>
                <Contact/>
            </StyledMainContainer>
        </Layout>
    </div>
)};


IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
