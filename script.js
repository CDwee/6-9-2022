// Started at 10:39 6-9-2022

:root {
    --blue: #1FA2F1;
    --blueLight: #9BD1F9;
    --blueBackground: rgba(212, 237, 255, 0.6);
    --buttonHoverBg: #d4edff;
    --lightGrey: rgb(230, 236, 240);
    --spacing: 15px;
    --greyText: rgb(101, 119, 134);
    --greyButtonText: rgba(0,0,0,0.34);
    --red: rgb(226,34,94);
    --redBackground: rgba(226,34,94,0.1);
    --green: rgb(23,191,99);
    --greenBackground: rgba(23,191,99,0.1);
}

* {
    outline: none !important;
}

a {
    color: inherit;
}

a:hover {
    color: inherit;
    text-decoration: none;
}

h1 {
    font-size: 19px;
    font-weight: 800;
    margin: 0;
}

nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
}

nav a {
    padding: 10px;
    font-size: 30px;
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #212529;
}

nav a.blue {
    color: var(--blue);
}

nav a:hover {
    background-color: var(--buttonHoverBg);
    color: var(--blue);
    border-radius: 50%;
}

.wrapper > .row {
    margin: 0;
}

button {
    background-color: transparent;
    border: none;
    color: var(--greyButtonText);
}

button i,
button span {
    pointer-events: none;
}

.mainSectionContainer {
    padding:  0;
    border-left: 1px solid var(--lightGrey);
    border-right: 1px solid var(--lightGrey);
    display: flex;
    flex-direction: column;
}

.titleContainer {
    height: 53px;
    padding: 0 var(--spacing);
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--lightGrey);
    flex-shrink: 0;
}

.titleContainer h1 {
    flex: 1;
}

.postFormContainer {
    display: flex;
    padding: var(--spacing);
    border-bottom: 10px solid rgb(230, 236, 240);
    flex-shrink: 0;
}

.modal .postFormContainer {
    border: none;
    padding: 0;
    padding-top: var(--spacing);
}

.modal .post {
    padding: 0 0 var(--spacing) 0;
}

.userImageContainer {
    width: 50px;
    height: 50px;
}

.userImageContainer img {
    width: 100%;
    border-radius: 50%;
    background-color: white;
}

.textareaContainer {
    flex: 1;
    padding-left: var(--spacing);
}

.textareaContainer textarea {
    width: 100%;
    border: none;
    resize: none;
    font-size: 19px;
}

#submitPostButton {
    background-color: var(--blue);
    color: white;
    border: none;
    border-radius: 40px;
    padding: 7px 15px;
}

#submitPostButton:disabled {
    background-color: var(--blueLight);
}

.post {
    display: flex;
    flex-direction: column;
    padding: var(--spacing);
    cursor: pointer;
    border-bottom: 1px solid var(--lightGrey);
    flex-shrink: 0;
}

.mainContentContainer {
    flex: 1;
    display: flex;
}

.postContentContainer {
    padding-left: var(--spacing);
    display: flex;
    flex-direction: column;
    flex: 1;
}

.username,
.date {
    color: var(--greyText)
}

.displayName {
    font-weight: bold;
}

.postFooter {
    display: flex;
    align-items: center;
}

.postFooter .postButtonContainer {
    flex: 1;
    display: flex;
}

.postFooter .postButtonContainer button {
    padding: 2px 5px;
}

.header a:hover {
    text-decoration: underline;
}

.header a,
.header span {
    padding-right: 5px;
}

.postButtonContainer button:hover {
    background-color: #d4edff;
    color: var(--blue);
    border-radius: 50%;
}

.postButtonContainer.red button.active {
    color: var(--red);
}

.postButtonContainer.red button:hover {
    color: var(--red);
    background-color: var(--redBackground)
}

.postButtonContainer.green button.active {
    color: var(--green);
}

.postButtonContainer.green button:hover {
    color: var(--green);
    background-color: var(--greenBackground)
}

.postActionContainer {
    padding-left: 35px;
    font-size: 13px;
    color: var(--greyText);
    margin-bottom: 5px;
}

.replyFlag {
    margin-bottom: 5px;
}

.replyFlag a {
    color: var(--blue);
}

