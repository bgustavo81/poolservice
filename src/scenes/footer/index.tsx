import Logo from "@/assets/Logo.png";

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
          <div className="mt-16 basis-1/2 md:mt-0">
            <p className="my-5">
              Since 2018 Allgood has been dedicated to providing the Greater Atlanta area premium pool services. 
            </p>
            <p>©Allgood All Rights Reserved.</p>
          </div>
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Customer Support</p>
            <p className="my-5">About Us</p>
            <p>Newsletter</p>
          </div>
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">33 Pryor St NE, Atlanta, GA</p>
            <p>(111)111-1111</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;