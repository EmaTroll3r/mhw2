const max_slit_items = 5;

function createHomeSectionBoardGamesItem(item, n) {
    const sectionItem = document.createElement('a');
    sectionItem.href = item.href;
    sectionItem.classList.add('home-section-item', 'item');

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.alt;

    const textContainer = document.createElement('div');
    textContainer.classList.add('home-section-item-text');

    const title = document.createElement('div');
    title.classList.add('home-section-item-title', 'item-title');
    title.textContent = `${n} - ${item.title}`;

    const description = document.createElement('div');
    description.classList.add('home-section-item-description', 'item-description');
    description.textContent = item.description;

    textContainer.appendChild(title);
    textContainer.appendChild(description);

    sectionItem.appendChild(img);
    sectionItem.appendChild(textContainer);

    return sectionItem;
}

function createHomeSectionCrowdfundingItem(item, n) {
    const sectionItem = document.createElement('a');
    sectionItem.href = item.href;
    sectionItem.classList.add('home-section-item', 'item');

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.alt;

    const textContainer = document.createElement('div');
    textContainer.classList.add('home-section-item-text');

    const title = document.createElement('div');
    title.classList.add('home-section-item-title', 'item-title');
    title.textContent = `${n} - ${item.title}`;

    const info = document.createElement('div');
    info.classList.add('home-section-item-info');
    info.textContent = `Ends ${item.expires}`;

    const description = document.createElement('div');
    description.classList.add('home-section-item-description', 'item-description');
    description.textContent = item.description;

    const link = document.createElement('a');
    link.href = item.link;
    link.classList.add('home-section-item-outer-link');
    link.textContent = 'Visit Project';

    textContainer.appendChild(title);
    textContainer.appendChild(info);
    textContainer.appendChild(description);
    textContainer.appendChild(link);

    sectionItem.appendChild(img);
    sectionItem.appendChild(textContainer);

    return sectionItem;
}

function createHomeSectionVideoItem(item, n) {
    const sectionItem = document.createElement('a');
    sectionItem.href = item.href;
    sectionItem.classList.add('home-section-item', 'item');

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.alt;

    const textContainer = document.createElement('div');
    textContainer.classList.add('home-section-item-text');

    const title = document.createElement('div');
    title.classList.add('home-section-item-title', 'item-title');
    title.textContent = `${n} - ${item.title}`;

    const info = document.createElement('div');
    info.classList.add('home-section-item-info');
    info.textContent = item.info;

    textContainer.appendChild(title);
    textContainer.appendChild(info);

    sectionItem.appendChild(img);
    sectionItem.appendChild(textContainer);

    return sectionItem;
}

function createHomeSectionGivewayItem(item, n) {
    const sectionItem = document.createElement('a');
    sectionItem.href = item.href;
    sectionItem.classList.add('home-section-item', 'item');

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.alt;

    const textContainer = document.createElement('div');
    textContainer.classList.add('home-section-item-text');

    const title = document.createElement('div');
    title.classList.add('home-section-item-title', 'item-title');
    title.textContent = `${n} - ${item.title}`;

    const info = document.createElement('div');
    info.classList.add('home-section-item-info');
    info.textContent = `${item.publisher} - Ends ${item.expires}`;

    textContainer.appendChild(title);
    textContainer.appendChild(info);

    sectionItem.appendChild(img);
    sectionItem.appendChild(textContainer);

    return sectionItem;
}

