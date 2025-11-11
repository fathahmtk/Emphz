import React from 'react';
import { Stat, NavLink } from './ui';

const TestPanel = () => {
  const [shouldThrow, setShouldThrow] = React.useState(false);
  const ErrorThrower = () => {
    if (shouldThrow) {
      throw new Error("Intentional test error");
    }
    return null;
  };
  return (
    <section className="mx-auto max-w-7xl px-4 py-6" aria-label="Component Smoke Tests">
      <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
        <div className="mb-3 text-sm font-semibold text-zinc-300">Component Smoke Tests</div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Stat value=">15 yrs" label="Team composite expertise" />
          <Stat value="IP65/66" label="Ingress protection options" />
          {/* FIX: Removed unused '@ts-expect-error' directives from the following two components.
              The Stat component's props are correctly typed as optional, so no error is thrown for undefined/null values. */}
          <Stat value={undefined} label={undefined} />
          <Stat value={null as unknown as string} label={null as unknown as string} />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-zinc-400">
          <span>NavLink:</span>
          <NavLink href="#home" label="Home" />
          <NavLink href="#solutions" label="Solutions" />
        </div>

        <div className="mt-3 text-xs text-zinc-500">Expected sections present: #products, #specs, #downloads, #partners, #qa, #logistics, #warranty.</div>

        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShouldThrow((s) => !s)}
            className="rounded-lg border border-zinc-700 px-3 py-1 text-xs hover:border-zinc-500"
          >
            {shouldThrow ? "Disable Error" : "Trigger ErrorBoundary"}
          </button>
          <ErrorThrower />
        </div>

        <p className="mt-2 text-xs text-zinc-500">If you can see four Stat tiles and two Nav links without a crash, the fixes are effective.</p>
      </div>
    </section>
  );
};

export default TestPanel;
