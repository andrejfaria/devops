import { ComponentResource, CustomResourceOptions } from '@pulumi/pulumi'
import { DpsDockerImagerepo } from "../resources/ecr-repository"

type DpsBackendArgs = {
  Name: string;
  Product: string;
}

export class DpsBackend extends ComponentResource {
  constructor(args: DpsBackendArgs, opts?: CustomResourceOptions) {

    const resourceName = `${args.Product}-${args.Name}`;
    super("pkg:index:DpsBackend", resourceName, {}, opts);

    new DpsDockerImagerepo({
      Name: args.Name,
      Product: args.Product,
      Immutable: false
    },
      {
        parent: this,
      })
  }
}