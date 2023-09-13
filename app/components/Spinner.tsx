const Spinner = () => {
  return (
    <div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl">
      <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
        <div className="flex justify-center">
          <div
            className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-rose rounded-full"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
          <p className="ml-4 font-[500]"> Loading movies</p>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
