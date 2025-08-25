type Coupon = {
  id: number;
  storeName: string;
  name: string;
  description: string;
  pointCost: number;
  validUntil: string;
};

type MyCoupon = {
  userCouponId: number;
  storeName: string;
  description: string;
  couponName: string;
  validUntil: string;
  createdAt: string;
};
