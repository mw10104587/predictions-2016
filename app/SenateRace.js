'use strict'

module.exports = class SenateRace {
  constructor(hash) {
    this.state_code = hash.state
    this.pollster_slug = hash.pollster_slug
    this.cook_rating = hash.cook_rating
    this.dem_name = hash.dem_name
    this.dem_label = hash.dem_label
    this.gop_name = hash.gop_name
    this.gop_label = hash.gop_label
  }
}
