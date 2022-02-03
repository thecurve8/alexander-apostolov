const webpack = require('./webpack.config.js');
const config = require('./src/config');
const siteUrl = 'https://alexander-apostolov.com' // No trailing slash allowed!

module.exports = {
    //common pieces of data that can be reused across the website
    siteMetadata: {
        title: 'Alexander Apostolov',
        description:
            'Alexander Apostolov is a Data Science Master student from EPFL.',
        siteUrl: siteUrl,
        image: '/demo.png',
        twitterUsername: '@Alex_Apostolov_',
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, // Needed for dynamic images
        //manifest needs to be before offline!
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Alexander Apostolov`,
                short_name: `A. Apostolov`,
                start_url: `/`,
                icon: `src/images/icon.svg`,
                description: "Alexander Apostolov - personal website",
                background_color: `#0a192f`,
                theme_color: `#0a192f`,
                display: `standalone`,
            },
        },
        `gatsby-plugin-offline`,
        'gatsby-plugin-robots-txt',
        "gatsby-plugin-sitemap",
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
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: `${__dirname}/content/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/content/posts`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/content/projects`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        /*
                         https://www.gatsbyjs.org/packages/gatsby-remark-external-links
                         Adds the target and rel attributes to external links in markdown
                         */
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_blank',
                            rel: 'nofollow noopener noreferrer',
                        },
                    },
                    {
                        /*
                         https://www.gatsbyjs.org/packages/gatsby-remark-images
                         Processes images in markdown so they can be used in the production build.
                         */
                        resolve: 'gatsby-remark-images',
                        options: {
                            /*
                             It's important to specify the maxWidth (in pixels) of
                             the content container as this plugin uses this as the
                             base for generating different widths of each image.
                             */
                            maxWidth: 700,
                            /*
                             Add a link to each image to the original image.
                             Sometimes people want to see a full-sized version of an image
                             e.g. to see extra detail on a part of the image and
                             this is a convenient and common pattern for enabling this.
                             Set this option to false to disable this behavior.
                             */
                            linkImagesToOriginal: true,
                            quality: 90,
                            tracedSVG: { color: config.colors.green },
                        },
                    },
                    {
                        /*
                        https://www.gatsbyjs.org/packages/gatsby-remark-code-titles/
                        Adds a code title to code snippets
                        IMPORTANT: this must be ahead of other plugins that use code blocks
                         */
                        resolve: 'gatsby-remark-code-titles',
                    },
                    {
                        /*
                         https://www.gatsbyjs.org/packages/gatsby-remark-prismjs
                         Adds syntax highlighting to code blocks in markdown files using PrismJS.
                         */
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            // Class prefix for <pre> tags containing syntax highlighting;
                            // defaults to 'language-' (e.g. <pre class="language-js">).
                            // If your site loads Prism into the browser at runtime,
                            // (e.g. for use with libraries like react-live),
                            // you may use this to prevent Prism from re-processing syntax.
                            // This is an uncommon use-case though;
                            // If you're unsure, it's best to use the default value.
                            classPrefix: 'language-',
                            // This is used to allow setting a language for inline code
                            // (i.e. single backticks) by creating a separator.
                            // This separator is a string and will do no white-space
                            // stripping.
                            // A suggested value for English speakers is the non-ascii
                            // character '›'.
                            inlineCodeMarker: null,
                            // This lets you set up language aliases.  For example,
                            // setting this to '{ sh: "bash" }' will let you use
                            // the language "sh" which will highlight using the
                            // bash highlighter.
                            aliases: {},
                            // This toggles the display of line numbers globally alongside the code.
                            // To use it, add the following line in gatsby-browser.js
                            // right after importing the prism color scheme:
                            //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
                            // Defaults to false.
                            // If you wish to only show line numbers on certain code blocks,
                            // leave false and use the {numberLines: true} syntax below
                            showLineNumbers: false,
                            // If setting this to true, the parser won't handle and highlight inline
                            // code used in markdown i.e. single backtick code like `this`.
                            noInlineHighlight: false,
                            // This adds a new language definition to Prism or extend an already
                            // existing language definition. More details on this option can be
                            // found under the header "Add new language definition or extend an
                            // existing language" below.
                            languageExtensions: [
                                {
                                    language: 'superscript',
                                    extend: 'javascript',
                                    definition: {
                                        superscript_types: /(SuperType)/,
                                    },
                                    insertBefore: {
                                        function: {
                                            superscript_keywords: /(superif|superelse)/,
                                        },
                                    },
                                },
                            ],
                            // Customize the prompt used in shell output
                            // Values below are default
                            prompt: {
                                user: 'root',
                                host: 'localhost',
                                global: false,
                            },
                        },
                    },
                ],
            },
        },
    ]
}