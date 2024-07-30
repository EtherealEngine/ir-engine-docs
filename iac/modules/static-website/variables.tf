variable "app_name" {
  type        = string
  description = "REQUIRED: Name of application"
}

variable "environment" {
  type        = string
  description = "REQUIRED: dev,stg,prd, etc."
}

variable "vpc_id" {
  type        = string
  description = "REQUIRED: VPC ID"
}

variable "domain_name" {
  type        = string
  description = "REQUIRED: Website Domain Name"
}

variable "s3_access_role" {
  type        = string
  description = "Role to give S3 access to"
  default     = ""
  sensitive   = true
}

variable "default_tags" {
  type        = map(string)
  description = "Default tags for resource"
  default     = {}
}
