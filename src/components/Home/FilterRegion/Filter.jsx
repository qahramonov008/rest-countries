import "./Filter.scss"

const Filter = () => {
  return (
    <div className='select-country'>
        <select className="select-country__dropdown">
          <option className="select-country__options">All</option>
          <option className="select-country__options">Africa</option>
          <option className="select-country__options">America</option>
          <option className="select-country__options">Asia</option>
          <option className="select-country__options">Europe</option>
          <option className="select-country__options">Oceania</option>
        </select>
    </div>
  )
}

export default Filter