import { DpsFrontend } from "./services/frontend";
import { DpsBackend } from './services/backend'


function main() {
  new DpsBackend({
    Name: "dps",
    Product: "devops-backend",
  })
  new DpsFrontend({
    Name: "dps",
    Product: "devops-frontend",
  })
}

main();