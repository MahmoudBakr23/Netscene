import { useContext, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ColorModeContext } from '../utils/ToggleMode';
import { fetchToken } from '../utils';
import { selectGenreOrCategory, searchMovie } from '../features/currentGenreOrCategory';

function useAlan() {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    alanBtn({
      key: 'd7fc6c8a37c6ee5e058e89fcfbc7bc872e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, type, genres, genreOrCategory, query }) => {
        if (command === 'selectGenre') {
          const foundGenre = genres.find((g) => g.name.toLowerCase() === genreOrCategory.toLowerCase());
          if (foundGenre) {
            navigate('/');
            dispatch(selectGenreOrCategory(foundGenre.id));
          } else {
            const category = genreOrCategory.startsWith('top') ? 'top_rated' : genreOrCategory;
            navigate('/');
            dispatch(selectGenreOrCategory(category.id));
          }
        } else if (command === 'changeMode') {
          if (type === 'light') {
            setMode('light');
          } else {
            setMode('dark');
          }
        } else if (command === 'login') {
          fetchToken();
        } else if (command === 'logout') {
          localStorage.clear();
          window.location.href = '/';
        } else if (command === 'search') {
          dispatch(searchMovie(query));
        }
      },
    });
  }, []);
}

export default useAlan;
