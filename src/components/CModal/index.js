import { useEffect, useState } from "react";
import CustomButton from "../CustomButton";
import CustomDateInput from "../CustomDateInput";
import CustomInput from "../CustomInput";
import CustomModal from "../CustomModal";
import './index.css'
import CustomTag from "../CustomTag";
export default function CModal({
    open,
    onClose,
    isEdit,
    initData,
    submit
}) {
    const [data, setData] = useState({
        title: '',
        description: '',
        date: '',
        status: 'active',
        id: Date.now() + Math.random().toString(36)
    })

    useEffect(() => {
        if (open) {
            if (isEdit) {
                setData(initData)
            } else {
                setData(
                    {
                        title: '',
                        description: '',
                        date: '',
                        status: 'active',
                        id: Date.now() + Math.random().toString(36)
                    }
                )
            }
        }
    }, [open])

    return (
        <CustomModal
            open={open}
            onClose={onClose}

        >
            <div className="RootAddModal">
                <h3>{isEdit ? 'Edit': 'Add'} task</h3>
                <CustomInput
                    label={'title'}
                    value={data.title}
                    onChange={(e) => {
                        setData({
                            ...data,
                            title: e.target.value
                        })
                    }}
                />
                <CustomInput
                    multiple={true}
                    label={'description'}
                    value={data.description}
                    onChange={(e) => {
                        setData({
                            ...data,
                            description: e.target.value
                        })
                    }}
                />
                <CustomDateInput
                    label={'date'}
                    value={data.date}
                    onChange={(e) => {
                        setData({
                            ...data,
                            date: e.target.value
                        })
                    }}
                />
                <CustomTag
                    active={data.status === 'active'}
                    label={'Active'}
                    onClick={() => {
                        setData({ ...data, status: 'active' })
                    }}
                />
                <CustomTag
                    active={data.status === 'compeleted'}
                    label={'compeleted'}
                    onClick={() => {
                        setData({ ...data, status: 'compeleted' })
                    }}
                />
                <CustomButton
                    bgColor={isEdit ? 'orange' : 'green'}
                    title={isEdit ? 'Edit' : 'Add'}
                    onClick={() => {
                        submit(data)
                        onClose()
                    }}
                />
            </div>
        </CustomModal>
    )
}