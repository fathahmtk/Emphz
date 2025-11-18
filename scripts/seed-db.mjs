
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { productsSeed, projectsSeed } from '../src/lib/seed-data.js';

// IMPORTANT: Replace with your service account credentials
// You can generate this file from the Firebase console:
// Project settings > Service accounts > Generate new private key
import serviceAccount from './service-account.json' assert { type: 'json' };

async function seedDatabase() {
  try {
    // Check if the app is already initialized
    if (!global._firebaseApp) {
        global._firebaseApp = initializeApp({
            credential: cert(serviceAccount),
        });
    }
    const db = getFirestore(global._firebaseApp);

    console.log('Starting to seed database...');

    // Seed Products
    console.log('Seeding products...');
    const productsCollection = db.collection('products');
    for (const product of productsSeed) {
      const { id, ...productData } = product;
      await productsCollection.doc(id).set(productData);
      console.log(`  - Seeded product: ${product.name}`);
    }
    console.log('Products seeded successfully.');
    
    // Seed Projects
    console.log('Seeding projects...');
    const projectsCollection = db.collection('project_case_studies');
    for (const project of projectsSeed) {
      const { id, ...projectData } = project;
      await projectsCollection.doc(id).set(projectData);
      console.log(`  - Seeded project: ${project.title}`);
    }
    console.log('Projects seeded successfully.');


    console.log('Database seeding complete!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
