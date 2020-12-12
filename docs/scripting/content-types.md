# Content Types

In the previous examples the content packages included a couple of different types of **content files**: items, characters, structures, jobs, random events and the game executable. Here’s the full list of all supported content types. Unfortunately we don’t yet have a full documentation available for modifying all of the content types, but you can use the Vanilla content files as a reference to see how they work; most of them are pretty straight-forward.

Some types of content prevent players from joining servers if both the player and the server don't have the same content installed, while some can be freely installed without compatibility issues.
The ones that cause multiplayer incompatibility are `Jobs`, `Item`, `Character`, `Structure`, `LocationTypes`, `MapGenerationParameters`, `LevelGenerationParameters`, `Missions`, `LevelObjectPrefabs`, `RuinConfig`, `Outpost`, `Afflictions` and `Orders`.

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
| Outpost | An outpost used in the campaign mode. The outposts are technically static, immovable submarines and can be created using the submarine editor. |
| Text | A file that defines in-game texts, which can be anything from texts you see in the menus to item names, and from error messages to loading screen texts. Mods don’t usually need to define new text files, but if you for example are creating a mod that adds new items and want the item names and descriptions to be translatable to multiple languages, you need to create text files for all the languages you want to support and define the names and descriptions there. |
| Executable | Where the game executable itself is stored. Only for advanced users: this may be useful if you’ve compiled a custom version of the game and want to create a mod that uses the custom executable instead of the normal Barotrauma.exe. |
| ServerExecutable | Similar to Executable; defines the path of the dedicated server executable. |
| LocationTypes | Defines the types of locations that can appear on the campaign map (City, Outpost, Military, Research...) |
| MapGenerationParameters | Defines how the campaign map is generated. This includes the size, the amount and placement of locations, how the map looks and the number of difficulty zones, among other things. |
| LevelGenerationParameters | Defines how the in-game levels are generated. This includes the size and shape, how the level looks like, the amount of smaller caves and ruins and many other things. You can create and test your own level generation parameters in the in-game level editor which can be accessed using the console command “editlevels”. |
| LevelObjectPrefabs | Defines the environmental objects such as plants, decorative rock formations, water currents, hydrothermal vents. These can also be edited in the level editor. |
| RandomEvents | Defines the random events that can occur during rounds. |
| Missions | Defines the missions that are available in the campaign and the mission mode. |
| BackgroundCreaturePrefabs | Defines the decorative, non-interactable background creatures that wander around the levels. |
| Sounds | Defines music and sound files. Do note that item-specific and character-specific sounds are defined in the item and character configuration files - the sound configuration files only define “global” sounds such as music, ambient, fire and water that aren’t related to some specific item/character. |
| RuinConfig | Defines how alien ruins are generated, including their layout, which structures they are made of and how items are laid out inside them. |
| Particles | Defines particle effects such as explosions, fire, splashes, etc. These can be edited using the in-game particle editor which can be accessed using the console command “editparticles”. |
| Decals | Defines decals such as blood spatters, explosion damage and burnt walls. |
| NPCConversations | Defines the random NPC conversations and dialog lines. |
| Afflictions | Defines afflictions such as blood loss, internal damage, addictions, infections, etc. |
| Tutorials | Defines the tutorial configurations. Do note that modifying the tutorials or creating your own ones will most likely require changes to the game’s source code and recompiling the game. |
| UIStyle | Defines UI style files which determine how UI elements look. These can be used to, for example, modify how the in-game menus or device interfaces look. |
| TraitorMissions | Defines traitor missions.  |
