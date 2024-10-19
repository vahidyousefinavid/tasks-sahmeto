import './index.css'

export default function CustomButton({
    title,
    bgColor,
    onClick
}) {

    const chosenColor = (bgColor) => {
        if (bgColor === 'red') {
            return 'linear-gradient(to right, #ea0606 0%, #ff667c  51%, #ea0606  100%)'
        } if (bgColor === 'orange') {
            return 'linear-gradient(to right, #fdbf21 0%, #ff7d21  51%, #fdbf21  100%)'
        } if (bgColor === 'orange2') {
            return 'linear-gradient(to right, rgb(229 117 2) 0%, rgb(255 161 14)  51%, rgb(229 117 2)  100%)'
        } if (bgColor === 'green') {
            return 'linear-gradient(to right, #118649 0%, #0adb6f  51%, #118649  100%)'
        } if (bgColor === 'green2') {
            return 'linear-gradient(to right, rgba(37,93,65,1) 0%, rgba(64,174,64,1)  51%, rgba(37,93,65,1)  100%)'
        } if (bgColor === 'blue') {
            return 'linear-gradient(to right, #21d4fd 0%, #2152ff  51%, #21d4fd  100%)'
        } if (bgColor === 'gray') {
            return 'linear-gradient(to right, #868686 0%, #999999  51%, #868686  100%)'
        } if (bgColor === 'blueGreen') {
            return 'linear-gradient(to right, #15768d 0%, #27376e  51%, #15768d  100%)'
        } else {
            return 'linear-gradient(to right, #FF7878 0%, #FF0000  51%, #FF7878  100%)'
        }
    }

    return (
        <button 
        onClick={onClick}
        className='RootBt' style={{
            backgroundImage: chosenColor(bgColor)
        }}>
            {title}
        </button>
    )
}