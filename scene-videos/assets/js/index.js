$(document).ready(function () {
    query = {
        'cat': window.localStorage.getItem('cat'),
        'id': window.localStorage.getItem('id'),
        'vli': window.localStorage.getItem('vli'),
    }

    $('#page-title').html(`Order: ${query['cat']}`)

    let vid_html = ``
    let v_links = video_links[query['id']]
    for (var i = 0; i < v_links.length; i++) {
        vid_html += `
        <div class="columns is-centered">
        <div class="column">
                <div class="content has-text-centered">
                    <div class="publication-video">
                        <iframe width="560px" height="315px" src="${v_links[i][query['vli']]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <p class="subtitle has-text-centered"><strong>Scene: ${v_links[i][0]}</strong></p>
                </div>
                </div>
        </div>
        `
    }
    $('#vid-items').html(vid_html)
});