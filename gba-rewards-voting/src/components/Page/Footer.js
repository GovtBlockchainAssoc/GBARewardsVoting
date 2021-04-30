function Footer() {
   const currentYear = new Date().getFullYear();

    return (
        <div className="Footer">
          <p> Copyright &copy; 2017-<span id='copyright'>{currentYear}</span> Government Blockchain Association · All Rights Reserved</p>
        </div>
      );
}

export default Footer;