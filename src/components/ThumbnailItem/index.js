import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, isActive, updateThumbnailImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  const onClickImage = () => {
    updateThumbnailImage(id)
  }

  return (
    <li className="lists">
      <button className="btn" type="button" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`tab-btn ${activeTabClassName}`}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
