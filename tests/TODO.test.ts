import { beforeEach } from 'mocha';
const { ethers } = require('hardhat');
import { assert, expect} from 'chai';


let contractFact: any;
let contractInst: any;
let accounts: any;


beforeEach('TODO', async function () {
    
    contractFact = await ethers.getContractFactory("TODO");
    contractInst = await contractFact.deploy();
    await contractInst.deployed();
});

describe('TODO Contract', ()=>{

    it("should fetch address", () => {
        console.log("Im contract a", contractInst.address);
    });

    it('add tasks to the list', async()=>{
        const addedTask = await contractInst.addTasks('visit mummy');
        assert(addedTask);
    });

    it('shows the tasks', async()=>{
        const showedTask = await contractInst.showTasks();
        expect(showedTask).to.be.an('array')
    });
})
    












// const { expect, assert } = require("chai");
// const { ethers } = require("hardhat");


// console.log(ethers)

// let contract: TODO;
// let todo;

// beforeEach(async()=>{
//     const TODO = await ethers.getContractFactory('TODO');
//     todo = await TODO.deploy();
//     await todo.deployed();
// })

// describe('TODO Testing Contract', async() => {

//     it ("should do nothing", async() => {
//         console.log("hello");
//     })

//     it ("should print contract's address", async() => {
//         const addr = todo.address;
//         console.log("Hello from contract", addr);
//     })
// })



// let contract: TODO;

// beforeEach(async()=>{
//     const TODO = await ethers.getContractFactory('TODO');
//         let todo = await TODO.deploy();
//         await todo.deployed();
// })

// describe('TODO Contract', ()=>{

//     it('deploys the contract', async()=>{
//         assert.isOk(ethers.utils.getAddress(contract))
//     });

//     it('add tasks to the list', async()=>{
//         const addedTask = await contract.addTasks('visit mummy');
//         assert.isArray(addedTask);
//     });

//     it('shows the tasks', async()=>{
//         const showedTask = await contract.showTasks();
//         expect(showedTask).to.be.an('array')
//     });
// });




