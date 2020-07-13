import React from 'react'
import { YMaps, Map, Button, Placemark } from 'react-yandex-maps'
import Modal from '../../utils/modal/Modal'
import { addCoords } from '../../api/addCoords'
import '../../index.css'

const NAVBAR_HEIGHT = 56

export default class MainMap extends React.Component {
  constructor(props) {
    super(props)
    const width = document.body.clientWidth,
      height = window.innerHeight - NAVBAR_HEIGHT

    this.state = {
      width,
      height,
      isAdd: false,
      coords: [],
      currentCoord: null,
      showConfirmForm: false,
    }

    this.confirm = this.confirm.bind(this)
  }

  confirm(bool) {
    const { coords, currentCoord } = this.state
    if (currentCoord && bool) {
      addCoords(currentCoord).then((resp) => {
        if (resp.ok) {
          coords.push(currentCoord)
          this.setState({
            coords,
          })
        }
      })
    }

    this.setState({
      currentCoord: null,
      showConfirmForm: false,
    })
  }

  add = () => {
    const status = this.state.isAdd
    this.setState({ isAdd: !status })
    if (status) return
  }

  handleCoords = (e) => {
    this.add()
    if (!this.state.isAdd) return
    const coord = e.get('coords')
    this.setState({
      currentCoord: coord,
      showConfirmForm: true,
    })
    this.add()
  }

  render() {
    const { height, width, coords, showConfirmForm, isAdd } = this.state

    return (
      <div className="maps-container">
        <Modal show={showConfirmForm} onConfirm={this.confirm} />
        <YMaps>
          <Map
            onClick={this.handleCoords}
            width={width}
            height={height}
            defaultState={{
              center: [52.46, 31.04],
              zoom: 14,
            }}>
            {coords &&
              coords.map((coord, index) => (
                <Placemark
                  geometry={coord}
                  key={index}
                  options={{
                    iconLayout: 'default#image',
                    iconImageHref: 'images/123.png',
                    iconImageSize: [100, 100],
                  }}
                />
              ))}
            <Placemark geometry={[52.46, 31.04]} />
            <Button
              onClick={this.add}
              options={{ maxWidth: 300 }}
              data={{ content: 'Добавить заявку' }}
              state={{ selected: isAdd }}
            />
            <Button
              options={{ maxWidth: 300 }}
              data={{ content: 'Показывать все метки' }}
              defaultState={{ selected: false }}
            />
          </Map>
        </YMaps>
      </div>
    )
  }
}
