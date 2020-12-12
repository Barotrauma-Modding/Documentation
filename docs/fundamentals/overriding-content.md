# Overriding Content

Usually you are not creating a total conversion mod, but you might still want to override parts of the original content. This can be done by using the "override" elements in the xml configuration files. For example, the content of the potatogun.xml file included in the previous content package example could be something like this:

```xml
<Override>
    <Item name="Potato Gun" identifier="harpoongun" tags="mediumitem,weapon,gun">
        <!-- Content here -->
    </Item>
</Override>
```

This mod would replace the vanilla "Harpoon Gun" with a "Potato Gun". The behavior of the gun is omitted in the example, but we would probably want to change the texture of the gun. In that case, we would replace the original "Sprite" element with a custom, like so:

```xml
<Override>
    <Item name="Potato Gun" identifier="harpoongun" tags="mediumitem,weapon,gun">
        <!-- Content here -->
        <Sprite texture="potatogun.png" sourcerect="0,64,282,60" depth="0.55" origin="0.5,0.5"/>
        <!-- More content -->
    </Item>
</Override>
```

## Identifiers

Overriding is based on **identifiers** (where applicable), meaning that the identifier of the new item must match the identifier of the old item. If you try to override an item that is not found in the game, you will get an error in the console.

In order to get the new item function like the vanilla counterpart, make sure to include all the tags of the original item. You can add tags, but don't remove them (unless you really know what you are doing), or the item might not work as it should.

Note that for some content types, like items, you can override multiple definitions by simply adding the override element as the parent of the main element, like this:

```xml
<Override>
    <Items>
        <Item identifier="firstitem"/>
        <Item identifier="seconditem"/>
    </Items>
</Override>
```

Overriding is already implemented for most content types, but not every single one of them. In the future, you will be able to modify all the content types. Next, let's have a look at the various content types we have.
