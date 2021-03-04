$(document).ready(function() {
	initializePage();
})

function initializePage() {
	//in main page
	$(".back").click(backClick);
    $(".close").click(closeClick);
    $(".profile").click(ProfileClick);
    $(".collection").click(CollectionClick);
    $(".group").click(GroupClick);
	//in profile page
	$(".backProfile").click(backProfileClick);
	$(".account").click(AccountClick);
	$(".achievement").click(Achievementlick);
	$(".record").click(RecordClick);
	$(".settings").click(SettingsClick);
    $(".words").click(collectionSearch);
    $(".select").click(collectionSelecter);
    $(".logout").click(logOut);
}

function backClick(e) {
    window.history.go(-1);
}

function closeClick(e){
    window.location.href='/main';
}

function backProfileClick(e) {
    // prevent the page from reloading
    window.location.href='PPH';
}

function CollectionClick(e) {
    window.location.href='collections';
}

function ProfileClick(e) {
    window.location.href='PPH';
}

function SearchClick(e) {
    window.location.href='search';
}

function GroupClick(e) {
    window.location.href='GPH';
}

function AccountClick(e) {
    // prevent the page from reloading
    window.location.href='APH';
}

function Achievementlick(e) {
    // prevent the page from reloading
    window.location.href='AchPH';
}

function RecordClick(e) {
    // prevent the page from reloading
    window.location.href='RPH';
}

function SettingsClick(e) {
    // prevent the page from reloading
    window.location.href='SPH';
}

function ProfileGroupClick(e){
	// prevent the page from reloading
    window.location.href='APH';
}

function collectionSearch(e){
    var word = $(this).text();
    window.location.href='./search?word='+word;
}

function logOut(e){
    window.location.href='/';
}

function collectionSelecter(e){
    e.preventDefault();
    var col = $(this).text();
    window.location.href=col;
}

function addCOl(e){
    window.location.href='/addCol';
}