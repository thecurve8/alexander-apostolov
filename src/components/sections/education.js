import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Icon } from '@components/icons';

const StyledEducation = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .education-content {
      grid-column: 4 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }

    .education-relevant-courses {
      justify-content: flex-end;

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 0 5px 10px;
        }
      }      
    }
    .education-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .education-content {
    position: relative;
    grid-column: 1 / -4;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .education-overline {
    margin: 10px 0;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .education-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);



    @media (max-width: 768px) {
      color: var(--white);
    }

    a {
        ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .education-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
        color: var(--green)
    }
  }
  .education-years {
    color: var(--light-slate);
    font-size: var(--fz-s);
    @media (min-width: 768px) {
      margin: 0 0 20px;
    }
  }
  .education-relevant-courses-title {
    padding-top: 25px;
    color: var(--light-slate);
  }
  .education-relevant-courses {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 10px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-slate);
      }

      
    }
  }

  .education-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      width: 100%;
      background-color: var(--green);
      border-radius: var(--border-radius);
      vertical-align: middle;

      &:hover,
      &:focus {
        background: transparent;

        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--navy);
        mix-blend-mode: screen;
      }
    }

    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);

      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(80%);
      }
    }
  }
`;



const StyledTabContent = styled.div`
  width: 100%;
  height: auto;
  padding-top: 10px;
  padding-left: 30px;

  @media (max-width: 768px) {
    padding-left: 20px;
  }
  @media (max-width: 600px) {
    padding-left: 0;
  }

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 5px;
    font-size: var(--fz-xxl);
    font-weight: 500;

    .company {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 30px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

const Education = () => {
    const data = useStaticQuery(graphql`
    query {
      education: allMarkdownRemark(
        filter: {
            fileAbsolutePath: { regex: "/education/" }
            frontmatter: { showInEducation: { ne: false } }
          }
        sort: { fields: [frontmatter___start_year], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              start_year
              end_year
              finished
              title
              institution
              institution_link
              relevant_courses
              external
            }
            html
          }
        }
      }
    }
  `);

    const educationChunk = data.education.edges.filter(({ node }) => node);

    const revealTitle = useRef(null);
    const revealProjects = useRef([]);


    useEffect(() => {
        sr.reveal(revealTitle.current, srConfig());
        revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
    }, []);

    return (
        <section id="education">
            <h2 className="numbered-heading" ref={revealTitle}>
                Education curriculum
            </h2>

            <div>
                {educationChunk &&
                educationChunk.map(({ node }, i) => {
                    const { frontmatter, html } = node;
                    const { start_year, end_year, finished, title, institution, institution_link, relevant_courses, external} = frontmatter;

                    return (
                        <StyledEducation key={i} ref={el => (revealProjects.current[i] = el)}>
                            <div className="education-content">
                                <h3 className="education-title">{title} at <a href={institution_link}>{institution}</a></h3>
                                <div className="education-years">
                                    {finished && (
                                        <h3 >{start_year} - {end_year}</h3>
                                    )}
                                    {!finished && (
                                        <h3 >{start_year} - now (exp. {end_year})</h3>
                                    )}
                                </div>

                                <div className="education-description" dangerouslySetInnerHTML={{ __html: html }} />

                                {relevant_courses && relevant_courses.length && (
                                    <div>
                                        <h3 className="education-relevant-courses-title">Relevent courses</h3>
                                        <ul className="education-relevant-courses">
                                            {relevant_courses.map((relevant_courses, i) => (
                                                <li key={i}>{relevant_courses}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="education-links">
                                    {external && (
                                        <a href={external} aria-label="External Link" className="external">
                                            <Icon name="External" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </StyledEducation>
                    );
                })}
            </div>
        </section>
    );
};

export default Education;
