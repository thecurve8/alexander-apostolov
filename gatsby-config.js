const path = require('path')
const webpack = require('./webpack.config.js');


module.exports = {
    //common pieces of data that can be reused across the website
    siteMetadata: {
        title: 'Alexander Apostolov',
        description:
            'Alexander Apostolov is a Data Science Master student from EPFL.',
        url: 'https://alexander-apostolov.com', // No trailing slash allowed!
        image: '/demo.png',
        twitterUsername: '@Alex_Apostolov_',
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, // Needed for dynamic images
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: webpack.resolve.alias,
                extensions: []
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
    ]
}