const generate = require('./generate-random-array');
const process = require('./process');
const lambda = require('./lambda');

main();

async function main() {
    let array = generate({size:1000000});

    try {
        let allResponses = await process({array, lambda});
        console.log(allResponses.slice(0, 10));
    } catch (error) {
        console.error(error)
    }
}
