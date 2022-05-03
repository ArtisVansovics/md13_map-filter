// eslint-disable-next-line import/extensions,import/no-unresolved
import shows from './shows';

// Get an array of all titles
const showTitles = shows.map((show) => show.title);
console.log('Show titles:', showTitles);

// Get an array of ids
const showIds = shows.map((show) => show.id);
console.log('Show ids:', showIds);

// Get an array of ratings
const showRatings = shows.map((show) => show.ratingDetails.rating);
console.log('Show ratings:', showRatings);

// Get an array of ratings rounded to 2 decimal places
const showRatingsRounded = shows.map((show) => (
  show.ratingDetails.rating.toFixed(2)));
console.log('Show ratings rounded to 2 decimal places:', showRatingsRounded);

// Capitalise all genres
const showGenresCapitalised = shows.map((show) => (
  {
    ...show,
    genres: show.genres.map((genre) => genre.toUpperCase()),
  }));
console.log('Show genres to uppercase:', showGenresCapitalised);
