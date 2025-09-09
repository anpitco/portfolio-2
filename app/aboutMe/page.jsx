import { revalidateTag } from 'next/cache';
import { Card } from 'components/card';
import { Markdown } from 'components/markdown';
import { SubmitButton } from 'components/submit-button';

export const metadata = {
    title: 'Anna Pitcock'
};
// const tagName = 'randomWiki';
// const randomWikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/random/summary';
// const maxExtractLength = 200;
// const revalidateTTL = 60;

const schooling = `
I went to school at Colorado School of Mines and graduated with a Bachelors degree in Computer Science. Go Orediggers!

Throughout my time at Mines, I was able to explore three major areas of interest: computer science, math, and enconoics. 
I obtained a bachelors degree, minor, area of special interest, and a certificate while there. 
`;

const native = `
I have was born and have lived in Colorado my whole life! 
I've lived in various cities (Golden, Highlands Ranch, Lone Tree, Parker), but have never strayed from my roots!

My hobbies include hiking, camping, paddle boarding, reading and hammocking in a park, skiing in the winter, and I absolutely love leaf peeping in the fall. 
`;

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">Who is Anna Pitcock?</h1>
            <section>
                <h2>Schooling</h2>
                <Markdown content={schooling} className="mb-12" />
            </section>
            <section>
                <Markdown content={native} className="mb-12" />
            </section>
        </>
    );
}
// async function RandomWikiArticle() {
//     const randomWiki = await fetch(randomWikiUrl, {
//         next: { revalidate: revalidateTTL, tags: [tagName] }
//     });

//     const content = await randomWiki.json();
//     let extract = content.extract;
//     if (extract.length > maxExtractLength) {
//         extract = extract.slice(0, extract.slice(0, maxExtractLength).lastIndexOf(' ')) + ' [...]';
//     }

//     return (
//         <Card className="max-w-2xl">
//             <h3 className="text-2xl text-neutral-900">{content.title}</h3>
//             <div className="text-lg font-bold">{content.description}</div>
//             <p className="italic">{extract}</p>
//             <a target="_blank" rel="noopener noreferrer" href={content.content_urls.desktop.page}>
//                 From Wikipedia
//             </a>
//         </Card>
//     );
// }
