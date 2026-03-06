// layoutModel.js
// Central data structure for a wall layout

export function createLayoutModel(wallInput) {

  return {

    // ---- WALL INPUT ----

    wall: {
      length: wallInput.length || 0,
      panelCoverage: wallInput.panelCoverage || 36,
      ribSpacing: wallInput.ribSpacing || 12,
      offset: wallInput.offset || 0
    },

    // ---- CALCULATED DATA ----

    ribs: [],          // all rib centerline positions
    panelSeams: [],    // seam ribs (panel start/end ribs)

    panels: {
      fullCount: 0,
      rippedPanel: false,
      endCutWidth: 0
    },

    // ---- EXTENTS ----

    firstRib: 0,
    lastRib: 0,

    // ---- METADATA ----

    layoutMode: "LEFT_TO_RIGHT", 
    createdAt: Date.now()

  };

}
