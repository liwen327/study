/**
 * Created by liwz on 16-4-5.
 */

define(["./cart","./inventory"],function(cart,inventory)
{
    return{
        color:"blue",
        size:"large",
        add:function(){
            inventory.decrement(this);
            cart.add(this);
        }
    }
})

