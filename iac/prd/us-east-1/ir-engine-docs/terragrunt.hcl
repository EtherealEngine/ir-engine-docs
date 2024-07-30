# Source terraform IaC
include "root" {
  path = find_in_parent_folders()
}

generate "provider" {
  path = "provider.tf"
  if_exists = "overwrite_terragrunt"
  contents = <<EOF
provider "aws" {
  region = "${local.region}"
  allowed_account_ids = ["${local.account_id}"]
  assume_role {
    role_arn = "${local.account_role_arn}"
  }
}
EOF
}

terraform {
  source = local.base_source_url
}

locals {
  account_env_vars = read_terragrunt_config(find_in_parent_folders("account.hcl"))
  region_vars      = read_terragrunt_config(find_in_parent_folders("region.hcl"))
  region           = local.region_vars.locals.aws_region
  vpc_id           = local.region_vars.locals.vpc_id
  env              = local.account_env_vars.locals.aws_profile
  account_id       = local.account_env_vars.locals.aws_account_id
  account_role_arn = local.account_env_vars.locals.aws_role_arn

  base_source_url  = "${get_repo_root()}/iac/modules/static-website"
}


inputs = {
  app_name = "ir-engine-docs"
  environment = local.env
  vpc_id = local.vpc_id
  domain_name = "docs.ir.world"
  s3_access_role = local.account_role_arn
  default_tags = {
    terraform   = "true"
    iac         = "ir-engine-docs"
    environment = local.env
    client      = "IR"
  }
}
