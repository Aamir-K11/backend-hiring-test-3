const Volume  = require("../models/volume");

async function addToShelf(shelf,volume)
{
    const search_volume = Volume.findOne({title: volume.title});
    if(!search_volume) return;
    shelf.volumes.push(volume);
}