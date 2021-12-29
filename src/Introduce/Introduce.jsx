import React from 'react'

import './introduce.css'

import welcome_image from '../../src/assets/images/welcome-back.png'
import teache_image from '../../src/assets/images/online-learning.png'

const Introduce = () => {
    return (
        <div className='introduce'>
            <div className='introduce_head'>
                <img title='my-img' src={welcome_image} alt='my-img' />
            </div>
            <div className='introduce_body'>
                <div className='introduce_left'>
                    <h3>Nhóm sinh viên thực hiện</h3>
                    <div className='color'>
                        <b>Mã số sinh viên Họ tên</b>
                    </div>
                    <div className='thongtin'>
                        <div>
                            <tr>6051071127 Nguyễn Ngọc Vũ Triều</tr>
                            <tr>6051071067 Lê Gia Minh</tr>
                            <tr>6051071142 Nguyễn Lê Vinh</tr>
                            <tr>6051071038 Lê Trần Minh Hiền</tr>
                            <tr>6051071035 Phạm Hoàng Hải</tr>
                        </div>
                    </div>
                </div>
            </div>
            <div className='introduce_body'>
                <div className='introduce_right'>
                    <h3>Giảng viên hướng dẫn</h3>
                    <div className='thongtin'>Nguyễn Đình Hiển</div>
                    <div className='test'>
                        <img title='teacher-img' src={teache_image} alt='teacher-img' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Introduce
