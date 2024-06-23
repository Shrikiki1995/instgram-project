export function StoryPreview({ story }) {


  function daysSince(date) {
    const now = new Date();
    const pastDate = new Date(date);
    const elapsedTime = now - pastDate;

  
    // מחשבים את מספר הימים שעברו
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

    return days;
  }


  return (
    <>
      <div className="storyPreview main-container ">
        <div id="upperContainer">
          <div className="flex">
            <img src={story.imgUrl} alt="" />
          </div>
          <span>
            {story.fullName}
            {story.postedAt && (
              <span>
               • {" "}
                {daysSince(story.postedAt) > 30
                  ? Math.floor(daysSince(story.postedAt) / 30) + " months"
                  : daysSince(story.postedAt) + "d"}


              </span>
            )}
          </span>
        </div>
        <p>{story.txt}</p>
      </div>
    </>
  );
}
