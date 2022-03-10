import React from "react";
import { Container, Main, LeftSide, RightSide } from "./styles";

import ProfileData from "../../components/ProfileData";

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
        <RightSide></RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
