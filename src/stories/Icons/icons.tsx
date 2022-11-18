interface iconProps {
    name?: "twitter" | "house" | "arrow" | "bookmarks" | "calendar" | "comment" | "date" | "dots" | "emoji" | "explore" | "gif" | "graph" | "heart" | "img" | "lists" | "location" | "message" | "mode" | "more" | "notification" | "profile" | "retweet" | "search" | "share" | "twitter";
    color?: "dark" | "light",
    size?: "small" | "medium" | "large"
}

export const Icons = ({ name, color, size }: iconProps) => (
    <img src={`./src/stories/assets/icons/${name}-${color}.svg`} alt="asdfasdf" className={`icon icon-${size}`} />
)