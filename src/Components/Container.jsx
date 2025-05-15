const Container = ({ children, extraClasses }) => {
  return (
    <div
      className={`mx-auto max-w-[1440px] px-5 text-white xl:px-[120px] ${extraClasses}`}
    >
      {children}
    </div>
  );
};

export default Container;
