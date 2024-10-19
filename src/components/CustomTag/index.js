import './index.css'
export default function CustomTag({
    label,
    onClick,
    active
}) {
    return (
        <div
            className={active ? 'ActiveTag' : 'Tag'}
            onClick={onClick}>
            <h6>
                {label}
            </h6>
        </div>
    )
}