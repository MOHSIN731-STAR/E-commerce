import "../index.css";

const Feature = (props) => {
  return (
    <>
      <div onClick={props.nextpage} style={{ cursor: "pointer" }}>
        <div className="transition-transform duration-200 ease-in-out transform hover:scale-95">
          <div className="border box rounded-3xl h-96    p-1 bg-slate-300 j">
            <span className="bg-red-500 text-white rounded m-2">100%</span>
            <div className="grid place-items-center">
              <img
                src={props.image}
                alt=""
                className="w-36  rounded-3xl  bg-slate-400 grid place-items-center"
              />
            </div>
            <div className=" text-center mt-4">
              <span className="text-slate-500 block">{props.title}</span>

              <span className="text-blue-800 block">RS:{props.price}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
