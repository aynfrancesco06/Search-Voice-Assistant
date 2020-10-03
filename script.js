 
//let init = introJs().start();


// audio preloader
 

 //

/* MODAL BUTTON */

let modal = document.querySelector(".about-modal");
let btn = document.querySelector("#myBtn");
let span = document.querySelector(".close");
let blur_bg = document.querySelector(".blur-this");

btn.onclick= function(){
  modal.style.display = "block";
  blur_bg.style.filter = "blur(50px)";
}

span.onclick = function(){
  modal.style.display = "none";
  blur_bg.style.filter = "none";
}

window.onclick = function(event){
  if (event.target == modal){
    modal.style.display = "none";
    blur_bg.style.filter = "none";
  }
}



//window.onload = init;
console.dir();
 var result = document.getElementById("result");
      const allTabs = [];
      const clearItem = () => {
        setTimeout(() => {
          result.innerHTML = "";
        }, 2000);
      };
      function startConverting() {
        if ("webkitSpeechRecognition" in window) {
          var speechRecognizer = new webkitSpeechRecognition();
          speechRecognizer.continuous = true;
          speechRecognizer.interimResults = true;
          speechRecognizer.lang = "en-US";
          speechRecognizer.start();

          var finalTranscripts = "";

          speechRecognizer.onresult = function (event) {
            var interimTranscripts = "";
            for (var i = event.resultIndex; i < event.results.length; i++) {
              var transcript = event.results[i][0].transcript;

              transcript.replace("\n", "<br>");

              if (event.results[i].isFinal) {
                finalTranscripts += transcript;
              } else {
                interimTranscripts += transcript;
              }
            }

            result.innerHTML =
              finalTranscripts +
              '<span style="color: #999">' +
              interimTranscripts +
              "</span>";

            if (finalTranscripts.includes("go to")) {
              let match = finalTranscripts.match(
                /(([A-z0-9])+\.+([A-z]|[0-9]){3}(\/([A-z0-9])){0})/gi
              );

              let newTab = window.open("https://" + match, "_blank");
             

              if (finalTranscripts.includes("google")|| finalTranscripts.includes("google.com")){
                document.querySelector("#logo-image").src = "logos/google_logo.jpg"
              } else if (finalTranscripts.includes("facebook")|| finalTranscripts.includes("facebook.com")){
                document.querySelector("#logo-image").src = "logos/facebook_logo.jpg"
              } else if (finalTranscripts.includes("wikipedia")|| finalTranscripts.includes("wikipedia.com")){
                document.querySelector("#logo-image").src = "logos/wikipedia_logo.jpg"
              } else if (finalTranscripts.includes("youtube")|| finalTranscripts.includes("youtube.com")){
                document.querySelector("#logo-image").src = "logos/youtube_logo.jpg"
              }
              finalTranscripts = "";
              clearItem();

            } else if (finalTranscripts.includes("open")) {
              if (finalTranscripts.includes("new tab")) {
                window.open("", "_blank"); 
              }
            } else if (finalTranscripts.includes("search wikipedia")) {
              let searchWikiMatch = finalTranscripts.match(
                /(?<=wikipedia).*/ig
              );
              let newTab = window.open(
                "https://www.wikipedia.org/wiki/" +
                  searchWikiMatch[0].replace(/ /g, "_"),
                "_blank"
              );

             
              if (finalTranscripts.includes("google")|| finalTranscripts.includes("google.com")){
                document.querySelector("#logo-image").src = "logos/google_logo.jpg"
              } else if (finalTranscripts.includes("facebook")|| finalTranscripts.includes("facebook.com")){
                document.querySelector("#logo-image").src = "logos/facebook_logo.jpg"
              } else if (finalTranscripts.includes("wikipedia")|| finalTranscripts.includes("wikipedia.com")){
                document.querySelector("#logo-image").src = "logos/wikipedia_logo.jpg"
              } else if (finalTranscripts.includes("youtube")|| finalTranscripts.includes("youtube.com")){
                document.querySelector("#logo-image").src = "logos/youtube_logo.jpg"
              }
              finalTranscripts = "";
              clearItem();
            } else if (finalTranscripts.includes("find")) {
              let searchMatch = finalTranscripts.match(
                /([^google]([A-z0-9])+([A-z]|[0-9]){2}(\/([A-z0-9])){0})/gi
                );
              let searchContent = finalTranscripts.match(
                /(?<=search ).*(?= in)/g
              );
              let newTab = window.open(
                "https://www." +
                  searchMatch[searchMatch.length - 1].trim() +
                  ".com/search?q=" +
                  searchContent[0], "_blank"
              );
             
              if (finalTranscripts.includes("google")|| finalTranscripts.includes("google.com")){
                document.querySelector("#logo-image").src = "logos/google_logo.jpg"
              } else if (finalTranscripts.includes("facebook")|| finalTranscripts.includes("facebook.com")){
                document.querySelector("#logo-image").src = "logos/facebook_logo.jpg"
              } else if (finalTranscripts.includes("wikipedia")|| finalTranscripts.includes("wikipedia.com")){
                document.querySelector("#logo-image").src = "logos/wikipedia_logo.jpg"
              } else if (finalTranscripts.includes("youtube")|| finalTranscripts.includes("youtube.com")){
                document.querySelector("#logo-image").src = "logos/youtube_logo.jpg"
              }

              finalTranscripts = "";
              clearItem();
            } else if (finalTranscripts.includes("search youtube")) {
              let searchMatch = finalTranscripts.match(
                /([^youtube]([A-z0-9])+([A-z]|[0-9]){2}(\/([A-z0-9])){0})/gi
                );
              let searchContent = finalTranscripts.match(
                /(?<=youtube).*/ig
              );
              let newTab = window.open(
                "https://www.youtube.com/results?search_query=" +
                  searchContent, "_blank"
              );
             
              if (finalTranscripts.includes("google")|| finalTranscripts.includes("google.com")){
                document.querySelector("#logo-image").src = "logos/google_logo.jpg"
              } else if (finalTranscripts.includes("facebook")|| finalTranscripts.includes("facebook.com")){
                document.querySelector("#logo-image").src = "logos/facebook_logo.jpg"
              } else if (finalTranscripts.includes("wikipedia")|| finalTranscripts.includes("wikipedia.com")){
                document.querySelector("#logo-image").src = "logos/wikipedia_logo.jpg"
              } else if (finalTranscripts.includes("youtube")|| finalTranscripts.includes("youtube.com")){
                document.querySelector("#logo-image").src = "logos/youtube_logo.jpg"
              }

              finalTranscripts = "";
              clearItem();
            } else if (finalTranscripts.includes(" ")) {
              let searchAny = finalTranscripts;
              let newTab = window.open(
                "https://www.google.com/search?q=" + searchAny,
                "_blank"
              );
            
              if (finalTranscripts.includes("google")|| finalTranscripts.includes("google.com")){
                document.querySelector("#logo-image").src = "logos/google_logo.jpg"
              } else if (finalTranscripts.includes("facebook")|| finalTranscripts.includes("facebook.com")){
                document.querySelector("#logo-image").src = "logos/facebook_logo.jpg"
              } else if (finalTranscripts.includes("wikipedia")|| finalTranscripts.includes("wikipedia.com")){
                document.querySelector("#logo-image").src = "logos/wikipedia_logo.jpg"
              } else if (finalTranscripts.includes("youtube")|| finalTranscripts.includes("youtube.com")){
                document.querySelector("#logo-image").src = "logos/youtube_logo.jpg"
              }

              finalTranscripts = "";
              clearItem();
              /*
              openedTabs.forEach((x) => x.close());
              console.log(openedTabs);
              // } else if(finaltranscripts.includes("close google tabs")){
              openedTabs = [];
              */
            } 
          };
          speechRecognizer.onerror = function (event) {};
        } else {
          result.innerHTML =
            "Your browser is not supported. Please download Google chrome or Update your Google chrome!!";
        }
      }