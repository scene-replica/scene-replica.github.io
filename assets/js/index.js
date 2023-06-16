function get_leaderboard_entry(idx, entry) {
  let n = entry.length
  let row_prefix = `<td>${idx + 1}</td>`
  let th_n2f_content = ``
  let th_frnd_content = ``
  for (var i = 0; i < n; i += 1) {
    entry[i] = entry[i].replace(/@(\d+)@/g, '<a href="#bib-$1"> [$1]</a>');
    if (i >= 0 && i < 4) {
      row_prefix += `<td>${entry[i]}</td>`;
    } else if (i >= 4 && i < 8) {
      th_n2f_content += `<td>${entry[i]}</td>`;
    } else if (i >= 8 && i < n - 1) {
      th_frnd_content += `<td>${entry[i]}</td>`;
    } else {
      var vid_link_html = `<td> <a href="#" target="_blank"><span class="icon"><i class="fas fa-link"></i></span></a></td>`
      th_n2f_content += vid_link_html
      th_frnd_content += vid_link_html
    }
  }

  // return `<tr><th>${idx+1}</th>${th_content}</tr>` Use for rank
  return `<tr>${row_prefix}${th_n2f_content}</tr><tr>${row_prefix}${th_frnd_content}</tr>`
}

$(document).ready(function () {
  let leaderboard_body = ''

  for (let [index, leaderboard_entry] of leaderboard_entries.entries()) {
    leaderboard_body += get_leaderboard_entry(index, leaderboard_entry)
  }

  $('#leaderboard-body').html(leaderboard_body);

  // Get the table and table body elements
  var table = $('#leaderboard-table');
  var tbody = table.find('tbody');

  // Define the default sort column index
  var defaultSortColumn = 7; // Set it to the desired column index (0-based)

  // Sort the default column by default
  sortTable(defaultSortColumn);

  // Attach a click event handler to table headers
  table.find('th').click(function () {
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
    rows.sort(function (a, b) {
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
    $.each(rows, function (index, row) {
      tbody.append(row);
    });
  }


  // references
  let references_html = ``
  for (reference in references) {
    references_html += `<li id="bib-${reference}" class="references">${references[reference]}</li>`
  }
  $('#references').html(references_html)
})


