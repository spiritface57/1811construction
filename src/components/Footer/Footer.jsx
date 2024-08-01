import React from 'react';

// Example data structure for the footer
const footerData = {
  logo: '1811Construction',
  contact: {
    address: 'A108 Adam Street, New York, NY 535022',
    phone: '+1 5589 55488 55',
    email: 'info@example.com',
  },
  socialLinks: [
    { icon: 'bi-twitter-x', href: '.' },
    { icon: 'bi-facebook', href: '.' },
    { icon: 'bi-instagram', href: '.' },
    { icon: 'bi-linkedin', href: '.' },
  ],
  usefulLinks: [
    { text: 'Home', href: '.' },
    { text: 'About us', href: '.' },
    { text: 'Services', href: '.' },
    { text: 'Terms of service', href: '.' },
    { text: 'Privacy policy', href: '.' },
  ],
  services: [
    { text: 'Web Design', href: '.' },
    { text: 'Web Development', href: '.' },
    { text: 'Product Management', href: '.' },
    { text: 'Marketing', href: '.' },
    { text: 'Graphic Design', href: '.' },
  ],
  additionalLinks: [
    { text: 'Molestiae accusamus iure', href: '.' },
    { text: 'Excepturi dignissimos', href: '.' },
    { text: 'Suscipit distinctio', href: '.' },
    { text: 'Dilecta', href: '.' },
    { text: 'Sit quas consectetur', href: '.' },
  ],
  moreLinks: [
    { text: 'Ipsam', href: '.' },
    { text: 'Laudantium dolorum', href: '.' },
    { text: 'Dinera', href: '.' },
    { text: 'Trodelas', href: '.' },
    { text: 'Flexo', href: '.' },
  ],
};

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename">{footerData.logo}</span>
            </a>
            <div className="footer-contact pt-3">
              <p>{footerData.contact.address}</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>{footerData.contact.phone}</span>
              </p>
              <p>
                <strong>Email:</strong> <span>{footerData.contact.email}</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              {footerData.socialLinks.map((link, index) => (
                <a href={link.href} key={index}>
                  <i className={`bi ${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              {footerData.usefulLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              {footerData.services.map((service, index) => (
                <li key={index}>
                  <a href={service.href}>{service.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Hic solutasetp</h4>
            <ul>
              {footerData.additionalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Nobis illum</h4>
            <ul>
              {footerData.moreLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{' '}
          <strong className="px-1 sitename">{footerData.logo}</strong>{' '}
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

