# Binge-List

Minimal IMDB clone to browse information on movies and its cast members.

1. Using TMDB apis.

1. Have to copy api config for future reference - `/api.conf`

## Libraries used other than `React` and `Redux`

1. `NextJs`: Provides serverside rendering. Makes routing extremely simple.

2. `semantic-ui-react`: Provides barebone UI components.

## How to run

- To run in `dev` mode:

```bash
npm run dev
```

- To run in `prod` mode:

```bash
npm run build
npm run start
```

## Code Arrangement

1.  You are going to find code in following three dirs:

    - `/pages`
    - `/src`

2.  `/pages` dir:
    This directory houses all the pages that developer wants to display. `NextJs` renders all the files in here create link for each one. The \*URL pattern mimics the directory pattern of the all the files and dirs under `/pages`.
    **E.g.**

    - `test.com` ---> `/pages/index.js`
    - `test.com/movies` ---> `/pages/movies/index.js`
    - `test.com/movies/:slug` ---> `/pages/movies/[slug].js` # dynamic routing in nextJs

3.  `/src` dir: This dir holds all the components required for the project.

    a. `redux`: Holds the code for global store.

    b. `generic`: Exteremly generic code that we are going to use only once, still putting it in separate component will help and so it is here.

    c. `api`: All async api request functions can be found in this dir. For the project we are only making `GET` calls so I've extracted a generic fetch method and reused it for all other requests.

    d. `components`: Contains all the required components.

    - `layout`: used to build a uniform layout for the project. Menubar, Footer and Searchbar is there.
    - `ui`: this dir has all the reusable ui components used throught the projects.
    - `movies`:
      - `detailed.js`: To present movie details at `/movies/:movieId`
      - `catalog/`: Used to put together components used in creating **Movie catalog** page at `/movies`
    - `index/`: Contains all the code for `/`.
      - `inTheater.js`: A small component to showcase **movies in theaters** (preview)
      - `popular.js`: Component used to showcase a pageful **popular** movies, with option to browse all of them.
    - `profile.js`: This component code for profile of an artist.

### Note

> Extensive testing has not been done yet so, there is a chance that the code might break. Also errors from apis are thrown to the console.
