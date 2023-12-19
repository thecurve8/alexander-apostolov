import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
    const data = useStaticQuery(graphql`
    query {
        file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me_serious.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 500, placeholder: TRACED_SVG)
            }
        }
    }
    `);

    const revealContainer = useRef(null);

    useEffect(() => {
        sr.reveal(revealContainer.current, srConfig());
    }, []);

    const skills = ['Machine Learning Optimization', 'Computer vision', 'NLP', 'Python', 'Statistical methods'];

    return (
        <StyledAboutSection id="about" ref={revealContainer}>
            <h2 className="numbered-heading">About Me</h2>

            <div className="inner">
                <StyledText>
                    <div>
                        <p>
                            Hello! I'm Alexander, a recent graduate from the Data Science Master from <a href="https://www.epfl.ch/en/">EPFL</a> that I completed with the generous support of the <a href="https://www.epfl.ch/education/studies/en/financing-study/grants/excellence-fellowships/">
                            EPFL Excellence Fellowship</a> and for which I was awarded the prize for the best GPA among all graduating students.
                        </p>

                        <p>
                            I enjoy discovering new advances in the field of Data Science, Machine Learning and Algorithms.
                            My goal is to understand state-of-the-art technologies and apply them to domains important to me such as medicine,
                            the environment and social equalities.
                        </p>

                        <p>
			    After getting my Master I started working as a Data Scientist for <a href="https://bridgebio.com/">
                            BridgeBio</a> for a collaboration project with Stanford.
                            Previously, I have worked at the <a href="https://www.rolex.com/en">Rolex</a>, the <a href="https://www.oracle.com/">Oracle</a>, and the <a href="https://www.icrc.org/en">
                            International Committee of the Red Cross</a> where I applied my academical knowledge
                            in the various field with teams of various size and colleagues with different backgrounds.
                            I have language skills and international experience that tell I can take
                            assignments in different environments.
                        </p>

                        <p>Here are a few technologies I've been working with recently:</p>
                    </div>

                    <ul className="skills-list">
                        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                </StyledText>

                <StyledPic>
                    <div className="wrapper">
                        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="Avatar" className="img" />
                    </div>
                </StyledPic>
            </div>
        </StyledAboutSection>
    );
};

export default About;
