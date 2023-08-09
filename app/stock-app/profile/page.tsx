"use client";

import React, { useEffect, useState } from "react";
import "@config/i18n";
import { useTranslation } from "react-i18next";
import Card from "./components/Card";
import { getDataProfile } from "@/app/api/stock-app/profile/profileApi";
import Settings from "./components/Settings";
import Footer from "./components/Footer";

const Profile = () => {
  const { t } = useTranslation();

  const [profile, setProfile] = useState<IProfile | null>(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await getDataProfile();
      console.log(data);
      setProfile(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile">
      <Card t={t} profile={profile} />

      <Settings t={t} />

      <Footer t={t} />
    </div>
  );
};

export default Profile;
