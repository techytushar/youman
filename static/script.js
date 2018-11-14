var videos = [];

//changes the submit button state
let change_button_state = (state) => {
    if(state === 0){
        $("#search_btn").text("Searching...");
        $("#search_btn").prop('disabled', true);
    }
    else{
        $("#search_btn").text("Search");
        $("#search_btn").prop('disabled', false);
    }
}

// displays the video blocks from list of objects
let display_video_blocks = (videos) => {
    $(".content").html("");
    $.each(videos, (index, item) => {
        $(".content").append('<a href="https://youtu.be/'+item["id"]+'" target="_blank"><div class="container-fluid box row"><div class="col-sm-3"><img src="'+item["thumbnail"]+'" class="img-responsive thumbnail"></div><div class="col-sm-9"><h2>'+item["title"]+'</h2><p>'+item["descr"]+'</p></div></div></a>');
    })
}

// makes API call to backend to search for videos
$("#search_btn").click(() => {
    change_button_state(0);
    let query = $("#querybox").val();
    let form = {
        "query" : query
    };
    $.ajax({
        type: "POST",
        contentType: 'application/json;charset=UTF-8',
        enctype: 'multipart/form-data',
        url: "/search",
        cache: false,
        dataType: 'json',
        timeout: 600000,
        data: JSON.stringify(form),
        async: true,
        success: function (data) {
            change_button_state(1);
            videos = data;
            display_video_blocks(videos);
        },
        error: function (e) {
            change_button_state(1);
            videos = [];
            console.log("Error: ",e);
        }
    });
})

$("#sort_alpha").click(() => {
    if(videos.length>0){
        sort_alpha(videos);
        display_video_blocks(videos);
    }
})
$("#sort_date").click(() => {
    if(videos.length>0){
        sort_date(videos);
        display_video_blocks(videos);
    }
})

//sorts list of videos alphabetically
let sort_alpha = (videos) => {
    videos.sort((a,b) => {
        if(a["title"] < b["title"])
            return -1;
        if(a["title"] > b["title"])
            return 1;
        return 0;
    });
    return videos;
}

//sorts list of videos by date
let sort_date = (videos) => {
    videos.sort((a,b) => {
        a = Date.parse(a["p_date"]);
        b = Date.parse(b["p_date"]);
        if(a<b)
            return -1;
        if(a>b)
            return 1;
        return 0;
    });
    return videos;
}
