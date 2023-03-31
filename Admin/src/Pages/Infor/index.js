import { Fragment } from 'react';
import confirmChange from './confirm'
function Infor() {
  return (
    <Fragment>
      <div className="container-fluid d-flex flex-column p-4 justify-content-center w-100 gap-2">
        <form>
          {confirmChange()}
          <h6>Quản lý từ khóa</h6>
          <div className="row d-flex flex-sm-row flex-column">
            <div className="form-group col">
              <label htmlFor="k_1" className="col-form-label">Từ khóa 1</label>
              <input type="text" className="form-control" id="k_1" />
            </div>
            <div className="form-group col">
              <label htmlFor="k_2" className="col-form-label">Từ khóa 2</label>
              <input type="text" className="form-control" id="k_2" />
            </div>
          </div>
          <div className="row d-flex flex-sm-row flex-column">
            <div className="form-group col">
              <label htmlFor="k_3" className="col-form-label">Từ khóa 3</label>
              <input type="text" className="form-control" id="k_3" />
            </div>

            <div className="form-group col">
              <label htmlFor="k_4" className="col-form-label">Từ khóa 4</label>
              <input type="text" className="form-control" id="k_4" />
            </div>
          </div>
          <h6 className='pt-2'>Quản lý thông tin giới thiệu</h6>
          <div className="row d-flex flex-sm-row flex-column">
            <div className="form-group col-sm-4 col">
              <label htmlFor="cover_link" className="col-form-label">Link bìa chính</label>
              <input type="text" className="form-control" id="cover_link" />
            </div>

            <div className="form-group col-sm-8 col">
              <label htmlFor="cover_desc" className="col-form-label">Mô tả</label>
              <input type="text" className="form-control" id="cover_desc" />
            </div>
          </div>
          <div className="row d-flex flex-sm-row flex-column">
            <div className="form-group col-sm-4 col">
              <label htmlFor="c_1_link" className="col-form-label">Link bìa phụ 1</label>
              <input type="text" className="form-control" id="c_1_link" />
            </div>
            <div className="form-group col-sm-8 col">
              <label htmlFor="c_1_desc" className="col-form-label">Mô tả</label>
              <input type="text" className="form-control" id="c_1_desc" />
            </div>
          </div>
          <div className="row d-flex flex-sm-row flex-column">
            <div className="form-group col-sm-4 col">
              <label htmlFor="c_2_link" className="col-form-label">Link bìa phụ 2</label>
              <input type="text" className="form-control" id="c_2_link" />
            </div>

            <div className="form-group col-sm-8 col">
              <label htmlFor="c_2_desc" className="col-form-label">Mô tả</label>
              <input type="text" className="form-control" id="c_2_desc" />
            </div>
          </div>
          <div className="row d-flex flex-sm-row flex-column">
            <div className="form-group col-sm-4 col">
              <label htmlFor="c_3_link" className="col-form-label">Link bìa phụ 3</label>
              <input type="text" className="form-control" id="c_3_link" />
            </div>

            <div className="form-group col-sm-8 col">
              <label htmlFor="c_3_desc" className="col-form-label">Mô tả</label>
              <input type="text" className="form-control" id="c_3_desc" />
            </div>
          </div>
          <h6 className='pt-2'>Quản lý bìa quảng cáo ở trang chủ</h6>
          <div className="row d-flex flex-sm-row flex-column">
            <div className="form-group col">
              <label htmlFor="ad_cover" className="col-form-label">Link bìa chính</label>
              <input type="text" className="form-control" id="ad_cover" />
            </div>
            <div className="form-group col">
              <label htmlFor="ad_1" className="col-form-label">Link bìa phụ 1</label>
              <input type="text" className="form-control" id="ad_1" />
            </div>
          </div>
          <div className="row d-flex flex-sm-row flex-column">
            <div className="form-group col">
              <label htmlFor="ad_2" className="col-form-label">Link bìa phụ 2</label>
              <input type="text" className="form-control" id="ad_2" />
            </div>

            <div className="form-group col">
              <label htmlFor="ad_3" className="col-form-label">Link bìa phụ 3</label>
              <input type="text" className="form-control" id="ad_3" />
            </div>
          </div>
          <h6 className='pt-2'>Quản lý thông tin liên hệ</h6>
          <div className="row d-flex flex-sm-row flex-column">
            <div className="form-group col">
              <label htmlFor="fb" className="col-form-label">Link Facebook</label>
              <input type="text" className="form-control" id="fb" />
            </div>
            <div className="form-group col">
              <label htmlFor="ig" className="col-form-label">Link Instagram</label>
              <input type="text" className="form-control" id="ig" />
            </div>
          </div>
          <div className="row d-flex flex-sm-row flex-column">
            <div className="form-group col">
              <label htmlFor="tw" className="col-form-label">Link Twitter</label>
              <input type="text" className="form-control" id="tw" />
            </div>

            <div className="form-group col">
              <label htmlFor="yt" className="col-form-label">Link Youtube</label>
              <input type="text" className="form-control" id="yt" />
            </div>
          </div>
          <div className='form-group pt-2 d-flex justify-content-end'>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#confirm">Lưu thay đổi</button>
          </div>
        </form>
      </div>
    </Fragment>

  );
}

export default Infor;
