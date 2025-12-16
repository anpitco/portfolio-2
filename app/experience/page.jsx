import Image from 'next/image';
import { ImageWithSizeOverlay } from './image-with-size-overlay';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';

export const metadata = {
    title: 'Anna Pitcock'
};

const sampleImage = '/images/corgi.jpg';

const ctx = getNetlifyContext();
const forceWebP = ctx === 'dev';
const sampleImageSrcSet = [640, 1280, 2048]
    .map((size) => {
        return `/.netlify/images?url=${sampleImage}&w=${size}${forceWebP ? '&fm=webp' : ''} ${size}w`;
    })
    .join(', ');
const AlignedTextComponent = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Pushes items to the far ends of the container
    width: '100%', // Ensures the container spans the full width available
  };

const kinectiveJob = `
* Create and manage cloud infrastructure and software, OS configuration and deployment, databases and internal software development tools
* Create and deploy internal software stack to cloud and on-prem environments
* Assist software development team with software, database, and network configuration
`;

const oracleJob = `
* Contributed to the development of two major services: the Marketplace Project and the Certificate-Based Resource Principal Service,
both critical to OCI’s strategic initiatives.
* Designed and implemented numerous RESTful API endpoints to support scalable service operations.
* Utilized Java and Python for backend service development and Terraform for infrastructure as code, enabling reliable deployment and
management of OCI resources.
* Developed and integrated detailed service metrics and alarms for enhanced observability and monitoring using Prometheus. Created
subsequent dashboards in Grafana to track metrics.
* Authored internal documentation to support service adoption, maintenance, and onboarding using Confluence and runbooks.
* Provided on call support every 2 months on a rotational basis supporting production regions and users.
* Participated in deployment rotation to release latest code to development, integration, and production regions using Shepherd.
* Agile experience includes participating in daily stand-ups, sprint planning, and retrospectives.
* Skilled in using Jira for Agile project management, including managing backlogs, sprints, and issue tracking.
`;

const exampleCodeSnipet = `
In the code below, a regular \`<img>\` tag is used in both cases for a framework-agnostic example. 
Other than using \`next/image\` or rolling your own \`<img>\` tags, you can also use the excellent [unpic-img](https://unpic.pics/).

~~~jsx
// <== On the left, the original image
<img src="/images/corgi.jpg" alt="Corgi" />

// ==> On the right, explicitly using Netlify Image CDN endpoint for a responsive image
<img 
  srcSet="/.netlify/images?url=images/corgi.jpg&w=640 640w, /.netlify/images?url=images/corgi.jpg&w=1280 1280w, /.netlify/images?url=images/corgi.jpg&w=2048 2048w"
  sizes="(max-width: 1024px) 100vw, 1024px" 
  alt="Corgi" 
/>
~~~
`;

const devModeWarning = `
In local development, optimization is performed locally without automatic format
detection, so format is set to WebP.
`;

                {/* <figure
                    className="relative grid w-full overflow-hidden border-2 border-white rounded-lg select-none diff aspect-3/2"
                    tabIndex="0"
                >
                    <div className="relative col-start-1 row-start-1 overflow-hidden border-r-2 z-1 border-r-white diff-item-1">
                        <div>
                            <ImageWithSizeOverlay src="/images/corgi.jpg" />
                        </div>
                    </div>
                    <div className="relative col-start-1 row-start-1 diff-item-2" tabIndex="0">
                        <div>
                            <ImageWithSizeOverlay
                                srcSet={sampleImageSrcSet}
                                sizes={sampleImageSrcSet}
                                overlayPosition="right"
                            />
                        </div>
                    </div>
                    <div className="relative h-2 col-start-1 row-start-1 overflow-hidden opacity-0 resize-x diff-resizer z-1 min-w-4 cursor-ew-resize top-1/2"></div>
                </figure> */}

export default function Page() {
    return (
        <div style={containerStyle}>
            <section>
                {/* <ContextAlert
                    addedChecksFunction={(ctx) => {
                        return ctx === 'dev' ? devModeWarning : null;
                    }}
                    className="mb-6"
                /> */}
                <h1>Experience</h1>
            </section>
            <section>
                <h2 className="mb-6">Kinective</h2>
                <span><h3>Associate DevOps Engineer</h3></span>
                <span><h3>January 2026 - Present</h3></span>
                <Markdown content={kinectiveJob} className="mb-12" />
            </section>
            <section>
                <h2 className="mb-6">Oracle</h2>
                <h5> Software Engineer <pre>September 2023 - September 2025</pre></h5>
                <Markdown content={oracleJob} className="mb-12" />
            </section>
        </div>
    );
}
