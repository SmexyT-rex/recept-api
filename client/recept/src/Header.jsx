const Header = () => {
  return (
    <>
      <div className="flex w-full sticky top-0 text-black z-1 ">
        <div
          tabIndex={0}
          className=" collapse collapse-arrow glass border-base-300 border m-5"
        >
          <div className="collapse-title flex justify-between font-semibold after:start-5 after:end-auto pe-4 ps-12">
            Menu
          </div>

          <div className="collapse-content flex justify-center">
            <input
              type="text"
              placeholder="Search"
              className="input input-md glass"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

/*<div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
  <div className="collapse-title font-semibold after:start-5 after:end-auto pe-4 ps-12">How do I create an account?</div>
  <div className="collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>*/
