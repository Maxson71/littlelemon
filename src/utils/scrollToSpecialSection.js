const scrollToSpecialSection = () => {
    const aboutSection = document.getElementById("specialSection");
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    }
};

export default scrollToSpecialSection;