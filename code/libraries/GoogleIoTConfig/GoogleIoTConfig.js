/**
 * Type: Configuration
 * Description: A library that contains a key-value object to be used as constants.
 */

const prv_key =
  "-----BEGIN PRIVATE KEY-----\nMIIEvQIfdsfdaffadffFAASCBKcwggSjAgEAAoIBAQCp12e3sMbr0Q9F\n9BCT9EX/7RtV8uPVPGIZhJjZr9sB3hUz9/ddf3TSohHLyCP/Fqli3+IyW5z/R+S8V\n1iGfLZppOGVqT6pKr4nbwTrp5iLFEf0qLEHk3KQTqd4x8Q+l91pjmggrAhE1O24j\nVnAlc9HzTDXp5lFoZz8XXQpk0+3KcxoK0gOFT91xAVhHWsPOIiwxkxKEOwt12+b3\nc+7IHhasds9Xk+YGZajpxurdZZjJDDeG39HXz4eY0FtkljGM87ol7/gpQ2aJRcT6NF\n3vsHpwY22PO8Tr2BDwGJdHhnJO2Oi4Y/59IT4fdfgA1n2oJVlp1FMjUS6DD+Y7GR2If\n7H2xqq6VAgMBAAECggEARFYQPD+begyO6aWO+gjiFVxQkF9/Pi/ihMPuQEBajUDP\nJS7SaPS3GEraePoX929X7QXLg3geHJz3TgDvXD2cEFQJsiHFsfE5NbtkufHH8aUQ\nSOSvyqbgOa0yYsPMeQmyS7sRKETXqaR05zEDRH56bjsuwiLShIBuSTc9VF5VIgxP\n9Rn92tDsdRYw+6l8AljEVqQFO90lZ7a2mFzvNizQoSRH4OMObeWhDhR8cP7BqHon\nTup8CTxwBVARQL2JFR5nyf52wgyZW0QCbzUQlcSDuQaCnD2LG5LaoObfZEYm5u51\nNPmoOTKYod2spCFf3Zyrz3nHC1WQXm9hqM/TVJg3jQKBgQDYtOKRcBpMJJh5XpPW\nWAvUkoUthblD6eTaQAsfKNO1a/htfY1mkRGVr0icDJxFsNS4XXhFibEtN5cpjwHB\nrLI+JUWCvrhXTOkwgEfmTQBUh1RVD2JJJgHMGZ5hy+yhOms8sR/WMT9amS+tjlUw\n5wflixV1d1IWPSNb0TwTEAx2pwKBgQDIoyCIFXk4+LyTXDR9Xr2mUDqBdJOSguL1\nxlrsJ3DAupTEo0XHNQcFhvcSTp3ECW2WXyeZtB2DnyvJy3Yb/QQ3QWqpQL7MENVe\njpFnUeCg/d89xNpxLg29oNRd+JvxcqBW4hSPxiB/TCA4Q5vCKS9UO1Kq+R4SOB35\ntDvlMgZUYwKBgFW6SR8L3/tbRs5MseNLdXKke/bkPcQ2FQiZ6UxsVEQi8GYwEu4O\nWYyDiQ/ilTekmqJMp7WqoOKoaS5RmnpJnUGkcPkmBbrTfDRpqwfaUlUeLChyK4mQ\ndYmOYO+DQpsNhzq9P0D2vn9Stl/MPLtZye/us5CCoYCWsxQxk7he0u9lAoGBAKL8\nERM7Dmx/cwDqKCGn8rvF9KDxCGg+Nwycg4PPTkLhzrQmRirbIscUqmSOxI5ZclJz\nHgI4VLl1debJhzqZQPF6DKFNXTD8g7f6bJfX5Xgig1T0Mtc6KCNhIOLtcBCloyax\nJS7eLcv7FTlfgoopVq9AOZl2IT1/pKoSBY3cI1QtAoGAUsgOF/uUFC57Lk0+z13l\n2Y8uJ0e2HEPaDbo85+E1xdXRRpGadT1oTN/wEjQSe6xX6u4JTD8IwUiKtLPN3yb2\nTzWMxt4pJjXfjKd+LDlGHBYTwDeGRjOyNCISNlvCci5gqZM5jgHDsby/ebWOwgHX\nhFz/Za2yafsfafsVI14gM=\n-----END PRIVATE KEY-----\n";

const GoogleIoTConfig = {
  PROJECT_ID: "<GOOGLE_PROJECT_ID>",
  DEVICE_ID: "<DEVICE_ID>",
  REGISTRY_ID: "<DEVICE_REGISTRY_ID>",
  REGION: "<GCLOUD_REGION>",
  ALGORITHM: "RS256",
  MQTT_BRIDGE_HOSTNAME: "mqtt.googleapis.com",
  MESSAGE_TYPE: "events",
  PRIVATE_KEY: prv_key,
  USERNAME: "<ANY_USERNAME>",
};
