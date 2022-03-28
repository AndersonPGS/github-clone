import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  Container,
  ForkIcon,
  GithubIcon,
  LinkButton,
  RepoIcon,
  StarIcon,
  Stats,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={"username"} to={"/andersonpgs"}>
          AndersonPGS
        </Link>

        <span>/</span>

        <Link className={"reponame"} to={"/andersonpgs/discord-clone"}>
          discord-clone
        </Link>
      </Breadcrumb>

      <p>My discord clone.</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>8</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/andersonpgs/discord-clone"}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
