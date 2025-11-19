
'use client';

import { Button } from '@/components/ui/button';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { FirestorePermissionError } from '@/firebase';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Check if the error is our custom FirestorePermissionError by looking for the unique properties we added to it.
  const isPermissionError = error instanceof FirestorePermissionError || (error.name === 'FirebaseError' && 'request' in error);

  return (
    <html>
      <body>
        <SiteHeader />
        <main className="container py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">
              {isPermissionError ? 'Permission Denied' : 'Something Went Wrong'}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {isPermissionError
                ? "It looks like you don't have permission to perform this action or view this data."
                : 'An unexpected error has occurred. Please try again.'}
            </p>
            
            {isPermissionError && (
              <div className="mt-6 text-left">
                <h2 className="text-xl font-semibold font-headline">Debugging Information</h2>
                <p className="text-sm text-muted-foreground mb-2">The following request was denied by Firestore Security Rules. Use this information to update your `firestore.rules` file.</p>
                <pre className="mt-2 rounded-md bg-secondary p-4 text-sm text-secondary-foreground overflow-auto">
                  <code>{error.message}</code>
                </pre>
              </div>
            )}

            <div className="mt-8 flex justify-center gap-4">
              <Button onClick={() => reset()}>Try again</Button>
              <Button variant="outline" asChild>
                <a href="/">Go to Homepage</a>
              </Button>
            </div>
          </div>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
