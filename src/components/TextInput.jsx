export default function TextInput(props) {
    const { type, id, name, value, error, message } = props
    return (
        <>
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            className={`w-full border
                        peer rounded-lg bg-white px-4 pt-6 pb-2
                        text-slate-900
                        border-focus-blue
                        focus:border-focus-blue
                        focus:ring-focus-blue/20
                        outline-none transition
                        ${error && 'border-red-500'}
                        `}
            {...props}
        />
            {error && <p className="text-red-500 p-2">{message}</p>}
    </>

    )
} 