# Telling the story of rabies elimination on Pemba Island

Scott Pen Award Project  

working draft js: [https://rabiesresearch.github.io/pemba_story/](https://rabiesresearch.github.io/pemba_story/)  

working draft rmd: [https://rabiesresearch.github.io/pemba_story/index_rmd.html](https://rabiesresearch.github.io/pemba_story/index_rmd.html)

## Workflow

This repository was set up using [the pudding's starter repo](https://github.com/the-pudding/starter) with a few modifications to deal with recent updates to node (see [this commit](https://github.com/RabiesResearch/pemba_story/commit/3f1c52239f54a780365c79f5675c904f3e392e3f#diff-bfb4e5827737b96cacc22269cd7d9b4c9076ac3094e98cbcef9075a018854bec) for bug fix which we might run into again).

You need to have node and npm installed to get this set up (i.e. `brew install node`).

After cloning the repo run `npm start` to fire up the project server. `control + c` to stop.

Any changes to the `src/` folder will trigger live reload.

### HTML

**Where it goes:** `src/html/partials/story/`.

The main HTML file is `src/html/index.hbs`. Generally speaking, You should mostly just include new partials in there and not modify too much of it since there are a bunch of presets.

Partials are not automatically included. You must add them to `index.hbs`. If you created a new file `content.hbs` it would be referenced as `{{> story/content }}`.

### Metadata

Fill out `data/meta.json`

### Copy

We use [ArchieML](http://archieml.org) as a micro CMS using [this google doc](https://docs.google.com/document/d/1NZQ27a-3-CEMkO6rpZfNhO_tvEVSbZWTOah-nsq-mTs/edit#heading=h.u2icduwse9en). 

Running `npm run doc` at any point (even in new tab while server is running) will pull down the latest, and output a file `data/doc.json`.

You can now reference the JSON in your HTML, namespaced by `doc` (eg. `<p>{{doc.explanation}}</p>`).

### SVG Icons

There is a directory called `svg` in the root of project, it contains a bunch of [icons](https://feathericons.com/). To include them in the HTML, simply do this:

`<img inline src='arrow-left.svg'>`

This way you can drop in svg icons anywhere in your HTML code whilst keeping it uncluttered.

### JavaScript

**Where it goes:** `src/js/`

Take a look at `main.js`. This is the kickoff file, the only one included and run automatically.

Then take a look at `graphic.js`, it has some basic skeleton stuff setup for you. This is imported and called from `main.js` once on load, and subsequently on a debounced resize event. I recommend putting your code in here. If you want to create more files, I recommending doing that in `graphic.js`, but remember they won't be executed until you import them.

[D3](https://d3js.org/) is included globally by default. For any other libraries, it is recommend that you use `npm` to install and import them. You can also do it the vanilla way by including them in the `src/assets` folder and putting a script tag in the HTML.

The JavaScript is transpiled from ES6, and uses Parcel to bundle into a single file. That means each file creates its own closure, so a "global" variable is scoped to a file unless you declare it as `window.variable = ....`.

### Installing Libraries

**NPM way**:
`npm install [name] --save`.
Usage: (see library docs, but usually) `import [library] from '[library]'`

**Old school**:
Put JS file in the `src/assets/scripts` directory.
Usage: reference in the `index.hbs` file `<script src='assets/scripts/[name].js'></script>`

### Helper Functions

In the folder `src/js/utils` there a are a bunch of handy helper JS functions.

- `dom.js`: Super minimial wrapper on basic vanilla dom selection for convenience and cross-browser.
- `is-mobile.js`: Device sniffing to detect if on mobile hardware.
- `load-image.js`: Async image loading to detect when image completely loaded.
- `locate.js`: Estimate user location via ip address.
- `truncate.js`: Truncate string with options to break on space and add ellipses.
- `url-parameter.js`: Get and set the paremeters of the URL in address bar.
- `lookup-state-name.js`: Get state name from state abbrevation.
- `lookup-state-abbr.js`: Get state abbrevation from state name.
- `tracker.js`: Fire simple GA tracking on events.

To use these, at the top of your `.js` file, include
`import functionName from './utils/useful-thing.js'`

If there is only one exported function, you can use it in your file with just `functionName()`. Otherwise, you'll need `functionName.specificFunction()`.

## CSS

**Where it goes:** `src/css/story/`.

There is a file for you to start off with, `story.styl`. You can create as many files as you want in this directory, they are automatically included. _Note: You must restart the server when you create a new stylus file._

Checkout some of the auto-included files in `src/css/utils/` (`variables.styl`, `helpers.styl`, `presets.styl`). You can modify these, especially `variables.styl`.

###  Fonts

TO DO: SET UP EXAMPLE

### Assets

Put everything (images, audio, data, etc) in `src/assets/`.

When deployed, assets paths will remain relative. _However_, you'll notice that in `index.hbs` there is a line like `<script src='{{basepath}}assets/scripts/d3.v5.9.1.min.js'></script>`. `basepath` here switches from nothing in local development, to `https://pudding.cool/` in production. We have a common assets folder for stuff like (which also occurs with fonts). If you need to use this project for a non-Pudding one, make sure to update the `data.basepath` variable in `scripts/html.js`.

TO DO: take this bit out if final hosting will be on github pages. 

### Deploy

Run `npm run deploy`

This generates a single html file with inlined css, a single js file, and a folder with assets in the `dist` folder. It also will automatically optimize jpg and png files in the folders `assets/social` and `assets/images`.

### Github Pages

Run `make github` (make sure you've enabled github pages in your repo settings to pull from `docs`).

### Rmarkdown

We can also work in Rmarkdown see [rmd_draft/working.Rmd](rmd_draft/working.Rmd), using the [`rchie`](https://github.com/noamross/rchie) package to pull in our copy from the google doc. To preview, in R run [`source("R/knit_to_ghpages.R))`](R/knit_to_ghpages.R).  

# Tips from the Pudding readme

Here are some best practices to follow to increase the likelihood that the story doesn't break in the near future.

- When possible, host assets locally. Put things like images and audio in your project rather than loading from a third party.
- Don't rely on externally hosted scripts. If you are using a library, use `npm` or self-host in favor of externally hosted scripts.
