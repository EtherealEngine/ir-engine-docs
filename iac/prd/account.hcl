locals {
  account_name   = "prd"
  aws_profile    = "prd"
  aws_account_id = get_env("AWS_ACCOUNT_ID")
  aws_role_arn   = get_env("AWS_ROLE_ARN")
}
