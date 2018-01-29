const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require('web3');
const {interface , bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'alcohol remove toddler enact merry vault expire idle fetch truth hamster axis',
    'https://rinkeby.infura.io/y1WRRP1jNiEnCR2V0dDZ '
);

const web3 = new Web3(provider);

const deploy = async () =>{
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account',accounts[0]);

	const result  = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode , arguments:[ 'Hi there!'] })
        .send({from:accounts[0], gas:'1000000'});    
        
        console.log('Contract deployed to ' ,result.options.address);
};

deploy(); 