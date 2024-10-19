import './index.css'
export default function CustomInput({
    label,
    onChange,
    value,
    multiple
}) {
    return (
        <div>
            <h4>{label}</h4>
            <textarea
                multiple={multiple}
                value={value}
                className='Input'
                onChange={onChange}
                rows={multiple ? 4 : 1}
            />
        </div>
    )
}