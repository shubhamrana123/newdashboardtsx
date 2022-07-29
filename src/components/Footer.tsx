import { flexbox } from "@mui/system";
import { Fragment } from "react";


const Footer = () => {
    return (
        <Fragment>
            <footer className="bg-light text-center text-lg-start">
                
                <div className="text-center p-3" style={{ width:"100%", backgroundColor: "gray", position :"fixed" , bottom:0}}>
                    © 2020 Copyright:
                    <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
               
            </footer>
        </Fragment>
    )

}
export default Footer;