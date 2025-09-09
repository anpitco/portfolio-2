import Link from 'next/link';
import Image from 'next/image';
import githubLogo from 'public/images/github-mark-white.svg';
import linkedInLogo from 'public/images/linkedInLogo.png';

export function Footer() {
    return (
        <footer>
            <Link
                href="https://github.com/netlify-templates/next-platform-starter"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex lg:ml-auto"
            >
                <Image src={githubLogo} width={70} height={70} alt="GitHub logo" />
            </Link>
            <Link 
                href="https://www.linkedin.com/in/anna-pitcock/"
            >
                <Image src={linkedInLogo} width={70} height={70} alt="LinkedIn Logo"></Image>
            </Link>
        </footer>
    );
}
