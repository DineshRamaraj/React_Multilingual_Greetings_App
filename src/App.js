import {Component} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeTabId: languageGreetingsList[0].id,
  }

  render() {
    const {activeTabId} = this.state
    const selectedItem = languageGreetingsList.find(
      eachItem => eachItem.id === activeTabId,
    )
    const {imageUrl, imageAltText} = selectedItem
    // console.log(imageUrl)
    return (
      <div className="main-container">
        <h1 className="main-heading">Multilingual Greetings</h1>
        <ul className="list-container">
          {languageGreetingsList.map(eachItem => {
            const onChangeTabItem = () => {
              this.setState({activeTabId: eachItem.id})
            }

            return (
              <li className="list-items" key={eachItem.id}>
                <button
                  type="button"
                  onClick={onChangeTabItem}
                  className={
                    eachItem.id === activeTabId
                      ? 'list-button active-button'
                      : 'list-button'
                  }
                >
                  {eachItem.buttonText}
                </button>
              </li>
            )
          })}
        </ul>
        <div className="main-image-container">
          <img src={imageUrl} alt={imageAltText} className="main-image" />
        </div>
      </div>
    )
  }
}

export default App
