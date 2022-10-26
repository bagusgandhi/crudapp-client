export default function Button({ children, type, onClick, bg, bgHover }){
    return(
        <>
            <button
                className={`rounded-xl w-full ${bg} hover:${bgHover} p-4 text-sm shadow-md hover:shadow-lg font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 `}
                type={type}
                onClick={onClick}

            >
                { children }
            </button>
        
        </>
    );
}