.post.largeFont .postBody,
.post.largeFont .postFooter {
    font-size: 23px;
}

.postContentContainer .header {
    display: flex;
}

.postContentContainer .header .date {
    flex: 1;
}

.errorMessage {
    padding: var(--spacing);
}

.profileHeaderContainer .coverPhotoContainer {
    height: 180px;
    background-color: var(--blue);
    position: relative;
}

.profileHeaderContainer .userImageContainer {
    height: 132px;
    width: 132px;
    margin-left: var(--spacing);
    position: absolute;
    bottom: -66px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.profileHeaderContainer .userImageContainer img {
    border: 4px solid #fff;
}

.profileHeaderContainer .profileButtonsContainer {
    text-align: right;
    padding: var(--spacing);
    min-height: 66px;
}

.profileButton,
.followButton {
    border: 1px solid var(--blue);
    color: var(--blue);
    font-weight: bold;
    padding: 5px 15px;
    border-radius: 60px;
    display: inline-block;
    margin-left: var(--spacing);
}

.profileButton:hover,
.followButton:hover {
    background-color: var(--blueBackground);
}

.followButton.following {
    background-color: var(--blue);
    color: #fff;
}

.profileHeaderContainer .userDetailsContainer {
    display: flex;
    flex-direction: column;
    padding: 0 var(--spacing);
}

.followersContainer .value {
    font-weight: bold;
    margin-right: 5px;
}

.followersContainer span:not(.value) {
    color: var(--greyText);
}

.followersContainer a {
    margin-right: 15px;
}

.followersContainer a:hover {
    border-bottom: 1px solid #000;
}

.tabsContainer {
    display: flex;
    border-bottom: 1px solid var(--lightGrey);
    flex-shrink: 0;
}

.tab {
    flex: 1;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--greyText);
    font-weight: bold;
}

.tab.active {
    color: var(--blue);
    border-bottom: 2px solid var(--blue);
}

.tab:hover {
    color: var(--blue);
    background-color: var(--blueBackground);
}

.noResults {
    padding: var(--spacing);
}

.resultsContainer {
    display: flex;
    flex-direction: column;
}

.resultsContainer .user {
    padding: var(--spacing);
    display: flex;
    border-bottom: 1px solid var(--lightGrey);
}

.user .userDetailsContainer {
    flex: 1;
    padding: 0 var(--spacing);
}

.profilePictureButton {
    position: absolute;
    font-size: 50px;
    color: rgba(0,0,0,0.6);
    display: none;
}

.userImageContainer:hover .profilePictureButton {
    display: block;
}

#imagePreview {
    width: 100%;
    display: block;
    max-width: 100%;
}


mixin createPostForm(userLoggedIn)
    .postFormContainer
        .userImageContainer
            img(src=userLoggedIn.profilePic, alt="User's profile picture")
        .textareaContainer
            textarea#postTextarea(placeholder="What's happening?")
            .buttonsContainer
                button#submitPostButton(disabled="") Post

mixin createReplyModal(userLoggedIn)
    #replyModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='replyModalLabel', aria-hidden='true')
        .modal-dialog(role='document')
            .modal-content
                .modal-header
                    h5#replyModalLabel.modal-title Reply
                    button.close(type='button', data-dismiss='modal', aria-label='Close')
                    span(aria-hidden='true') &times;
                .modal-body
                    #originalPostContainer
                    .postFormContainer
                        .userImageContainer
                            img(src=userLoggedIn.profilePic, alt="User's profile picture")
                        .textareaContainer
                            textarea#replyTextarea(placeholder="What's happening?")
                .modal-footer
                    button.btn.btn-secondary(type='button', data-dismiss='modal') Close
                    button#submitReplyButton.btn.btn-primary(type='button', disabled="") Reply

mixin createDeletePostModal()
    #deletePostModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='deletePostModalLabel', aria-hidden='true')
        .modal-dialog(role='document')
            .modal-content
                .modal-header
                    h5#deletePostModalLabel.modal-title Delete the post?
                    button.close(type='button', data-dismiss='modal', aria-label='Close')
                    span(aria-hidden='true') &times;
                .modal-body
                    p You won't be able to delete this.
                .modal-footer
                    button.btn.btn-secondary(type='button', data-dismiss='modal') Close
                    button#deletePostButton.btn.btn-primary(type='button') Delete

