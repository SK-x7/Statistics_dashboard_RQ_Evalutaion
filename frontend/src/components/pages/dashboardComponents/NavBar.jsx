export function NavBar() {
  const navOptions = ["dashboard"];
  return (
    <nav className="!w-full  bg-white h-screen pt-7">
      <ul className="flex flex-col justify-start items-center gap-1 px-3 ">
        {navOptions?.map((option) => (
          <li className="flex justify-center sm:justify-start items-center sm:gap-1 md:gap-[6px] lg:gap-2 bg-[#475BE8] py-2 sm:py-[10px]  md:py-4 w-full rounded-lg px-0 sm:px-2 lg:px-10 cursor-pointer disabled:" key={option}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 5H6C5.44772 5 5 5.44772 5 6V8C5 8.55228 5.44772 9 6 9H8C8.55228 9 9 8.55228 9 8V6C9 5.44772 8.55228 5 8 5ZM6 3C4.34315 3 3 4.34315 3 6V8C3 9.65685 4.34315 11 6 11H8C9.65685 11 11 9.65685 11 8V6C11 4.34315 9.65685 3 8 3H6Z"
                fill="#fff"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 15H6C5.44772 15 5 15.4477 5 16V18C5 18.5523 5.44772 19 6 19H8C8.55228 19 9 18.5523 9 18V16C9 15.4477 8.55228 15 8 15ZM6 13C4.34315 13 3 14.3431 3 16V18C3 19.6569 4.34315 21 6 21H8C9.65685 21 11 19.6569 11 18V16C11 14.3431 9.65685 13 8 13H6Z"
                fill="#fff"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 5H16C15.4477 5 15 5.44772 15 6V8C15 8.55228 15.4477 9 16 9H18C18.5523 9 19 8.55228 19 8V6C19 5.44772 18.5523 5 18 5ZM16 3C14.3431 3 13 4.34315 13 6V8C13 9.65685 14.3431 11 16 11H18C19.6569 11 21 9.65685 21 8V6C21 4.34315 19.6569 3 18 3H16Z"
                fill="#fff"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 15H16C15.4477 15 15 15.4477 15 16V18C15 18.5523 15.4477 19 16 19H18C18.5523 19 19 18.5523 19 18V16C19 15.4477 18.5523 15 18 15ZM16 13C14.3431 13 13 14.3431 13 16V18C13 19.6569 14.3431 21 16 21H18C19.6569 21 21 19.6569 21 18V16C21 14.3431 19.6569 13 18 13H16Z"
                fill="#fff"
              />
            </svg>
            <span className="text-white text-xs md:text-[14px] lg:text-base capitalize">
              {option}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
