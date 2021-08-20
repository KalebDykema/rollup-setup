function main() {
    import('./foo-deb33593.js').then(({ default: foo }) => console.log(foo));
}

export { main as default };
