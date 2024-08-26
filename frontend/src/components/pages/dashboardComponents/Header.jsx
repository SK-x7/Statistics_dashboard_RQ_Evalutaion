function Header() {
    return (
        <header className="w-full sticky top-0 bg-white  z-50">
          <div className="flex justify-between items-center h-14 sm:h-[83px] !w-full px-7">
            <input
              placeholder="Search for something"
              className="h-1/2 w-1/3 rounded-md !bg-[#F4F4F4] border-none text-xs sm:text-base "
            />
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-black font-medium mr-0 text-xs sm:text-xl sm:mr-6">
                Hey, User
              </h1>
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
                  d="M2 16.5959C2 16.2151 2.15471 15.8506 2.42864 15.586L3.45759 14.5922C3.84928 14.2139 4.06977 13.6922 4.06814 13.1476L4.05867 9.9946C4.04543 5.58319 7.61789 2 12.0293 2C16.4314 2 20 5.56859 20 9.97067L20 13.1716C20 13.702 20.2107 14.2107 20.5858 14.5858L21.5858 15.5858C21.851 15.851 22 16.2107 22 16.5858C22 17.3668 21.3668 18 20.5858 18H16C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18H3.40408C2.62863 18 2 17.3714 2 16.5959ZM10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18H10ZM18 13.1716C18 14.2324 18.4214 15.2499 19.1716 16L4.87851 16C5.64222 15.246 6.07136 14.2161 6.06813 13.1416L6.05867 9.9886C6.04875 6.6841 8.7248 4 12.0293 4C15.3268 4 18 6.67316 18 9.97067L18 13.1716Z"
                  fill="#6F767E"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 18 18 "
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex justify-center items-center"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9ZM13.2852 12.3004C13.5312 12.5513 13.5312 12.9488 13.2852 13.1997C12.1963 14.3107 10.6786 15 9.00005 15C7.3214 15 5.80375 14.3106 4.71477 13.1996C4.46884 12.9487 4.46885 12.5512 4.71478 12.3003C5.80376 11.1893 7.32136 10.5 8.99997 10.5C10.6786 10.5 12.1963 11.1894 13.2852 12.3004ZM9 9C10.2426 9 11.25 7.99264 11.25 6.75C11.25 5.50736 10.2426 4.5 9 4.5C7.75736 4.5 6.75 5.50736 6.75 6.75C6.75 7.99264 7.75736 9 9 9Z"
                  fill="#6F767E"
                  className="!h-full"
                />
              </svg>
            </div>
          </div>
        </header>
    )
}

export default Header
