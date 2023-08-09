import React from "react";
import { TFunction } from "i18next";
import { FiChevronRight, FiLock, FiLogOut, FiUser } from "react-icons/fi";
import { AiOutlineQuestion, AiOutlineQuestionCircle } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";

interface IProps {
  t: TFunction<"translation", undefined>;
}

const Settings = (props: IProps) => {
  const { t } = props;

  return (
    <div className="settings">
      <div className="settings__title">{t("common.command.settings")}</div>

      <div className="settings__content">
        <div className="settings__content__item">
          <div className="settings__content__item__left">
            <div className="settings__content__item__left__icon">
              <FiUser />
            </div>

            <div className="settings__content__item__left__text">
              {t("profile.label.accountProfile")}
            </div>
          </div>

          <div className="settings__content__item__right">
            <FiChevronRight />
          </div>
        </div>

        <div className="divider"></div>

        <div className="settings__content__item">
          <div className="settings__content__item__left">
            <div className="settings__content__item__left__icon">
              <FiLock />
            </div>

            <div className="settings__content__item__left__text">
              {t("profile.label.security")}
            </div>
          </div>

          <div className="settings__content__item__right">
            <FiChevronRight />
          </div>
        </div>

        <div className="divider"></div>

        <div className="settings__content__item">
          <div className="settings__content__item__left">
            <div className="settings__content__item__left__icon">
              <AiOutlineQuestionCircle />
            </div>

            <div className="settings__content__item__left__text">
              {t("profile.label.faq")}
            </div>
          </div>

          <div className="settings__content__item__right">
            <FiChevronRight />
          </div>
        </div>

        <div className="divider"></div>

        <div className="settings__content__item">
          <div className="settings__content__item__left">
            <div className="settings__content__item__left__icon">
              <BiMessageRounded />
            </div>

            <div className="settings__content__item__left__text">
              {t("profile.label.liveSupport")}
            </div>
          </div>

          <div className="settings__content__item__right">
            <FiChevronRight />
          </div>
        </div>
        
        <div className="divider"></div>

        <div className="settings__content__item">
          <div className="settings__content__item__left">
            <div className="settings__content__item__left__icon">
              <FiLogOut />
            </div>

            <div className="settings__content__item__left__text">
              {t("common.command.logout")}
            </div>
          </div>

          <div className="settings__content__item__right">
            <FiChevronRight />
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </div>
  );
};

export default Settings;
