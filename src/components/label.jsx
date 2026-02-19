export default function Label(props) {
    return (
        <label
            className='absolute left-4 top-1 text-sm text-focus-blue
                            transition-all
                            peer-placeholder-shown:top-4
                            peer-placeholder-shown:text-base
                            peer-placeholder-shown:text-slate-400
                            peer-focus:top-1
                            peer-focus:px-1
                            peer-focus:text-sm
                            peer-focus:text-focus-orange'
            {...props}
        >
            {props.children} {props.required &&<span className="text-red-500">*</span>}
        </label>
    )
}