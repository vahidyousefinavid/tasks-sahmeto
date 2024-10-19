import './index.css'
export default function CustomDateInput({
    label,
    onChange,
    value
}) {
    return (
        <div>
            <h4>{label}</h4>
            <input value={value} type='date' className='Input' onChange={onChange} />
        </div>
    )
}