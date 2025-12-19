// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, imageUrl, appName} = appDetails
  return (
    <>
      <li className="project-item-container">
        <img
          className="project-item-image"
          src={imageUrl}
          alt={`project-item${appId}`}
        />
        <div className="project-item-details-container">
          <h1 className="project-item-title">{appName}</h1>
        </div>
      </li>
    </>
  )
}

export default AppItem
