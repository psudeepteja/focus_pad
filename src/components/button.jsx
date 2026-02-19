export default function Button(props) {
    return (
        <button
            className="
                inline-flex items-center justify-center
                rounded-md
                bg-focus-blue
                px-5 py-1.5
                text-sm font-medium text-white
                hover:bg-focus-orange
                focus:outline-none focus:ring-2
                // focus:ring-[#1E3557]/30
                transition-colors
                cursor-pointer
            "
            {...props}
        >
            {props.children}
        </button>
    )
}