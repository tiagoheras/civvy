import React from 'react';
import profilePicture from '../profilepicture.png';
// import "../styles/App.css"

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: '',
        }
        this.generateFileURL = this.generateFileURL.bind(this);
    }

    generateFileURL = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
        });
    }

    componentDidMount() {
        this.generateFileURL(this.props.data.general.picture.file).then((url) => {
            this.setState({
                imageURL: url,
            })
        }).catch(error => {
            this.setState({
                imageURL: profilePicture,
            })
        });
    }

    render() {

        return (
            <div className="preview">
                <div className="preview__header">
                    <h1 className="preview__title">Preview</h1>
                </div>
                <div className="cv">
                    <div className="profile">
                        <div className="picture-container">
                            <img src={this.state.imageURL} alt="" />
                        </div>
                        <div className="intro">
                            <h1 className="name">{this.props.data.general.name.toUpperCase()}</h1>
                            <h2 className="role">{this.props.data.general.role.toUpperCase()}</h2>
                        </div>
                    </div>
                    <div className="career">
                        <div className="about-me">
                            <h2>ABOUT ME</h2>
                            <p>{this.props.data.general.description}</p>
                        </div>
                        <div className="education">
                            <h2>EDUCATION</h2>
                            <ul>
                                {
                                    this.props.data.education.map(item => {
                                        return (
                                            <li className="education">
                                                <div className="main">
                                                    <p className="time">{item.from} - {item.to} </p>
                                                    <p className="title">{item.degree} at {item.school}</p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="experience">
                            <h2>EXPERIENCE</h2>
                            <ul>
                                {
                                    this.props.data.experience.map(item => {
                                        return (
                                            <li className="experience">
                                                <div className="main">
                                                    <p className="time">{item.from} - {item.to} </p>
                                                    <p className="title">{item.position} at {item.company}</p>
                                                </div>
                                                <div className="description-container">
                                                    <p className="description">{item.description}</p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="other">
                        <div className="contact-me">
                            <h2>CONTACT ME</h2>
                            <ul>
                                <li>
                                    <i className="far fa-envelope"></i>
                                    <div className="contact-method">
                                        <h3>EMAIL</h3>
                                        <p>{this.props.data.general.email}</p>
                                    </div>
                                </li>
                                <li>
                                    <i class="fas fa-phone-alt"></i>
                                    <div className="contact-method">
                                        <h3>PHONE</h3>
                                        <p>{this.props.data.general.phone}</p>
                                    </div>
                                </li>
                                <li>
                                    <i class="fas fa-birthday-cake"></i>
                                    <div className="contact-method">
                                        <h3>BIRTHDAY</h3>
                                        <p>{this.props.data.general.birthday}</p>
                                    </div>

                                </li>
                            </ul>
                        </div>
                        <div className="skills">
                            <h2>SKILLS</h2>
                            <ul>
                                {
                                    this.props.data.skills.map(item => {
                                        console.log(item.level)
                                        return (
                                            <li className="skill">
                                                <div className="main">
                                                    <p className="title">{item.name}</p>
                                                    <div className="level-bar">
                                                        <div style={{gridColumn: "1/" + (Number(item.level) + 1)}}></div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Preview;