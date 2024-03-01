import './index.css'

const Banner = props => {
  const {details} = props
  const {headerText, description, className} = details

  return (
    <div className={`container ${className}`}>
      <li>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="button">Show more</button>
      </li>
    </div>
  )
}

export default Banner
