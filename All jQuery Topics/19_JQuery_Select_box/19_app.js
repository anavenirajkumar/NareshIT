let brands = [
    {
        id : 1,
        name : 'Maruthi Suzuki'
    },
    {
        id : 2,
        name : 'Suzuki NEXA'
    },
    {
        id : 3,
        name : 'Hyndai Motors'
    }
];

let models = [
    {
        brandId : 1,
        id : 1,
        name : 'Swift'
    },
    {
        brandId : 1,
        id : 2,
        name : 'Brezza'
    },
    {
        brandId : 1,
        id : 3,
        name : 'Ertiga'
    },
    {
        brandId : 2,
        id : 4,
        name : 'Baleno'
    },
    {
        brandId : 2,
        id : 5,
        name : 'S Cross'
    },
    {
        brandId : 2,
        id : 6,
        name : 'Ignis'
    },
    {
        brandId : 3,
        id : 7,
        name : 'Creta'
    },
    {
        brandId : 3,
        id : 8,
        name : 'Verna'
    },
    {
        brandId : 3,
        id : 9,
        name : 'Grand i20'
    }
];

let brandSelect = $('#brand');
let modelSelect = $('#model');

// Loop the brands
let brandOptions = `<option>Select a Brand</option>`;
for(let brand of brands){
    brandOptions += `<option value="${brand.id}">${brand.name}</option>`;
}
brandSelect.empty().append(brandOptions);

// change event on brand Selection
brandSelect.change(function() {
    let selectedBrandId = Number($(this).val());
    let selectedModels = models.filter((model) => {
        return model.brandId === selectedBrandId;
    });
    let modelOptions = `<option>Select a Model</option>`;
    for(let model of selectedModels){
        modelOptions += `<option value="${model.id}">${model.name}</option>`;
    }
    modelSelect.empty().append(modelOptions);
});