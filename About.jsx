import { useNavigate } from "react-router-dom"

const About = ({data}) => {
    const navigation = useNavigate()
    const handleButtonClick = () => {
        navigation("/help");
    };
    return(
        <div className="about-content">
            <h2 className="heading">This is about page {data}</h2>
        <button onClick={handleButtonClick}>Next page</button>   
        </div>
    )

}
export default About