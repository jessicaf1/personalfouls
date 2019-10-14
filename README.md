## Personal Fouls: A NFL Arrest Data Visualization 

#### Overview

It is difficult to balance being an NFL fan with being a socially conscious person. Personal Fouls can alleviate some of that guilt by mapping out NFL arrest records, allowing NFL fans to identify players to avoid rooting for or picking in a fantasy draft.  The NFLArrest.com API offers a comprehensive look at arrest records, organized by crime, by team, by player and by position.  Personal Fouls uses these data points to explore NFL arrests, focusing particularly on players in the four most fantasy-relevant positions.   

#### Functionality and MVPs

•	Users can see and interact with a football field populated by dots representing players with arrest records; hovering over the dots will reveal the player’s name.

•	Dots are color-coded by position, with opacity of the color corresponding to the number of arrests (i.e. blue for QBs, opaque blue for a QB with many arrests, transparent blue for a QB with one arrest). Positions will be limited to QB, WR, RB and TE.  

•	Users can toggle between the field chart and a list.

•	Users can refine by type of arrest.

#### Wireframe
![Screen Shot 2019-10-14 at 4 43 58 PM](https://user-images.githubusercontent.com/44717186/66781992-b75dc800-eea2-11e9-87d7-eeb595efa23f.png)

Data visualization key: The data is represented in a single screen (a) consisting of a football field (b) with circles representing the players (c). There will be a primary data list including dropdown categories for refining search (d), links to Github and LinkedIn (e) and a footer (f).  

#### Implementation Timeline

Day 1 (Tuesday)
* Review webpack tutorial. Get webpack up and running, create webpack.config.js and package.json.
* Review DOM Manipulation and D3 tutorials. 

Day 2 (Wednesday) 
* Wrap up D3 tutorials. 
* Play around with API. Familiarize myself with making AJAX requests from the API.
* Create dots representating football players. 
 

Day 3 (Thursday) 
* Get the opacity of dots to correspond directly with the number of arrests. 
* Implement the ability to refine the user's search by arrest type.  

Day 4 (Friday)
* Focus on CSS, making the interaction with the graph as seamless and clear as possible.  
* Style the field, making it resemble an actual football field. 
* Style the lists.

Weekend
* Fix Bugs 

 #### Bonus Features
•	Users can see a map of the US and hover over states to see the number of arrests per player in that state (could also implement this as part of the dropdown menu).  
