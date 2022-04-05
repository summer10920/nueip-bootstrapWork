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
    modalMdy: bsModal("#modalMdy"),
    elLoad: (() => {
      const load = document.createElement('div');
      load.classList.add('load');
      load.innerHTML = `
        <svg width="175" height="40">
          <g transform="translate(-6242 170)">
            <g transform="translate(173.561 10.206)">
              <g transform="translate(6068.439 -180.206)">
                <path d="M6001.96,31.268a14.281,14.281,0,0,0-6.368-1.858,12.93,12.93,0,0,0-24.149,6.369,13,13,0,1,0,0,26.006h22.689a16.289,16.289,0,0,0,7.828-30.517Z" transform="translate(-5958.439 -21.979)" fill="#9d9d9e" />
                <g transform="translate(0.796 0)">
                  <path d="M5996.679,28.3a13.161,13.161,0,0,0-11.279-6.5,13.026,13.026,0,0,0-13,13,13,13,0,0,0,0,26.007h0l30.519-30.518A16.4,16.4,0,0,0,5996.679,28.3Z" transform="translate(-5959.394 -21.794)" fill="#0093d6" />
                </g>
                <path d="M5988.289,37.07a6.34,6.34,0,0,0-3.715,1.327,5.619,5.619,0,0,0,.4,7.828l4.246,4.246,4.379-4.379-4.246-4.246a.744.744,0,0,1,0-1.194.691.691,0,0,1,.531-.265,1.01,1.01,0,0,1,.266-.531.744.744,0,0,1,1.194,0l4.114,4.379,1.194-1.194-4.246-4.246A5.823,5.823,0,0,0,5988.289,37.07Z" transform="translate(-5962.548 -24.332)" fill="none" />
                <path d="M5993.478,38a5.766,5.766,0,0,0-8.227,0l-.4.4a5.562,5.562,0,0,1,3.715-1.327,5.823,5.823,0,0,1,4.114,1.725l4.246,4.245.664-.663Z" transform="translate(-5962.827 -24.199)" fill="gray" />
                <path d="M5996.44,58.565a4.817,4.817,0,0,1-3.715-1.592l-5.308-5.308-4.247-4.246a7.585,7.585,0,0,1-.265-10.349l-.4.4a7.689,7.689,0,0,0,0,10.748l4.246,4.246,5.308,5.308a5.24,5.24,0,0,0,3.716,1.592,4.818,4.818,0,0,0,3.715-1.592l.4-.4A5.2,5.2,0,0,1,5996.44,58.565Z" transform="translate(-5962.074 -24.332)" fill="gray" />
                <path d="M6000.713,51.4l-5.308-5.308-4.246-4.245a.977.977,0,0,1-.265-.8,1.006,1.006,0,0,0-.531.265.744.744,0,0,0,0,1.194l4.246,4.246,5.308,5.308a3.471,3.471,0,0,1,.265,4.644l.4-.4A3.4,3.4,0,0,0,6000.713,51.4Z" transform="translate(-5963.693 -24.993)" fill="gray" />
                <path d="M6000.449,49.067l-5.308-5.308-4.246-4.245a.743.743,0,0,0-1.194,0,.687.687,0,0,0-.265.53.977.977,0,0,0,.265.8l4.246,4.246,5.308,5.307a3.45,3.45,0,0,1,0,5.042l-.4.4a3.117,3.117,0,0,1-2.123.664,3.623,3.623,0,0,1-2.521-1.062l-5.308-5.308-4.247-4.246a5.89,5.89,0,0,1-.4-7.828l.4-.4a5.767,5.767,0,0,1,8.228,0l4.246,4.246.53-.531.665-.663-4.246-4.246a7.437,7.437,0,0,0-5.308-2.256h0a7.213,7.213,0,0,0-5.307,2.256c-.133.133-.266.265-.266.4a7.587,7.587,0,0,0,.266,10.35l4.246,4.245,5.307,5.308a5.241,5.241,0,0,0,3.715,1.593,5.1,5.1,0,0,0,3.317-1.194l.4-.4A5.7,5.7,0,0,0,6000.449,49.067Z" transform="translate(-5962.235 -23.856)" fill="#fff" />
                <g transform="translate(13.932 8.492)">
                  <path d="M5998.092,58.664a3.663,3.663,0,0,0,2.123-.664,3.6,3.6,0,0,0-.265-4.644l-5.307-5.308-4.379,4.379,5.308,5.308A3.5,3.5,0,0,0,5998.092,58.664Z" transform="translate(-5977.658 -34.648)" fill="#ebad19" />
                  <path d="M6005.532,31.978l-8.358,8.36-.664.663-.531.531-.664.663-1.194,1.194,5.308,5.308a5.287,5.287,0,0,1,0,7.563l-.4.4-.4.4a5.238,5.238,0,0,1-3.715,1.592,4.819,4.819,0,0,1-3.716-1.592l-5.307-5.308L5975.147,62.5h22.689a16.282,16.282,0,0,0,16.188-16.321A16.1,16.1,0,0,0,6005.532,31.978Z" transform="translate(-5975.147 -31.978)" fill="#f6b300" />
                </g>
              </g>
              <g id="Group_34" transform="translate(6130.15 -169.783)">
                <path style="--i:0" d="M6133.155,38.88a2.47,2.47,0,0,1-1.674-.6,2.333,2.333,0,0,1,.019-3.34,2.4,2.4,0,0,1,1.656-.641,2.454,2.454,0,0,1,1.612.584,2.073,2.073,0,0,1,.706,1.7,2.139,2.139,0,0,1-.687,1.69A2.383,2.383,0,0,1,6133.155,38.88Zm2.317,4.176V55.328a3.028,3.028,0,0,1-.669,2.13,2.218,2.218,0,0,1-1.7.72,2.124,2.124,0,0,1-1.674-.737,3.123,3.123,0,0,1-.643-2.113V43.192a3,3,0,0,1,.643-2.093,2.158,2.158,0,0,1,1.674-.7,2.238,2.238,0,0,1,1.7.7A2.727,2.727,0,0,1,6135.472,43.057Z" transform="translate(-6048.781 -34.294)" fill="#e40012" />
                <path style="--i:1" d="M6038.478,37.1l9,13.613V36.974a3.026,3.026,0,0,1,.576-2.009,1.942,1.942,0,0,1,1.551-.67,2,2,0,0,1,1.591.67,2.989,2.989,0,0,1,.583,2.009V55.138q0,3.041-2.52,3.039A3.376,3.376,0,0,1,6048.12,58a2.916,2.916,0,0,1-.947-.575,5.69,5.69,0,0,1-.817-.925c-.254-.349-.5-.708-.758-1.077l-8.773-13.454V55.5a2.893,2.893,0,0,1-.614,2,2.045,2.045,0,0,1-1.576.675,2.009,2.009,0,0,1-1.592-.685,2.953,2.953,0,0,1-.6-1.993V37.683a5.006,5.006,0,0,1,.254-1.78,2.529,2.529,0,0,1,.991-1.158,2.7,2.7,0,0,1,1.5-.449,2.455,2.455,0,0,1,1.867.757,5.631,5.631,0,0,1,.693.9Q6038.1,36.5,6038.478,37.1Z" transform="translate(-6032.444 -34.294)" fill="#0093d6" />
                <path style="--i:2" d="M6066.612,48.236V37.131A3.1,3.1,0,0,1,6067.25,35a2.151,2.151,0,0,1,1.677-.71,2.207,2.207,0,0,1,1.726.71,3.1,3.1,0,0,1,.639,2.126V48.489a10.427,10.427,0,0,0,.431,3.236,3.731,3.731,0,0,0,1.537,2.015,5.624,5.624,0,0,0,3.088.717q2.741,0,3.874-1.456a7.135,7.135,0,0,0,1.135-4.419V37.13a3.11,3.11,0,0,1,.629-2.134,2.151,2.151,0,0,1,1.684-.7,2.225,2.225,0,0,1,1.71.7,3.033,3.033,0,0,1,.656,2.134V48.236a16.446,16.446,0,0,1-.528,4.522,6.994,6.994,0,0,1-1.994,3.181,7.737,7.737,0,0,1-2.93,1.7,12.793,12.793,0,0,1-3.906.535,16.1,16.1,0,0,1-4.584-.575,7.341,7.341,0,0,1-3.134-1.781,7.151,7.151,0,0,1-1.782-3.086A15.762,15.762,0,0,1,6066.612,48.236Z" transform="translate(-6038.12 -34.294)" fill="#0093d6" />
                <path style="--i:3" d="M6116.115,37.9h-10.54v6.463h9.7a2.315,2.315,0,0,1,1.6.479,1.634,1.634,0,0,1,.528,1.267,1.7,1.7,0,0,1-.52,1.284,2.255,2.255,0,0,1-1.607.5h-9.7v6.568h10.9a2.387,2.387,0,0,1,1.662.513,1.755,1.755,0,0,1,.559,1.363,1.719,1.719,0,0,1-.559,1.331,2.38,2.38,0,0,1-1.662.512h-12.712a2.449,2.449,0,0,1-2.867-2.866V37.16a3.876,3.876,0,0,1,.3-1.645,1.865,1.865,0,0,1,.936-.929,3.919,3.919,0,0,1,1.632-.291h12.351a2.4,2.4,0,0,1,1.661.494,1.681,1.681,0,0,1,.544,1.3,1.7,1.7,0,0,1-.544,1.316A2.41,2.41,0,0,1,6116.115,37.9Z" transform="translate(-6043.815 -34.294)" fill="#1ea939" />
                <path style="--i:4" d="M6154.364,48.393h-4.285v6.933a3.045,3.045,0,0,1-.66,2.126,2.331,2.331,0,0,1-3.372.008,3.048,3.048,0,0,1-.646-2.1V37.16a2.9,2.9,0,0,1,.71-2.2,3.217,3.217,0,0,1,2.253-.662h6a15.756,15.756,0,0,1,4.1.409,6.117,6.117,0,0,1,2.449,1.307,5.879,5.879,0,0,1,1.569,2.238,7.875,7.875,0,0,1,.536,2.978,6.577,6.577,0,0,1-2.175,5.347Q6158.663,48.4,6154.364,48.393Zm-1.134-10.586h-3.15v7.059h3.15a9.5,9.5,0,0,0,2.765-.345,3.232,3.232,0,0,0,1.694-1.137,3.386,3.386,0,0,0,.582-2.063,3.508,3.508,0,0,0-.9-2.489Q6156.365,37.808,6153.229,37.806Z" transform="translate(-6051.208 -34.294)" fill="#f6b300" />
              </g>
            </g>
          </g>
        </svg>
      `;
      return load;
    })()
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
    //load add
    document.body.appendChild(this.elLoad);
    const el = this.elLoad;
    setTimeout(() => el.style = "opacity:1", 10);

    //ad ajax
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

      //load remove
      setTimeout(() => {
        el.removeAttribute('style');
      }, 1000);
      setTimeout(() => {
        document.body.lastChild.remove();
      }, 1500);


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