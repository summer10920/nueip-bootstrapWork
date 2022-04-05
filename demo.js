const bsModal = (node) => new bootstrap.Modal(node);

//document ready
document.addEventListener("DOMContentLoaded", function () {

  //invalid event
  document.querySelectorAll("form [pattern]").forEach((i) => {
    i.oninvalid = () => i.setCustomValidity(i.dataset.txt);
    i.oninput = () => i.setCustomValidity(" ");
    i.onchange = () => i.setCustomValidity("");
  });

  //initializer
  const el = {
    sourceAdd: document.querySelector("#modalAdd .modal-body").innerHTML,
    sourceMdy: document.querySelector("#modalMdy .modal-body").innerHTML,
    modalAdd: bsModal("#modalAdd"),
    modalDel: bsModal("#modalDel"),
    modalMdy: bsModal("#modalMdy")
  };

  //send add,mdy,del,srh button add run ajax
  document.querySelector("#modalAdd form").addEventListener("submit", function (e) {
    e.preventDefault();
    el.modalAdd.hide();
    const obj = JSON.stringify(Object.fromEntries(new FormData(this)));
    ajaxObject.additem.call(el, obj);
  });
  document.querySelector("#modalMdy form").addEventListener("submit", function (e) {
    e.preventDefault();
    el.modalMdy.hide();
    const obj = JSON.stringify(Object.fromEntries(new FormData(this)));
    ajaxObject.mdyitem.call(el, obj, this.dataset.uid);
  });
  const sendbtn = document.querySelector("#modalDel .btn-danger");
  sendbtn.addEventListener('click', function () {
    el.modalDel.hide();
    ajaxObject.delitem.call(el, this.dataset.uid);
  });

  document.querySelector('#addbutton').addEventListener('click', function () {
    this.blur();
    el.modalAdd.show();
  });

  //select all
  ajaxObject.getitem.call(el);

  //select filter
  document.querySelector('#srhbutton').addEventListener('click', function (e) {
    e.preventDefault();
    this.blur();
    if (this.previousElementSibling.value != '') ajaxObject.getitem.call(el, this.previousElementSibling.value);
    else ajaxObject.getitem.call(el);
  });
});

/***** refreash table *****/
function refreshTable(data) {
  const self = this;
  if (!data.length) {
    document.querySelector("#cardtable").style = 'min-width:auto';
    document.querySelector("#cardtable>tbody").innerHTML = `<tr><td colspan=6 class="nodata"><span>查無資料...請重新輸入完整字段</span></td></tr>`;
  } else {
    document.querySelector("#cardtable").removeAttribute('style');
    document.querySelector("#cardtable>tbody").innerHTML = data.map((i) => `
    <tr>
      <td data-bs-toggle="tooltip" title="[${i.sex === "0" ? "男" : "女"}] ${i.cnname} (${i.enname})">${i.cnname}</td>
      <td data-bs-toggle="tooltip" title="[${i.sex === "0" ? "男" : "女"}] ${i.cnname} (${i.enname})">${i.enname}</td>
      <td>${i.sex === "0" ? "男" : "女"}</td>
      <td data-bs-toggle="popover" data-bs-container="body" data-bs-content="${
        i.phone.slice(0,4)+"-"+i.phone.slice(4,7)+"-"+i.phone.slice(7)
      }">${i.phone}</td>
      <td>${i.mail}</td>
      <td>
        <button type="button" class="btn-mdy btn btn-secondary btn-sm" data-uid="${i.s_sn}">修改</button>
        <button type="button" class="btn-del btn btn-secondary btn-sm" data-uid="${i.s_sn}">刪除</button>
      </td>
    </tr>
  `).join("");

    //bundle modify event after table refreash
    document.querySelectorAll(".btn-mdy").forEach(node => {
      node.onclick = function () {
        this.blur();
        // HTMLCollection to an Array, map innhtml to ary
        const ary = [].slice.call(node.closest("tr").children).map(item => item.innerHTML);

        document.querySelector("#modalMdy [name=cnname]").value = ary[0];
        document.querySelector("#modalMdy [name=enname]").value = ary[1];
        document.querySelector("#modalMdy #mosex0").checked = ary[2] === "男";
        document.querySelector("#modalMdy #mosex1").checked = ary[2] === "女";
        document.querySelector("#modalMdy [name=phone]").value = ary[3];
        document.querySelector("#modalMdy [name=mail]").value = ary[4];
        document.querySelector("#modalMdy form").dataset.uid = node.dataset.uid;
        self.modalMdy.show();
      };
    });

    //bundle delete event after table refreash
    document.querySelectorAll(".btn-del").forEach(node => {
      node.onclick = function () {
        this.blur();
        document.querySelector("#modalDel .btn-danger").dataset.uid = node.dataset.uid;
        self.modalDel.show();
      };
    });

    //bundle tooltip & popover event
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (item) {
      new bootstrap.Tooltip(item);
    });
    document.querySelectorAll('[data-bs-toggle="popover"]').forEach(function (item) {
      const pop = new bootstrap.Popover(item);
      document.body.addEventListener('click', function () {
        pop.hide();
      });
      item.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    });
  }
}