mixin createPostModals(userLoggedIn)
    +createReplyModal(userLoggedIn)
    +createDeletePostModal()

mixin createFollowButton(user, isFollowing)
    - text = isFollowing ? "Following" : "Follow"
    - buttonClass  = isFollowing ? "followButton following" : "followButton"
    button(class=buttonClass, data-user=user._id) #{text}

mixin createTab(name, href, isSelected)
    - className = isSelected ? "tab active" : "tab"
    a(href=href, class=className) 
        span #{name}

mixin createImageUploadModal()
    #imageUploadModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='imageUploadModal', aria-hidden='true')
        .modal-dialog(role='document')
            .modal-content
                .modal-header
                    h5#imageUploadModal.modal-title Upload a new profile picture 
                    button.close(type='button', data-dismiss='modal', aria-label='Close')
                    span(aria-hidden='true') &times;
                .modal-body
                    input#filePhoto(type="file", name="filePhoto")

                    .imagePreviewContainer
                    img#imagePreview
                .modal-footer
                    button.btn.btn-secondary(type='button', data-dismiss='modal') Cancel
                    button#imageUploadButton.btn.btn-primary(type='button') Save
                    
// Globals
var cropper;

$("#postTextarea, #replyTextarea").keyup(event => {
    var textbox = $(event.target);
    var value = textbox.val().trim();

    var isModal = textbox.parents(".modal").length == 1;
    
    var submitButton = isModal ? $("#submitReplyButton") : $("#submitPostButton");

    if(submitButton.length == 0) return alert("No submit button found");

    if (value == "") {
        submitButton.prop("disabled", true);
        return;
    }

    submitButton.prop("disabled", false);
})

$("#submitPostButton, #submitReplyButton").click(() => {
    var button = $(event.target);

    var isModal = button.parents(".modal").length == 1;
    var textbox = isModal ? $("#replyTextarea") : $("#postTextarea");

    var data = {
        content: textbox.val()
    }

    if (isModal) {
        var id = button.data().id;
        if(id == null) return alert("Button id is null");
        data.replyTo = id;
    }

    $.post("/api/posts", data, postData => {

        if(postData.replyTo) {
            location.reload();
        }
        else {
            var html = createPostHtml(postData);
            $(".postsContainer").prepend(html);
            textbox.val("");
            button.prop("disabled", true);
        }
    })
})

$("#replyModal").on("show.bs.modal", (event) => {
    var button = $(event.relatedTarget);
    var postId = getPostIdFromElement(button);
    $("#submitReplyButton").data("id", postId);

    $.get("/api/posts/" + postId, results => {
        outputPosts(results.postData, $("#originalPostContainer"));
    })
})

$("#replyModal").on("hidden.bs.modal", () => $("#originalPostContainer").html(""));

$("#deletePostModal").on("show.bs.modal", (event) => {
    var button = $(event.relatedTarget);
    var postId = getPostIdFromElement(button);
    $("#deletePostButton").data("id", postId);
})

$("#deletePostButton").click((event) => {
    var postId = $(event.target).data("id");

    $.ajax({
        url: `/api/posts/${postId}`,
        type: "DELETE",
        success: (data, status, xhr) => {

            if(xhr.status != 202) {
                alert("could not delete post");
                return;
            }
            
            location.reload();
        }
    })
})

$("#filePhoto").change(function (event) {
    if(this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
            var image = document.getElementById("imagePreview");
            image.src = e.target.result;

            if(cropper !== undefined) {
                cropper.destroy();
            }
            
            cropper = new Cropper(image, {
                aspectRaio: 1 / 1,
                background: false
            })

        }
        reader.readAsDataURL(this.files[0]);
    }
    else {
        console.log("Not loaded");
    }
})

$("#imageUploadButton").click(() => {
    var canvas = cropper.getCroppedCanvas();

    if(canvas == null) {
        alert("Could not upload image. Make sure it is an image file.")
        return;
    }

    canvas.toBlob((blob) => {
        var formData = new FormData();
        formData.append("croppedImage", blob);

        $.ajax({
            url: "/api/users/profilePicture",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: () => location.reload()
        })
    })
})

