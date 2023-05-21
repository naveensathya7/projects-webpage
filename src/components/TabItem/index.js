import './index.css'

const TabItem = props => {
  const {isActive, tabDetails, updateTabs} = props
  const {tabId, displayText} = tabDetails

  const tabChange = () => {
    updateTabs(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        onClick={tabChange}
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