let ajaxObject = {
  data: null,
  getitem: function (keyword = null) {

    const doAjax = async () => {
      let url = null;
      //get all or filter
      url = (!keyword) ?
        ('./ajax/sql.json' || '/ajax/users') :
        (`ajax/users?filter=${keyword}`);

      const res = await fetch(url);
      return res.status == 200 ? await res.json() : 'fakeFilter';
    };
    doAjax().then((re) => {
      if (typeof re == 'object') {
        /******** for real-api do ********/
        data = re;
        refreshTable.call(this, data);
      } else {
        /******** fake api testing filter callback ********/
        if (keyword == "男") keyword = "0";
        if (keyword == "女") keyword = "1";
        const filterAry = data.filter(item => Object.values(item).indexOf(keyword) > -1);
        refreshTable.call(this, filterAry);
      }

    });

  },
  delitem: function (uid) {
    const doAjax = async () => {
      const
        url = "https://httpstat.us/200" || `/ajax/users/${uid}`,
        res = await fetch(url, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
          },
          body: JSON.stringify({
            s_sn: uid
          }),
        });
      return "deleted";
    };
    doAjax().then((check) => {
      if (check) {
        data = data.filter((item) => item.s_sn != uid);
        refreshTable.call(this, data);
      }
    });
  },
  mdyitem: function (item, uid) {
    const doAjax = async () => {
      const
        url = "https://httpstat.us/200" || `/ajax/users/${uid}`,
        res = await fetch(url, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
          },
          body: item,
        });
      return "modifyed";
    };
    doAjax().then((check) => {
      if (check) {
        const newitem = JSON.parse(item);
        data.forEach((el, idx) => {
          if (el.s_sn == uid) data[idx] = {
            ...el,
            ...newitem
          };
        });

        //reset element, otherwise will event nested
        document.querySelector("#modalMdy .modal-body").innerHTML = this.sourceMdy;
        refreshTable.call(this, data);
      }
    });
  },
  additem: function (item) {
    const doAjax = async () => {
      const
        url = "https://httpstat.us/200" || `/ajax/user`,
        res = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: item,
        });
      // return await res.json();
      return parseInt(data.slice(-1)[0].s_sn) + 1;
    };
    doAjax().then((lastInsertId) => {
      if (lastInsertId) {
        const newitem = {
          s_sn: lastInsertId.toString(),
          ...JSON.parse(item)
        };
        data.push(newitem);

        // reset element, otherwise will old data keep
        document.querySelector("#modalAdd .modal-body").innerHTML = this.sourceAdd;
        refreshTable.call(this, data);
      }
    });
  }
};