$(document).on("click", ".likeButton", (event) => {
    var button = $(event.target);
    var postId = getPostIdFromElement(button);
    
    if(postId === undefined) return;

    $.ajax({
        url: `/api/posts/${postId}/like`,
        type: "PUT",
        success: (postData) => {
            
            button.find("span").text(postData.likes.length || "");

            if(postData.likes.includes(userLoggedIn._id)) {
                button.addClass("active");
            }
            else {
                button.removeClass("active");
            }

        }
    })

})

$(document).on("click", ".retweetButton", (event) => {
    var button = $(event.target);
    var postId = getPostIdFromElement(button);
    
    if(postId === undefined) return;

    $.ajax({
        url: `/api/posts/${postId}/retweet`,
        type: "POST",
        success: (postData) => {            
            button.find("span").text(postData.retweetUsers.length || "");

            if(postData.retweetUsers.includes(userLoggedIn._id)) {
                button.addClass("active");
            }
            else {
                button.removeClass("active");
            }

        }
    })

})

$(document).on("click", ".post", (event) => {
    var element = $(event.target);
    var postId = getPostIdFromElement(element);

    if(postId !== undefined && !element.is("button")) {
        window.location.href = '/posts/' + postId;
    }
});

$(document).on("click", ".followButton", (e) => {
    var button = $(e.target);
    var userId = button.data().user;
    
    $.ajax({
        url: `/api/users/${userId}/follow`,
        type: "PUT",
        success: (data, status, xhr) => {

            if(xhr.status == 404) {
                alert("User not found");
                return;
            }

            var difference = 1;
            if(data.following && data.following.includes(userId)) {
                button.addClass("following");
                button.text("Following");
            }
            else {
                button.removeClass("following");
                button.text("Follow");
                difference = -1;
            }
            
            var followersLabel = $("#followersValue");
            if(followersLabel.length != 0) {
                var followersText = followersLabel.text();
                followersText = parseInt(followersText);
                followersLabel.text(followersText + difference);
            }
        }
    })
});

function getPostIdFromElement(element) {
    var isRoot = element.hasClass("post");
    var rootElement = isRoot == true ? element : element.closest(".post");
    var postId = rootElement.data().id;

    if(postId === undefined) return alert("Post id undefined");

    return postId;
}

