import React from 'react';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const StrainForm = ({ values, errors, touched }) => {
    return (
        <Form className="bigboyform">
            <h2>Strain Search Form</h2>
            <Field type='text' name='search' placeholder='Search' className="fields" />
            <Field component='select' name='family' className="fields" >
                <option value='select'>Select Type:</option>
                <option value='sativa'>Sativa</option>
                <option value='indica'>Indica</option>
                <option value='hybrid'>Hybrid</option>
            </Field>
            <Field component='select' name='effects' className="fields" >
                <option value='select'>Select desired effect:</option>
                        <option value='Relaxed'>Relaxed</option>
                        <option value='Sleepy' >Sleepy</option>
                        <option value='Happy' >Happy</option>
                        <option value='Uplifted' >Uplifted</option>
                        <option value='Focused' >Focused</option>
                        <option value='Hungry' >Hungry</option>
                        <option value='Creative' >Creative</option>
                        <option value='Cotton-Mouth' >Cotton Mouth</option>
                        <option value='Euphoric' >Euphoric</option>
                        <option value='Aroused' >Aroused</option>
                        <option value='Talkative' >Talkative</option>
                        <option value='Giggly' >Giggly</option>
                        <option value='Tingly' >Tingly</option>
                        <option value='Energetic' >Energetic</option>
                        <option value='Dizzy' >Dizzy</option>
                        <option value='Paranoid' >Paranoid</option>
                        <option value='Anxious' >Anxious</option>
                        <option value='Dry-Eyes' >Dry Eyes</option>
            </Field>
            <Field component='select' name='flavors' className="fields" >
                <option value='select'>Select desired terpene/flavor:</option>
                <option value='lemon'>Lemon</option>
                <option value='diesel'>Diesel</option>
                <option value='butter'>Butter</option>
                <option value='apricot'>Apricot</option>
                <option value='pear'>Pear</option>
                <option value='vanilla'>Vanilla</option>
                <option value='mango'>Mango</option>
                <option value='strawberry'>Strawberry</option>
                <option value='rose'>Rose</option>
                <option value='pungent'>Pungent</option>
                <option value='peach'>Peach</option>
                <option value='chestnut'>Chestnut</option>
                <option value='tropical'>Tropical</option>
                <option value='blueberry'>Blueberry</option>
                <option value='blue-cheese'>Blue Cheese</option>
                <option value='lime'>Lime</option>
                <option value='flowery'>Flowery</option>
                <option value='skunk'>Skunk</option>
                <option value='orange'>Orange</option>
                <option value='apple'>Apple</option>
                <option value='tobacco'>Tobacco</option>
                <option value='menthol'>Menthol</option>
                <option value='coffee'>Coffee</option>
                <option value='earthy'>Earthy</option>
                <option value='tea'>Tea</option>
                <option value='citrus'>Citrus</option>
                <option value='plum'>Plum</option>
                <option value='cheese'>Cheese</option>
                <option value='tar'>Tar</option>
                <option value='violet'>Violet</option>
                <option value='nutty'>Nutty</option>
                <option value='spicy-herbal'>Spicy/Herbal</option>
                <option value='grapefruit'>Grapefruit</option>
                <option value='lavender'>Lavender</option>
                <option value='pineapple'>Pineapple</option>
                <option value='fruit'>Fruit</option>
                <option value='grape'>Grape</option>
                <option value='minty'>Minty</option>
                <option value='ammonia'>Ammonia</option>
                <option value='berry'>Berry</option>
                <option value='tree-fruit'>Tree Fruit</option>
                <option value='pepper'>Pepper</option>
                <option value='chemical'>Chemical</option>
                <option value='pine'>Pine</option>
                <option value='honey'>Honey</option>
                <option value='sage'>Sage</option>
                <option value='mint'>Mint</option>
                <option value='tree'>Tree</option>
                <option value='sweet'>Sweet</option>
                <option value='blue'>Blue</option>
                <option value='woody'>Woody</option>
            </Field>
            <Field component='select' name='medical' className="fields" >
                <option value='select'>Select desired medical benefit:</option>
                <option value='Anxiety'>Anxiety</option>
                <option value='Depression' >Depression</option>
                <option value='Nausea' >Nausea</option>
                <option value='Pain' >Pain</option>
                <option value='Insomnia' >Insomnia</option>
                <option value='Appetite' >Appetite</option>
                <option value='Fatigue' >Fatigue</option>
                <option value='Headache' >Headache</option>
                <option value='Seizures' >Seizures</option>
                <option value='Eye-Pressure' >Eye Pressure</option>
                <option value='Spasticity' >Spasticity</option>
                <option value='Muscle-Spasms' >Muscle Spasms</option>
                <option value='Stress' >Stress</option>
                <option value='Inflammation' >Inflammation</option>
                <option value='Nausea' >Nausea</option>
            </Field>
            <button type='submit'>Submit</button>
            <div className='returndash'>
                <p>Return back to <Link to='/dashboard'>dashboard</Link>.</p>
            </div>
        </Form>
    )
};

const FormikStrainForm = withFormik({
    mapPropsToValues({ search, type, benefit }){
        return {
            search: search || '',
            type: type || 'select',
            benefit: benefit || 'select'
        }
    },
    validationSchema: Yup.object().shape({
        // validation might not be needed?
    }),
    handleSubmit(values, { setStatus }){
        axios
        .get('https://projmedcab2-01-10-2020.herokuapp.com/search', values)
        .then(res => {
            setStatus(res.data);
            console.log(res);
        })
        .catch(err => console.log(err.message));
    }
})(StrainForm);

export default FormikStrainForm;