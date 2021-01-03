import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import { pLoaded } from '../redux/action';
import { LOADING, PROFILE_LOADED } from '../redux/actionTypes';
import {
  Avatar,
  Backdrop,
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
} from '@material-ui/core';
import './Home.css';
import { GitHub } from '@material-ui/icons';

function Compare() {
  const history = useHistory();
  const params = new URLSearchParams(useLocation().search);
  const { loaded, loading, user1, user2 } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const u1 = params.get('u1');
    const u2 = params.get('u2');

    if (u1 === '' || u2 === '') {
      swal(
        'Error, no username entered',
        'both username is required to fetch profile'
      );
      history.push('/');
    }

    if (!loaded && !loading) {
      dispatch({ type: LOADING });
      dispatch(pLoaded(u1, u2, history));
    }
  }, []);
  return (
    <div className="bg">
      <Backdrop open={loading} style={{ zIndex: 5 }}>
        <CircularProgress size={'4rem'} />
      </Backdrop>

      <Container maxWidth={'lg'} style={{ padding: 20 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6} justify="center" align="center">
            <Paper className="p4 prof">
              <Avatar
                alt={user1.name}
                src={user1.avatar_url}
                style={{ width: 200, height: 200 }}
              />
              <h1>{user1.name}</h1>
              <p>{user1.bio}</p>

              <div className="username_div">
                <a className="middle" target="_blank" href={user1.html_url}>
                  <GitHub style={{ paddingRight: 5 }} />
                  <p>{user1.login}</p>
                </a>
                |
                <div className="middle">
                  <p>
                    <b> Location :</b> {user1.location}
                  </p>
                </div>
              </div>
              <Grid container justify={'space-evenly'} className="row">
                <Grid item xs={3} className="badge_box">
                  <h2>{user1.followers}</h2>
                  <p>Followers</p>
                </Grid>
                <Grid item xs={3} className="badge_box">
                  <h2>{user1.following}</h2>
                  <p>Following</p>
                </Grid>
                <Grid item xs={3} className="badge_box">
                  <h2>{user1.public_repos}</h2>
                  <p>Public Repos</p>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  href={user1.html_url}
                  target="_blank"
                >
                  Follow {user1.name}
                </Button>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} lg={6} justify="center" align="center">
            <Paper className="p4 prof">
              <Avatar
                alt={user2.name}
                src={user2.avatar_url}
                style={{ width: 200, height: 200 }}
              />
              <h1>{user2.name}</h1>
              <p>{user2.bio}</p>

              <div className="username_div">
                <a className="middle" target="_blank" href={user2.html_url}>
                  <GitHub style={{ paddingRight: 5 }} />
                  <p>{user2.login}</p>
                </a>
                |
                <div className="middle">
                  <p>
                    <b> Location :</b> {user2.location}
                  </p>
                </div>
              </div>
              <Grid container justify={'space-evenly'} className="row">
                <Grid item xs={3} className="badge_box">
                  <h2>{user2.followers}</h2>
                  <p>Followers</p>
                </Grid>
                <Grid item xs={3} className="badge_box">
                  <h2>{user2.following}</h2>
                  <p>Following</p>
                </Grid>
                <Grid item xs={3} className="badge_box">
                  <h2>{user2.public_repos}</h2>
                  <p>Public Repos</p>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  href={user2.html_url}
                  target="_blank"
                >
                  Follow {user2.name}
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Compare;
