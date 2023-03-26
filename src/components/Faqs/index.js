import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bg-container">
      <div className="container">
        <h1 className="heading">FQAs</h1>
        <ul>
          {faqsList.map(each => (
            <FaqItem details={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
