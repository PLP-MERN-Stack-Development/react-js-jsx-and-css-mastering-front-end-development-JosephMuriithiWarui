const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-4 mt-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Task Manager. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
