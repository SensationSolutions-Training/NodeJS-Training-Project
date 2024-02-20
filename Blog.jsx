import { useNavigate } from "react-router-dom"

const Blog = () => {
    const navigation = useNavigate()
    const handleButtonClick = () => {
        navigation("/")
    }
    return(
     <div>
        <h3 className="section">This is Blog</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non provident temporibus est, nemo officia aspernatur deleniti deserunt voluptatem ad accusamus quae consequatur repudiandae ipsam! Earum nam pariatur reprehenderit quo aspernatur!</p>
        <button onClick={handleButtonClick}>Back page</button>
     </div>
    )
}
export default Blog