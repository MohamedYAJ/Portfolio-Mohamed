import globe from "/assets/voyage.png";
import photo from "/assets/image.jpg";

const Home = () => {
  return (
<div className="custom-flex items-center justify-center gap-10 mt-60 px-6">
      <img className="w-[25rem] md:w-[30rem] rounded-4xl" src={photo} alt="code" />

      <p className="text-white text-3xl text-center leading-relaxed">
        Passionné de voyage
        <img
          className="w-9 h-auto inline align-middle mx-1 animate-spin"
          src={globe}
          style={{
            animation: "spin 3s linear infinite",
            "@keyframes spin": {
              from: { transform: "rotate(0deg)" },
              to: { transform: "rotate(360deg)" },
            },
          }}
        />
        qui me <br /> procure un sentiment de liberté, <br /> je retrouve cette sensation <br /> en codant.
      </p>
    </div>
  );
};

export default Home;
