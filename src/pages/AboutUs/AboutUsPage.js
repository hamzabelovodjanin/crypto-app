import React from "react";
import UserCard from "../../components/UserCard/UserCard";

const AboutUsPage = () => {
  return (
    <div className="mt-24 mb-20 flex flex-row justify-evenly items-center min-h-[54vh]">
      <UserCard
        name="Hamza Belovodjanin"
        place="Novi Pazar, Serbia"
        description="Hamza is student of UNINP and he work's in centar NIT"
        git="https://github.com/hamzabelovodjanin"
        gitimage="https://avatars.githubusercontent.com/u/100377045?v=4"
      />
    </div>
  );
};

export default AboutUsPage;
