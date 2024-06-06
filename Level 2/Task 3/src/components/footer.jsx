
export const Footer = () => {
    return (
        <div className="bg-snow-500 p-20 flex justify-center items-center flex-col gap-4">
            <div>
                -- Made by <a href="https://twitter.com/devxronit">Ronit Khajuria</a> inspired by Dukaan App UI --
            </div>
            <div>
                <a href="https://github.com/ronitsharma03/100xDevs-cohort-code/tree/main/week%208.2/dukaan-tailwind" target="_blank">
                    <div className="flex flex-row gap-2">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </div>
                        <div>
                            Get Code
                        </div>
                    </div>
                </a>

            </div>
        </div>
    )
}