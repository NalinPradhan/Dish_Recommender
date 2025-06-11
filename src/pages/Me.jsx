import { FaLinkedin } from "react-icons/fa";

export default function Me() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg mt-24 flex flex-col items-center p-10 w-2xl">
        <img
          src="./profilepic.jpeg"
          alt="Avatar"
          className="w-32 h-32 rounded-full mb-4 rotate-340"
        />
        <h1 className="text-2xl font-bold mb-2">Nalin Pradhan</h1>
        <p className="text-gray-600">MERN Stack Developer</p>
        <div className="text-gray-600 mt-2 flex gap-3  items-center">
          <a
            href="https://www.linkedin.com/in/nalin-pradhan-499738192/"
            className="text-blue-500  flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="mr-2" size={24} />
            LinkedIn
          </a>
          <a
            href="https://github.com/NalinPradhan"
            className="text-black flex items-center ml-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="mr-2"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              fill="black"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.932 0-1.31.468-2.382 1.236-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.804 5.625-5.475 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.698.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
        <div className="mt-6 flex    flex-col items-center">
          <a
            href="https://www.buymeacoffee.com/nalinpradhan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-yellow-400 rounded-xl hover:bg-yellow-300  text-black  font-semibold shadow   transition"
          >
            <img
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-buy-me-a-coffee-help-creators-receive-support-from-their-audience-logo-color-tal-revivo.png"
              className="mr-2"
            />
            Buy me a coffee
          </a>
        </div>
        <p className="text-gray-600 mt-10">
          Made with <span className="text-xl"></span>💖 and humor<br></br> for
          foodies for self-reflection!
          <span className="text-xl">🪞</span>
        </p>
      </div>
    </div>
  );
}
