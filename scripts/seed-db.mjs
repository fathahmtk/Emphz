import { initializeApp } from 'firebase/app';
import { getFirestore, collection, writeBatch } from 'firebase/firestore';
import { getProductsWithIds } from '../src/lib/seed-data.ts';
import { firebaseConfig } from '../src/firebase/config.ts';

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

async function seedProducts() {
  const productsCollection = collection(db, 'products');
  const products = getProductsWithIds();
  const batch = writeBatch(db);

  products.forEach((product) => {
    const docRef = collection(productsCollection).doc(product.id);
    batch.set(docRef, product);
  });

  try {
    await batch.commit();
    console.log(`✅ Successfully seeded ${products.length} products.`);
  } catch (error) {
    console.error('❌ Error seeding products:', error);
  }
}

async function main() {
  console.log('🌱 Starting database seed...');
  await seedProducts();
  console.log('✅ Database seed complete.');
  // The process will exit automatically when the script is done.
  // We need to forcefully exit because the Firebase connection stays open.
  process.exit(0);
}

main();
