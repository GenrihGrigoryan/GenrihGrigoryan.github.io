const toggleSwitch = document.getElementById('checkbox');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    //document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        //toggleSwitch.checked = true;
    }
}


function fadeInPage() {
    if (!window.AnimationEvent) { return; }
    var fader = document.getElementById('fader');
    fader.classList.add('fade-out');
}

document.addEventListener('DOMContentLoaded', function() {
    if (!window.AnimationEvent) { return; }

    var anchors = document.getElementsByTagName('a');
    
    for (var idx=0; idx<anchors.length; idx+=1) {
        /*
        if (anchors[idx].hostname !== window.location.hostname ||
            anchors[idx].pathname === window.location.pathname) {
            continue;
        }
        */
        anchors[idx].addEventListener('click', function(event) {
            var fader = document.getElementById('fader'),
                anchor = event.currentTarget;
            
            var listener = function() {
                window.location = anchor.href;
                fader.removeEventListener('animationend', listener);
            };
            fader.addEventListener('animationend', listener);
            
            event.preventDefault();
            fader.classList.add('fade-in');
        });
    }
});

window.addEventListener('pageshow', function (event) {
    if (!event.persisted) {
      return;
    }
    var fader = document.getElementById('fader');
    fader.classList.remove('fade-in');
  });


function switchTheme(e) {
    if (e.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

function toggleTheme(){
    var theme = localStorage.getItem('theme');

    if (theme === "dark") {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    else {        
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }    
}
/*
var en = {
    name: "Genrih Grigoryan",
    mainInfo: "",
    nowHeader: "Now",
    nowInfo: "",
    language: "Русский"
}

var ru = {
  name: "Генрих Григорьян",
  mainInfo: "Наблюдатель. Автор. Предприниматель. Традиционалист. Реалист. Идеалист.",

  language: "English"

}


function loadLang(){
    var lang = localStorage.getItem('language');
    if(lang==null){
        //detect and set
    }
    else if(lang == 'en'){
        setLanguage('en')
    }
}

function toggleLang(){
    var theme = localStorage.getItem('theme');

}

function setLanguage(lang){
  var lang;
  if(lang == 'en'){
      lang = en;
  }
  else if(lang == 'ru'){
      lang = ru;
  }
  document.getElementById("Name").innerHTML = lang.name;

  document.getElementById("Lang").innerHTML = lang.language;

}
*/