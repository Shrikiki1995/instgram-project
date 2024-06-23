import { useEffect } from "react";
// import { Link } from "react-router-dom";
import { SuggestPeople } from "../cmps/suggets";

import { useSelector } from "react-redux";
import {
  loadStories as loadStories,
  addStory,
  updateStory,
  removeStory,
//   addStoryMsg,
} from "../store/story.actions";

import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service";
// import { userService } from "../services/user.service";
import { storyService } from "../services/story.service.local";
import { StoryList } from "../cmps/storyList";

export function StoryIndex() {
  // SUBSCRIBE
  const stories = useSelector((storeState) => storeState.storyModule.stories);

  useEffect(() => {
    loadStories();
    console.log(stories)
  }, []);

  async function onRemoveStory(storyId) {
    try {
      await removeStory(storyId);
      showSuccessMsg("Story removed");
    } catch (err) {
      showErrorMsg("Cannot remove story");
    }
  }

  async function onAddStory() {
    const story = storyService.getDemoStory();
    story.title = prompt("Title?");
    try {
      const savedStory = await addStory(story);
      showSuccessMsg(`Story added (id: ${savedStory._id})`);
    } catch (err) {
      showErrorMsg("Cannot add story");
    }
  }

  async function onUpdateStory(story) {
    const title = prompt("New title?", story.title);
    if (!title) return;

    const storyToSave = { ...story, title };
    try {
      const savedStory = await updateStory(storyToSave);
      showSuccessMsg(`Story updated, new title: ${savedStory.title}`);
    } catch (err) {
      showErrorMsg("Cannot update story");
    }
  }



  return (
    <section className="story-index">
        <StoryList  stories={stories}/>
        <SuggestPeople/>

    </section>
  );
}