function createPostHtml(postData, largeFont = false) {

    if(postData == null) return alert("post object is null");

    var isRetweet = postData.retweetData !== undefined;
    var retweetedBy = isRetweet ? postData.postedBy.username : null;
    postData = isRetweet ? postData.retweetData : postData;
    
    var postedBy = postData.postedBy;

    if(postedBy._id === undefined) {
        return console.log("User object not populated");
    }

    var displayName = postedBy.firstName + " " + postedBy.lastName;
    var timestamp = timeDifference(new Date(), new Date(postData.createdAt));

    var likeButtonActiveClass = postData.likes.includes(userLoggedIn._id) ? "active" : "";
    var retweetButtonActiveClass = postData.retweetUsers.includes(userLoggedIn._id) ? "active" : "";
    var largeFontClass = largeFont ? "largeFont" : "";

    var retweetText = '';
    if(isRetweet) {
        retweetText = `<span>
                        <i class='fas fa-retweet'></i>
                        Retweeted by <a href='/profile/${retweetedBy}'>@${retweetedBy}</a>    
                    </span>`
    }

    var replyFlag = "";
    if(postData.replyTo && postData.replyTo._id) {
        
        if(!postData.replyTo._id) {
            return alert("Reply to is not populated");
        }
        else if(!postData.replyTo.postedBy._id) {
            return alert("Posted by is not populated");
        }

        var replyToUsername = postData.replyTo.postedBy.username;
        replyFlag = `<div class='replyFlag'>
                        Replying to <a href='/profile/${replyToUsername}'>@${replyToUsername}<a>
                    </div>`;

    }

    var buttons = "";
    if (postData.postedBy._id == userLoggedIn._id) {
        buttons = `<button data-id="${postData._id}" data-toggle="modal" data-target="#deletePostModal"><i class='fas fa-times'></i></button>`;
    }

    return `<div class='post ${largeFontClass}' data-id='${postData._id}'>
                <div class='postActionContainer'>
                    ${retweetText}
                </div>
                <div class='mainContentContainer'>
                    <div class='userImageContainer'>
                        <img src='${postedBy.profilePic}'>
                    </div>
                    <div class='postContentContainer'>
                        <div class='header'>
                            <a href='/profile/${postedBy.username}' class='displayName'>${displayName}</a>
                            <span class='username'>@${postedBy.username}</span>
                            <span class='date'>${timestamp}</span>
                            ${buttons}
                        </div>
                        ${replyFlag}
                        <div class='postBody'>
                            <span>${postData.content}</span>
                        </div>
                        <div class='postFooter'>
                            <div class='postButtonContainer'>
                                <button data-toggle='modal' data-target='#replyModal'>
                                    <i class='far fa-comment'></i>
                                </button>
                            </div>
                            <div class='postButtonContainer green'>
                                <button class='retweetButton ${retweetButtonActiveClass}'>
                                    <i class='fas fa-retweet'></i>
                                    <span>${postData.retweetUsers.length || ""}</span>
                                </button>
                            </div>
                            <div class='postButtonContainer red'>
                                <button class='likeButton ${likeButtonActiveClass}'>
                                    <i class='far fa-heart'></i>
                                    <span>${postData.likes.length || ""}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
}

function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        if(elapsed/1000 < 30) return "Just now";
        
        return Math.round(elapsed/1000) + ' seconds ago';   
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }

    else if (elapsed < msPerMonth) {
        return Math.round(elapsed/msPerDay) + ' days ago';   
    }

    else if (elapsed < msPerYear) {
        return Math.round(elapsed/msPerMonth) + ' months ago';   
    }

    else {
        return Math.round(elapsed/msPerYear ) + ' years ago';   
    }
}

function outputPosts(results, container) {
    container.html("");

    if(!Array.isArray(results)) {
        results = [results];
    }

    results.forEach(result => {
        var html = createPostHtml(result)
        container.append(html);
    });

    if (results.length == 0) {
        container.append("<span class='noResults'>Nothing to show.</span>")
    }
}

function outputPostsWithReplies(results, container) {
    container.html("");

    if(results.replyTo !== undefined && results.replyTo._id !== undefined) {
        var html = createPostHtml(results.replyTo)
        container.append(html);
    }

    var mainPostHtml = createPostHtml(results.postData, true)
    container.append(mainPostHtml);

    results.replies.forEach(result => {
        var html = createPostHtml(result)
        container.append(html);
    });
}


const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt");
const User = require('../schemas/UserSchema');

router.get("/", (req, res, next) => {

    var payload = {
        pageTitle: req.session.user.username,
        userLoggedIn: req.session.user,
        userLoggedInJs: JSON.stringify(req.session.user),
        profileUser: req.session.user,
    }
    
    res.status(200).render("profilePage", payload);
})

router.get("/:username", async (req, res, next) => {

    var payload = await getPayload(req.params.username, req.session.user);
    
    res.status(200).render("profilePage", payload);
})

router.get("/:username/replies", async (req, res, next) => {

    var payload = await getPayload(req.params.username, req.session.user);
    payload.selectedTab = "replies";

    res.status(200).render("profilePage", payload);
})

router.get("/:username/following", async (req, res, next) => {

    var payload = await getPayload(req.params.username, req.session.user);
    payload.selectedTab = "following";
    
    res.status(200).render("followersAndFollowing", payload);
})

router.get("/:username/followers", async (req, res, next) => {

    var payload = await getPayload(req.params.username, req.session.user);
    payload.selectedTab = "followers";
    
    res.status(200).render("followersAndFollowing", payload);
})


async function getPayload(username, userLoggedIn) {
    var user = await User.findOne({ username: username })
    
    if(user == null) {

        user = await User.findById(username);

        if (user == null) {
            return payload = {
                pageTitle: "User not found",
                userLoggedIn: userLoggedIn,
                userLoggedInJs: JSON.stringify(userLoggedIn)
            }
        }
    }

    return payload = {
        pageTitle: user.username,
        userLoggedIn: userLoggedIn,
        userLoggedInJs: JSON.stringify(userLoggedIn),
        profileUser: user
    }
}

module.exports = router;


extends layouts/main-layout.pug

block content
    if !profileUser
        span.errorMessage Check the url you are trying to access
    else  
        script.
            var profileUserId = '!{profileUser._id}';
            var selectedTab = '!{selectedTab}';

        .tabsContainer
            +createTab("Following", `/profile/${profileUser.username}/following`, selectedTab != "followers")
            +createTab("Followers", `/profile/${profileUser.username}/followers`, selectedTab == "followers")

        .resultsContainer 

block scripts
    script(src="/js/followersAndFollowing.js")


$(document).ready(() => {

    if(selectedTab === "followers") {
        loadFollowers();
    }
    else {
        loadFollowing();
    }
});

function loadFollowers() {
    $.get(`/api/users/${profileUserId}/followers`, results => {
        outputUsers(results.followers, $(".resultsContainer"));
    })
}

function loadFollowing() {
    $.get(`/api/users/${profileUserId}/following`, results => {
        outputUsers(results.following, $(".resultsContainer"));
    })
}

function outputUsers(results, container) {
    container.html("");

    results.forEach(result => {
        var html = createUserHtml(result, true);
        container.append(html);
    });

    if(results.length == 0) {
        container.append("<span class='noResults'>No results found</span>")
    }
}

function createUserHtml(userData, showFollowButton) {

    var name = userData.firstName + " " + userData.lastName;
    var isFollowing = userLoggedIn.following && userLoggedIn.following.includes(userData._id);
    var text = isFollowing ? "Following" : "Follow"
    var buttonClass = isFollowing ? "followButton following" : "followButton"

    var followButton = "";
    if (showFollowButton && userLoggedIn._id != userData._id) {
        followButton = `<div class='followButtonContainer'>
                            <button class='${buttonClass}' data-user='${userData._id}'>${text}</button>
                        </div>`;
    }

    return `<div class='user'>
                <div class='userImageContainer'>
                    <img src='${userData.profilePic}'>
                </div>
                <div class='userDetailsContainer'>
                    <div class='header'>
                        <a href='/profile/${userData.username}'>${name}</a>
                        <span class='username'>@${userData.username}</span>
                    </div>
                </div>
                ${followButton}
            </div>`;
}


const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const User = require('../../schemas/UserSchema');
const Post = require('../../schemas/PostSchema');

app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", async (req, res, next) => {

    var searchObj = req.query;

    if(searchObj.isReply !== undefined) {
        var isReply = searchObj.isReply == "true";
        searchObj.replyTo = { $exists: isReply };
        delete searchObj.isReply;
    }

    if(searchObj.followingOnly !== undefined) {
        var followingOnly = searchObj.followingOnly == "true";

        if(followingOnly) {
            var objectIds = [];

            if(!req.session.user.following) {
                req.session.user.following = [];
            }
            req.session.user.following.forEach(user => {
                objectIds.push(user);
            })
            
            objectIds.push(req.session.user._id);
            searchObj.postedBy = { $in: objectIds };
        }

        delete searchObj.followingOnly;
    }

    var results = await getPosts(searchObj);
    res.status(200).send(results);
})

router.get("/:id", async (req, res, next) => {

    var postId = req.params.id;

    var postData = await getPosts({ _id: postId });
    postData = postData[0];

    var results = {
        postData: postData
    }

    if(postData.replyTo !== undefined) {
        results.replyTo = postData.replyTo;
    }

    results.replies = await getPosts({ replyTo: postId });

    res.status(200).send(results);
})

router.post("/", async (req, res, next) => {
    if (!req.body.content) {
        console.log("Content param not sent with request");
        return res.sendStatus(400);
    }

    var postData = {
        content: req.body.content,
        postedBy: req.session.user
    }

    if(req.body.replyTo) {
        postData.replyTo = req.body.replyTo;
    }


    Post.create(postData)
    .then(async newPost => {
        newPost = await User.populate(newPost, { path: "postedBy" })

        res.status(201).send(newPost);
    })
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })
})

router.put("/:id/like", async (req, res, next) => {

    var postId = req.params.id;
    var userId = req.session.user._id;

    var isLiked = req.session.user.likes && req.session.user.likes.includes(postId);

    var option = isLiked ? "$pull" : "$addToSet";

    // Insert user like
    req.session.user = await User.findByIdAndUpdate(userId, { [option]: { likes: postId } }, { new: true})
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })

    // Insert post like
    var post = await Post.findByIdAndUpdate(postId, { [option]: { likes: userId } }, { new: true})
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })


    res.status(200).send(post)
})

router.post("/:id/retweet", async (req, res, next) => {
    var postId = req.params.id;
    var userId = req.session.user._id;

    // Try and delete retweet
    var deletedPost = await Post.findOneAndDelete({ postedBy: userId, retweetData: postId })
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })

    var option = deletedPost != null ? "$pull" : "$addToSet";

    var repost = deletedPost;

    if (repost == null) {
        repost = await Post.create({ postedBy: userId, retweetData: postId })
        .catch(error => {
            console.log(error);
            res.sendStatus(400);
        })
    }

    // Insert user like
    req.session.user = await User.findByIdAndUpdate(userId, { [option]: { retweets: repost._id } }, { new: true })
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })

    // Insert post like
    var post = await Post.findByIdAndUpdate(postId, { [option]: { retweetUsers: userId } }, { new: true })
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })


    res.status(200).send(post)
})

router.delete("/:id", (req, res, next) => {
    Post.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(202))
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })
})

async function getPosts(filter) {
    var results = await Post.find(filter)
    .populate("postedBy")
    .populate("retweetData")
    .populate("replyTo")
    .sort({ "createdAt": -1 })
    .catch(error => console.log(error))

    results = await User.populate(results, { path: "replyTo.postedBy"})
    return await User.populate(results, { path: "retweetData.postedBy"});
}

module.exports = router;


extends layouts/main-layout.pug

block content
    if !profileUser
        span.errorMessage Check the url you are trying to access
    else  
        script.
            var profileUserId = '!{profileUser._id}';
            var selectedTab = '!{selectedTab}';

        - var followersCount = profileUser.followers.length
        - var followingCount = profileUser.following.length
            
        .profileHeaderContainer
            .coverPhotoContainer

                .userImageContainer
                    img(src=profileUser.profilePic, alt="User profile image")

                    if profileUser._id == userLoggedIn._id
                        button.profilePictureButton(data-toggle="modal", data-target="#imageUploadModal")
                            i.fas.fa-camera

            .profileButtonsContainer
                if profileUser._id != userLoggedIn._id
                    a.profileButton(href=`/messages/${profileUser._id}`)
                        i.fas.fa-envelope

                    - var profileUserId = profileUser._id.toString();
                    - if(userLoggedIn.following && userLoggedIn.following.includes(profileUserId))
                        +createFollowButton(profileUser, true)
                    - else 
                        +createFollowButton(profileUser, false)
                        
            .userDetailsContainer
                span.displayName #{profileUser.firstName} #{profileUser.lastName}
                span.username @#{profileUser.username}
                span.description #{profileUser.description}

                .followersContainer
                    a(href=`/profile/${profileUser.username}/following`)
                        span.value #{followingCount}
                        span Following
                    a(href=`/profile/${profileUser.username}/followers`)
                        span.value #{followersCount}
                        span Followers
        .tabsContainer
            +createTab("Posts", `/profile/${profileUser.username}`, selectedTab != "replies")
            +createTab("Replies", `/profile/${profileUser.username}/replies`, selectedTab == "replies")


        .postsContainer

        +createPostModals(userLoggedIn)
        +createImageUploadModal()

block scripts
    script(src="/js/profile.js")


include ../mixins/mixins

<!DOCTYPE html>
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        title #{pageTitle}
        link(rel='stylesheet', href='https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.9/cropper.min.css')
        link(rel='stylesheet', href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css', integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh', crossorigin='anonymous')
        link(rel="stylesheet", href="/css/main.css")
    body
        script.
            var userLoggedIn = !{userLoggedInJs};
        .wrapper
            .row
                nav.col-2
                    a.blue(href="/")
                        i.fas.fa-dove
                    a(href="/")
                        i.fas.fa-home
                    a(href="/search")
                        i.fas.fa-search
                    a(href="/notifications")
                        i.fas.fa-bell
                    a(href="/messages")
                        i.fas.fa-envelope
                    a(href="/profile")
                        i.fas.fa-user
                    a(href="/logout")
                        i.fas.fa-sign-out-alt
                .mainSectionContainer.col-10.col-md-8.col-lg-6
                    .titleContainer
                        h1 #{pageTitle}

                    block content

                .d-none.d-md-block.col-md-2.col-lg-4

        script(src='https://kit.fontawesome.com/85404227e2.js' crossorigin='anonymous')
        script(src='https://code.jquery.com/jquery-3.5.1.min.js', integrity='sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=', crossorigin='anonymous')
        script(src='https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.9/cropper.min.js')
        script(src='https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js', integrity='sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo', crossorigin='anonymous')
        script(src='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js', integrity='sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6', crossorigin='anonymous')

        block scripts

        script(src="/js/common.js")

const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const upload = multer({ dest: "uploads/" })
const User = require('../../schemas/UserSchema');
const Post = require('../../schemas/PostSchema');

app.use(bodyParser.urlencoded({ extended: false }));

router.put("/:userId/follow", async (req, res, next) => {

    var userId = req.params.userId;

    var user = await User.findById(userId);
    
    if (user == null) return res.sendStatus(404);

    var isFollowing = user.followers && user.followers.includes(req.session.user._id);
    var option = isFollowing ? "$pull" : "$addToSet";

    req.session.user = await User.findByIdAndUpdate(req.session.user._id, { [option]: { following: userId } }, { new: true})
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })

    User.findByIdAndUpdate(userId, { [option]: { followers: req.session.user._id } } )
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })

    res.status(200).send(req.session.user);
})

router.get("/:userId/following", async (req, res, next) => {
    User.findById(req.params.userId)
    .populate("following")
    .then(results => {
        res.status(200).send(results)
    })
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })
});

router.get("/:userId/followers", async (req, res, next) => {
    User.findById(req.params.userId)
    .populate("followers")
    .then(results => {
        res.status(200).send(results)
    })
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })
});

router.post("/profilePicture", upload.single("croppedImage"), async (req, res, next) => {
    if(!req.file) {
        console.log("No file uploaded with ajax request");
        return res.sendStatus(400);
    }

    var filePath = `/uploads/images/${req.file.filename}.png`;
    var tempPath = req.file.path;
    var targetPath = path.join(__dirname, `../../${filePath}`);
    
    fs.rename(tempPath, targetPath, async error => {
        if(error != null) {
            console.log(error);
            return res.sendStatus(400);
        }

        req.session.user = await User.findByIdAndUpdate(req.session.user._id, { profilePic: filePath }, { new: true })
        res.sendStatus(204);
    })

});

module.exports = router;


const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt");
const path = require("path");
const User = require('../schemas/UserSchema');

router.get("/images/:path", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../uploads/images/" + req.params.path));
})

module.exports = router;


const express = require('express');
const app = express();
const port = 3003;
const middleware = require('./middleware')
const path = require('path')
const bodyParser = require("body-parser")
const mongoose = require("./database");
const session = require("express-session");

const server = app.listen(port, () => console.log("Server listening on port " + port));

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
    secret: "bbq chips",
    resave: true,
    saveUninitialized: false
}))

// Routes
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes');
const postRoute = require('./routes/postRoutes');
const profileRoute = require('./routes/profileRoutes');
const uploadRoute = require('./routes/uploadRoutes');

// Api routes
const postsApiRoute = require('./routes/api/posts');
const usersApiRoute = require('./routes/api/users');

app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/posts", middleware.requireLogin, postRoute);
app.use("/profile", middleware.requireLogin, profileRoute);
app.use("/uploads", uploadRoute);

app.use("/api/posts", postsApiRoute);
app.use("/api/users", usersApiRoute);

app.get("/", middleware.requireLogin, (req, res, next) => {

    var payload = {
        pageTitle: "Home",
        userLoggedIn: req.session.user,
        userLoggedInJs: JSON.stringify(req.session.user),
    }

    res.status(200).render("home", payload);
})


// Ended at 3:40 6-9-2022
