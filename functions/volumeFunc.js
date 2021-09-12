const Volume    = require("../models/volume");




async function addVolume(new_volume)
{
    const Vol = new Volume.volumeModel(new_volume);

    try
    {
        const result = await Vol.save();

    }
    catch(err)
    {
        console.log(err);
    }
}


module.exports  = {
    addVolume
}