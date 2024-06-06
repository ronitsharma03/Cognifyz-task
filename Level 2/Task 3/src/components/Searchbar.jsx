export const Searchbar = () => {
    return (

        <div className="relative bg-black">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input className="block w-96 p-2 ps-10 text-base rounded-lg focus:outline-none bg-slate-100 max-sm:hidden sm:w-56 lg:w-96" placeholder="Search" required />

        </div>
    )
}