
import { headers } from "next/headers";
import { auth } from "firebase-admin";
import { firestore } from "./server";

async function getAuthenticatedAppForUser() {
  const idToken = headers().get("X-Firebase-AppCheck");

  if (!idToken) {
    throw new Error("No Firebase ID token present. User is not authenticated.");
  }

  try {
    const decodedToken = await auth().verifyIdToken(idToken);
    // You could return a specific user app instance here if you had multi-tenancy
    // For now, we just verify and return the admin firestore instance.
    return { firestore, uid: decodedToken.uid };
  } catch (error) {
    console.error("Error verifying Firebase ID token:", error);
    throw new Error("Invalid Firebase ID token. User authentication failed.");
  }
}

export const authedDb = {
  get: getAuthenticatedAppForUser,
};
