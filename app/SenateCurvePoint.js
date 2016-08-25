'use strict'

module.exports = class SenateCurvePoint {
  constructor(hash) {
    this.state_code = hash.state
    this.date_s = hash.date
    this.dem_xibar = +hash.dem_xibar
    this.dem_low = +hash.dem_low
    this.dem_high = +hash.dem_high
    this.gop_xibar = +hash.gop_xibar
    this.gop_low = +hash.gop_low
    this.gop_high = +hash.gop_high
    this.diff_xibar = +hash.diff_xibar
    this.diff_low = +hash.diff_low
    this.diff_high = +hash.diff_high
    this.undecided_xibar = +hash.undecided_xibar
    this.dem_win_prob = +hash.dem_win_prob
  }
}
