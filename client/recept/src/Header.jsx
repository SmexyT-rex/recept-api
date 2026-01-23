const Header = () => {
  return (
    <>
      <div className="flex w-full sticky top-0 text-black z-1000 ">
        <div
          tabIndex={0}
          className=" collapse glass border-base-300 border m-5 "
        >
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content flex justify-center">
            <input
              type="text"
              placeholder="Medium"
              className="input input-md glass"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
