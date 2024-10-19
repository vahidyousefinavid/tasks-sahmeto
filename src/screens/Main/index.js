import { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton";
import CustomItem from "../../components/CustumItem";
import AddModal from "../../components/CModal";
import CustomTag from "../../components/CustomTag";

export default function MainScreen() {
    const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [])
    const [addModalOpen, setOpenModal] = useState(false)
    const [itemSelected, setItemSelected] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const [items, setItems] = useState([])
    const [stausSelected, setStatusSelected] = useState('all')

    const Submit = (data) => {
        if (isEdit) {
            setTasks(tasks.map(task => task.id === data.id ? data : task));
        } else {
            setTasks([...tasks, data])
        }
    }

    const RemoveTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    useEffect(() => {        
            if (stausSelected === 'all') {
                setItems(tasks)
            }
            if (stausSelected === 'active') {
                setItems(tasks.filter((item) => item.status === 'active'))
            }
            if (stausSelected === 'compeleted') {
                setItems(tasks.filter((item) => item.status === 'compeleted'))
            }
    }, [stausSelected, tasks])

    return (
        <div className="flex min-h-[100vh] p-5 flex-col gap-[4]">
            <div className="flex mb-[12px]">
                <CustomButton
                    bgColor={'green'}
                    title={'add task'}
                    onClick={() => {
                        setIsEdit(false)
                        setOpenModal(true)
                    }}
                />
            </div>
            <div className="flex gap-[8px] flex-wrap min-w-[50%]">
                <CustomTag
                    active={stausSelected === 'all'}
                    label={'all'}
                    onClick={() => {
                        setStatusSelected('all')
                    }}
                />
                <CustomTag
                    active={stausSelected === 'active'}
                    label={'active'}
                    onClick={() => {
                        setStatusSelected('active')
                    }} />
                <CustomTag
                    active={stausSelected === 'compeleted'}
                    label={'compeleted'}
                    onClick={() => {
                        setStatusSelected('compeleted')
                    }} />
            </div>
            <h3>
                TASKS
            </h3>
            <div className="flex mt-[20px] gap-[25px] flex-wrap justify-center">
                {
                    items.map((task) => {
                        return <CustomItem
                            key={task.id}
                            title={task.title}
                            description={task.description}
                            status={task.status}
                            date={task.date}
                            editAction={() => {
                                setItemSelected(task)
                                setIsEdit(true)
                                setOpenModal(true)
                            }}
                            RemoveAction={() => {
                                RemoveTask(task.id)
                            }}
                        />
                    })
                }
                {
                    !tasks.length && <h2>please add new task</h2>
                }
            </div>
            <AddModal
                open={addModalOpen}
                onClose={() => { setOpenModal(false) }}
                submit={Submit}
                initData={itemSelected}
                isEdit={isEdit}
            />
        </div>
    )
}