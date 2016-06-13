$('[data-toggle=popover]').popover({
	content: createContent(),
	html: true
});

function createContent() {
	var div = $('<div id="popover-content-wrapper"></div>');
	var table = $('<table class="notificationsTable"></table>');
	for (var i = 0; i < 6; i++) {
		table.append("<tr><td><p>Some text text text text. More text!</p><p>2 hours ago</p></td></tr>");
	}
	div.append(table);
	return div.html();
}