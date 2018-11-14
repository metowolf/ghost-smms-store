'use strict'

const Promise = require('bluebird')
const BaseAdapter = require('ghost-storage-base')
const smms = require('smms-cli')
const request = require('request').defaults({encoding: null})

class SmmsAdapter extends BaseAdapter {
  constructor(options) {
    super(options)
    this.options = options || {}
  }

  /**
   * Saves the image to storage (sm.ms)
   * - image is the express image object
   * - returns a promise which ultimately returns the full url to the uploaded image
   *
   * @param image
   * @param targetDir
   * @returns {Promise}
   */
  save(image, targetDir) {
    return new Promise((resolve, reject) => {
      smms.upload(image.path)
        .then(result => {
          resolve(result.data.url)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  /**
   * @Overwrite
   * Ghost requires this function to be defined
   */
  exists(filename, targetDir) {
    return new Promise((resolve, reject) => {
      resolve(false)
    })
  }

  /**
   * @Overwrite
   * Ghost requires this function to be defined
   */
  serve() {
    return (req, res, next) => {
      next()
    }
  }

  /**
   * Not implemented.
   * May be implemented later.
   *
   * @returns {Promise.<*>}
   */
  delete() {
    return Promise.reject('not implemented')
  }

  /**
   * Reads bytes from disk for a target image
   * - path of target image (without content path!)
   *
   * @param options
   */
  read(options) {
    const opts = options || {}
    return new Promise((resolve, reject) => {
      return request.get(opts.path, (err, res) => {
        if (err) {
          return reject(`Could not read image ${opts.path}`)
        }
        return resolve(res.body)
      })
    })
  }

}

module.exports = SmmsAdapter
