function samplePromise() {
    return Promise.resolve("Thomas");
}
const name = await samplePromise();
console.info(name);

// Auto async