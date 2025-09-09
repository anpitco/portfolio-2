import Link from 'next/link';
import Image from 'next/image';
import githubLogo from 'public/images/github-mark-white.svg';
import linkedInLogo from 'public/images/linkedInLogo.png';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <Link
                href="https://github.com/netlify-templates/next-platform-starter"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex lg:ml-auto"
            >
                <Image src={githubLogo} alt="GitHub logo" className="w-7" />
            </Link>
            <Link 
                href="https://www.linkedin.com/in/anna-pitcock/"
                className="pt-16 pb-12 sm:pt-24 sm:pb-16"
            >
                <Image src={linkedInLogo} width={50} height={50} alt="LinkedIn Logo"></Image>
            </Link>
        </footer>
    );
}
