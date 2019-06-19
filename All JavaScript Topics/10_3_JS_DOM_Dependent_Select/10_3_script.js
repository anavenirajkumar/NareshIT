let brands=[{id:1,name:'Maruthi Suzuki'},{id:2,name:'Suzuki NEXA'},{id:3,name:'Hyndai Motors'}];

let models=[{brandId:1,id:1,name:'Swift'},{brandId:1,id:2,name:'Dzire'},{brandId:1,id:3,name:'Brezza'},{brandId:2,id:4,name:'Baleno'},{brandId:2,id:5,name:'SCross'},{brandId:2,id:6,name:'Ciaz'},{brandId:3,id:7,name:'Creta'},{brandId:3,id:8,name:'Verna'},{brandId:3,id:9,name:'Grand i20'}];

// Get the HTML elements
let brandSelectBox = document.querySelector('#brand');
let modelSelectBox = document.querySelector('#model');

// display brands
let brandOptions = `<option value="">Select a Brand</option>`;
for(let brand of brands){
    brandOptions += `<option value="${brand.id}">${brand.name}</option>`;
}
brandSelectBox.innerHTML = brandOptions;

// Change event for Brand Select Box
brandSelectBox.addEventListener('change',function() {
   let selectedId = Number(brandSelectBox.value);
   let selectedModels = models.filter((model) => {
       return model.brandId === selectedId;
   });
   let modelOptions = `<option value="">Select a Model</option>`;
   for(let selectedModel of selectedModels){
       modelOptions += `<option value="${selectedModel.id}">${selectedModel.name}</option>`;
   }
   modelSelectBox.innerHTML = modelOptions;
});