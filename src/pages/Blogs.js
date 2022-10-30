import BrickHouse from './HousePhotos/BrickHouse.jpg';
import RedHouse from './HousePhotos/RedHouse.jpg';
import WhiteHouse from './HousePhotos/WhiteHouse.jpg';
import WoodHouse from './HousePhotos/WoodHouse.jpg';
import "./Blog.css";
const Blogs = () => {
    return (
        <> 
            <h1>Listings</h1>
            <div className='housePhotos'>
                <img src={BrickHouse} alt="Brick" />
                <img src={RedHouse} alt="Red" />
            </div>
            <div className='houseinfo'>
                <div className='house1info'>
                    <p>$592,000<br/>4bds | 3 ba | 3,045 sqft-House for sale<br/>1234 Blue Circle, Pawnee, IN, 74058</p>
                    
                    <a class Name="button" href='http://localhost:3000/contact'>Contact</a>
                </div>
                <div className='house2info'>
                    <p>$438,000<br/>2bds | 2 ba | 2,121 sqft-House for sale<br/>742 Evergreen Terrace, Springfield, Oregon, 97403</p>
                    <a class Name="button" href='http://localhost:3000/contact'>Contact</a>
                </div>
            </div>
            <div className='housePhotos'>
                <img src={WhiteHouse} alt="White" />
                <img src={WoodHouse} alt="Red" />
            </div>
            <div className='houseinfo'>
                <div className='house1info'>
                    <p>$592,000<br/>4bds | 3 ba | 3,045 sqft-House for sale<br/>1234 Blue Circle, Pawnee, IN, 74058</p>
                    
                    <a class Name="button" href='http://localhost:3000/contact'>Contact</a>
                </div>
                <div className='house2info'>
                    <p>$438,000<br/>2bds | 2 ba | 2,121 sqft-House for sale<br/>742 Evergreen Terrace, Springfield, Oregon, 97403</p>
                    <a class Name="button" href='http://localhost:3000/contact'>Contact</a>
                </div>
            </div>

            <footer className='footer'>
                <p>Griffin Cropper Adam Rencher gcropper17</p>
            </footer>

            
        </>
    );
  };
  
  export default Blogs;