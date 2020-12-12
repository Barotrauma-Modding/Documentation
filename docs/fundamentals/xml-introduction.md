# XML Introduction

Most of Barotrauma’s content (monsters, items, structures, random events, jobs, etc) is defined in [XML files](https://en.wikipedia.org/wiki/XML). These code files may seem daunting if you’ve never used them before, but they’re actually quite simple to understand even if you’ve never done any sort of programming.

The XML files can be edited with almost any text editor, even notepad, but we recommend using a text editor that supports code highlighting and is able to point out mistakes in the file. For example, [Notepad++](https://notepad-plus-plus.org) is a free, easy to use software that supports XML code highlighting. Other good options are [Sublime Text](https://www.sublimetext.com) and [Visual Studio Code/Community](https://visualstudio.microsoft.com).

XML files consist of elements, which in Barotrauma’s case could be for example an item. The elements are defined as follows:

```xml
<Item />
```

An element can also have attributes, which usually give some additional information about the element. For example:

```xml
<Item name=”Wrench” />
```

Elements can also have child elements. Barotrauma’s item elements for example have a child element called “Sprite” which determines what the item looks like. 

```xml
<Item name=”Wrench”>
	<Sprite />
</Item>
```

Note that the Item element now looks a little different. The previous examples defined the element on a single line, and the `“/>”` symbols marked where the element ends. Now when we needed to add a child element inside the Item element, the Item had to be split into multiple lines, `</Item>` marking where the element ends.
