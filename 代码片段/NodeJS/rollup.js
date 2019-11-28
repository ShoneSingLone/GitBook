const rollup = require('rollup');

// see below for details on the options
const inputOptions = {
  input: "./es6-CUploadImg.js"
};

const outputOptions = {
  file: "./es5.js",
  format: "amd",
  // name: "a"
};

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);
  const res = await bundle.generate(outputOptions);
  let code = res.output[0].code;
}

build();