import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { APIRepo, APIUser } from "../../@types";
import ProfileData from "../../components/ProfileData";
import RandomCalendar from "../../components/RandomCalendar";
import RepoCard from "../../components/RepoCard";
import {
  CalendarHeading,
  Container,
  LeftSide,
  Main,
  RepoIcon,
  Repos,
  RightSide,
  Tab,
} from "./styles";

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const Profile: React.FC = () => {
  const { username = "andersonpgs" } = useParams();
  const [data, setData] = useState<Data>();

  const { data: user, isFetching } = useQuery(
    ["user", username],
    async () => {
      const userResponse = await axios
        .get(`https://api.github.com/users/${username}`)
        .catch((error) => {
          if (error.response) {
            setData({ error: "User not found" });
          }
        });
      const reposResponse = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );

      const user = userResponse?.data;
      const repos = reposResponse.data;

      const shuffledRepos = repos.sort(() => 0.5 - Math.random());
      const slicedRepos = shuffledRepos.slice(0, 6);

      setData({
        user,
        repos: slicedRepos,
      });
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 10000,
    }
  );

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (isFetching) {
    return <h1>Loading...</h1>;
  }

  const TabContent: React.FC = () => {
    return (
      <div className="content">
        <RepoIcon />
        <span className="label">Repositories</span>
        <span className="number">{data?.user?.public_repos}</span>
      </div>
    );
  };

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        <span className="line" />
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData
            username={data?.user?.login ?? ""}
            name={data?.user?.name ?? ""}
            avatarUrl={data?.user?.avatar_url ?? ""}
            followers={data?.user?.followers ?? 0}
            following={data?.user?.following ?? 0}
            company={data?.user?.company}
            location={data?.user?.location}
            email={data?.user?.email}
            blog={data?.user?.blog}
          />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repos>
            <h2>Random Repos</h2>

            <div>
              {data?.repos?.map((repo) => (
                <RepoCard
                  key={repo.name}
                  username={repo.owner.login}
                  reponame={repo.name}
                  description={repo.description}
                  language={repo.language}
                  stars={repo.stargazers_count}
                  forks={repo.forks}
                />
              ))}
            </div>
          </Repos>
          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
