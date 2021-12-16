import React from 'react';
import profilePicture from '../profilepicture.png';

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
        this.generateFileURL(this.props.data.general.picture).then((url) => {
            this.setState({
                imageURL: url,
            })
        }).catch(error => {
            console.log(error);
            this.setState({
                imageURL: profilePicture,
            })
        });
    }

    render() {

        return (
            <div className="preview bg-[#FEDC98]">
                <div className="preview__header">
                    <h1 className="preview__title">Preview</h1>
                </div>
                <div className="cv bg-white mx-auto max-w-[750px] grid grid-cols-5 relative">
                    <div className="profile w-full absolute flex items-center content-center top-8">
                        <div className="picture-container overflow-hidden w-64 h-64 rounded-full border-[15px] bg-white border-[#2A282A] ml-12 z-10">
                            <img src={this.state.imageURL} alt="" />
                        </div>
                        <div className="intro bg-[#FE9C00] right-0 pl-12 w-[63%] absolute text-white py-6 z-0">
                            <h1 className="name">{this.props.data.general.name.toUpperCase()}</h1>
                            <h2 className="role">{this.props.data.general.role.toUpperCase()}</h2>
                        </div>
                    </div>
                    <div className="career col-start-1 col-end-4 mt-72 w-[90%]">
                        <div className="about-me">
                            <h2 className='section-header'>ABOUT ME</h2>
                            <p className='description'>{this.props.data.general.description}</p>
                        </div>
                        <div className="education">
                            <h2 className='section-header'>EDUCATION</h2>
                            <ul>
                                {
                                    this.props.data.education.map(item => {
                                        return (
                                            <li className="education career-item">
                                                <div className="main w-full">
                                                    <p className="time">{item.from} - {item.to} </p>
                                                    <p className="title font-bold">{item.degree} at {item.school}</p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="experience">
                            <h2 className='section-header'>EXPERIENCE</h2>
                            <ul>
                                {
                                    this.props.data.experience.map(item => {
                                        return (
                                            <li className="experience career-item">
                                                <div className="main w-full">
                                                    <p className="time">{item.from} - {item.to} </p>
                                                    <p className="title font-bold">{item.position} at {item.company}</p>
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
                    <div className="other px-10 pt-60 bg-[#2A282A] text-white col-start-4 col-end-6">
                        <div className="contact-me">
                            <h2 className='dark-section-header'>CONTACT ME</h2>
                            <ul className='px-3'>
                                <li>
                                    <i className="far fa-envelope"></i>
                                    <div className="contact-method">
                                        <h3>EMAIL</h3>
                                        <p>{this.props.data.general.email}</p>
                                    </div>
                                </li>
                                <li>
                                    <i className="fas fa-phone-alt"></i>
                                    <div className="contact-method">
                                        <h3>PHONE</h3>
                                        <p>{this.props.data.general.phone}</p>
                                    </div>
                                </li>
                                <li>
                                    <i className="fas fa-birthday-cake"></i>
                                    <div className="contact-method">
                                        <h3>BIRTHDAY</h3>
                                        <p>{this.props.data.general.birthday}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="skills">
                            <h2 className='dark-section-header'>SKILLS</h2>
                            <ul className='p-0 my-6 mx-auto'>
                                {
                                    this.props.data.skills.map(item => {
                                        const endLine = Number(item.level) + 1;
                                        return (
                                            <li className="skill text-center">
                                                <div className="main w-full">
                                                    <p className="title text-sm font-bold my-1">{item.name}</p>
                                                    <div className="level-bar grid grid-cols-10 border-2 border-[#FE9C00] h-4 w-full p-0 text-center">
                                                        <div className='bg-[#FE9C00] h-full col-start-1' style={{gridColumnEnd: endLine}} ></div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="languages">
                            <h2 className='dark-section-header'>LANGUAGES</h2>
                            <ul className='p-0 my-6 mx-auto'>
                                {
                                    this.props.data.languages.map(item => {
                                        return (
                                            <li className="language text-center career-item">
                                                <div className="main w-full">
                                                    <p className="title text-base font-bold my-1">{item.name}: {item.level}</p>
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