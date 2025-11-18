
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, writeBatch } from 'firebase/firestore';
import { getProductsWithIds, getProjectsWithIds } from '../src/lib/seed-data.ts';
import { firebaseConfig } from '../src/firebase/config.ts';

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

async function seedDatabase() {
  const batch = writeBatch(db);

  // Seed Products
  const products = getProductsWithIds();
  const productsCollection = collection(db, 'products');
  console.log(`Seeding ${products.length} products...`);
  products.forEach((product) => {
    const docRef = collection(productsCollection, product.id);
    batch.set(docRef, product);
  });

  // Seed Projects
  const projects = getProjectsWithIds();
  const projectsCollection = collection(db, 'project_case_studies');
  console.log(`Seeding ${projects.length} projects...`);
  projects.forEach((project) => {
    const docRef = collection(projectsCollection, project.id);
    batch.set(docRef, project);
  });

  try {
    await batch.commit();
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Firebase doesn't have a db.close() like some other DBs.
    // The script will exit automatically.
    process.exit(0);
  }
}

seedDatabase();
