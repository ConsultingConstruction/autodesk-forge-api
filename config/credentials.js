var config = require('./config');

function Credentials(session) {
  this._session = session;
}

Credentials.prototype.setForgeCredentials = function (accessToken) {
  this._session.FC = accessToken;
};

Credentials.prototype.getForgeCredentials = function () {
  return this._session.FC;
};

Credentials.prototype.setAutodeskId = function(autodeskId){
  this._session.AI = autodeskId;
};

Credentials.prototype.getAutodeskId = function () {
  return this._session.AI;
};

Credentials.prototype.setStorageCredentials = function (accessToken) {
  // Just to make switching between storage services work better
  // This way we can avoid trying to use credentials of one storage service
  // to get access to another service and fail "misteriously" :)
  this._session.SN = config.storage.name
  this._session.SC = accessToken;
};

Credentials.prototype.getStorageCredentials = function () {
  if (this._session.SN === config.storage.name) {
    return this._session.SC;
  }
};

module.exports = Credentials;