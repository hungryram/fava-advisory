<<<<<<< HEAD
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`);
const slugify = require('slugify');
=======
const { createFilePath } = require("gatsby-source-filesystem");
>>>>>>> 48c41acef19aed3d9d383b7a36198cb363537faa

exports.onCreateNode = async ({node, getNode, actions, store, cache, getCache, createContentDigest }) => {

    const { createNode } = actions;

    const { createNodeField } = actions;
    if(node.internal.type === 'MarkdownRemark') {
       const slug = slugify(`${node.frontmatter.title}`);
       createNodeField({
          node,
          name:  `slug`,
          value: slug
       })
    }
    // Create Remote Image Files for IDX Listing Images

    if(node.internal.type === 'IDX') {
        node.imageData.map(image =>
          createRemoteFileNode({
            url: image.url,
            parentNodeId: node.id,
            store,
            cache,
            getCache,
            createNode,
            createNodeId: id => image._id,
          })
          .catch(err => {
            console.log(`Error fetching remote image -- \n Listing: ${node.location.address.houseNumber}-${node.location.address.streetName} \n Source: ${image.url}`)
          })
        )
      } 

    // Generate Listing Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'listings' && node.base !== '_index.md'){
        const markdownNode = await getNode(node.children[0])
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNode({
            ...markdownNode,
            id: `${node.id}-listing`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Listing',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }

    // Generate Blog Post Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'blog' && node.base !== '_index.md'){
        const markdownNode = await getNode(node.children[0])
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNode({
            ...markdownNode,
            id: `${node.id}-blog`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Blog',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }



    // Generate Legal Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'legal' && node.base !== '_index.md'){
        const markdownNode = await getNode(node.children[0])
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNode({
            ...markdownNode,
            id: `${node.id}-legal`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Legal',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }

    // Generate Offices Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'offices' && node.base !== '_index.md'){
        const markdownNode = await getNode(node.children[0])
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNode({
            ...markdownNode,
            id: `${node.id}-offices`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Office',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }

    // Generate Team Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'team' && node.base !== '_index.md'){
        const markdownNode = await getNode(node.children[0])
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNode({
            ...markdownNode,
            id: `${node.id}-team`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Team',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }

    // Generate Partners Nodes

    if(node.internal.type === 'File' && node.sourceInstanceName === 'partners' && node.base !== '_index.md'){
        const markdownNode = await getNode(node.children[0])
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNode({
            ...markdownNode,
            id: `${node.id}-partners`,
            slug: slug,
            parent: node.id,
            children: [`${markdownNode.id}`],
            internal: {
                type: 'Partner',
                content: JSON.stringify(markdownNode),
                contentDigest: createContentDigest(markdownNode)
            },
        })  
    }

}