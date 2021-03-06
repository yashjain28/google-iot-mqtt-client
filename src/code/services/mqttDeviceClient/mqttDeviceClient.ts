/**
 * Type: Micro Service
 * Description: A short-lived service which is expected to complete within a fixed period of time.
 * @param {CbServer.BasicReq} req
 * @param {string} req.systemKey
 * @param {string} req.systemSecret
 * @param {string} req.userEmail
 * @param {string} req.userid
 * @param {string} req.userToken
 * @param {boolean} req.isLogging
 * @param {[id: string]} req.params
 * @param {CbServer.Resp} resp
 */

import getRandomValues from "polyfill-crypto.getrandomvalues";

global.crypto = { getRandomValues };

import jwt from "jsonwebtoken";

const createJwt = (projectId, prv_key, algorithm) => {
  // Create a JWT to authenticate this device. The device will be disconnected
  // after the token expires, and will have to reconnect with a new token. The
  // audience field should always be set to the GCP project id.
  const token = {
    iat: parseInt(Date.now() / 1000),
    exp: parseInt(Date.now() / 1000) + 20 * 60, // 20 minutes
    aud: projectId,
  };
  const privateKey = Buffer.from(prv_key, "utf8");

  return jwt.sign(token, privateKey, { algorithm: algorithm });
};

const projectId = `clearblade-ipm` || GoogleIoTConfig.PROJECT_ID;
const deviceId = `mqtt-testing-device` || GoogleIoTConfig.DEVICE_ID;
const registryId = `mqtt-testing-registry` || GoogleIoTConfig.REGISTRY_ID;
const region = `us-central1` || GoogleIoTConfig.REGION;
const algorithm = `RS256` || GoogleIoTConfig.ALGORITHM;
const mqttBridgeHostname =
  `mqtt.googleapis.com` || GoogleIoTConfig.MQTT_BRIDGE_HOSTNAME;
const mqttBridgePort = 8883;
const messageType = `events` || GoogleIoTConfig.MESSAGE_TYPE;
const mqttClientId = `projects/${projectId}/locations/${region}/registries/${registryId}/devices/${deviceId}`;
const private_key = GoogleIoTConfig.PRIVATE_KEY;
const username = GoogleIoTConfig.USERNAME;

function mqttDeviceClient(req, resp) {
  // These are parameters passed into the code service
  log("Google Cloud IoT Core MQTT example.");

  var params = req.params;
  var options = {
    address: mqttBridgeHostname,
    port: mqttBridgePort,
    client_id: mqttClientId,
    use_tls: true,
    username: username,
    password: createJwt(projectId, private_key, algorithm),
  };
  var deviceData = params.data || {
    data: 91,
    deviceID: "myDevice",
  };
  var info =
    typeof deviceData !== "string" ? JSON.stringify(deviceData) : deviceData;
  var client = new MQTT.Client(options);
  const TOPIC = `/devices/${deviceId}/${messageType}`;

  client.publish(TOPIC, info).then(
    function (resolve) {
      log(resolve);
      resp.success("success");
    },
    function (reason) {
      log(
        "failed to publish device data " + deviceData + ": " + reason.message
      );
      resp.error("failure");
    }
  );
}

global.mqttDeviceClient = mqttDeviceClient;
