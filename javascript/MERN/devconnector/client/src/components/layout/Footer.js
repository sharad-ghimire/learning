import React from 'react';

const Footer = () => {
  return (
    <div>
      <hr />
      <footer className='text-white mt-5 p4 text-center'>
        Copyright &copy; {new Date().getFullYear()} Dev Connector.
      </footer>
    </div>
  );
};

export default Footer;
