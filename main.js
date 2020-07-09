let coin = {
    state: 0,
    flip: function() {
     this.state = Math.round(Math.random());
                         
    },
    toString: function() {
        
        if (this.state === 1){
            document.body.append('Tails');
        }
        else{
            document.body.append('Heads'); 
        
        }
    },
    toHTML: function() {
        let  image = document.createElement('img');
        image.setAttribute('width', '200px');
        if (this.state === 0){
            image.setAttribute('src', './images/coin_tails.png');
        }
        else{
            image.setAttribute('src', './images/coin_heads.png');
            
        
        }   
       document.body.append(image);
       return image;

    }

            
}
//coin.flip();    
//coin.toString();
index = 20;
while(index--){
    coin.flip();
    coin.toString();
}
index = 20;
while(index--){
    coin.flip();
    coin.toHTML();
}


