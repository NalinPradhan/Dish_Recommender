import CircularNavbar from "../components/spectrumui/circularnavbar";
import FoodRegionQuiz from "./FoodRegionQuiz";

export default function Home() {
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-center z-50">
      <CircularNavbar />
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg mt-24 flex flex-col items-center p-10 w-2xl">
          <FoodRegionQuiz />
        </div>
      </div>
    </div>
  );
}
