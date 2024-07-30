output "cloudfront_id" {
  sensitive = false
  value     = aws_cloudfront_distribution.s3_distribution.id
}

output "s3_bucket_name" {
  sensitive = false
  value     = "s3://${var.domain_name}"
}
