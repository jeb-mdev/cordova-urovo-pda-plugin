var exec = require('cordova/exec')

exports.handleScanResult = function (arg0, success, error) {
  exec(success, error, 'scanPda', 'handleScanResult', [arg0])
}