function createHomeSectionDeepReviewssItem(item, n) {
    const sectionItem = document.createElement('a');
    sectionItem.href = item.href;
    sectionItem.classList.add('home-section-item', 'item');

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.alt;

    const textContainer = document.createElement('div');
    textContainer.classList.add('home-section-item-text');

    const title = document.createElement('div');
    title.classList.add('home-section-item-title', 'item-title');
    title.textContent = `${n} - ${item.title}`;

    const authorContainer = document.createElement('div');
    authorContainer.classList.add('home-section-item-author', 'item-author');
    authorContainer.innerHTML = `by&nbsp;`;

    const authorLink = document.createElement('a');
    authorLink.href = '#';
    authorLink.textContent = item.author;

    const likeCommentsContainer = document.createElement('div');
    likeCommentsContainer.classList.add('home-likeComments-icons');

    const likeIcon = document.createElement('i');
    likeIcon.classList.add('fa-regular', 'fa-thumbs-up', 'home-likeComments-icon');

    const likeCount = document.createElement('div');
    likeCount.classList.add('home-split-number');
    likeCount.textContent = item.n_likes;

    const commentIcon = document.createElement('i');
    commentIcon.classList.add('fa-regular', 'fa-message', 'home-likeComments-icon');

    const commentCount = document.createElement('div');
    commentCount.classList.add('home-split-number');
    commentCount.textContent = item.n_comments;

    // Append elements to their respective containers
    likeCommentsContainer.appendChild(likeIcon);
    likeCommentsContainer.appendChild(likeCount);
    likeCommentsContainer.appendChild(commentIcon);
    likeCommentsContainer.appendChild(commentCount);

    authorContainer.appendChild(authorLink);
    authorContainer.appendChild(likeCommentsContainer);

    textContainer.appendChild(title);
    textContainer.appendChild(authorContainer);

    sectionItem.appendChild(img);
    sectionItem.appendChild(textContainer);

    return sectionItem;
}

function createHomeSectionGeeklistsItem(item, n) {
    const sectionItem = document.createElement('a');
    sectionItem.href = item.href;
    sectionItem.classList.add('home-section-item', 'item');

    // Creazione dell'immagine
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.alt;

    // Contenitore del testo
    const textContainer = document.createElement('div');
    textContainer.classList.add('home-section-item-text');

    // Titolo
    const title = document.createElement('div');
    title.classList.add('home-section-item-title', 'item-title');
    title.textContent = `${n} - ${item.title}`;

    // Autore
    const authorContainer = document.createElement('div');
    authorContainer.classList.add('home-section-item-author', 'item-author');

    const authorText = document.createTextNode('by\u00A0'); // \u00A0 è uno spazio non interrotto
    const authorLink = document.createElement('a');
    authorLink.href = '#';
    authorLink.textContent = item.author;

    // Icone like e commenti
    const likeCommentsContainer = document.createElement('div');
    likeCommentsContainer.classList.add('home-likeComments-icons');

    const likeIcon = document.createElement('i');
    likeIcon.classList.add('fa-regular', 'fa-thumbs-up', 'home-likeComments-icon');

    const likeCount = document.createElement('div');
    likeCount.classList.add('home-split-number');
    likeCount.textContent = item.n_likes;

    const commentIcon = document.createElement('i');
    commentIcon.classList.add('fa-regular', 'fa-message', 'home-likeComments-icon');

    const commentCount = document.createElement('div');
    commentCount.classList.add('home-split-number');
    commentCount.textContent = item.n_comments;

    // Assemblaggio degli elementi
    likeCommentsContainer.appendChild(likeIcon);
    likeCommentsContainer.appendChild(likeCount);
    likeCommentsContainer.appendChild(commentIcon);
    likeCommentsContainer.appendChild(commentCount);

    authorContainer.appendChild(authorText);
    authorContainer.appendChild(authorLink);
    authorContainer.appendChild(likeCommentsContainer);

    textContainer.appendChild(title);
    textContainer.appendChild(authorContainer);

    sectionItem.appendChild(img);
    sectionItem.appendChild(textContainer);

    return sectionItem;
}

