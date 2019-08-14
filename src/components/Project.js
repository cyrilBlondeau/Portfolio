import React from 'react';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: this.props.items
    };
  }

  render() {
    console.log(this.state.project)
    return (
      <div id="project">
        <h2>Projet</h2>
      </div>
    );
  }

}

export default Project;
