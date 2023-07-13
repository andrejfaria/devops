
import { ComponentResource, CustomResourceOptions } from '@pulumi/pulumi'
import { ecr } from "@pulumi/aws";

type DpsDockerImagerepoArgs = {
  Name: string;
  Product: string;
  Immutable: boolean,

}

export class DpsDockerImagerepo extends ComponentResource {
  constructor(args: DpsDockerImagerepoArgs, opts?: CustomResourceOptions) {

    const resourceName = `${args.Product}-${args.Name}`
    super("pkg:index:DpsDockerImagerepo", resourceName, {}, opts);

    new ecr.Repository(args.Name, {
      name: resourceName,
      imageScanningConfiguration: {
        scanOnPush: args.Immutable,
      },
      imageTagMutability: "MUTABLE",
    }, {
      parent: this,
    });


  }
}