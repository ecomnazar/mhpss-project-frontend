import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
    title: string;
    handleClick?: () => void;
}

const DownloadPdf: React.FC<Props> = ({ title, handleClick }: Props) => {
    const { t } = useTranslation()
    return (
        <div className="flex items-center gap-x-4">
            <img className="w-[24px]" src="/images/download-icon.svg" alt="" />
            <div>
                <h4 className="text-primary text-sm font-[600] cursor-pointer">{title}</h4>
                <p onClick={handleClick} className="text-lightDark text-[10px]">{t('clickToDownload')}</p>
            </div>
        </div>
    )
}

export default DownloadPdf