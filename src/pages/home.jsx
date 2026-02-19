import { useEffect, useState } from "react";
import CreateNote from "../components/createNote";
import NotesList from "../components/notesList";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

export default function Home() {
    const [isEdit, setIsEdit]= useState(false)
    const [noteValues, setNoteValues]= useState({})
    const { notes, completedTasks } = useSelector(state => state.notes);
    const location =useLocation()

    useEffect(()=>{
        if(location?.hash){
            const id = location.hash.replace('#','')
            const element = document.getElementById(id)
            setTimeout(()=>{
            if(element){
                element.scrollIntoView({
                    behavior:"smooth",
                    block:'start'
                })

            }
             },100)
        }
    },[location])

    return (
        <div id="createNote" className="flex flex-col gap-8 my-6" >
            <div className="border border-[#ddd] p-6 rounded-xl">
                <span className="font-bold text-focus-blue text-xl border-l-8 pl-2 border-focus-orange">{isEdit ? 'Edit' :'Create'}</span>
                <CreateNote isEdit={isEdit} setIsEdit={setIsEdit} noteValues={noteValues} setNoteValues={setNoteValues} />
            </div>
            <div id="noteList" className="border border-[#ddd] p-6 rounded-xl">
                <span className="font-bold text-focus-blue text-xl border-l-8 pl-2 border-focus-orange">Note List</span>
                <NotesList isEdit={isEdit} setIsEdit={setIsEdit} setNoteValues={setNoteValues} notesData={notes} type='Note List' />
            </div>
            <div className="border border-[#ddd] p-6 rounded-xl">
                <span className="font-bold text-focus-blue text-xl border-l-8 pl-2 border-focus-orange">Completed Tasks</span>
                <NotesList isEdit={isEdit} setIsEdit={setIsEdit} setNoteValues={setNoteValues} notesData={completedTasks} type='Completed Tasks' />
            </div>
        </div>
    )
}