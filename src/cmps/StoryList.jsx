import { StoryPreview } from "./StoryPreview";

export function StoryList({ stories }) {
  
  return (
    <div className="storyList">
      {stories.map((story) => (
        <StoryPreview story={story} key={story._id} />
      ))}
    </div>
  );
}
