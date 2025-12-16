import Demo from "./demo";
import { contactSEO } from './seo';
import { Metadata } from 'next';

export const metadata: Metadata = contactSEO;

export default function Page() {
	return <Demo />;
}
