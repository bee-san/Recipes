import React from 'react'
import { withPrefix } from 'gatsby'
import defaultOptions from './defaults'

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
    let { createLinkInHead } = { ...defaultOptions, ...pluginOptions }

    if (!createLinkInHead) {
        return
    }

    setHeadComponents([
        <link
            key={`gatsby-plugin-advanced-sitemap`}
            rel="sitemap"
            type="application/xml"
            href={withPrefix(`/sitemap.xml`)}
        />,
    ])
}
