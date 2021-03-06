'use strict';

const LocalTrackPublication = require('./localtrackpublication');

/**
 * A {@link LocalDataTrackPublication} is a {@link LocalDataTrack} that has been
 * published to a {@link Room}.
 * @extends LocalTrackPublication
 * @property {Track.Kind} kind - "data"
 * @property {LocalDataTrack} track - the {@link LocalDataTrack}
 */
class LocalDataTrackPublication extends LocalTrackPublication {
  /**
   * Construct a {@link LocalDataTrackPublication}.
   * @param {Track.SID} trackSid - SID assigned to the published {@link LocalDataTrack}
   * @param {LocalDataTrack} track - the {@link LocalDataTrack}
   * @param {function(LocalTrackPublication): void} unpublish - The callback
   *    that unpublishes the {@link LocalTrackPublication}
   * @param {TrackPublicationOptions} options - {@link LocalTrackPublication} options
   */
  constructor(trackSid, track, unpublish, options) {
    super(trackSid, track, unpublish, options);
  }

  toString() {
    return `[LocalDataTrackPublication #${this._instanceId}: ${this.trackSid}]`;
  }
}

module.exports = LocalDataTrackPublication;
