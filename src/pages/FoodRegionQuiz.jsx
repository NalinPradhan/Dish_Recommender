import { useState } from "react";
import { MapPin, Star } from "lucide-react";

const FoodRegionQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What's your preferred staple food?",
      options: [
        {
          text: "Rice with dal and curry",
          regions: { south: 3, east: 2, west: 1 },
        },
        {
          text: "Wheat rotis/chapatis with sabzi",
          regions: { north: 3, west: 2, central: 2 },
        },
        {
          text: "Both rice and wheat equally",
          regions: { central: 2, west: 2, north: 1, south: 1 },
        },
        { text: "Fish and rice", regions: { east: 3, south: 2, west: 1 } },
      ],
    },
    {
      id: 2,
      question: "Which cooking medium do you prefer most?",
      options: [
        { text: "Coconut oil", regions: { south: 3, west: 1 } },
        { text: "Mustard oil", regions: { east: 3, north: 1 } },
        {
          text: "Ghee (clarified butter)",
          regions: { north: 3, central: 2, west: 1 },
        },
        {
          text: "Groundnut/Sunflower oil",
          regions: { west: 2, central: 2, south: 1, north: 1 },
        },
      ],
    },
    {
      id: 3,
      question: "What's your spice preference?",
      options: [
        {
          text: "Very spicy with red chilies",
          regions: { south: 3, east: 2, central: 1 },
        },
        {
          text: "Mildly spiced with garam masala",
          regions: { north: 3, central: 2 },
        },
        { text: "Sweet and spicy balance", regions: { west: 3, central: 1 } },
        { text: "Tangy and spicy", regions: { south: 2, west: 2, east: 1 } },
      ],
    },
    {
      id: 4,
      question: "Which breakfast appeals to you most?",
      options: [
        { text: "Idli, dosa, sambar", regions: { south: 3 } },
        { text: "Poha, upma, dhokla", regions: { west: 3, central: 1 } },
        {
          text: "Parathas with curd and pickle",
          regions: { north: 3, central: 1 },
        },
        { text: "Luchi, muri, fish curry", regions: { east: 3 } },
      ],
    },
    {
      id: 5,
      question: "What's your preferred sweet dish?",
      options: [
        { text: "Payasam/Kheer with jaggery", regions: { south: 3, east: 1 } },
        {
          text: "Gulab jamun, laddu",
          regions: { north: 3, central: 2, west: 1 },
        },
        { text: "Rasgulla, sandesh", regions: { east: 3 } },
        { text: "Puran poli, modak", regions: { west: 3, central: 1 } },
      ],
    },
    {
      id: 6,
      question: "Which vegetable preparation do you enjoy most?",
      options: [
        { text: "Sambhar with mixed vegetables", regions: { south: 3 } },
        {
          text: "Dry sabzi with lots of onions",
          regions: { north: 2, west: 2, central: 2 },
        },
        { text: "Fish or meat curry", regions: { east: 3, south: 2, west: 1 } },
        {
          text: "Stuffed vegetables (bharwan)",
          regions: { north: 3, central: 2 },
        },
      ],
    },
    {
      id: 7,
      question: "What's your favorite street food category?",
      options: [
        {
          text: "Chaat (bhel puri, sev puri)",
          regions: { west: 3, north: 2, central: 1 },
        },
        { text: "Vada pav, dosa variants", regions: { west: 2, south: 3 } },
        { text: "Kachori, samosa, tikki", regions: { north: 3, central: 2 } },
        {
          text: "Jhal muri, pani puri",
          regions: { east: 3, west: 1, north: 1 },
        },
      ],
    },
  ];

  const regions = {
    north: {
      name: "North India",

      color: "bg-green-100 ",
      image: "./NorthIndian.jpeg", // Example: North Indian thali
    },
    south: {
      name: "South India",

      color: "bg-green-100 ",
      image: "SouthIndian.jpeg",
    },
    east: {
      name: "East India",

      color: "bg-green-100 ",
      image: "./NorthEast.jpeg",
    },
    west: {
      name: "West India",

      color: "bg-green-100 ",
      image: "./Westindian.jpeg",
    },
    central: {
      name: "Central India",

      color: "bg-green-100 ",
      image: "./CentralIndian.jpeg",
    },
  };

  const handleAnswer = (optionIndex) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (allAnswers) => {
    const scores = { north: 0, south: 0, east: 0, west: 0, central: 0 };

    allAnswers.forEach((answerIndex, questionIndex) => {
      const selectedOption = questions[questionIndex].options[answerIndex];
      Object.entries(selectedOption.regions).forEach(([region, points]) => {
        scores[region] += points;
      });
    });

    const maxScore = Math.max(...Object.values(scores));
    const topRegions = Object.entries(scores)
      .filter(([_, score]) => score === maxScore)
      .map(([region, _]) => region);

    setResult({
      primaryRegion: topRegions[0],
      scores: scores,
      isMultipleMatch: topRegions.length > 1,
      allTopRegions: topRegions,
    });
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="max-w-5xl mx-auto p-8 bg-white  shadow-lg">
          <div className="flex gap-6">
            {/* Left side - Image */}
            <div className="flex-shrink-0 flex items-center">
              <img
                src={regions[result.primaryRegion].image}
                className="w-64  object-cover shadow-md border"
              />
            </div>
            <div className="flex-1">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-2">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
              </div>

              <div
                className={`p-4  border-2 ${
                  regions[result.primaryRegion].color
                } mb-4`}
              >
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                  {regions[result.primaryRegion].name}
                </h2>

                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-base font-semibold">
                    Score: {result.scores[result.primaryRegion]}/
                    {questions.length * 3}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-base font-semibold mb-2">
                  All Regional Scores:
                </h3>
                <div className="space-y-1">
                  {Object.entries(result.scores)
                    .sort(([, a], [, b]) => b - a)
                    .map(([region, score]) => (
                      <div
                        key={region}
                        className="flex justify-between items-center p-2 bg-gray-50 rounded"
                      >
                        <span className="font-medium text-sm">
                          {regions[region].name}
                        </span>
                        <div className="flex items-center">
                          <div className="w-24 bg-gray-200  h-1.5 mr-2">
                            <div
                              className="bg-green-500 h-1.5  transition-all duration-500"
                              style={{
                                width: `${
                                  (score / (questions.length * 3)) * 100
                                }%`,
                              }}
                            ></div>
                          </div>
                          <span className="text-xs font-semibold w-6">
                            {score}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <button
                onClick={resetQuiz}
                className="w-full bg-green-600 text-white py-2 px-4  font-semibold hover:bg-green-700 transition-colors text-sm"
              >
                Take Quiz Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl w-4xl mx-auto p-4 bg-white  shadow-lg">
      <div className="text-center mb-4">
        <p className="">
          <span className="text-xl bg-red-200 font-bold">Beware!</span> This app
          judges your{" "}
          <span className="text-xl bg-pink-300 font-bold">
            food choices! 🔴🔴
          </span>
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800 mt-10 mb-3">
          {questions[currentQuestion].question}
        </h2>
        <div className="space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full p-3 text-left bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300  transition-all duration-200 hover:scale-102"
            >
              <span className="font-medium text-gray-800 text-sm">
                {option.text}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodRegionQuiz;
