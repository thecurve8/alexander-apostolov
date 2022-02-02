import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { loaderDelay } from '@utils';

/*
Side component with a transition if on the home page

propTypes
=========
children: PropTypes.node.isRequired
    Children component to be placed in the Side component
isHome: PropTypes.bool
    Whether we are on the home page
orientation: PropTypes.string
    Orientation of the Side element (left or other for right)


 */

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Side = ({ children, isHome, orientation }) => {
    const [isMounted, setIsMounted] = useState(!isHome);

    useEffect(() => {
        if (!isHome) {
            return;
        }
        //sets isMounted var to true after loaderDelay
        const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <StyledSideElement orientation={orientation}>
            <TransitionGroup component={null}>
                {isMounted && (
                    <CSSTransition classNames={isHome ? 'fade' : ''} timeout={isHome ? loaderDelay : 0}>
                        {children}
                    </CSSTransition>
                )}
            </TransitionGroup>
        </StyledSideElement>
    );
};

Side.propTypes = {
    children: PropTypes.node.isRequired,
    isHome: PropTypes.bool,
    orientation: PropTypes.string,
};

export default Side;
