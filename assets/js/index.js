function log(message) {
    console.log(message);
}

function get_leaderboard_entry(idx, entry) {
    let th_content = ``
    let n = entry.length
    for (let [index, cell] of entry.entries()) {
        if (index === n-1) {
            th_content += '<td> <a style=""href="' + cell + '" target="_blank">Link</a></td>'
        } else {
            th_content += `<td>${cell}</td>`
        }
     }
    // return `<tr><th>${idx+1}</th>${th_content}</tr>` Use for rank
    return `<tr>${th_content}</tr>`
}

$(document).ready(function () {
    let leaderboard_body = `<tr>Model-Based Grasping</tr>`
    for (let [index, leaderboard_entry] of leaderboard_model_based_grasping_entries.entries()) { 
        leaderboard_body += get_leaderboard_entry(index, leaderboard_entry)
    }
    leaderboard_body += `<tr>Model-Free Grasping</tr>`
    for (let [index, leaderboard_entry] of leaderboard_model_free_grasping_entries.entries()) { 
        leaderboard_body += get_leaderboard_entry(index, leaderboard_entry)
    }
    $('#leaderboard-body').html(leaderboard_body);

        // Get the table and table body elements
        var table = $('#leaderboard-table');
        var tbody = table.find('tbody');
    
        // Define the default sort column index
        var defaultSortColumn = 6; // Set it to the desired column index (0-based)
    
        // Sort the default column by default
        sortTable(defaultSortColumn);
    
        // Attach a click event handler to table headers
        table.find('th').click(function() {
          var column = $(this).index(); // Get the column index
    
          // Check if the column is already sorted
          var isAscending = $(this).hasClass('sorted-asc');
          table.find('th').removeClass('sorted-asc sorted-desc');
    
          // Sort the table rows based on the selected column and sort order
          sortTable(column, !isAscending);
    
          // Update the sort order indicator
          if (isAscending) {
            $(this).removeClass('sorted-asc').addClass('sorted-desc');
          } else {
            $(this).removeClass('sorted-desc').addClass('sorted-asc');
          }
        });
    
        // Function to sort the table rows based on a given column index and sort order
        function sortTable(column, isAscending) {
          // Get the rows
          var rows = tbody.find('tr').get();
    
          // Sort the rows based on the selected column and sort order
          rows.sort(function(a, b) {
            var aValue = $(a).find('td').eq(column).text().toUpperCase();
            var bValue = $(b).find('td').eq(column).text().toUpperCase();
            if (aValue < bValue) {
              return isAscending ? -1 : 1;
            }
            if (aValue > bValue) {
              return isAscending ? 1 : -1;
            }
            return 0;
          });
    
          // Clear the table body and re-append the sorted rows
          tbody.empty();
          $.each(rows, function(index, row) {
            tbody.append(row);
          });
        }
})


