# Yet Another Personal Website

![cicd-webpage](https://github.com/rickchung/rickchung.github.io/actions/workflows/cicd-webpage.yaml/badge.svg)

Personal websites are everywhere. This repository is simply another one.

## Development

### Requirements

* Stack: Node 16, React 18, Next.js 13
* View: Mateiral UI 5, Markdown-to-js

### Architecturue

The website is a static React/Next.js application written in TypeScript. The project follows the classic Next.js structure and includes some custom components:

* [pages](/pages/): Next.js page-based components
* [public](/public/): Next.js static content
* [components](/components/): Custom shared React components
* [lib](/lib/): Custom shared functions
* [sitedata](/sitedata/): Website contents (see "Manage website data" below)

## Operations

### Build and test the website locally

First, install all required packages:

```bash
npm install
```

To test the website locally, use an npm script by

```bash
npm run dev
```

To build and export the website, do

```bash
npm run build
npm run export
```

### Deploy the website ([cicd-webpage.yaml](.github/workflows/cicd-webpage.yaml))

The webpage is deployed to [the Github Pages](https://pages.github.com/) by GitHub Actions in a workflow [cicd-webpage.yaml](.github/workflows/cicd-webpage.yaml). The workflow runs when you push to or open a pull request against the main branch. You may also run the workflow manually as needed.

Note, The production environment, `github-pages`, only allows the main branch to deploy. To deploy the website, make sure all changes are merged into the main branch.

### Manage website data

The website contains only static pages. All website data come from [sitedata](/sitedata/). The data are built into the website by Next.js during the build time (see [Static Site Generation](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)).

Here is a brief catalog of the `sitedata`:

```plaintext
sitedata/
├── about.json          Content on the "About" page
├── appFooter.json      Content in the website footer
├── appToolbar.json     Content in the website toolbar
├── homepage.json       Content on the home page
├── posts               Blog posts and project pages (markdown files)
└── timeline.json       Profile events organized in groups such as "Achievement", "Project"
```

### Add a new blog post or a project description

Along with other static content on the website, blog posts and project descriptions are organized in markdown files under [sitedata/posts](/sitedata/posts/). Each file will produce an individual page during the build time. To add a new post or a project description:

1. Create a new markdown file in [sitedata/posts](/sitedata/posts/)
1. Ensure the filename is in the format `<tag>_<short_post_title>.md`
1. Add a front matter block (see [Front Matter](https://jekyllrb.com/docs/front-matter/)) that includes a `title` and a `tag` (which must be "blog" or "project)
1. Add any markdown content to the file as you wish
1. Build and test the website locally and see if the webpage renders correctly

## References

* Next.js. Create a Next.js App. <https://nextjs.org/learn/basics/create-nextjs-app/setup>
* Material UI. Installation. <https://mui.com/material-ui/getting-started/installation/>
