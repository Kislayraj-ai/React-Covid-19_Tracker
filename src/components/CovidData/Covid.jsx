import CovidList from './CovidList';
import { useFetch } from '../use-fetch';
import { useValue } from '../use-contextStore';
import Loading from '../UI/loading';

import 'bootstrap/dist/css/bootstrap.css';
import { Table, Card } from 'react-bootstrap';

const Covid = () => {
  let url = 'https://api.covid19api.com/summary';

  let {
    data: { Countries },
    loading,
  } = useFetch(url);
  if (Countries === undefined) Countries = [];
  const { searchInput } = useValue();

  let newLocal = [];
  newLocal = Countries.filter((item) => {
    let { Country } = item;
    Country = Country.toLowerCase();
    if (Country.startsWith(searchInput)) return item;
  });

  let PageContent;
  PageContent = (
    <Table bordered hover responsive="md">
      <thead>
        <tr>
          <th>#</th>
          <th>Country</th>
          <th>NewConfirmed</th>
          <th>NewRecovered</th>
          <th>NewDeath</th>
          <th>TotalConfirmed</th>
          <th>TotalDeath</th>
        </tr>
      </thead>

      {newLocal.map((item, index) => {
        return <CovidList key={item.id} Index={index + 1} data={item} />;
      })}
    </Table>
  );

  if (newLocal.length < 1)
    PageContent = <h2 className="noMatches">No Item Matched !</h2>;

  if (loading) {
    return <Loading />;
  }

  return <Card className="w-75">{PageContent}</Card>;
};

export default Covid;
