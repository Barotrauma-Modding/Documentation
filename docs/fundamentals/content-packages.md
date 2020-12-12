# Content Packages

Content packages are essentially files that tell the game which content files to use and where they are located. This includes items, structures, monsters, random events, level generation parameters, jobs and so on. By default the game uses a content package called “Vanilla 0.9”, which you can find at `InstallationLocation/Barotrauma/Content/Data/ContentPackages/Vanilla 0.9.xml`. Any other content package can be considered a modification of the game content, that is, a "mod".

The content packages are in a format called [XML](https://en.wikipedia.org/wiki/XML), as almost all other moddable content in Barotrauma. If you have no prior experience with the XML format, don’t worry – even though it may look intimidating at first, the format is pretty simple. Please see the “XML” section later in this guide for further details.

Note that if you just want to publish a custom submarine in the workshop, you don't need to worry about content packages – you can just select the submarine from the "Publish item" tab in the Workshop menu, and the game automatically creates a folder and content package for your mod.

If you use the built-in character editor for creating a new character, you will have to select or create a content package for it. You cannot use the vanilla content package, because modifying the vanilla content package would make your game incompatible with the other players.

When playing in multiplayer mode, the players generally need to have the same mods installed as the server, or they will be unable to join. However, this does not apply to all types of content: for example, the clients can use mods that modify the UI or sounds without causing incompatibility with servers. See the "Content types" section for more info on which types of content cause compatibility issues.

## Example

A very simple content package could be configured as follows:

```xml
<contentpackage name="BestModEver" path="Mods/PotatoGun/filelist.xml" gameversion="0.9.1.0" corepackage="false">
    <Item file="Mods/PotatoGun/potatogun.xml" />
</contentpackage>
```

This mod would simply add an extra item to the game (or items if there are multiple ones configured in the potatogun.xml file).

## Core Content Packages

Most mods are usually not core content packages, but instead add things to or modify things in the Vanilla content package (= the default content of the game).

Core packages are packages that contain all the necessary files to make the game run, instead of just adding some extra files on top of another content package. There can only be one core package selected at a time.

Here's an example of a simple core package:

```xml
<contentpackage name="BestModEver" path="Mods/BestModEver/filelist.xml" gameversion="0.9.1.0" corepackage="true">
    <Item file="Mods/BestModEver/items.xml" />
    <Character file="Mods/BestModEver/Human/Human.xml" />
    <Character file="Mods/BestModEver/Cthulhu/Cthulhu.xml" />
    <Character file="Content/Characters/Crawler/Crawler.xml" />
    <Structure file="Content/Map/StructurePrefabs.xml" />
    <Jobs file="Content/Jobs.xml" />
    <RandomEvents file="Mods/BestModEver/randomevents.xml" />
    <Executable file="Barotrauma.exe" />
</contentpackage>
```

This content package would replace all the items in the game with whatever items are configured in the `InstallationLocation/Barotrauma/Mods/BestModEver/items.xml` file. It would also use a modified version of the human characters and have all the monsters in the game replaced with Crawlers and Cthulhus. The random events have also been changed - perhaps by adding a new event that spawns Cthulhu and removing the events that spawn monsters/items which aren't included in the mod.

Note that the content package should be saved with the file name `filelist.xml` in the Mods folder, in this case `InstallationLocation/Barotrauma/Mods/BestModEver/filelist.xml`.
