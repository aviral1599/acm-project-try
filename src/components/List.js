import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import {
    Card, CardImg, CardText,CardLink,CardHeader, CardBody,
    CardTitle, CardSubtitle, Button, CardFooter
  } from 'reactstrap';

const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <div class="content">
      {repos.map((repo) => {
        return (
          <div class="card-content">
            <div className="row">
            <div className="col-xs-12 col-md-4 align-self-center" key={repo.id}>
        <Card body inverse style={{ backgroundColor: '#333 ', borderColor: '#EFF3EF' }}>
          <CardHeader style={{ backgroundColor: '#4E4C4C', borderColor: '#EFF3EF' }}>
          <CardTitle class="card-title">
           <p> {repo.flight_number}.&nbsp;{repo.mission_name}</p>
           </CardTitle>
           <CardSubtitle><p>Year: {repo.launch_year}</p></CardSubtitle>
          </CardHeader>
        <img class="card-img-top img-fluid" src={repo.links.mission_patch_small} alt="Card image cap" />
        <CardFooter  style={{ backgroundColor: '#333', borderColor: '#EFF3EF' }}> 
        <CardText><center>
        <CardLink target="_blank" href={repo.links.article_link}>Article</CardLink>
        <CardLink target="_blank" href={repo.links.wikipedia}>Wikipedia</CardLink>
        <CardLink target="_blank" href={repo.links.video_link}>Video</CardLink></center>
        </CardText>
        </CardFooter>
      </Card>

          </div>
          <div className="col-xs-12 col-md-8">
            <div class="detail">
              <div class="detail-text">
              <b><h2 class="head">Details :</h2></b>
        <p>{repo.details}</p>
        <b><h4 class="head">Rocket Info:</h4></b>
        <p><b>Id:</b>&nbsp;&nbsp;{repo.rocket.rocket_id}</p>
        <p><b>Name:</b>&nbsp;&nbsp;{repo.rocket.rocket_name}</p>
        <p><b>Type:</b>&nbsp;&nbsp;{repo.rocket.rocket_type} </p>
        <b><h4 class="head">Launch Site:</h4></b>
        <p><b>Id:</b>&nbsp;&nbsp; {repo.launch_site.site_id}</p>
        <p><b>Name:</b> &nbsp;&nbsp;{repo.launch_site.site_name_long}</p>
        </div>
        </div>
          </div>
          </div>
          </div>
        );
      })}
    </div>
  );
};
export default List;