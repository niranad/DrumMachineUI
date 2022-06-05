import React from 'react'
import Controls from './controls'

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater 1',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater 2',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater 3',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater 4',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Kick n Hat',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
]

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord 1',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord 2',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord 3',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy Kick',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side Stick',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
  },
]

class DrumSet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      audioDisplay: '',
      volume: 40,
      isPowerOff: false,
      isBankTwoActive: false,
    }
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeypress)
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeypress)
  }

  handleKeypress = (event) => {
    if (!this.state.isPowerOff) {
      let keyIsValid = this.state.isBankTwoActive
        ? bankTwo.some((el) => el.keyCode === event.which)
        : bankOne.some((el) => el.keyCode === event.which)

      if (keyIsValid) {
        let currentKey = this.state.isBankTwoActive
          ? bankTwo.filter((el) => {
              return el.keyCode === event.which
            })
          : bankOne.filter((el) => {
              return el.keyCode === event.which
            })

        this.setState({
          audioDisplay: currentKey[0]['id'],
        })
      }

      let vol = this.state.volume / 100

      switch (event.which) {
        case 81:
          const Q = document.getElementById('Q')
          Q.volume = vol
          Q.play()
          break
        case 87:
          const W = document.getElementById('W')
          W.volume = vol
          W.play()
          break
        case 69:
          const E = document.getElementById('E')
          E.volume = vol
          E.play()
          break
        case 65:
          const A = document.getElementById('A')
          A.volume = vol
          A.play()
          break
        case 83:
          const S = document.getElementById('S')
          S.volume = vol
          S.play()
          break
        case 68:
          const D = document.getElementById('D')
          D.volume = vol
          D.play()
          break
        case 90:
          const Z = document.getElementById('Z')
          Z.volume = vol
          Z.play()
          break
        case 88:
          const X = document.getElementById('X')
          X.volume = vol
          X.play()
          break
        case 67:
          const C = document.getElementById('C')
          C.volume = vol
          C.play()
          break
        default:
          break
      }
    }
  }

  toggleBanks = () => {
    if (!this.state.isPowerOff) {
      let bank = this.state.isBankTwoActive ? 'Heater Kit' : 'Smooth Piano Kit'
      this.setState((state) => ({
        isBankTwoActive: !state.isBankTwoActive,
        audioDisplay: bank,
      }))
    }
  }

  togglePower = () => {
    let isPowerOff = !this.state.isPowerOff
    this.setState({
      isPowerOff,
      audioDisplay: '',
    })
  }

  adjustVolume = (e) => {
    if (!this.state.isPowerOff) {
      let value = e.target.value
      this.setState((state) => ({
        volume: value,
        audioDisplay: 'Volume:' + value,
      }))

      setTimeout(() => this.setState({ audioDisplay: '' }), 600)
    }
  }

  handleClick = (event) => {
    if (!this.state.isPowerOff) {
      this.setState({
        audioDisplay: event.target.name,
      })

      let vol = this.state.volume / 100

      switch (event.target.value) {
        case '81':
          const Q = document.getElementById('Q')
          Q.volume = vol
          Q.play()
          break
        case '87':
          const W = document.getElementById('W')
          W.volume = vol
          W.play()
          break
        case '69':
          const E = document.getElementById('E')
          E.volume = vol
          E.play()
          break
        case '65':
          const A = document.getElementById('A')
          A.volume = vol
          A.play()
          break
        case '83':
          const S = document.getElementById('S')
          S.volume = vol
          S.play()
          break
        case '68':
          const D = document.getElementById('D')
          D.volume = vol
          D.play()
          break
        case '90':
          const Z = document.getElementById('Z')
          Z.volume = vol
          Z.play()
          break
        case '88':
          const X = document.getElementById('X')
          X.volume = vol
          X.play()
          break
        case '67':
          const C = document.getElementById('C')
          C.volume = vol
          C.play()
          break
        default:
          break
      }
    }
  }

  render() {
    const { audioDisplay, isBankTwoActive, volume, isPowerOff } = this.state

    const createDrums = (obj, i) => {
      return (
        <button
          key={`${obj.id}${i}`}
          id={obj.id.toLowerCase().replace(/\s/g, '-')}
          name={obj.id}
          value={obj.keyCode}
          className="drum-pad"
          onClick={this.handleClick}
        >
          {obj.keyTrigger}
          <audio
            id={obj.keyTrigger}
            className="clip"
            src={obj.src}
            preload="auto"
            volume="0.5"
          />
        </button>
      )
    }

    const drums = isBankTwoActive
      ? bankTwo.map(createDrums)
      : bankOne.map(createDrums)

    return (
      <div id="drum-machine">
        <div id="grid">{drums}</div>
        <Controls
          displayText={audioDisplay}
          isBankTwoActive={isBankTwoActive}
          isPowerOff={isPowerOff}
          toggleBanks={this.toggleBanks}
          togglePower={this.togglePower}
          volume={volume}
          adjustVolume={this.adjustVolume}
        />
      </div>
    )
  }
}

export default DrumSet
