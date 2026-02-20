import { useForm } from "react-hook-form";
import Button from "../components/button";
import Label from "../components/label";
import TextInput from "../components/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { editNotes, noteDetails } from "../features/noteSlice";
import { useEffect, useId } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateNote({ isEdit, setIsEdit, noteValues, setNoteValues }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const generateId = () => {
        return Math.floor(Math.random() * 100000000);
    };
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        console.log("data",typeof data.amount)
        if (isEdit) {
            dispatch(editNotes(data))
            navigate('#noteList')
        } else {
            data.id = generateId()
            // data.amount = typeof amount === 'number' ? data.amount : 0
            dispatch(noteDetails(data))
        }
        reset({
            id: null,
            date: '',
            title: '',
            amount: null,
            description: ''
        })
        setNoteValues({})
        setIsEdit(false)
    }
    useEffect(() => {
        console.log("Object.keys(noteValues).length>=1", Object.keys(noteValues).length >= 1)
        if (Object.keys(noteValues)?.length >= 1) {
            reset(noteValues)
        }
    }, [noteValues])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                    <div className="relative ">
                        <TextInput
                            type="date"
                            error={errors?.date}
                            message={errors?.date?.message}
                            {...register("date", {
                                required: 'Date is required'
                            })}
                        />
                        <Label children="Date" required />
                    </div>
                    <div className="relative md:col-span-2">
                        <TextInput
                            type="text"
                            error={errors?.title}
                            message={errors?.title?.message}
                            {...register("title", {
                                required: 'Title is required'
                            })}
                        />
                        <Label children="Title" required />

                    </div>
                    <div className="relative ">
                        <TextInput
                            type="number"
                            {...register("amount", {
                                valueAsNumber: true
                            })}
                        />
                        <Label children="Amount" />
                    </div>
                    <div className="md:col-span-4 relative ">
                        <TextInput
                            type="text"
                            error={errors?.description}
                            message={errors?.description?.message}
                            {...register("description", {
                                required: 'Description is required'
                            })}
                        />
                        <Label children="Description" required />
                    </div>
                </div>
                <div className="flex justify-end mt-4 gap-2">
                    <Button children="Save" type="submit" />
                    <Button children="Clear" />
                </div>
            </form>
        </>
    )
}