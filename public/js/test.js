$(document).ready(function() {
	initializePage();
})

function initializePage() {
	//in main page
	$(".back").click(backClick);
    $(".colBack").click(colBackClick);
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
    $(".backColSel").click(backColSel);
}

function backClick(e) {
    window.history.go(-1);
}

function colBackClick(e) {
    link = $(this).attr('id');
    console.log(link);
    window.location.href='/Collection '+link;
}

function backColSel(e){
    window.location.href='/collections';
}

function closeClick(e){
    window.location.href='/main';
}

function backProfileClick(e) {
    // prevent the page from reloading
    window.location.href='./PPH';
}

function CollectionClick(e) {
    window.location.href='/collections';
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
	console.log("account arrived");
	//checkLoginState()
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
    var col = $(this).attr('id');
    window.location.href='./'+ col +'/colSearch?word='+word;
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
