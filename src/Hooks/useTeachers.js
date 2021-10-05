import { useEffect, useState } from "react";

const useTeachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./Teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return [teachers, setTeachers];
}

export default useTeachers;