import { DpsFrontend } from "./services/frontend";


function main() {
  new DpsFrontend({
    Name: "dps",
    Product: "devops-frontend",
  })
}

main();