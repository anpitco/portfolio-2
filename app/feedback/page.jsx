import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from 'components/markdown';

export const metadata = {
    title: 'Anna Pitcock'
};

const explainer = `
I am always looking to improve on my work and an open to any suggestions you have. 
This form gets sent right to my email once you hit submit so I will get your feedback immediately. 
Thank you for your feedback!
`;

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">Please let me know your thoughts!</h1>
            <Markdown content={explainer} className="mb-12" />
            <div className="flex justify-center">
                <FeedbackForm />
            </div>
        </>
    );
}
