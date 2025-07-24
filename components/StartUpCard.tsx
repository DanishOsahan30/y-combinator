
import { cn, convertDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Author, Startup } from '@/sanity/types'
import { Skeleton } from './ui/skeleton'


export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author }

const StartUpCard = ({ post }: { post: StartupTypeCard }) => {
    const { _createdAt, views, author, _id, description, image, category, title } = post
    return (
        <li className='startup-card group'>
            <div className='flex-between'>
                <p className='startup_card_date'>
                    {convertDate(_createdAt)}
                </p>
                <div className='flex gap-1.5'>
                    <EyeIcon className='size-6 text-primary' />
                    <span className='text-16-medium'>
                        {views}
                    </span>
                </div>
            </div>
            <div className='flex-between mt-5 gap-5'>
                <div className='flex-1'>
                    <Link href={`/user/${post.author?._id}`}>
                        <p className='text-16-medium line-clamp-1'>
                            {author?.name}
                        </p>
                    </Link>
                    <Link href={`/startup/${post._id}`}>
                        <h3 className='text-26-semibold line-clamp-1'>
                            {title}
                        </h3>
                    </Link>
                </div>
                <Link href={`/user/${author?._id}`}>
                    <Image src={author?.image || 'https://placehold.co/50x50'} width={50} height={50} alt="Author" className='rounded-full' />
                </Link>
            </div>
            <Link href={`/startup/${_id}`}>
                <p className='startup-card_desc '>
                    {description}
                </p>
                <Image src={image || 'https://placehold.co/400x400'} width={400} height={400} alt="placeholder" className='startup-card_img' />
            </Link>
            <div className='flex-between gap-5 mt-5'>
                <Link href={`/?query=${category?.toLowerCase()}`}>
                    <p className='text-16-medium'>
                        {category}
                    </p>
                </Link>
                <Button className='startup-card_btn' asChild>
                    <Link href={`/startup/${_id}`}>
                        Details
                    </Link>
                </Button>
            </div>
        </li>
    )
}

export const StartupCardSkeleton = () => (
    <>
        {[0, 1, 2, 3, 4].map((index: number) => (
            <li key={cn("skeleton", index)}>
                <Skeleton className="startup-card_skeleton" />
            </li>
        ))}
    </>
);
export default StartUpCard