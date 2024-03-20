const Page404 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div id="four-o-four">
        <div className="error">
          <div className="number">4</div>
          <div className="illustration">
            <div className="circle"></div>
            <div className="clip">
              <div className="paper">
                <div className="face">
                  <div className="eyes">
                    <div className="eye eye-left"></div>
                    <div className="eye eye-right"></div>
                  </div>
                  <div className="rosyCheeks rosyCheeks-left"></div>
                  <div className="rosyCheeks rosyCheeks-right"></div>
                  <div className="mouth"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="number">4</div>
        </div>
      </div>
      <p className="text-gray-700 my-8 sm:text-xl text-base px-4">
        Oops. The page you're looking for doesn't exist.
      </p>
      <a href="/" className="my-8 px-2 py-1 shadow-black shadow-sm border-2 border-black rounded">
        Go Back!
      </a>
    </div>
  );
};

export default Page404;
