walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

    if(v.match(/cloud/i)) {
        // If we're not talking about weather
        if(v.match(/PaaS|SaaS|IaaS|computing|data|storage|cluster|distributed|server|hosting|provider|grid|enterprise|provision|apps|hardware|software/i)) {
            v = v.replace(/(C|c)loud/gi, function(match, p1, offset, string) {
                // c + 8 = k
                k = String.fromCharCode(p1.charCodeAt(0) + 8);
                return k + "loot";
            });
        }
    }
	textNode.nodeValue = v;
}
