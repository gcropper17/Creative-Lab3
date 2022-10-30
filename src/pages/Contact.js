import "./Contact.css";  
import Women from "./HousePhotos/Women.jpg";
import Man from "./HousePhotos/man.jpg";
const Contact = () => {
  return (
    <>
      <h1>Contact Us!</h1>
      <div className ="agents">
        <p>Jennifer</p>
        <img src={Women} alt="Brick" />
        
      </div>
      <div className ="info">
        <p>(750)-234-9823</p>
        <p>After graduating with a Public Relations major and Business Marketing minor, Jennifer jumped right in to the project management and marketing field. After a few years 
          gaining experience there she transitioned into real estate working with her family. Realizing how much she loved working with people to help buy and sell homes, she 
          realized this would be her life long career. She has been involved not just in real estate in Whatcom County but also helps out within the community. Prior to becoming a
           realtor she coached elementary girls softball and also was a young life leader.</p>
      </div>
      <div className ="agents">
        <p>Brad</p>
        <img src={Man} alt="Brick" />
        
      </div>
      <div className ="info">
        <p>(750)-576-9921</p>
        <p>Brad has a real passion for helping people. He graduated from BYU Idaho with a degree in Exercise Physiology because he wanted to help people become the best they
           could be. While working on his degree, he saw how his brother was making a difference in people s lives. That is what Brad was looking for. He decided to dive head first 
           into real estate to help families realize their dreams of home ownership, and he has never looked back! He is excellent at helping people narrow down what they are 
           looking for and find them the perfect fit for their specific needs. He truly loves what he does, and he is great at it!</p>
      </div>
      <footer className='footer'>
        <p>Griffin Cropper Adam Rencher gcropper17</p>
      </footer>
  
    </>
  )
};  
export default Contact;