const home_sliders = [
    { 
        title: 'Spider-Man: Across the Universe', 
        image: 'https://image002.modooup.com/wp-content/uploads/2023/08/zG9TYiHt0fdaJiWuNEhFrfKzwoi-scaled.jpg', 
        url: 'https://kokoatv.net/movie/%ec%8a%a4%ed%8c%8c%ec%9d%b4%eb%8d%94%eb%a7%a8-%ec%96%b4%ed%81%ac%eb%a1%9c%ec%8a%a4-%eb%8d%94-%ec%9c%a0%eb%8b%88%eb%b2%84%ec%8a%a4/' 
    },
    { 
        title: '', 
        image: 'https://image002.modooup.com/wp-content/uploads/2021/01/c6Sk9oUhUIFqarwohdjP6h_4fMcGFhHZsS33CpIFhg_Ky70phfHPRvm3iBHdL-g0ZjoEnGxkLzlQMLuOPIQkr-iCJLqSI35om-2_BvxZKAYxt8TxDkb-_VpfOq7Hb6vw0NUpYMzLiLJ4WRztwl7dfw.webp', 
        url: '' 
    },
    
];


const lists = {
    movie: [
        { title: 'Trending Movies', query: 'trending' },
        { title: 'Popular Movies', query: 'popular' },
        { title: 'Top Rated Movies', query: 'top_rated' },
        { title: 'Upcoming Movies', query: 'upcoming' },
        { title: 'Now Playing Movies', query: 'now_playing' },
    ],
    tv: [
        { title: 'Trending TV Shows', query: 'trending' },
        { title: 'Popular TV Shows', query: 'popular' },
        { title: 'Top Rated TV Shows', query: 'top_rated' },
        { title: 'Currently Airing TV Shows', query: 'on_the_air' },
        { title: 'TV Shows Airing Today', query: 'airing_today' },
    ],
};

/**
 * Get list item
 */
export function getListItem (type, query) {
    if (type === 'movie') {
      return lists.movie.find(list => list.query === query);
    } else if (type === 'tv') {
      return lists.tv.find(list => list.query === query);
    }
  };