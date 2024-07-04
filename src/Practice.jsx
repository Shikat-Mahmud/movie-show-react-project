export const Practice = () => {
    // let my_name = prompt("What's your name: ");
    let my_name = "Saikat Mahmud";

    return (
        <>
            <h1>Hello, {my_name}</h1>
            <MyInfo/>
        </>
    );
};

const MyInfo = () => {
    const my_name = "Saikat Mahmud";
    let enroll = 88;
    let interest = 85;

    const showInterest = () => {
        if(interest >= 80){
            return "Yes";
        }
        return "No";
    };

    return (
        <>
            <span>Name: {my_name}</span>
            <br />
            <span>Enrollment: {"20SOECE" + enroll}</span>
            <br />
            <span>Interest On Programming: {showInterest}</span>
        </>
    );
}