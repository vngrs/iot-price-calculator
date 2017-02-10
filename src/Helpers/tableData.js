export const headings = [
  "Service",
  "Role",
  "# of Instances/ Shard/ Data",
  "Type",
  "Price/Instance Unit/Hour",
  "Hourly Total",
  "Monthly Total",
  "Yearly Total"
]

export const variables = [
  "Variables",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
]

export const numberOfDevices = [
  "Number of Devices",
  "10.000",
  "",
  "",
  "",
  "",
  "",
  ""
]

export const dataInterval = [
  "Data Sending Interval (Sec)",
  "10",
  "",
  "",
  "",
  "",
  "",
  ""
]

export const lambdaFunction = [
  "Lambda Function Count",
  2,
  "",
  "",
  "",
  "",
  "",
  ""
]

export const dataVolumePerSec = [
  "Data Volume Per Second",
  "1.000",
  "",
  "",
  "",
  "",
  "",
  ""
]

export const S3Data = [
  "S3",
  "Permanent Datastore",
  250,
  "GB",
  "0,03000",
  "0,010",
  8,
  90
]

export const kinesisStream = [
  "Kinesis Stream",
  "Data Streaming",
  "1.000",
  "Request Per Second",
  "0,03400",
  "0,229",
  171,
  "2,048"
]

export const lambdaData = [
  "Lambda",
  "Writing to Firehose & Elasticsearch",
  2,
  "Total Lambda Function",
  "0,00806",
  "0,161",
  "120",
  "1,440"
]

export const kinesisFirehose = [
  "Kinesis Firehose",
  "Ingesting Data to S3",
  1250,
  "GB",
  "0,05840",
  " ",
  73,
  876
]

export const ec2Data = [
  "EC2",
  "NodeJS - Elasticbeanstalk - Autoscale",
  2,
  "c4.large",
  "0,11300",
  "0,226",
  168,
  "2,018"
]

export const elasticLoadBalancer = [
  "Elastic Load Balancer",
  "For Elasticbeanstalk (Data transfer between AZs)",
  "1.000",
  "GB",
  "0,12500",
  " ",
  125,
  "1.500"
]

export const elasticSearch = [
  "Elasticsearch",
  "Data Storage and Kibana (based on 1 months, min 1.6tb storage)",
  1,
  "i2.xlarge.elasticsearch",
  "1,31300",
  "1,313",
  977,
  "11.722"
]

export const emrHive = [
  "EMR / Hive",
  "Bulk Processing - Daily",
  1,
  "Job",
  "100,00",
  " ",
  100,
  "1.200"
]

export const totalString = [
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  "Total",
  " "
]

export const averageMonthlyCost = [
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  "Average Monthly Cost",
  "$1.741,18"
]

export const totalYearlyCost = [
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  "Total 1 Year Cost",
  "$20.894,18"
]

export const perDeviceCost = [
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  "Per Device Yearly Cost",
  "$2,09"
]
