const Certification = () => {
  return (
    <>
      <div className="w-11/12 lg:w-9/12 mx-auto py-4">
        <h1 className="text-4xl text-center font-bold my-2 text-[#023e8a]">
          Certification
        </h1>
        <h1 className="text-2xl text-center font-medium my-6 text-[#023e8a]">
          NATIONAL SKILLS DEVELOPMENT AUTHORITY (NSDA)
        </h1>
        <div class="p-2 flex flex-col items-center lg:flex-row justify-between dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            class="object-cover w-full rounded-t-lg lg:w-[188px] lg:h-[190px] md:h-auto md:rounded-none md:rounded-s-lg"
            src="https://upload.wikimedia.org/wikipedia/en/3/37/National_Skills_Development_Authority_logo.png"
            alt="NATIONAL SKILLS DEVELOPMENT AUTHORITY Logo"
          />
          <h5 class="mb-4 lg:mb-0 text-2xl font-bold tracking-tight text-[#023e8a] dark:text-white">
            Web Design and Development for Freelancing, Level- 3
          </h5>
          <a
            href="/nsda_Certificate_Md.%20Assim%20Ettisum.pdf"
            download
            class="w-fit text-lg flex items-center px-3 py-2 border border-gray-400 bg-white text-[#023e8a] hover:text-[#fff] font-semibold rounded-lg hover:bg-[#023e8a] transition duration-300 shadow-md"
          >
            Download Certificate
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Certification;
