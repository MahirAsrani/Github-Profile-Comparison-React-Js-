import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import './Home.css';
import { useDispatch } from 'react-redux';
import { pLoaded } from '../redux/action';
import swal from 'sweetalert';

const Main = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: white;
  background: linear-gradient(#685f8e, #0e365b);
  min-height: 100vh;
  padding: 50px 20px;
  box-sizing: border-box;
`;
const Imge = styled.img`
  height: 250px;
`;
const Search = styled.div`
  min-height: 50px;
  background: white;
  max-width: 500px;
  margin: 10px auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
`;

const Home = () => {
  const [search, setSearch] = useState({
    u1: '',
    u2: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();

  function handleClick() {
    if (search.u1 === '' || search.u2 === '')
      swal(
        'Error, no username entered',
        'both username is required to fetch profile'
      );
    else {
      dispatch(pLoaded(search.u1, search.u2, history));
      history.push(`/cmp/?u1=${search.u1}&u2=${search.u2}`);
    }
  }

  return (
    <Main>
      <Imge src={require('../assets/logo.png')} alt="git-badge" />
      <Search>
        <h5 style={{ color: '#131225', margin: 0 }}>Compare github profiles</h5>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          <input
            className="search"
            type="text"
            placeholder="Github username 1"
            value={search.u1}
            onChange={(e) => setSearch({ ...search, u1: e.target.value })}
          />
          <input
            className="search"
            type="text"
            placeholder="Github username 2"
            value={search.u2}
            onChange={(e) => setSearch({ ...search, u2: e.target.value })}
          />
        </div>
        <div className="search_btn" onClick={() => handleClick()}>
          Compare Now
        </div>
      </Search>
    </Main>
  );
};
export default Home;
