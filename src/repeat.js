var repeat = {};

repeat.getZIndex = function(element)
{
    var index = 0;
    var parent = element.parentElement;

    while(parent.tagName != 'BODY' && index < 10) 
    {
        index++;
        parent = parent.parentElement;
    }

    return index;
}

repeat.compareIndexedElements = function(a, b)
{
    return b.index - a.index;
}

repeat.initialize = function()
{
    var elements = document.querySelectorAll('[repeat-element]');
    var indexedElements = [];

    for (const e of elements) 
    {
        indexedElements.push(
        {
            element: e,
            index: repeat.getZIndex(e)
        });
    }

    indexedElements.sort(repeat.compareIndexedElements);

    for (const indexedElement of indexedElements) 
    {
        let repeat = indexedElement.element.getAttribute("repeat-element") - 1;
        indexedElement.element.removeAttribute("repeat-element");

        for (var i = 0; i < repeat; i++)
        {
            indexedElement.element.parentElement.appendChild(indexedElement.element.cloneNode(true));
        }
    }
}

window.addEventListener("load", repeat.initialize);