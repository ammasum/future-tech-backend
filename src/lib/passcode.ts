import crypto from "node:crypto";

const SCRYPT_KEY_LENGTH = 64;

export function hashPasscode(passcode: string) {
  const salt = crypto.randomBytes(16).toString("hex");
  const derivedKey = crypto
    .scryptSync(passcode, salt, SCRYPT_KEY_LENGTH)
    .toString("hex");

  return `${salt}:${derivedKey}`;
}

export function verifyPasscode(passcode: string, storedValue: string) {
  const [salt, storedHash] = storedValue.split(":");

  if (!salt || !storedHash) {
    return false;
  }

  const derivedKey = crypto
    .scryptSync(passcode, salt, SCRYPT_KEY_LENGTH)
    .toString("hex");

  const storedBuffer = Buffer.from(storedHash, "hex");
  const derivedBuffer = Buffer.from(derivedKey, "hex");

  if (storedBuffer.length !== derivedBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(storedBuffer, derivedBuffer);
}
