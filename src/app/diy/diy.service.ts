import { Subject } from 'rxjs/Subject';
import { Diy } from './diy.model';
import { Material } from '../shared/material.model';

export class DiyService{
    
    diyPojectsChanged = new Subject<Diy[]>();

    private diyProjects: Diy[] =[
        new Diy('Simple diy unicorne card',
                'These DIY unicorn cards are gorgeous, simple to create and are guaranteed to bring a big smile to someone’s face.',
                'https://cdn.shopify.com/s/files/1/1782/5295/files/19388746_657069881163411_6769239507635955627_o_grande.jpg?v=1535616064',
                [
                    new Material("white cardstock", 1),
                    new Material("light pink cardstock", 1),
                    new Material("purple cardstock", 1),
                    new Material("glitter pink paper",1),
                    new Material("white sheet", 1),
                    new Material("black marker", 1),
                    new Material("scissors", 1),
                    new Material ("glue stick",1),
                    new Material("Tacky Glue",1),
                    new Material ("edge punch",1),
                    new Material("pencil",1),
                    new Material("ruler",1)
                ],
                'First, you 3 small pieces from the white sheet: 1 piece of size 3x7cm, 1 piece of 3x4cm, 1 piece of 2x3cm. Fold each piece in half, then draw a parabola curve, cut along the drawn line. When you open all the pieces, they would look like little 2 little unicorn ears and a big horn.We move on to make the plain card to stick all the details on. Cut a rectangle from the white cardstock, with a size of 19x24cm. Fold the longer side in half, so we got a plain birthday card of size 12x19cm. Next, take the purple paper, cut a rectangular 4x12cm piece. Round the edge with the edge punch. Glue it onto the bottom of the card we just made. Trim the edge of the card with the edge punch again. Next, pick the 3x7cm horn and 3x4cm unicorn ear, trace them onto the top part of the cards. The big horn is right at the middle, and the 2 ears are symmetrically placed at 2 sides. Cut off the upper part outside of the drawn line. We finally got a card in a unicorn head shape.Trace the small 2x3cm unicorn ear on the pink cardstock and cut out 2 pieces of the same size. We also cut out 2 circles of 3cm diameter from the pink paper as 2 pink cheekbones of the unicorn. Trace the big horn (3x7cm) on glitter paper and cut. Glue 2 small pink ears inside the big ears of the card, and the horn right at its position we just created on the card. Stick 2 pink cheekbones at 2 sides of the purple rectangle. We finish the item by drawing unicorn eyes and nostrils with the black marker. Cover its 2 nostrils with 2 halves of a little heart cut from glitter paper. For a more lively look of the unicorn, decorate the horn with colorful pompoms. Add as many pompoms as you like, the unicorn would look so adorable like it’s wearing a flower crown.'),

        new Diy('Themed magnets', 
                 'themed magnets are really nice and pretty',
                 'https://i.pinimg.com/originals/78/fa/a9/78faa9a56467bdbb7d32091cc097dff3.jpg',
                [
                    new Material("Clear one inch glass stones with a flat side", 4),
                    new Material("A one inch circle paper punch", 1),
                    new Material("Small round magnets", 4),
                    new Material("Mod Podge or another type of decoupage glue", 1),
                    new Material("Foam brushes ", 1),
                    new Material ("Tacky Glue",1),
                    new Material("items with small pictures", 1),
                    new Material("Glitter", 1),
                ],
                'Cut out the images you want to use.  These circles should be just slightly smaller than the glass stones. Use the Mod Podge with a foam brush to glue the cut out circle to the back of the stone. Make sure that the image you want to see on the magnet will show through the round side.  Let this dry for a couple of hours before continuing with the next step. Use the Mod Podge and the foam brush to paint a thin layer of glue over the whole back of the magnet.  This will hold your circle cut out in place. We decided to add some pixie dust to our project, so for a few magnets we added glitter around the edge of the stones. If you do this, make sure only the edges are covered with glitter so later you can glue the magnet on a smooth surface. Add one more layer of Mod Podge on top of the glitter after the glitter is dry. Tip: When working with glitter, put the Mod Podge in a cup so glitter does not get into your Mod Podge container.Again, wait a couple of hours to let this dry before continuing with the next step.Use the Tacky Glue or a glue gun to attach your magnets.  We encountered a small mishap with this step.  At first, we set the finished magnets too close to each other.  We may have used too much glue, too.  The magnets were drawn to neighboring magnets, so we had to space them away from each other during the drying process.  Allow the magnets to dry completely before using them.'),
        new Diy('Rosy Stationery', 
            'sumptuous floral-shaped stamps',
            'https://assets.marthastewart.com/styles/wmax-520-highdpi/d25/la101871_0206_rose_cardht/la101871_0206_rose_cardht_vert.jpg?itok=XeBL8w10',
            [
                new Material("lettuce", 1),
                new Material("Paper towel", 1),
                new Material("Large stamp pad", 1),
                new Material("cardstock", 2),
            ],
            'Cut off stem end with a sharp knife, and stand stem on a paper towel, cut-side down, for 5 minutes to dry.Press cut side onto a large stamp pad, then onto cards, stationery, and more, blotting on paper towel between presses. Vary stamp shapes with other vegetables, such as romaine lettuce stems or even brussels sprouts cut in half.'),
        new Diy('Toilet Paper Roll Wall Art', 
            'A faux metal piece made of recycled toilet paper rolls, Cheap, easy, and looks pretty good.',
            'https://images.coplusk.net/project_images/87446/image/medium_IMG_0839_1301788511.jpg',
            [
                new Material("plain old toilet paper roles", 13),
                new Material("glue", 1),
                new Material("bushed metal appearance spray paint", 1),
            ],
            'Crush your toilet paper roll in half, and cut it crossways. You could measure if you like, but I just guess-timated based on the look I was going for. For my project, each toilet paper role yielded 6 "petals". Keep cutting until you have got tons of these, the basic unit for your piece. Begin glueing the "petals" together. How you do that depends on what kind of pattern you are going for. I found that using  bobby pins (any type of clip would work too) to hold my pieces together was helpful. It gave the glue between each segment a chance to dry while I continued glueing. Since a 5 petal flower shape was the basis for my piece, this is what most of my base units ended up looking like. After I made a bunch, I glued them all together in a pattern I liked, and also added a few other viney/leafy looking segments here and there. Once you are happy with how your piece looks, time for spray paint! (I used a metal finish paint, but any color will do!). Wait until it dries, and you all have something like this! (Please note I didnt spray paint every piece individually, this is just an example I did for the tutorial. When I actually made my wall art, I glued the entire thing together first, then painted it as a whole.) You are done! Now hang your new wall art wherever your little heart pleases, stand back, and admire :) '),
        new Diy('Yarn wrapped painted jars', 
            'Wrap some yarn or twine around a jar, paint it, and you have a gorgeous luminary for tea lights or candles.',
            'https://cdn.lifehack.org/wp-content/uploads/2013/01/Yarn-Wrapped-Jars-380x380.jpg',
            [
                new Material("yarn", 3),
                new Material("white spray paint", 1),
                new Material("jars", 7),
        ],
        'Clear off the jars of all stickers, can do so by soaking in water to make it easier to come off. Make sure all the glue is off.Cut long strings of yarn, enough to go around the jar multiple times. Wrap the yarn around the jar; make sure to leave the start open for tying off at the end. Be creative, use different patterns to make each jar it’s own, or make a collection of the same. Once done wrapping, tie the end with the start to keep the pattern. Cut off the extra yarn from the knot.  Lay down paper or newspaper for your painting area.Use the spray paint to paint, keep the can around 6 inches away from the jar while spraying. This is important to keep the paint from dripping Go over the whole jar and over the yarn, make sure to get in-between the yarn for the best patternץ Cut the yarn at the end of the string by the knot for best results and easiest for removal. Un-wrap the yarn from the jar. *Make sure to go slow not pulling off any of the paint.'),
        new Diy('Baked Salt Dough Tags', 
            'Perfect for Valentine’s gifts, baby/bridal showers, or any other occasion.',
            'http://www.intimateweddings.com/wp-content/uploads/2011/12/salt-dough-webgd.jpg',
            [
                new Material("cups of flour", 2),
                new Material("cup of salt", 1),
                new Material("cup of water", 1),
                new Material("heart cookie cutters", 1),
                new Material("stamps", 5),
                new Material("ink pad", 1),
                new Material("bamboo skewer", 1),
                new Material("ribbon", 1),
                new Material ("sand paper", 1)
            ],
            'Preheat oven to 200 degrees Fahrenheit.Mix dry ingredients and then Add the water and Mix.Roll to 1/4 inch thick.Ink your stamp. Press stamp into dough.Press cookie cutter into stamped dough.Place cut-out on a baking sheet.Using a bamboo skewer, chopstick or straw, make a hole in the top of the tag.Bake in 200 degree oven for six hours. Remove from oven. Sand edges.Add ribbon, If you want to get extra fancy, paint the tags, add glitter, then varnish.'),
        new Diy('String Lanterns', 
        'It’s amazing how easy it is to make these elegant string-globe lanterns! All you need is twine, corn starch, glue, balloons, and spray paint',
        'https://cdn.lifehack.org/wp-content/uploads/2013/01/DIY-String-Lanterns-380x259.jpg',
        [
            new Material("Large Balloons", 5),
            new Material("Sharpie", 1),
            new Material("Scissors", 1),
            new Material("Cotton Yarn", 1),
            new Material("White School Glue", 2),
            new Material("cup Corn Starch", 0.5),
            new Material("cup Water", 0.25),
            new Material("Petroleum Jelly", 1),
            new Material ("drying spray paint", 1),
            new Material ("Container", 1),
            new Material ("String", 1)
        ],
        'Blow up a balloon. I would suggest only inflating until it is a decent size, but still round. If you get it too full, you will end up with an oblong shaped lantern. I think for the best end result you will want varied sizes. After the balloon is inflated to your desired size, draw a circle around the knot of the balloon big enough to put whatever light source you would like to use. If you are hanging from Christmas lights or something similar, you will need to fit the light into this hole. If you are just planning to put these into a vase or have no plans to light these up, forgo the sharpie.  Lay down your tarp, and find a way to suspend the balloons with string. You can use a shower curtain rod across chairs, a clothespin line, or a rope between two trees.Mix the corn starch, glue, and warm water together until the mixture is nice and smooth. Smear the petroleum jelly all over the balloon, until it is completely coated.  If you have a friend or your fiancé helping you, this will go a lot quicker. One person should feed the yarn into the glue mixture, then hand it off to the other person, who will drape it around the balloon.  Begin wrapping the yarn vertically around the balloon at a comfortable tightness, and then gradually switch to wrapping it horizontally. Tuck your beginning and end pieces under other pieces of yarn. . After allowing the balls to dry for 24 hours, pop the balloons! Chop sticks or something similar can help remove any glue crystals that form between strings. Spray the ball with the clear, fast drying spray paint outside. Now hang your balls either from lights, from fishing wire, or display them in a vase or bowl!'),
    ];
    

    setDiys(diys: Diy[]){
        this.diyProjects = diys;
        this.diyPojectsChanged.next(this.diyProjects.slice());
    }

    getSingleDiy(index: number){
        return this.diyProjects[index];
    }

    getDiyProjects(){
        return this.diyProjects.slice();
    }
    
    addDiyProject(diyProj: Diy){
        this.diyProjects.push(diyProj);
        this.diyPojectsChanged.next(this.diyProjects.slice());
    }
    updateDiy(index: number,newDiyProject: Diy ){
        this.diyProjects[index]= newDiyProject;
        this.diyPojectsChanged.next(this.diyProjects.slice());
        
    }
    deleteDiy(index: number){
        this.diyProjects.splice(index,1);
        this.diyPojectsChanged.next(this.diyProjects.slice());
    }
}