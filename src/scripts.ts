// eslint-disable-next-line import/extensions,import/no-unresolved
import shows from './shows';

// Get an array of all titles
const showsTitles = shows.map((show) => show.title);
console.log('Show titles:', showsTitles);

// Get an array of ids
const showsIds = shows.map((show) => show.id);
console.log('Show ids:', showsIds);

// Get an array of ratings
const showsRatings = shows.map((show) => show.ratingDetails.rating);
console.log('Show ratings:', showsRatings);

// Get an array of ratings rounded to 2 decimal places
const showsRatingsRounded = shows.map((show) => (
  show.ratingDetails.rating.toFixed(2)));
console.log('Show ratings rounded to 2 decimal places:', showsRatingsRounded);

// Capitalise all genres
const showsGenresCapitalised = shows.map((show) => (
  {
    ...show,
    genres: show.genres.map((genre) => genre.toUpperCase()),
  }));
console.log('Shows with genres to uppercase:', showsGenresCapitalised);

// Double all ratingDetails.count
const showsRatingsCountDouble = shows.map((show) => (
  {
    ...show,
    ratingDetails: {
      ...show.ratingDetails,
      count: show.ratingDetails.count * 2,
    },
  }));
console.log('Shows with ratings count doubled:', showsRatingsCountDouble);

// Round all ratings to 2 decimal places
const showsWithRatingsRounded = shows.map((show) => (
  {
    ...show,
    ratingDetails: {
      ...show.ratingDetails,
      rating: show.ratingDetails.rating.toFixed(2),
    },
  }));
console.log('Shows with ratings rounded to 2 decimal places:', showsWithRatingsRounded);

// map() each object to only have id, title, description
const showsWithOnlyIdTitleDescription = shows.map((show) => (
  {
    id: show.id,
    title: show.title,
    description: show.description,
  }
));
console.log('Shows with only have id, title, descriptions:', showsWithOnlyIdTitleDescription);

// If id === 1, change rating to 9.9999
const showsWithUpdatedRating = shows.map((show) => (
  show.id === 1
    ? {
      ...show,
      ratingDetails: {
        ...show.ratingDetails,
        rating: 9.9999,
      },
    }
    : show
));
console.log('Shows with id: 1 rating updated to 9.9999:', showsWithUpdatedRating);

// f id === 2, change rating to 8 and add + 1 to rating count
const showsWithUpdatedRatingAndCount = shows.map((show) => (
  show.id === 2
    ? {
      ...show,
      ratingDetails: {
        rating: 8,
        count: show.ratingDetails.count + 1,
      },
    }
    : show
));
console.log('Shows with id: 2 rating updated to 8 and count + 1:', showsWithUpdatedRatingAndCount);
