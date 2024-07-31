import { User } from '@/components/templates'

export default function UserPage({ params }: { params: { id: string } }) {
    return <User id={params.id} />
}
