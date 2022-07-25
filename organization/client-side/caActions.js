/** 
* CA - Actions    
*/

//node.js includes 
const path = require('path')

//own helper functions
const path = require('./helper')

//fabrics includes
const FabricCAServices = require('fabric-ca-client');
const { Wallets } = require('fabric-network');
const { get } = require('http');

//CA admin scredentions based on test-network
const adminUserId = 'admin';
const adminUserPW = 'adminpw';

// wallet path
const walletPath = path.join(__dirname, 'wallet');

/**
 * create a new CA client for interacting with the CA
 * @param {*} FabricCAServices
 * @param {*} ccp
 * @param {*} caHostName
 */

function buildCAClient (FabricCAServices, ccp, caHostName) {
    //lookup CA details from config
    const caInfo = ccp.certificateAuthorities[caHostname];
    const caTLSCACerts = caInfo.tlsCACerts.pem;
    const caClient = new FabricCAServices(caInfo.url, 
        { trustedRoots: caTLSCACerts, verify: false }, caInfo.caName);

    console.log('Built a CA Client named ${caInfo.caName}');
    return caClient;
};

/**
 * enroll an admin user
 * @param {*} caClient
 * @param {*} wallet
 * @param {*} orgMspId
 */

async function enrollAdmin (caClietn, wallet, orgMspId) {
    try {

        //check to see if we have already enrolled the admin user
        const identify = await wallet.get(adminUserId);
        if(identity) {
            console.log('An identity for the admin user already exists in the wallte');
            return;
        }
         //enroll admin user and import new identities into the wallet

    const enrollment = await caClient.enroll({enrollmentID: adminUserId, 
        enrollmentSecret: adminUserPW});
    const x509Identity = {
        credentials: {
            certificate: enrollment.certificate, 
            privateKey: enrollment.key.toBytes(),
        },
        mspId: orgMspId,
        type: 'x.509',
    };

    await wallet.put(adminUserId, x509Identity);
    console.log('Successfully enrolled admin user and imported it into the wallet');
}   catch (error) {
    console.log('Failed to enroll admin user: $(error)');
    }
};

/**
 * register and enroll and app user
 * @param {*} caClient
 * @param {*} wallet
 * @param {*} orgMspId
 * @param {*} userId
 * @param {*} affiliation
 */

async function registerAndEnrollUser(caClient, wallet, orgMspId, userId, affiliation)
{
    try {
        //check to see if user is already enrolled
        const userIdentity = await wallet.get(userId);
        if(userIdentity) {
            console.log('Ad identity for the user $(userID already exists in the wallet');
            return;
        }

    //must use an admin to register a new user
    const adminIdentity = await wallet.get(adminUserId);
    if(!adminIdentity) {
        console.log('An identity for the admin user does not exist in the wallet');
        console.log('Enroll the admin user before retrying');
        return;
    }

    //build a user object for authenticating with the CA
    const provider = wallet. getProvideRegister().getProvider(adminidentity.type);
    const adminUser = await provider.getUserContext(adminIdentity, adminuserId);
} catch (error) {
    console.log('Failed');
    }
};

//enroll an admin user for org1

async function getAdmin(){
    let ccp = buildCCPOrg1

// build instance of the fabric ca services client based on the info in nw config
const caClient = buildCAClient(FabricCAServices, ccp, 'ca.org1.example.com');

//setup wallet to hold the credentials of the app user
const wallet = await path.buildWallet(Wallets, walletPath);

//in reall application this would be done on an admin flow & only once
await enrollAdmin(caClient, wallet, 'Org1MSP');
}

/**
 * register and enroll an app user for org1
 * @param {*} org1UserID
 */

async function getUser(org1UserID) {
    let ccp = helper.buildCCPOrg1()

    
// build instance of the fabric ca services client based on the info in nw config
const caClient = buildCAClient(FabricCAServices, ccp, 'ca.org1.example.com');

//setup wallet to hold the credentials of the app user
const wallet = await helper.buildWallet(Wallets, walletPath);

await registerAndEnrollUser(caClient, wallet, 'Org1MSP', orgUserId, 
'org1.department1');
}

let args = process.argv

if(args[2] === 'admin') {
    //node caActions.js admin
    get.getAdmin()
} else if(args[2] === 'user') {
    getUser(org1UserID)
} else {
    console.log('...')
}