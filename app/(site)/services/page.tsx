import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import ServiceGrid from "@/components/service-grid";
export const metadata = { title: "Services" };
export default function ServicesPage(){return(<div className="py-14"><Container><SectionHeading eyebrow="What we do" title="Services built for growth" subtitle="A modern stack with SEO strategy and automation—so your site stays fast, visible, and productive." /><div className="mt-8"><ServiceGrid detailed /></div></Container></div>);} 
