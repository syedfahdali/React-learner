const data = [
  {
    id: "1",
    title:"Tiramisu",
    description: "The best tiramisu in town",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gettyimages.com%2Fphotos%2Ftiramisu&psig=AOvVaw28GoJojoI9BygdH5nFT6CU&ust=1678605166503000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPDIs9ep0_0CFQAAAAAdAAAAABAE",
    price: "$5.00",
  },
  {
    id: "2",
    title:"Lemon Ice Cream",
    description: "Lemon Ice cream",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheviewfromgreatisland.com%2Fminimal-monday-fresh-lemon-ice-cream%2F&psig=AOvVaw18MZwVl36HOnWDVTQ-h1aG&ust=1678605117271000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPDfncCp0_0CFQAAAAAdAAAAABAE",
    price: "$4.50",
  },
  { id: "3",title:"Chocolate mouse", description: "Mind blowing taste", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eatingwell.com%2Farticle%2F8013599%2Fwhat-happens-to-your-body-when-you-eat-chocolate-every-day%2F&psig=AOvVaw2b-LhUvgI8cdugOv979hzQ&ust=1678605075871000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPDLs62p0_0CFQAAAAAdAAAAABAD", price: "$4.50" },
];
const topDesserts = data.map(dessert =>{
    return{
        content:`${dessert.title}-${dessert.description}`,
        price: dessert.price,
    }

})
console.log(topDesserts)
