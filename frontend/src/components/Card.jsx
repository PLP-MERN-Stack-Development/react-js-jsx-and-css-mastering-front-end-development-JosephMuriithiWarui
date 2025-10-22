function Card({ children, className }) {
  return (
    <div className={`p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 text-black dark:text-white ${className}`}>
      {children}
    </div>
  );
}

export default Card;
