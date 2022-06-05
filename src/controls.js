const Controls = ({
  displayText,
  isPowerOff,
  togglePower,
  toggleBanks,
  isBankTwoActive,
  volume,
  adjustVolume,
}) => {
  return (
    <div id="controlsWrap">
      <label id="power">Power</label>
      <div id="power-control">
        <input
          id="off"
          type="button"
          className={isPowerOff ? 'highlight' : undefined}
          onClick={togglePower}
        />
        <input
          id="on"
          type="button"
          className={!isPowerOff ? 'highlight' : undefined}
          onClick={togglePower}
        />
      </div>

      <br />
      <br />
      <p id="display">{displayText}</p>
      <br />
      <label htmlFor="volume">Volume</label>
      <input
        id="volume"
        type="range"
        min="0"
        max="100"
        step="1"
        value={volume}
        onChange={adjustVolume}
      />
      <br />
      <label id="bank-switch">Bank</label>
      <div id="bank-control">
        <input
          id="bank1"
          type="button"
          className={!isBankTwoActive ? 'highlight' : undefined}
          onClick={toggleBanks}
        />
        <input
          id="bank2"
          type="button"
          className={isBankTwoActive ? 'highlight' : undefined}
          onClick={toggleBanks}
        />
      </div>
    </div>
  )
}

export default Controls
