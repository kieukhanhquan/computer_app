import React from 'react'
import "./AboutUs.css"
import { useState } from 'react'

const AboutUs = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    function handleImageClick(index) {
        setSelectedImageIndex(index);
      }
      
  return (
    
    <div class="aboutus-wrap">
    <div class="img-header-wrap">
        <img class="head-img" src="https://jobsgo.vn/blog/wp-content/uploads/2021/07/staff-la-gi-2.jpg" alt="title-img"></img>
    </div>
    <div class="main-box">
        <div class='flex-container'>
            <img class="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/2048px-Dell_logo_2016.svg.png"
                alt="logo"></img>
            <div>Chúng tôi là một nhóm đa dạng với quan điểm độc đáo. Đoàn kết trong mục đích, chiến lược và văn hóa của chúng tôi. 
                Được thúc đẩy bởi tham vọng của chúng tôi và sức mạnh của công nghệ để thúc đẩy sự tiến bộ của con người. 
                Kiên định trong cam kết bình đẳng, tin tưởng và ủng hộ lẫn nhau.</div>
        </div>
        <br></br>
        <div class='flex-container flex-column'>
            <div style={{fontWeight:'bold'}}>CHÚNG TÔI <span style={{color:'red'}}>ĐẠI DIỆN CHO</span></div>
            <br></br>
            <div style={{textAlign:'center'}}>Câu chuyện của chúng tôi bắt đầu với niềm tin và niềm đam mê:
             rằng mọi người đều có thể dễ dàng tiếp cận với công nghệ tốt nhất ở mọi nơi trên thế giới. 
            Đó là vào năm 1984 trong phòng ký túc xá của Đại học Texas của Michael Dell. 
            Ngày nay, Dell Technologies là công cụ thay đổi bối cảnh kỹ thuật số trên toàn thế giới.

            Chúng tôi là một trong những công ty công nghệ hàng đầu thế giới giúp thay đổi cuộc sống của mọi người 
            bằng những khả năng phi thường. Từ các giải pháp đám mây lai đến điện toán hiệu năng cao đến các sáng
             kiến bền vững và tác động xã hội đầy tham vọng, những gì chúng tôi làm đều tác động đến mọi người, 
             ở mọi nơi.</div>
        </div>
        <br></br>
         <div class='flex-container'>
            <div id='hinh1' class='flex-container flex-column'
            style={{ zIndex: selectedImageIndex === 0 ? 1 : 0 }} 
                    onMouseOver = {() => handleImageClick(0)}>
                <img src="https://i.dell.com/is/image/DellContent/content/dam/delltechnologies/assets/corporate/images/about-us/who-we-are/our-purpose-text-image-lg-xxl-940x600.jpg?wid=1600&fit=constrain"
                    alt="hinh1"   
                    />
                <div class='flex-item1'>
                    <p class="element_vetical" style={{color:'white', fontWeight:'bold'}}>MANG ĐẾN TƯƠNG LAI</p>
                </div>
                <div class='flex-item2'>
                    <p class="element_vetical">Nâng cao tính bền vững, nuôi dưỡng sự hòa nhập, 
                    thay đổi cuộc sống và đề cao đạo đức cũng như quyền riêng tư được đưa vào mọi 
                    việc chúng tôi làm. Được hỗ trợ bởi một lực lượng lao động coi trọng và tôn
                     vinh các nền tảng khác nhau, chúng tôi tạo ra các giải pháp khai thác và 
                     khuếch đại công nghệ theo những cách có ý nghĩa nhất. Từ chăm sóc sức khỏe 
                     đến giáo dục đến nền kinh tế kỹ thuật số, chúng tôi tin tưởng vào sức mạnh của công nghệ để giúp giải quyết các thách thức xã hội phức tạp.</p>
                </div>
            </div><br></br>
            <br></br>
            <div id='hinh2' class='flex-container flex-column' style={{ zIndex: selectedImageIndex === 1 ? 1 : 0 }}
                    onMouseOver = {() => handleImageClick(1)}>
                <img src="https://i.dell.com/is/image/DellContent/content/dam/delltechnologies/assets/corporate/images/about-us/who-we-are/our-leadership-text-image-lg-xxl-940x600.jpg"
                    alt="hinh2"   
                    />
                <div class='flex-item1'>
                    <p class="element_vetical" style={{color:'white', fontWeight:'bold'}}>DẪN ĐẦU XU THẾ</p>
                </div>
                <div class='flex-item2'>
                    <p class="element_vetical">Tại Dell Technologies, chúng tôi là 
                    những người tiên phong đổi mới thúc đẩy cuộc cách mạng kỹ thuật số tiến lên.
                      Bằng cách chấp nhận sự khác biệt của chúng tôi và đầu tư thời gian vào
                       sự đa dạng của chúng tôi, các nhà lãnh đạo của chúng tôi thúc đẩy văn
                        hóa đổi mới và hòa nhập cho phép chúng tôi tạo ra công nghệ đảm bảo 
                    khả năng tiếp cận rộng rãi 
                    và những cải tiến có tác động đối với cuộc sống hàng ngày..</p>
                </div>
            </div><br></br>
            <div id='hinh3' class='flex-container flex-column'
            style={{ zIndex: selectedImageIndex === 2 ? 1 : 0 }}
            onMouseOver = {() => handleImageClick(2)}>
                <img src="https://i.dell.com/is/image/DellContent/content/dam/delltechnologies/assets/corporate/images/about-us/who-we-are/our-code-text-image-lg-xxl-940x600.jpg?wid=1600&fit=constrain"
                    alt="hinh3"   
                />
                <div class='flex-item1'>
                    <p class="element_vetical" style={{color:'white', fontWeight:'bold'}}>NHỮNG GÌ CHÚNG TÔI TIN</p>
                </div>
                <div class='flex-item2'>
                    <p class="element_vetical">“How We Win” không chỉ là tên của Quy tắc Ứng xử của chúng ta. 
                    Nó phản ánh những tiêu chuẩn cao mà chúng ta đặt ra cho chính mình. Niềm tin chung của chúng tôi là có thể đạt được sự thay đổi hữu hình, 
                    tích cực bằng sự đổi mới và hành động. 
                    Cam kết kiên định của chúng tôi đối với sự bình đẳng,
                    tin tưởng và ủng hộ lẫn nhau đã trao quyền cho chúng tôi. 
                    Mục đích, chiến lược và văn hóa của chúng tôi thúc đẩy chúng tôi đạt được những điều không thể. 
                    Mã của chúng tôi hướng dẫn chúng tôi.</p>
                </div>
            </div>
        </div>
        <br></br> 
        <div class='flex-container flex-column'>
            <div style={{fontWeight:'bold'}}><span style={{color:'red'}}>VỚI CHÚNG TÔI</span> DOANH NGHIỆP CỦA BẠN LUÔN SẴN SÀNG TIẾN VỀ PHÍA TRƯỚC</div>
            <br></br>
            <div class='flex-container'>
                <img class="flex-item3" id="hinh4"
                    src="https://i.dell.com/is/image/DellContent/content/dam/web-resources/cross-project/images/lifestyle/what-we-do-1600x600.jpg?wid=1600&fit=constrain"
                    alt="hinh4" />

                <div class="flex-item3 flex-column flex-container text-item3">
                    <div style={{fontWeight:'bold'}}>
                        <span style={{color:'red'}}>SỰ SÁNG TẠO</span> KHÔNG GIỚI HẠN
                    </div>
                    <br></br>
                    <div>
                    Hãy biến những ý tưởng tươi sáng của bạn thành hiện thực và thúc đẩy sự đổi mới liên tục với công nghệ thông minh. 
                    Chuyển đổi từ ý tưởng thành kết quả nhanh hơn với một trải nghiệm đám mây 
                    đơn giản và nhất quán, các máy tính dựa trên trí tuệ nhân tạo, 
                    các giải pháp lưu trữ chủ động và các máy chủ tự động hóa đánh bại 
                    các mối đe dọa.
                    </div>
                </div>

                <div class="flex-item3 flex-column flex-container text-item3">
                    <div style={{fontWeight:'bold'}}>
                        KHÁCH HÀNG <span style={{color:'red'}}>LÀ NGUỒN CẢM HỨNG</span>
                    </div>
                    <br></br>
                    <div>
                    Khách hàng luôn là nguồn cảm hứng quan trọng nhất đối với các sản phẩm công nghệ. 
                    Chính họ là người sử dụng cuối cùng và đánh giá sản phẩm của chúng ta. 
                    Việc nghiên cứu và hiểu rõ nhu cầu của khách hàng là yếu tố đầu tiên và quan 
                    trọng nhất để chúng ta có thể phát triển những sản phẩm thông minh và đáp ứng
                     được những yêu cầu ngày càng cao của thị trường.
                    </div>
                </div>

                <img class="flex-item3" id="hinh5"
                    src="https://i.dell.com/is/image/DellContent/content/dam/delltechnologies/assets/corporate/images/about-us/who-we-are/customer-stories-promo-bg-980x366.jpg?wid=1600&fit=constrain"
                    alt="hinh5" />

                <img class="flex-item3" id="hinh6"
                    src="https://www.dell.com/wp-uploads/2023/04/iStock-1284372242-640x360.jpg"
                    alt="hinh6" />

                <div class="flex-item3 flex-column flex-container text-item3">
                    <div style={{fontWeight:'bold'}}>
                        THỰC HIỆN <span style={{color:'red'}}>TƯƠNG LAI</span> KỸ THUẬT SỐ
                    </div>
                    <br></br>
                    <div>
                    Tại Dell Technologies, chúng tôi cam kết giúp khách hàng của mình thực hiện toàn bộ tiềm 
                    năng của tương lai số này. Cho dù bạn đang tìm cách tối ưu hóa 
                    quy trình kinh doanh, nâng cao năng suất hoặc cải thiện trải 
                    nghiệm khách hàng của mình, chúng tôi có các giải pháp bạn cần 
                    để đạt được mục tiêu của mình.  
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AboutUs