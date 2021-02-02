
// convert the key from camel case to normal spaced word for use in error response.
const convertKey = key => key.replace(/([A-Z])/g, " $1").toLowerCase();

// These are the only fields we want to process and return.
const validKeys = ["firstName", "lastName"];

// returns only the fields listed in validKeys.
const filterKeys = (keys, validKeys) => keys.filter(key => validKeys.includes(key));

// check to make sure we have all the data we want, and if not, report which field is missing.
const hasAllFields = (keys, validKeys) => {
  validKeys.forEach(validKey => {
    if (!keys.includes(validKey)) {
      throw new Error(`${validKey} field missing. Please include ${validKey} and try again.`)
    }
    return;
  })
}

// check that values are strings, and if so, not empty strings.
const isValidValue = (value, key) => {
  if (typeof value === 'string' && value.length > 1) return;
  throw new Error(`You must supply a valid ${convertKey(key)}.`);
}

const validateAndConvert = obj => {
  const data = Array.from(Object.keys(obj));
  const filteredKeys = filterKeys(data, validKeys);
  hasAllFields(filteredKeys, validKeys);

  return filteredKeys.reduce((acc, key) => {
    // check for validity
    isValidValue(obj[key], key);
    // Capitalize both the key, and the value.
    acc[key.toUpperCase()] = obj[key].toUpperCase();
    return acc;
  }, {});
}


export default function handler(req, res) {
  // If method is not POST, reject with message.
  if (req.method !== 'POST') {
    res.status(405).json({ payload: "This route only accepts POST requests. Please double check your method and try again." });
  }
  try {
    const results = validateAndConvert(JSON.parse(req.body));
    res.status(200).json({ payload: results });
  } catch (e) {
    res.status(422).json({ payload: `Error: ${e.message}` });
  }
}