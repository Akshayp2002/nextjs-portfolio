export default function Footer() {
    return (
        <footer className="mt-24 border-t border-neutral-200/70 dark:border-neutral-800/70">
            <div className="mx-auto max-w-6xl px-4 py-8">
                <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
                    Made by{" "}
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                        Akshay
                    </span>{" "}
                    | Powered by{" "}
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                        Next.js
                    </span>
                </p>
            </div>
        </footer>
    );
}
