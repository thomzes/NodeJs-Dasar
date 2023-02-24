function samplePromise() {
    return Promise.resolve("Thomas");
}

async function run() {
    const name = await samplePromise();
    console.info(name);
};

run();

// Kalau mau jadi async harus di declare di functionnya dulu