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

// If rating > 7, change isPopular value to true
const showsThatArePopular = shows.map((show) => (
  show.ratingDetails.rating > 7
    ? {
      ...show,
      isPopular: true,
    }
    : show
));
console.log('If show\'s rating > 7, change isPopular to true:', showsThatArePopular);

// If isPopular === true, change rating to 10
const showsThatArePopularRatingToTen = shows.map((show) => (
  show.isPopular === true
    ? {
      ...show,
      ratingDetails: {
        ...show.ratingDetails,
        rating: 10,
      },
    }
    : show
));
console.log('If show is popular, change its rating to 10:', showsThatArePopularRatingToTen);

// If genres include 'Science-Fiction', change available to true
const showsIncludingScienceFictionUpdateAvailability = shows.map((show) => (
  show.genres.includes('Science-Fiction') === true
    ? {
      ...show,
      available: true,
    }
    : show
));
console.log(
  'If show\'s genres include Science-Fiction, change its availability to true:',
  showsIncludingScienceFictionUpdateAvailability,
);

// If isPopular === true, map() episodes, to be an array of episode ids
// else make episodes an empty []
const showsGetPopularEpisodeIds = shows.map((show) => (
  show.isPopular === true
    ? {
      ...show,
      episodes: show.episodes.map((episode) => episode.id),
    }
    : {
      ...show,
      episodes: [],
    }
));
console.log(
  'If show is popular, map its episodes to an array of episode ids:',
  showsGetPopularEpisodeIds,
);

// Get an array of all possible genres (not [['', ''], ['']] but ['', '', ''])
const showsGetAllGenres = [...new Set(
  shows.flatMap((show) => (
    show.genres
  )),
)];
// [...new Set(array)] ==> array with only unique values!
console.log(
  'All possible show genres in a string array:',
  showsGetAllGenres,
);
