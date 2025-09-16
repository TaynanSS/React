import type { Post } from '../types/Post';

type Props = {
    data: Post;
}

export const PostItem = ({ data }: Props) => {

    return (
        <div className="my-4">
            <hr className="border-black"></hr>
            <h4 className="font-bold">{data.title}</h4>
            <small>#{data.id} - Usuário: {data.userId}</small>
            <p>{data.body}</p>
            <hr className="border-black"></hr>
        </div>
    )
}