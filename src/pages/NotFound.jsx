import image from './error.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <Link to="/global">
        <button> Back to Global</button>
      </Link>
      <img src={image} alt="404" />
    </div>
  );
};

export default NotFound;
