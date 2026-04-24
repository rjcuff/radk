#!/usr/bin/env node
import { Command } from "commander"
import { add } from "./commands/add.js"
import { diff } from "./commands/diff.js"
import { init } from "./commands/init.js"

const program = new Command()

program
  .name("mono-ui")
  .description("Add mono-ui components to your project")
  .version("0.1.0")

program.addCommand(init)
program.addCommand(add)
program.addCommand(diff)

program.parse()
