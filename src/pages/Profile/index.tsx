import React from "react";
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

const Profile: React.FC = () => {
  const TabContent: React.FC = () => {
    return (
      <div className="content">
        <RepoIcon />
        <span className="label">Repositories</span>
        <span className="number">21</span>
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
            username={"andersonpgs"}
            name={"Anderson Paiva"}
            avatarUrl={"https://avatars.githubusercontent.com/u/57535111?v=4"}
            followers={15}
            following={1}
            company={"EmpreenDev"}
            location={"Bahia - Brazil"}
            email={"andersonpgs.contato@hotmail.com"}
            blog={"linkedin.com/in/andersonpgs"}
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
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"andersonpgs"}
                  reponame={"discord-clone"}
                  description={"A discord clone created in React JS"}
                  language={n % 3 === 0 ? "JavaScript" : "TypeScript"}
                  stars={8}
                  forks={4}
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
