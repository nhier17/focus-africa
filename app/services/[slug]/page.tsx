import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/service";
import ServiceDetails from "@/components/ServiceDetails";

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ServicePage({
                                              params,
                                          }: ServicePageProps) {
    const { slug } = await params;

    const service = SERVICES.find(
        (service) => service.slug === slug
    );

    if (!service) {
        notFound();
    }

    return <ServiceDetails service={service} />;
}