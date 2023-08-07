import { Button, Input } from "antd";
import classNames from "classnames";
import { TFunction } from "i18next";
import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface IProps {
  t: TFunction<"translation", undefined>;
  companyBuySell: ICompanyBuySell | null;
  buyOrderLot: number;
  setBuyOrderLot: React.Dispatch<React.SetStateAction<number>>;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  buying: number;
  setBuying: React.Dispatch<React.SetStateAction<number>>;
}

const Content = (props: IProps) => {
  const {
    t,
    buyOrderLot,
    setBuyOrderLot,
    buying,
    setBuying,
    companyBuySell,
    price,
    setPrice,
  } = props;

  const handleChangeBuy = (value: number) => {
    setBuying(value);
  };

  const handleAddBuyOrderLot = () => {
    setBuyOrderLot((pre) => pre + 1);
  };

  const handleSubBuyOrderLot = () => {
    if (buyOrderLot > 0) {
      setBuyOrderLot((pre) => pre - 1);
    }
  };

  const handleAddPrice = () => {
    setPrice((pre) => pre + 1);
  };

  const handleSubPrice = () => {
    if (price > 0) {
      setPrice((pre) => pre - 1);
    }
  };

  return (
    <div className="content">
      <div className="content__buying">
        <div className="content__buying__left">
          {t("homeDetail.modalBuy.buying")}
        </div>

        <div className="content__buying__right">
          <div
            className={classNames("content__buying__right__item", {
              active: buying === 25,
            })}
            onClick={() => handleChangeBuy(25)}
          >
            25%
          </div>

          <div
            className={classNames("content__buying__right__item", {
              active: buying === 50,
            })}
            onClick={() => handleChangeBuy(50)}
          >
            50%
          </div>

          <div
            className={classNames("content__buying__right__item", {
              active: buying === 75,
            })}
            onClick={() => handleChangeBuy(75)}
          >
            75%
          </div>

          <div
            className={classNames("content__buying__right__item", {
              active: buying === 100,
            })}
            onClick={() => handleChangeBuy(100)}
          >
            100%
          </div>
        </div>
      </div>

      <div className="content__input">
        <div className="content__input__left">
          {t("homeDetail.modalBuy.buyOrderLot")}
        </div>

        <div className="content__input__right">
          <Button
            className="content__input__right__icon"
            icon={<FiMinus />}
            type="text"
            size="small"
            onClick={() => handleSubBuyOrderLot()}
          ></Button>

          <Input
            type="number"
            value={buyOrderLot}
            className="content__input__right__value"
            size="small"
          />

          <Button
            className="content__input__right__icon"
            icon={<FiPlus />}
            type="text"
            size="small"
            onClick={() => handleAddBuyOrderLot()}
          ></Button>
        </div>
      </div>

      <div className="content__input">
        <div className="content__input__left">
          {t("homeDetail.modalBuy.price")}
        </div>

        <div className="content__input__right">
          <Button
            className="content__input__right__icon"
            icon={<FiMinus />}
            type="text"
            size="small"
            onClick={() => handleSubPrice()}
          ></Button>

          <Input
            type="number"
            value={price}
            className="content__input__right__value"
            size="small"
          />

          <Button
            className="content__input__right__icon"
            icon={<FiPlus />}
            type="text"
            size="small"
            onClick={() => handleAddPrice()}
          ></Button>
        </div>
      </div>

      <div className="content__msg">{t('homeDetail.modalBuy.messageBuy')}</div>
    </div>
  );
};

export default Content;
