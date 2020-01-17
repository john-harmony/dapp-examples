const { TruffleProvider } = require('@harmony-js/core')

const phrase =
  'food response winner warfare indicate visual hundred toilet jealous okay relief tornado'
const privateKey =
  '27978f895b11d9c737e1ab1623fde722c04b4f9ccb4ab776bf15932cc72d7c66'
const url = `http://localhost:9500`

//one18t4yj4fuutj83uwqckkvxp9gfa0568uc48ggj7
const beta_phrase = 'urge clog right example dish drill card maximum mix bachelor section select' 
const beta_url = 'http://s0.b.hmny.io:9500'
const beta_private_key = '01F903CE0C960FF3A9E68E80FF5FFC344358D80CE1C221C3F9711AF07F83A3BD'

module.exports = {
  networks: {
    development: {
      // host: 'localhost', // Localhost (default: none)
      // port: 9500, // Standard Ethereum port (default: none)
      network_id: '1', // Any network (default: none)
      provider: () => {
        const truffleProvider = new TruffleProvider(url, phrase)
        const newAcc = truffleProvider.addByPrivateKey(privateKey)
        truffleProvider.setSigner(newAcc)
        return truffleProvider
      }
    },
    betanet: {
      network_id: '1', // Any network (default: none)
      provider: () => {
        const truffleProvider = new TruffleProvider(beta_url, beta_phrase)
        const newAcc = truffleProvider.addByPrivateKey(beta_private_key)
        truffleProvider.setSigner(newAcc)
        return truffleProvider
      }
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
    }
  }
}