function createHomeSectionHotVideosItem(item, n) {
    const sectionItem = document.createElement('a');
    sectionItem.href = item.href;
    sectionItem.classList.add('home-section-item', 'item');

    // Creazione dell'immagine
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.alt;

    // Contenitore del testo
    const textContainer = document.createElement('div');
    textContainer.classList.add('home-section-item-text');

    // Titolo
    const title = document.createElement('div');
    title.classList.add('home-section-item-title', 'item-title');
    title.textContent = `${n} - ${item.title}`;

    // Autore
    const authorContainer = document.createElement('div');
    authorContainer.classList.add('home-section-item-author', 'item-author');

    const authorText = document.createTextNode('by\u00A0'); // \u00A0 è uno spazio non interrotto
    const authorLink = document.createElement('a');
    authorLink.href = '#';
    authorLink.textContent = item.author;

    // Icone like e commenti
    const likeCommentsContainer = document.createElement('div');
    likeCommentsContainer.classList.add('home-likeComments-icons');

    const likeIcon = document.createElement('i');
    likeIcon.classList.add('fa-regular', 'fa-thumbs-up', 'home-likeComments-icon');

    const likeCount = document.createElement('div');
    likeCount.classList.add('home-split-number');
    likeCount.textContent = item.n_likes;

    const commentIcon = document.createElement('i');
    commentIcon.classList.add('fa-regular', 'fa-message', 'home-likeComments-icon');

    const commentCount = document.createElement('div');
    commentCount.classList.add('home-split-number');
    commentCount.textContent = item.n_comments;

    // Assemblaggio degli elementi
    likeCommentsContainer.appendChild(likeIcon);
    likeCommentsContainer.appendChild(likeCount);
    likeCommentsContainer.appendChild(commentIcon);
    likeCommentsContainer.appendChild(commentCount);

    authorContainer.appendChild(authorText);
    authorContainer.appendChild(authorLink);
    authorContainer.appendChild(likeCommentsContainer);

    textContainer.appendChild(title);
    textContainer.appendChild(authorContainer);

    sectionItem.appendChild(img);
    sectionItem.appendChild(textContainer);

    return sectionItem;
}

function createHomeSplitItem(item) {
    const splitItem = document.createElement('div');
    splitItem.classList.add('home-split-item', 'item');

    // Creazione dell'immagine
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.alt;

    // Contenitore del testo
    const textContainer = document.createElement('div');
    textContainer.classList.add('home-split-item-text');

    // Titolo
    const title = document.createElement('div');
    title.classList.add('home-split-item-title', 'item-title');
    title.textContent = item.title;

    // Autore
    const authorContainer = document.createElement('div');
    authorContainer.classList.add('home-split-item-author', 'item-author');

    const authorText = document.createTextNode('by\u00A0'); // \u00A0 è uno spazio non interrotto
    const authorLink = document.createElement('a');
    authorLink.href = '#';
    authorLink.textContent = item.author;

    // Icone like e commenti
    const likeCommentsContainer = document.createElement('div');
    likeCommentsContainer.classList.add('home-likeComments-icons');

    const likeIcon = document.createElement('i');
    likeIcon.classList.add('fa-regular', 'fa-thumbs-up', 'home-likeComments-icon');

    const likeCount = document.createElement('div');
    likeCount.classList.add('home-split-number');
    likeCount.textContent = item.n_likes;

    const commentIcon = document.createElement('i');
    commentIcon.classList.add('fa-regular', 'fa-message', 'home-likeComments-icon');

    const commentCount = document.createElement('div');
    commentCount.classList.add('home-split-number');
    commentCount.textContent = item.n_comments;

    // Assemblaggio degli elementi
    likeCommentsContainer.appendChild(likeIcon);
    likeCommentsContainer.appendChild(likeCount);
    likeCommentsContainer.appendChild(commentIcon);
    likeCommentsContainer.appendChild(commentCount);

    authorContainer.appendChild(authorText);
    authorContainer.appendChild(authorLink);
    authorContainer.appendChild(likeCommentsContainer);

    textContainer.appendChild(title);
    textContainer.appendChild(authorContainer);

    splitItem.appendChild(img);
    splitItem.appendChild(textContainer);

    return splitItem;
}

const hotnessContent = document.querySelector('#hot-section > .home-section-content');
const crowdfundingContent = document.querySelector('#crowdfunding-section > .home-section-content');
const videoContent = document.querySelector('#videos-section > .home-section-content');
const bestsellerContent = document.querySelector('#bestseller-section > .home-section-content');
const givewayContent = document.querySelector('#giveway-section > .home-section-content');
const mostPlayedContent = document.querySelector('#mostPlayed-section > .home-section-content');
const deepReviewsContent = document.querySelector('#deepReviews-section > .home-section-content');
const geeklistContent = document.querySelector('#geeklist-section > .home-section-content');
const hotVideosContent = document.querySelector('#hotVideos-section > .home-section-content');

