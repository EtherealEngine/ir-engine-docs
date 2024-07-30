locals {
  account_name   = "prd"
  aws_profile    = "prd"
  aws_account_id = "834331767032"
  aws_role_arn   = "arn:aws:iam::834331767032:role/ir-platform-admin"
  aws_account_id = get_env("AWS_ACCOUNT_ID")
  aws_role_arn   = get_env("AWS_ROLE_ARN")
}
