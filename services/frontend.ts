import { ComponentResource, CustomResourceOptions } from '@pulumi/pulumi'
import { DpsBucket } from "../resources/bucket"

type DpsFrontendArgs = {
  Name: string;
  Product: string;
}

export class DpsFrontend extends ComponentResource {
  constructor(args: DpsFrontendArgs, opts?: CustomResourceOptions) {

    const resourceName = `${args.Product}-${args.Name}`;
    super("pkg:index:DpsFrontend", resourceName, {}, opts);


    new DpsBucket({
      Name: args.Name,
      Product: args.Product,
      Public: true,
    },
      {
        parent: this
      });
  }
}