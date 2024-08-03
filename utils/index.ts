import { CarProps, FilterProps } from "@/types";

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Giá thuê cơ bản mỗi ngày bằng đô la
    const mileageFactor = 0.1; // Tỷ lệ bổ sung cho mỗi dặm lái xe
    const ageFactor = 0.05; // Tỷ lệ bổ sung mỗi năm tuổi xe
  
    // Tính tỷ lệ bổ sung dựa trên số dặm và độ tuổi
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Tính tổng giá thuê mỗi ngày
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
    // Nhận thông số tìm kiếm URL hiện tại
    const searchParams = new URLSearchParams(window.location.search);
  
    // Đặt tham số tìm kiếm đã chỉ định thành value đã cho
    searchParams.set(type, value);
  
    // Đặt tham số tìm kiếm đã chỉ định thành value đã cho
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
};

export const deleteSearchParams = (type: string) => {
    // Đặt tham số tìm kiếm đã chỉ định thành value đã cho
    const newSearchParams = new URLSearchParams(window.location.search);
  
    // Xóa tham số tìm kiếm đã chỉ định
    newSearchParams.delete(type.toLocaleLowerCase());
  
    // Xây dựng tên đường dẫn URL được cập nhật với tham số tìm kiếm đã xóa
    const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;
  
    return newPathname;
};

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;
  
    // Đặt tiêu đề cần thiết cho API request
    const headers: HeadersInit = {
      "X-RapidAPI-Key": "0d0cbae4bdmshc6895f3f9dcfd87p1df0d1jsn860401447b54",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };
  
    // Đặt tiêu đề cần thiết cho API request
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
      {
        headers: headers,
      }
    );
  
    // Phân tích phản hồi dưới dạng JSON
    const result = await response.json();
  
    return result;
}
  
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
} 