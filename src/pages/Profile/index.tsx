import React from "react";
import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import { Container, LeftSide, Main, Repos, RightSide } from "./styles";

const Profile: React.FC = () => {
  return (
    <Container>
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
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
