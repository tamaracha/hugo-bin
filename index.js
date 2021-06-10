'use strict'
const path = require('path')
const binwrap = require('binwrap')
const { hugoVersion: version } = require(path.join(__dirname, 'package.json'))

const prefix = `https://github.com/gohugoio/hugo/releases/download/v${version}/hugo_${version}_`
const urls = new Map([
  ['darwin-x64', 'macOS-64bit.tar.gz'],
  ['darwin-arm64', 'macOS-ARM64.tar.gz'],
  ['freebsd-arm', 'FreeBSD-ARM.tar.gz'],
  ['freebsd-arm64', 'FreeBSD-ARM64.tar.gz'],
  ['freebsd-x32', 'FreeBSD-32bit.tar.gz'],
  ['freebsd-x64', 'FreeBSD-64bit.tar.gz'],
  ['linux-arm', 'Linux-arm.tar.gz'],
  ['linux-arm64', 'Linux-arm64.tar.gz'],
  ['linux-x32', 'Linux-32bit.tar.gz'],
  ['linux-x64', 'Linux-64bit.tar.gz'],
  ['openbsd-arm', 'OpenBSD-ARM.tar.gz'],
  ['openbsd-arm64', 'OpenBSD-ARM64.tar.gz'],
  ['openbsd-x32', 'OpenBSD-32bit.tar.gz'],
  ['openbsd-x64', 'OpenBSD-64bit.tar.gz'],
  ['win32-ia32', 'Windows-32bit.zip'],
  ['win32-x64', 'Windows-64bit.zip']
])
urls.forEach((suffix, arch, urls) => urls.set(arch, prefix + suffix))

module.exports = binwrap({
  dirname: __dirname,
  binaries: ['hugo'],
  urls: Object.fromEntries(urls)
})
