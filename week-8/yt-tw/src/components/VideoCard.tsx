
export function VideoCard(props: any) {
    return <div className="p-3">
            <img src={props.image} className="rounded-xl"></img>
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1">
                    <img className={"rounded-full w-12 h-12"} src={props.thumb}></img>
                </div>
                <div className="col-span-10 pl-2">
                    <div>{props.title}</div>
                    <div className="col-span-11 text-gray-400 text-base">{props.author}</div>
                    <div className="col-span-11 text-gray-400 text-base">{props.views}|{props.timestamp}</div>
                </div>
            </div>
        </div>
}