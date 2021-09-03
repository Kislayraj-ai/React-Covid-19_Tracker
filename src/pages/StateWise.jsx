import 'bootstrap/dist/css/bootstrap.css';
import { Table, Card } from 'react-bootstrap';
import { useFetch } from '../components/use-fetch';
import Loading from '../components/UI/loading';

import SearchForm from '../components/SearchForm/SearchForm';
import { useValue } from '../components/use-contextStore';

const StatesWise = () => {
  const { searchInput } = useValue();

  let {
    data: { statewise },
    loading,
  } = useFetch('https://data.covid19india.org/data.json');

  if (statewise === undefined) statewise = [];

  let stateSearchFilter = [];
  stateSearchFilter = statewise.filter((item) => {
    let { state } = item;
    state = state.toLowerCase();
    if (state.startsWith(searchInput)) return item;
  });

  let PageContent = (
    <Table bordered hover responsive="sm" className="w-100">
      <thead>
        <tr>
          <th>#</th>
          <th>States</th>
          <th>Active</th>
          <th>Confirmed</th>
          <th>TotalRecovered</th>
          <th>TotalDeath</th>
        </tr>
      </thead>
      {stateSearchFilter.map((item, index) => (
        <tbody key={item.statecode} className="tableBody">
          <tr>
            <td>{index}</td>
            <td>{item.state}</td>
            <td>{item.active}</td>
            <td>{item.confirmed}</td>
            <td>{item.recovered}</td>
            <td>{item.deaths}</td>
          </tr>
        </tbody>
      ))}
    </Table>
  );
  if (stateSearchFilter.length < 1)
    PageContent = <h2 className="noMatches">No Item Matched !</h2>;

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <SearchForm />
      <Card className="w-75">{PageContent}</Card>
    </>
  );
};

export default StatesWise;
