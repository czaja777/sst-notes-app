const config = {
  SENTRY_DSN: "https://9d83e24a4a704681965db2cdc8b61f88@o4505511780614144.ingest.sentry.io/4505511781859328",
  STRIPE_KEY: "pk_test_51NAboUAUdoTA1kRSIKA3POM15rdqsSLYpz4JAyp9d2UZiJD4CFMRXq1S5Ne2okr4gFAdYlHVKUIV4UePovaNkcQ500mtXHtEWS",
  MAX_ATTACHMENT_SIZE: 5000000,

  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
  social: {
    FB: "926748195063587"
  },
};

export default config;