const bgNewsContent = document.querySelector('#home-news-split > .home-split-content');
const discussionContent = document.querySelector('#home-discussion-split > .home-split-content');
const blogsContent = document.querySelector('#home-blogs-split > .home-split-content');
const forumsContent = document.querySelector('#home-forums-split > .home-split-content');


for (let i=0; i < homeSectionItems.boardGames.length; i++) {
    const item = homeSectionItems.boardGames[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSectionBoardGamesItem(item, i + 1);
    hotnessContent.appendChild(sectionItem);
}

for (let i=0; i < homeSectionItems.crowdfunding.length; i++) {
    const item = homeSectionItems.crowdfunding[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSectionCrowdfundingItem(item, i + 1);
    crowdfundingContent.appendChild(sectionItem);
}

for (let i=0; i < homeSectionItems.videos.length; i++) {
    const item = homeSectionItems.videos[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSectionVideoItem(item, i + 1);
    videoContent.appendChild(sectionItem);
}

for (let i=0; i < homeSectionItems.bestseller.length; i++) {
    const item = homeSectionItems.bestseller[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSectionBoardGamesItem(item, i + 1);
    bestsellerContent.appendChild(sectionItem);
}

for (let i=0; i < homeSectionItems.giveway.length; i++) {
    const item = homeSectionItems.giveway[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSectionGivewayItem(item, i + 1);
    givewayContent.appendChild(sectionItem);
}

for (let i=0; i < homeSectionItems.mostPlayed.length; i++) {
    const item = homeSectionItems.mostPlayed[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSectionBoardGamesItem(item, i + 1);
    mostPlayedContent.appendChild(sectionItem);
}

for (let i=0; i < homeSectionItems.deepReviews.length; i++) {
    const item = homeSectionItems.deepReviews[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSectionDeepReviewssItem(item, i + 1);
    deepReviewsContent.appendChild(sectionItem);
}

for (let i=0; i < homeSectionItems.geeklist.length; i++) {
    const item = homeSectionItems.geeklist[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSectionGeeklistsItem(item, i + 1);
    geeklistContent.appendChild(sectionItem);
}

for (let i=0; i < homeSectionItems.hotVideos.length; i++) {
    const item = homeSectionItems.hotVideos[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSectionHotVideosItem(item, i + 1);
    hotVideosContent.appendChild(sectionItem);
}


for (let i=0; i < homeSplitItems.boardGameNews.length; i++) {
    const item = homeSplitItems.boardGameNews[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSplitItem(item);
    bgNewsContent.appendChild(sectionItem);

    if (i + 1 < max_slit_items) {
        const hrItem = document.createElement('hr');
        hrItem.classList.add('home-split-item-hr');
        bgNewsContent.appendChild(hrItem);
    }
}

for (let i=0; i < homeSplitItems.hotDiscussion.length; i++) {
    const item = homeSplitItems.hotDiscussion[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSplitItem(item);
    discussionContent.appendChild(sectionItem);

    if (i + 1 < max_slit_items) {
        const hrItem = document.createElement('hr');
        hrItem.classList.add('home-split-item-hr');
        discussionContent.appendChild(hrItem);
    }
}

for (let i=0; i < homeSplitItems.blogs.length; i++) {
    const item = homeSplitItems.blogs[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSplitItem(item);
    blogsContent.appendChild(sectionItem);

    if (i + 1 < max_slit_items) {
        const hrItem = document.createElement('hr');
        hrItem.classList.add('home-split-item-hr');
        blogsContent.appendChild(hrItem);
    }
}

for (let i=0; i < homeSplitItems.forums.length; i++) {
    const item = homeSplitItems.forums[i];
    console.log("Loaded " + item.title)
    const sectionItem = createHomeSplitItem(item);
    forumsContent.appendChild(sectionItem);

    if (i + 1 < max_slit_items) {
        const hrItem = document.createElement('hr');
        hrItem.classList.add('home-split-item-hr');
        forumsContent.appendChild(hrItem);
    }
}