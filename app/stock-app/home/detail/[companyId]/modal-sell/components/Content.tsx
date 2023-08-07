import { Button, Input } from "antd";
import classNames from "classnames";
import { TFunction } from "i18next";
import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface IProps {
  t: TFunction<"translation", undefined>;
  companyBuySell: ICompanyBuySell | null;
  lot: number;
  setLot: React.Dispatch<React.SetStateAction<number>>;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  selling: number;
  setSelling: React.Dispatch<React.SetStateAction<number>>;
}

const Content = (props: IProps) => {
  const {
    t,
    lot,
    setLot,
    selling,
    setSelling,
    companyBuySell,
    price,
    setPrice,
  } = props;

  const handleChangeSell = (value: number) => {
    setSelling(value);
  };

  const handleAddLot = () => {
    setLot((pre) => pre + 1);
  };

  const handleSubLot = () => {
    if (lot > 0) {
      setLot((pre) => pre - 1);
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
      <div className="content__selling">
        <div className="content__selling__left">
          {t("homeDetail.modalSell.selling")}
        </div>

        <div className="content__selling__right">
          <div
            className={classNames("content__selling__right__item", {
              active: selling === 25,
            })}
            onClick={() => handleChangeSell(25)}
          >
            25%
          </div>

          <div
            className={classNames("content__selling__right__item", {
              active: selling === 50,
            })}
            onClick={() => handleChangeSell(50)}
          >
            50%
          </div>

          <div
            className={classNames("content__selling__right__item", {
              active: selling === 75,
            })}
            onClick={() => handleChangeSell(75)}
          >
            75%
          </div>

          <div
            className={classNames("content__selling__right__item", {
              active: selling === 100,
            })}
            onClick={() => handleChangeSell(100)}
          >
            100%
          </div>
        </div>
      </div>

      <div className="content__input">
        <div className="content__input__left">
          {t("fieldName.lot")}
        </div>

        <div className="content__input__right">
          <Button
            className="content__input__right__icon"
            icon={<FiMinus />}
            type="text"
            size="small"
            onClick={() => handleSubLot()}
          ></Button>

          <Input
            type="number"
            value={lot}
            className="content__input__right__value"
            size="small"
          />

          <Button
            className="content__input__right__icon"
            icon={<FiPlus />}
            type="text"
            size="small"
            onClick={() => handleAddLot()}
          ></Button>
        </div>
      </div>

      <div className="content__input">
        <div className="content__input__left">
          {t("fieldName.price")}
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

      <div className="content__msg">{t("homeDetail.modalSell.messageSell")}</div>
    </div>
  );
};

export default Content;
