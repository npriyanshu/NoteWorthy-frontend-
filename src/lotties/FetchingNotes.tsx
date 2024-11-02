import logo from "../assets/lottie-json/fetching-notes.json";
import Lottie from "lottie-react"


const FetchingNotes = () => {

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[60%]">
        <Lottie animationData={logo} />
      </div>
    </div>
  )
}

export default FetchingNotes
