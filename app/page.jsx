import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is shows a different quote on each page load!
`;

const ctx = getNetlifyContext();

export default function Page() {
    const today = new Date();

    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <h1 className="mb-4">Anna Pitcock</h1>
                <h3 className="mb-6 text-lg">Software Engineer</h3>
                <p className="mb-6 test-lg">I build fast, secure, scalabe cloud solutions.</p>
                <p>Open for work starting: {today.toDateString()}</p>
            </section>
            
            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
            </section>
        </div>
    );
}
