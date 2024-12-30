import './Footer.css';
import RoomIcon from '@mui/icons-material/Room';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <>
            <div>
                <div className='About-us'>
                    <div className='About-Text'>
                        <div className="imggg">
                            <img src="https://creativewebo.com/assets/images/SVG/logo.svg" alt="Logo" />
                        </div>
                        <p className='About-us-text'>
                            CreativeWebo is a Mumbai-based digital agency. We are equipped with cutting-edge
                            technologies to empower businesses online. Our solutions ensure a comprehensive
                            digital transformation of your brand. We use multiple channels and proven
                            strategies to provide you with the best-in-class digital solutions.
                        </p>
                        <div className='iconss'>
                            <a href="">
                                <FacebookIcon style={{ fontSize: "40px" }} /> </a>
                            <a href="">
                                <YouTubeIcon style={{ fontSize: "40px" }} /></a>
                            <a href="">
                                <InstagramIcon style={{ fontSize: "40px" }} /></a>
                            <a href="">
                                <LinkedInIcon style={{ fontSize: "40px" }} /></a>

                        </div>
                    </div>
                    <div className='Services'>
                        <div className='Services-text'>
                            <h6 style={{ fontWeight: "bold" }}>Quick Links</h6>
                            <div className='ptag'>
                            <p><a href="">Home</a></p>
                            <p><a href="">Services</a></p>
                            <p><a href="">Solutions</a></p>
                            <p><a href="">Career</a></p>
                            <p><a href="">Case Studies</a></p>
                            <p><a href="">Blog</a></p>
                            <p><a href="">Contact us</a></p>
                            <p><a href="">Sitemap</a></p>
                            </div>
                           
                        </div>
                    </div>
                    <div className='contact-us'>
                        <h6 style={{ fontWeight: "bold", marginBottom: "7%", fontSize: "1.5rem" }}>Mumbai</h6>
                        <p><RoomIcon /> <a href="">1805, Haware Infotech Park, Vashi, Navi Mumbai-400703</a></p>
                        <p><PhoneEnabledIcon /> <a href="">+37060041977</a></p>
                        <p><EmailIcon /> <a href="">jbl@colibrisodm.com</a></p>

                        <h6 style={{ fontWeight: "bold", marginTop: "50px", marginBottom: "20px", fontSize: "1.5rem" }}>Toronto, Canada</h6>
                        <p><PhoneEnabledIcon /> <a href="">+1647-948-9165</a></p>
                        <p><RoomIcon /> <a href="">30 Eglinton West Commercial Center, Mississauga, Ontario 3E7</a></p>

                        <h6 style={{ fontWeight: "bold", marginTop: "50px", marginBottom: "20px", fontSize: "1.5rem" }}>Pune</h6>
                        <p><PhoneEnabledIcon /> <a href="">+919773950809</a></p>
                        <p><RoomIcon /> <a href="">Tupe Patil Road,Amanora Park Town Pune, Maharashtra 411028</a></p>
                    </div>
                    <div className='location'>
                        <h5>Locations</h5>
                        <div>
                            <li><a href="">Mumbai</a></li>
                            <li><a href="">Pune</a></li>
                            <li><a href="">Dubai</a></li>
                            <li><a href="">Toronto</a></li>
                        </div>
                    </div>
                </div>
                <div className="Copyright-footer">
                    <div> 2023 CreativeWebo Private Limited. All rights reserved.</div>
                </div>
            </div>
        </>
    );
}
