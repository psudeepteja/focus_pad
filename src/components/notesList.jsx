import { useDispatch, useSelector } from "react-redux"
import EditIcon from "../icons/edit"
import DeleteIcon from "../icons/delete"
import { useState } from "react";
import { completedNotes, deleteNotes, resetNotes, searchNotes } from "../features/noteSlice";
import Completed from "../icons/completed";
import Reopen from "../icons/reopen";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../icons/search";

export default function NotesList({ setIsEdit, setNoteValues, notesData, type }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [filterdNotes, setFilteredNotes]= useState(notesData)
    const notesHeader = ["Date", 'Title', 'Amount', 'Description', 'Actions']
    const [page, setPage] = useState(0);
    const [itemPerPage, setItemPerPage] = useState(10)
    const pageNumber = Math.ceil(notesData?.length / itemPerPage)
    const start = page * itemPerPage;
    const end = start + itemPerPage
    console.log("itemPerPage", typeof itemPerPage)
    console.log("end", end)
    const actions = [
        {
            name: "Edit",
            icon: <EditIcon />,
            type: "Note List"
        },
        {
            name: "Delete",
            icon: <DeleteIcon />,
            type: "Note List"
        },
        {
            name: "Completed",
            icon: <Completed />,
            type: "Note List"
        },
        {
            name: "Reopen",
            icon: <Reopen />,
            type: "Completed Tasks"
        },
    ]

    const handleClick = (note, item) => {
        if (item.name === 'Edit') {
            navigate({
                pathname: "/",
                hash: "#createNote"
            });
            setNoteValues(note)
            setIsEdit(true)
            return
        }
        if (item.name === 'Delete') {
            dispatch(deleteNotes(note.id))
            return
        }
        if (item.name === 'Completed') {
            dispatch(completedNotes(note))
            return
        }
        if (item.name === 'Reopen') {
            dispatch(resetNotes(note))
            return
        }
    }

    // const handleSearch =(e)=>{
        
    //     const filterNotes= notesData.map(i=>(
    //         (i.title || i.description).includes(e.target.value)
    //     )) 
    //     console.log("filterNotes", filterNotes)

    //     setFilteredNotes(filterNotes)
    // }

    return (
        <>
        {/* <div className="relative flex justify-end mt-0 md:mt-4">
            <input type="text" placeholder="Search...." className="border border-focus-blue focus:border-focus-blue px-4 py-2 rounded-lg w-full md:w-80" onChange={handleSearch} />
            <span className="absolute top-2 right-2"><SearchIcon /></span>
        </div> */}
        <div className="mt-4 border-[#ddd] w-full overflow-x-auto">
            <table >
                <thead>
                    <tr>
                        {notesHeader?.map((i, idx) => (
                            <th key={idx}>
                                {i}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filterdNotes?.slice(start, end)?.map((i, idx) => (
                        <tr key={idx}>
                            <td className="min-w-25">{i.date}</td>
                            <td>{i.title}</td>
                            <td>{i.amount ? i.amount : 0}</td>
                            <td>{i.description}</td>
                            <td>
                                <div className="flex gap-2 items-center relative ">
                                    {actions?.map((item, index) => (
                                        type === item.type &&(
                                        <div key={index} className="relative group">
                                        <span  className="icon-wrapper" onClick={() => { handleClick(i, item) }}>
                                            {item.icon}
                                        </span>
                                        <span className="absolute bottom-8 left-0 hidden group-hover:block bg-focus-blue text-white text-xs px-2 py-1 rounded whitespace-nowrap">{item.name}</span>
                                        </div>
                                    )))}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {notesData?.length === 0 && (
                <span className="flex justify-center text-focus-blue my-4 font-bold">No data available</span>
            )}
            {notesData.length >= 10 && (
                <div className="flex items-center justify-end gap-2 p-2">
                    <select id="page" name="page" className="text-focus-blue border rounded-md" value={itemPerPage} onChange={(e) => {
                        setItemPerPage(Number(e.target.value))
                        setPage(0)
                    }}>
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='20'>20</option>
                    </select>
                    {start > 0 && <button className="text-2xl font-bold text-focus-blue cursor-pointer" onClick={() => setPage(page - 1)}> {"<"}</button>}
                    <span className=" font-medium text-focus-blue cursor-pointer pt-1">{start + 1}-{end} of {notesData.length} </span>
                    {pageNumber > page + 1 && <button className="text-2xl font-bold text-focus-blue cursor-pointer" onClick={() => setPage(page + 1)}> {">"}</button>}
                </div>
            )}
        </div>
        </>
    )
}