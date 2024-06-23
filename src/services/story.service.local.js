
import { storageService } from './async-storage.service'
import { utilService } from './util.service'
// import { userService } from './user.service'

const STORAGE_KEY = 'story'

export const storyService = {
    // GetAll
    query,
    // GetOne
    getById,
    save,
    remove,
    getEmptyStory,
}
window.cs = storyService

_createStories()




async function query() {
    // like api with axios
    var stories = await storageService.query(STORAGE_KEY)
    return stories
}

function getById(storyId) {
    return storageService.get(STORAGE_KEY, storyId)
}

async function remove(storyId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, storyId)
}

async function save(story) {
    var savedStory
    if (story._id) {
        const storyToSave = {
            _id : story._id,
            txt : story.txt
        }
        savedStory = await storageService.put(STORAGE_KEY, storyToSave)
    } else {
        // Later, owner is set by the backend
        const storyToSave = {
            // vendor : story.vendor,
            // price : story.price,
            // owner: userService.getLoggedinUser(),
            msgs: []
        }
        savedStory = await storageService.post(STORAGE_KEY, storyToSave)
    }
    return savedStory
}



function getEmptyStory() {
    return {
        userName: 'Susita-' + utilService.makeId(),
        user: utilService.getRandomIntInclusive(1000, 9000),
        msgs: []
    }
}
function _createStories() {
    let stories = utilService.loadFromStorage(STORAGE_KEY)
    if (!stories || !stories.length) {
        stories = [
           {
            _id: "s101",
            userName:"01Moshe",
            fullName:"Moshe Ben Dor",
            // profile pic
            txt: "Hello Everyone! I hope you having a greate time on your weekend!See you next friday",
            imgUrl: "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718755200&semt=sph", 
            postedAt:"2024-01-01T12:00:00Z",
           },
           {
            _id: "s103",
            postedAt:"2024-01-01T12:00:00Z",
            userName:"John_49",
            fullName:"Jake Runni",
            txt: "Best trip ever",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMHCDMtqM_45FAek0yHA1bNk79rzvO1C1Pg&s", 
           },
           {
            _id: "s104",
            userName:"David2529",
            fullName:"David.S",
            txt: "I`ts been long time from the last time i was here.",
            imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/006/859/348/small/young-boy-indian-student-portrait-photo.jpg", 
           },
           {
            _id: "s105",
            userName:"01Moshe",
            fullName:"Moshe Ben Dor",
            txt: "See you soon guys... Hope you will come with a lot of energy today.",
            imgUrl: "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718755200&semt=sph", 
           },
           {
            _id: "s106",
            userName:"John_49",
            fullName:"Jake Runni",
            txt: "Brazil .. It been a perfect trip! Thanks everyone for having me in your beautifull countey. Where do you want me to fillm my next blog?",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMHCDMtqM_45FAek0yHA1bNk79rzvO1C1Pg&s", 
           },
           {
            _id: "s107",
            userName:"David2529",
            fullName:"David.S",
            txt: "I`m Taking a brake guys...I'll be back soon.",
            imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/006/859/348/small/young-boy-indian-student-portrait-photo.jpg", 
           },
           {
            _id: "s108",
            userName:"01Moshe",
            fullName:"Moshe Ben Dor",
            txt: "Good luck to all of you.. First day of school",
            imgUrl: "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718755200&semt=sph", 
           },
           {
            _id: "s109",
            userName:"John_49",
            fullName:"Jake Runni",
            txt: "Best trip ever",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMHCDMtqM_45FAek0yHA1bNk79rzvO1C1Pg&s", 
           },
           {
            _id: "s110",
            userName:"David2529",
            fullName:"David.S",
            txt: "Sorry guys.. After long time my sister passet away... R.I.P Little Sis..Hope to see you some day xo x_x. ",
            imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/006/859/348/small/young-boy-indian-student-portrait-photo.jpg", 
           }
        ]
        utilService.saveToStorage(STORAGE_KEY, stories)
    }
}

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




