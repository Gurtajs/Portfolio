import NCNewsFrontend from '../images/NCNewsFrontend.png'
import NCNewsBackend from '../images/NCNewsBackend.png'
import KeepFitFrontend from '../images/KeepFitFrontend.png'
import KeepFitBackend from '../images/KeepFitBackend.png'

export default function Project() {

  return(
    <div className="grid grid-cols-2 gap-10 w-200">
      <div><img src={NCNewsFrontend} /></div>
      <div><img src={NCNewsBackend} /></div>
      <div><img src={KeepFitFrontend} /></div>
      <div><img src={KeepFitBackend} /></div>
    </div>
  )
}