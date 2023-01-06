const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event) {
     event.partitionKey?candidate = event.partitionKey: candidate = createHash(JSON.stringify(event));
  }

   candidate = (candidate) ? (candidate && typeof(candidate) !== "string") ?  JSON.stringify(candidate) : candidate : TRIVIAL_PARTITION_KEY

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    console.log("candidate length is greater than 256", candidate);
    candidate = createHash(candidate); 
  }
  return candidate;
};

const createHash = (data) => {  return crypto.createHash("sha3-512").update(data).digest("hex"); }