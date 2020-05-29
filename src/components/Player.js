import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Player = ({playerId, players}) => {
  const player = _.find(players, { number: playerId });

  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>Position: {player.position}</h2>
      <Link to='/roster'>Back</Link>
    </div>
  )
}

export default Player
