import img1 from "../assets/google-play-store.png";
import img2 from "../assets/apple-store.png";
import img3 from "../assets/send.png";

const Subscribe = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-between 
    items-center p-4 bg-n-11/25"
    >
      <div className="py-5">
        <label htmlFor="">Subscribe for updates</label>
        <div className="flex items-center  bg-n-7/100">
          <input
            className="outline-none w-[100%] p-3 font-serif text-sm"
            type="text"
            placeholder="Enter your email"
          />
          <img
            className="h-[1.8rem] w-15 object-contain cursor-pointer"
            src={img3}
            alt=""
          />
        </div>
      </div>
      <div className="flex  gap-8">
        {[img1, img2].map((img, idx) => (
          <img
            className="h-[3rem] w-auto cursor-pointer"
            key={idx}
            src={img}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Subscribe;
