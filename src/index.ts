#!/usr/bin/env node

import yargs from 'yargs/yargs';
import chalk from 'chalk';

const argvParser = yargs(process.argv.slice(2)).options({
  a: { type: 'boolean', default: false },
  b: { type: 'string', demandOption: true },
  c: { type: 'number', alias: 'chill' },
});

const main = async () => {
  const argv = await argvParser.argv;

  console.log(chalk.red('hello-ts-cli'));

  console.log(`a = ${chalk.blue(argv.a)}`);
  console.log(`b = ${chalk.green(argv.b)}`);
  console.log(`c = ${chalk.yellow(argv.c)}`);
};

main();
