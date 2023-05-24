let detailContainer = document.querySelector('.details');
let sendButton = document.querySelector('#send');
let items=[];
document.querySelector('#add').addEventListener('click', (e) => {
    detailContainer.insertAdjacentHTML('beforeend',newItemHTML());
});
detailContainer.addEventListener("click", (e)=>{
    let box = document.getElementById(`txt${e.target.dataset.id}`);
    if(e.target.name == "less"){
        if(Number(box.value)<=0){
            deleteItem(e.target.dataset.id);
        }else{
            box.value = Number(box.value) - 1;
        } 
    }else if(e.target.name == "plus"){
        box.value = Number(box.value) + 1;
    };
});
deleteItem = (idIdx) =>{
    let products = document.querySelectorAll(".formDetail");
    products.forEach((item) => {
        if(item.id == idIdx){
                item.remove();
        };
    });
};
newItemHTML = () => {
    let id = Date.now().toString(16);
    let facturaHTML = /* html */ `
            <form id="${id}" class="formDetail">
                <div class="row g-1  row-cols-xl-6 row-cols-sm-4">
                    <div class="col">
                        <div class="mb-2">
                            <label for="nombre_producto" class="form-label">Nombre producto</label>
                            <input type="text" class="form-control" name="nombre_producto">
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label for="cantidad" class="form-label">Cantidad</label>
                            <input type="number" id="txt${id}" readonly="readonly"  class="form-control" value ="0" name="cantidad">
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label for="valor_unit" class="form-label">Valor Unit.</label>
                            <input type="number" class="form-control" value ="0" name="valor_unit">
                        </div>
                    </div>
                    <div class="col-1 col-sm-6  text-sm-center text-xl-start p-2 ">
                        <button type="button" class="btn w-100 h-100 btn-success" data-id="${id}" name="plus">+</button>
                    </div>
                    <div class="col-1 col-sm-6  text-sm-center text-xl-start p-2">
                        <button type="button" class="btn w-100 h-100 btn-danger" data-id="${id}" name="less">-</button>
                    </div>
                </div>
            </form>
    `;
    return facturaHTML;
};