import { DateTime } from '../node_modules/luxon/src/luxon.js';
import { time } from './queries.js';

const dateInfo = () => {
  const now = DateTime.now();
  time.innerText = now.toLocaleString({
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
};

export default dateInfo;
