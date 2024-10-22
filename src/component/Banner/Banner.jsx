const Banner = () => {
  return (
    <div className="bg-[url('https://iili.io/2KzId4S.png')] bg-no-repeat bg-cover bg-center min-h-[600px] flex justify-center items-center rounded-xl mt-10 px-3">
      <div className="max-w-[900px] mx-auto text-center space-y-3 text-white">
        <h1 className="font-bold sm:text-5xl text-2xl leading-normal">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="text-lg font-light">
          Welcome to RC, where fresh ingredients and bold flavors come together.
          Enjoy delicious meals crafted with passion for an unforgettable dining
          experience!
        </p>
        <div className="flex justify-center items-center gap-5">
          <button className="btn bg-[#0BE58A] hover:bg-[#0BE58A] hover:text-slate-100 border-none rounded-full px-7">
            Explore Now
          </button>
          <button className="btn bg-transparent border-slate-300 text-slate-50 hover:bg-[#0BE58A] rounded-full px-7">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
