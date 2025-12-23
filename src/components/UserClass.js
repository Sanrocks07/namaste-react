import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        avatar_url: "https://dummyimage.com/600x400/000/fff",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sanrocks07");
    const json = await data.json();

    this.setState({ userInfo: json });

    console.log(json);
  }

  render() {
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {name + "2"}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 1234567890</h4>
      </div>
    );
  }
}

export default UserClass;
