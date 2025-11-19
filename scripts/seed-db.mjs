
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, writeBatch } from 'firebase/firestore';
import { firebaseConfig } from '../src/firebase/config.js';
import { getProductsWithIds, getProjectsWithIds } from '../src/lib/seed-data.js';

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

async function seedCollection(collectionName, data) {
  const collectionRef = collection(db, collectionName);
  const batch = writeBatch(db);

  data.forEach((item) => {
    const docRef = collectionRef.doc(item.id);
    batch.set(docRef, item);
  });

  try {
    await batch.commit();
    console.log(`Successfully seeded ${collectionName} with ${data.length} documents.`);
  } catch (error) {
    console.error(`Error seeding ${collectionName}:`, error);
  }
}

async function main() {
  console.log('Starting to seed database...');
  
  const products = getProductsWithIds();
  await seedCollection('products', products);

  const projects = getProjectsWithIds();
  await seedCollection('project_case_studies', projects);

  console.log('Database seeding complete.');
  // Force exit to prevent hanging connection
  process.exit(0);
}

main().catch((error) => {
  console.error('An unexpected error occurred:', error);
  process.exit(1);
});
