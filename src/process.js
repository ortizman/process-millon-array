const SHARD = 100000;

async function processHugeArray(params) {
    let array = params.array || [];
    let lambda = params.lambda;
    
    const size = array.length;
    const workers = Math.trunc(size / SHARD) + 1;

    let result = [];
    for (let i = 0; i < workers; i++) {
        result.push(
            ... await lambda(array.slice(i * SHARD, (i + 1) * SHARD))
        );
    }

    return result;
}

module.exports = processHugeArray;