import React from "react";
// import Form from "./components/Form";
import Preview from "./components/Preview";
// import "./styles/App.css";
// import FormSection from "./components/FormSection";
import Form from "./components/Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isPreview: false,
      data: {
        general: {
          name: "Tiago Heras",
          picture: '',
          role: "Front-end Developer",
          email: "tiagoheras@hotmail.com",
          phone: 1234567890,
          address: "123 Fake St",
          birthday: '',
          description: "I am a software engineer with a passion for building things that people love to use. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis molestie ipsum, ac suscipit est suscipit et. Sed ac urna euismod, varius felis eu, malesuada sem. Donec nisl risus, gravida id venenatis a, elementum nec augue. Quisque vel varius diam. Suspendisse lobortis porttitor mattis."
        },
        education: [
          {
            school: "Caltech",
            degree: "Bachelor of Science",
            from: 2022,
            to: 2027
          },
          {
            school: "University of California, Berkeley",
            degree: "Bachelor of Science",
            from: 2022,
            to: 2027
          },
        ],
        experience: [
          {
            company: "Amazon",
            position: "Software Engineer",
            from: 2016,
            to: 2018,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis molestie ipsum, ac suscipit est suscipit."
          },
          {
            company: "Google",
            position: "CEO",
            from: 2018,
            to: 2020,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis molestie ipsum, ac suscipit est suscipit."
          }
        ],
        skills: [
          {
            name: "HTML",
            level: 1
          },
          {
            name: "CSS",
            level: 1
          },
        ],
      }
    }

    this.toggleView = this.toggleView.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  toggleView = () => {
    this.setState({
      isPreview: !this.state.isPreview,
    })
  }

  handleChange = (e, type, itemIndex) => {
    console.log(itemIndex);
    const { name, value } = e.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [type]: prevState.data[type] instanceof Array ? prevState.data[type].map((item, index) => {
          if (itemIndex === index) {
            return {
              ...item,
              [name]: value,
            }
          }
          return item;
        }) : {
          ...prevState.data[type],
          [name]: value
        }
      }
    }))
  }

  handleAddItem = (e, type) => {
    e.preventDefault();
    let newItem = {};
    if (type === 'experience') {
      newItem = { company: '', position: '', from: '', to: '', description: '' }
    } else if (type === 'education') {
      newItem = { school: '', degree: '', from: '', to: '' }
    }
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [type]: [...prevState.data[type], newItem]
      }
    }))
  }

  handleRemoveItem = (e, type, item) => {
    e.preventDefault();
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [type]: prevState.data[type].filter(prevItem => prevItem !== item)
      }
    }))
  }

  render() {
    return (
      <div className="font-inter">
        <button className="bg-indigo-500 rounded-md px-2 py-1 text-gray-100" onClick={this.toggleView}>{this.state.isPreview ? 'Edit' : 'Preview'}</button>
        {
          this.state.isPreview ? <Preview data={this.state.data} /> :
            <Form
              data={this.state.data}
              handleChange={this.handleChange}
              handleRemoveItem={this.handleRemoveItem}
              handleAddItem={this.handleAddItem}
            />
        }

      </div>
    )
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <input type="checkbox" onChange={this.toggleView} />

  //       {this.state.isEdit ? <Form
  //         handleGeneralChange={this.handleGeneralChange}
  //         handleItemChange={this.handleItemChange}
  //         handleAddItem={this.handleAddItem}
  //         handleRemoveItem={this.handleRemoveItem}
  //         data={this.state.data}
  //       /> : <Preview data={this.state.data} />
  //       }
  //     </div>
  //   );
  // }
}

export default App;
