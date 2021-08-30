
module.exports = {
    // Autodesk Forge configuration
    config: {
      // Required scopes for your application on server-side
      scope: ['data:read', 'data:write', 'data:create', 'data:search'],
      // this this callback URL when creating your client ID and secret
      callbackURL: process.env.FORGE_CALLBACK_URL || 'https://autodesk-forge-api.herokuapp.com/forge/callback/oauth',
      // credentials
      credentials: {
        client_id: process.env.FORGE_CLIENT_ID || 'AML9GVeM2X2YaTpPCClYlmW8oaugdHpB',
        client_secret: process.env.FORGE_CLIENT_SECRET || 'wP52CrF1UZdG4OwJ'
      }
    }
  

  };