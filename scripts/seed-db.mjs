
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getProductsWithIds, getProjectsWithIds } from '../src/lib/seed-data.js';

// Initialize Firebase Admin SDK
initializeApp();

const db = getFirestore();

async function seedProducts() {
  const productsCollection = db.collection('products');
  const products = getProductsWithIds();
  console.log(`Starting to seed ${products.length} products...`);

  for (const product of products) {
    await productsCollection.doc(product.id).set(product);
    console.log(`- Seeded ${product.name}`);
  }

  console.log('Product seeding complete.');
}

async function seedProjects() {
    const projectsCollection = db.collection('project_case_studies');
    const projects = getProjectsWithIds();
    console.log(`Starting to seed ${projects.length} projects...`);

    for (const project of projects) {
        await projectsCollection.doc(project.id).set(project);
        console.log(`- Seeded ${project.title}`);
    }
    console.log('Project seeding complete.');
}


async function main() {
  try {
    await seedProducts();
    await seedProjects();
    console.log('\nDatabase seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

main();
