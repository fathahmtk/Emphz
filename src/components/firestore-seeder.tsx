
'use client';

import { useEffect, useState } from 'react';
import { writeBatch, doc, collection } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { productsSeed, projectsSeed } from '@/lib/seed-data';

export function FirestoreSeeder() {
  const firestore = useFirestore();
  const { toast } = useToast();
  const [isSeeding, setIsSeeding] = useState(false);

  useEffect(() => {
    if (!firestore || isSeeding) return;

    const seedData = async () => {
      // Check if data has already been seeded
      const seededFlag = localStorage.getItem('firestore_seeded_v1');
      if (seededFlag) {
        return;
      }
      
      setIsSeeding(true);
      
      toast({
        title: "Database Seeding",
        description: "Populating the database with sample products and projects. Please wait...",
      });

      try {
        const batch = writeBatch(firestore);

        // Seed products
        const productsCollection = collection(firestore, 'products');
        productsSeed.forEach((product) => {
          const docRef = doc(productsCollection, product.id);
          batch.set(docRef, product);
        });

        // Seed projects
        const projectsCollection = collection(firestore, 'project_case_studies');
        projectsSeed.forEach((project) => {
          const docRef = doc(projectsCollection, project.id);
          batch.set(docRef, project);
        });

        await batch.commit();

        toast({
          title: "Seeding Complete",
          description: "Database has been populated successfully.",
        });

        // Set flag in local storage to prevent re-seeding
        localStorage.setItem('firestore_seeded_v1', 'true');

      } catch (error) {
        console.error("Error seeding database: ", error);
        toast({
          variant: "destructive",
          title: "Seeding Failed",
          description: "Could not populate the database. Check console for errors.",
        });
      } finally {
        setIsSeeding(false);
      }
    };

    // Delay seeding slightly to ensure Firestore is fully initialized
    const timer = setTimeout(seedData, 1000);
    return () => clearTimeout(timer);
    
  }, [firestore, toast, isSeeding]);

  return null; // This component doesn't render anything
}

