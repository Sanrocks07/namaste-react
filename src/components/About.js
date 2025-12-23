import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React</h2>
      <User name={"Sanchit Pillai"} />
      <UserClass name={"Sanchit Pillai2"} location={"Delhi class"}/>
    </div>
  );
};

export default About;
