import React from 'react'

type PostsCardProps = {
    title: String,
    date: String,
    image: String,
    author: String,
    category: String,
    description: String
}

function PostsCard({ title, date, image, author, category, description }: PostsCardProps) {
    return (
        <>
            <div className="grid grid-cols-4 gap-4 mt-5">
                <div className="col-span-1">
                    <img src="https://cdn.mos.cms.futurecdn.net/4MLyNZ66GSMUp7z49Q8k3K.jpg" alt="image" />
                </div>
                <div className="col-span-2">
                    <h2 className='text-xl font-medium'>
                        <a href="/">{title}</a>
                    </h2>
                    <p>{date}  | By {author} | {category}</p>
                    <p className='mt-3'>{description}</p>
                </div>
            </div>
        </>
    )
}

export default PostsCard
