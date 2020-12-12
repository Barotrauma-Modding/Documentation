# Content Types

In the previous examples the content packages included a couple of different types of **content files**: items, characters, structures, jobs, random events and the game executable. Here’s the full list of all supported content types. Unfortunately we don’t yet have a full documentation available for modifying all of the content types, but you can use the Vanilla content files as a reference to see how they work; most of them are pretty straight-forward.

Some types of content prevent players from joining servers if both the player and the server don't have the same content installed, while some can be freely installed without compatibility issues.
The ones that cause multiplayer incompatibility are Jobs, Item, Character, Structure, LocationTypes, MapGenerationParameters, LevelGenerationParameters, Missions, LevelObjectPrefabs, RuinConfig, Outpost, Afflictions and Orders.

Some of the content files are mandatory in core content packages. For example, you cannot have a core content package that does not include any items, characters or a game executable. The required types are `Jobs`, `Item`, `Character`, `Structure`, `Outpost`, `Text`, `Executable`, `ServerExecutable`, `LocationTypes`, `MapGenerationParameters`, `LevelGenerationParameters`, `RandomEvents`, `Missions`, `RuinConfig`, `Afflictions`, `UIStyle`, `EventManagerSettings` and `Orders`.

## List of Content Types

| Name | Description |
| - | - |
| Submarine | A submarine file. Even though the game automatically loads all submarine files from the Submarines folder, if you publish a submarine in the Steam workshop, a content package containing only that submarine will be generated to tell the game where to find the submarine file. |
| Jobs | The character’s jobs; Captain, Engineer, Mechanic and so on. |
| Item | An item file that may contain one or more items. |
| ItemAssembly | A group of multiple items that may be pre-wired or pre-configured. Item assemblies can be created in the submarine editor. |
| Character | A character configuration file defines visual things like sounds and particle effects as well as functional things, like how the character **acts**, how much **health** it has, and whether or not it can **walk**. A character configuration file also contains references to the **ragdoll** and **animation** files. Note that, at least for now, the character configuration file must match the species name. So the character configuration file for a character with the species name `Mygreatcharacter`, for example, should be `Mygreatcharacter.xml`. The species name is used like the identifier for items, so it has to be unique. Editing characters in xml can be difficult, unless you really know what you do. Fortunately, we have a built-in editor for creating and editing the characters. There still is a few things you cannot adjust in the editor, but in general, you don't have to manually edit the .xml files anymore to edit the characters. For further information about creating and editing characters, see the [character editor guide](https://steamcommunity.com/sharedfiles/filedetails/?id=2188423196). |
| Structure | A structure configuration file; decorative background walls, solid wall pieces, etc. |
