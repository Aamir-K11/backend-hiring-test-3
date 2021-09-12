const User = require("../models/user");
const BookShelf = require("../models/bookshelf");
const Volume    = require("../models/volume");

async function addUser(new_user)
{

    const already_exist = await User.findOne({name: new_user.name, email: new_user.email, password: new_user.password});
    if(already_exist){
        return
    }

    const user = new User({
        name  : new_user.name,
        email : new_user.email,
        password: new_user.password,
        bookshelves : []
    });

    try{
        const result = await user.save();
        
    }

    catch(err){
        console.log(err);
    };
}

async function getUser(user)
{
    try{
        const user_search = await User.findOne({name: user.name, email: user.email, password: user.password});
        return user_search;
    }

    catch(err)
    {
        console.log(err);
    }
}


async function addBookShelf(user,bookshelf)
{
    const user_search = await getUser(user);
   
    if(!user_search) return;
 
    user_search.bookshelves.push(new BookShelf.BookShelfModel({
        "name" : bookshelf.name,
        "volume": bookshelf.volume,
        "isPrivate" : bookshelf.isPrivate
    }));

    const shelf = new BookShelf.BookShelfModel({
        "name": bookshelf.name,
        "volume": bookshelf.volume,
        "isPrivate": bookshelf.isPrivate,
        "username": user_search.email
    });






    
    shelf.save();
    user_search.save();
}


async function removeBookShelf(user,bookshelf)
{
    const user_search = await getUser(user);
   
    if(!user_search) return;

    let filtered = user_search.bookshelves.filter(e =>{
        e.name !== bookshelf.name;
    });
    
    user_search.bookshelves = filtered;


   
    user_search.save();
}


async function addToBookShelf(user,shelf,volume)
{   
    const search_user = await getUser(user);
    if(!search_user) return;
    const search_volume = await Volume.volumeModel.findOne({title: volume.title});
    if(!search_volume) return;
    search_user.bookshelves.forEach(bookshelf => {
        if(bookshelf.name == shelf.name)
        {
            bookshelf.volumes.push(search_volume);
        }
    });

    search_user.save();
    
}

async function giveReview(user,volume,review)
{
    let unique = true;
    const search_user = await getUser(user);
    if(!search_user) return;
    const vol = await Volume.volumeModel.findOne({title: volume.title});
    if(!vol) return;

    vol.reviews.forEach(review => {
    
        if(review.email == search_user.email)
        {
           unique = false;
        }

    });
    if(unique)
    {
        review.email = search_user.email;
        vol.reviews.push(review);
    
        vol.save();
    }
    
}

async function updateReadingPos(user,shelf,vol,pos)
{
    const search_user = await getUser(user);
    if(!search_user) return;
    search_user.bookshelves.forEach(shelf => {
        shelf.volumes.forEach(volume => {
               if(volume.title == vol.title) 
               {
                   
                    if(!volume.position)
                    {
                        volume.position = 0;
                        volume.position += pos;
                    }

                    else{
                        volume.position += pos;
                    }

                    
               }
        });
    });

    search_user.save();

}




module.exports = 
{
    addUser,
    getUser,
    addBookShelf,
    removeBookShelf,
    addToBookShelf,
    giveReview,
    updateReadingPos
}