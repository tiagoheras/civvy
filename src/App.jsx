import React from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import "./styles/App.css";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isPreview: false,
      isEdit: true,
      data: {
        general: {},
        experience: [{ company: '', position: '', from: '', until: '' }],
        education: {
          school: '',
          title: '',
          date: '',
        }
      }
    }

    this.handleGeneralChange = this.handleGeneralChange.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleGeneralChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        general: {
          ...prevState.data.general,
          [name]: value
        }
      }
    }))
  }

  handleItemChange = (e) => {
    const { name, value, parentNode } = e.target;
    const grandParentNode = parentNode.parentNode;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        experience: prevState.data.experience.map((item, index) => {
          if (Number(grandParentNode.id) === index) {
            return {
              ...item,
              [name]: value
            }
          }
          return item;
        }
        )
      }
    }))
  }

  handleAddItem = () => {
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        experience: [...prevState.data.experience, { company: '', position: '', from: '', until: '' }]
      }
    }))
  }

  handleRemoveItem = (e) => {
    const grandParentNode = e.target.parentNode.parentNode;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        experience: prevState.data.experience.filter((item, index) => index !== grandParentNode.id)
      }
    }))
  }

  render() {
    if (this.state.isEdit) {
      return (
        <div className="App">
          <Form handleGeneralChange={this.handleGeneralChange} handleItemChange={this.handleItemChange} handleAddItem={this.handleAddItem} data={this.state.data} />
        </div>
      );
    }
    return (
      <div className="App">
        <Preview data={this.state.data} />
      </div>
    );
  }
}

export default App;
