# Items

Items consist of one or more “item components” that determine the functionality of the item. For example, an item could have a “Holdable” component that makes it possible to pick it up and hold it in your hands and an “ItemContainer” component that lets you contain other items inside it.

If you are familiar with Unity, you can think of items as Unity's GameObjects, and item components as the Components attached to the GameObjects.

In the following sections we will go over all the available item components and their editable properties.

Let's start with the properties shared by all the item components.

## Shared Properties

| Name | Type | Default Value | Description |
| - | - | - | - |
| AllowUIOverlap | Boolean | False | Can the UI elements of the item's interface overlap, or are they automatically repositioned so that they don't overlap |
| HudPriority | Integer | 0 | If the item has multiple components with a HUD of some sort, this value determines which of them should be drawn if there are multiple ones open. For example, connection panels have a high priority, meaning that when you start rewiring devices the connection panel interface takes precedence over the item's other interfaces. |
| PickingTime | Float | 0 | How long it takes to pick up the item (in seconds). |
| CanBePicked | Boolean | False | Can the item be picked up (or interacted with, if the pick action does something else than picking up the item). |
| DrawHudWhenEquipped | Boolean | False | Should the interface of the item (if it has one) be drawn when the item is equipped. |
| CanBeSelected | Boolean | False | Can the item be selected by interacting with it. |
| CanBeCombined | Boolean | False | Can the item be combined with other items of the same type. |
| RemoveOnCombined | Boolean | False | Should the item be removed if combining it with an other item causes the condition of this item to drop to 0. |
| CharacterUsable | Boolean | False | Can the "Use" action of the item be triggered by characters or just other items/StatusEffects. |
| AllowInGameEditing | Boolean | True | Can the properties of the component be edited in-game (only applicable if the component has in-game editable properties). |
| DeleteOnUse | Boolean | False | Should the item be deleted when it's used. |
| Msg | String | "" | A text displayed next to the item when it's highlighted (generally instructs how to interact with the item, e.g. `[Mouse1] Pick up`). |
| CombatPriority | Float | 0 | How useful the item is in combat? Used by AI to decide which item it should use as a weapon. For the sake of clarity, use a value between 0 and 100 (not enforced). |

## ItemComponent Reference

Work in Progress
