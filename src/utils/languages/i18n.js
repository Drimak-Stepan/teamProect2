import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { verifyEmail } from 'components/ModalApproveAction/VerifyEmail/translation';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localStorage'],
    },
    resources: {
      en: {
        translation: {
          //login-registration
          Login_title: 'Login',
          Email: 'Email',
          Password: 'Password',
          Dont_have_an_account: "Don't have an account",
          Register: 'Register',
          Log_IN: 'Log IN',
          Registration: 'Registration',
          Registration_title: 'Registration',
          Confirm_password: 'Confirm password',
          Already_have_an_account: 'Already have an account',

          //login-registration_validation
          Required: 'Required',
          Invalid_email_address: 'Invalid email address',
          at_least_6_characters: 'Password must be at least 6 characters',
          less_than_16_characters: 'Password must be less than 16 characters',
          one_uppercase_one_lowercase_one_number:
            'Password must contain at least 1 uppercase letter, 1 lowercase letter and 1 number',
          Passwords_must_match: 'Passwords must match',

          Congrats: 'Congrats',
          registration_is_successful: 'Your registration is successful',
          Go_to_profile: 'Go to profile',

          mainPage_title: 'Take good care of your small pets',

          disconnect_title: 'No Internet Connection',

          News: 'News',
          Find_pet: 'Find pet',
          Our_friends: 'Our friends',

          My_information: 'My information',
          Edit_photo: 'Edit photo',
          Confirm: 'Confirm',
          Log_Out: 'Log Out',
          Birthday: 'Birthday',
          City: 'City',
          Balance: 'Balance',

          remove: 'remove',
          Name: 'Name',
          Date_of_Birth: 'Date of birth',
          Breed: 'Breed',
          Comments: 'Comments',
          My_pets: 'My pets',
          Add_pet: 'Add pet',
          No_pats_yet: 'You have no own added pets yet',

          Closed: 'Closed',
          Time: 'Time',
          Adress: 'Adress',
          Phone: 'Phone',
          day_and_night: 'day and night',
          on_the_website: 'on the website',
          MN: 'MN',
          TU: 'TU',
          WE: 'WE',
          TH: 'TH',
          FR: 'FR',
          SA: 'SA',
          SU: 'SU',

          No_result: 'There is no result',
          Read_more: 'Read more',

          Find_your_favorite_pet: 'Find your favorite pet',
          Filter: 'Filter',
          Filters: 'Filters',
          By_age: 'By age',
          By_gender: 'By gender',
          Apply: 'Apply',
          m: 'm',
          year: 'year',
          years: 'years',
          male: 'male',
          female: 'female',
          sell: 'sell',
          lost_found: 'lost/found',
          in_good_hands: 'in good hands',
          favorites_ads: 'favorite ads',
          my_ads: 'my ads',
          Learn_more: 'Learn more',
          alert_pet_removed: 'removed',
          for_free: 'for free',
          Price: 'Price',
          Place: 'Place',
          The_sex: 'The sex',
          Add_to: 'Add to',
          Contact: 'Contact',

          Already_leaving: 'Already leaving',
          Cancel: 'Cancel',
          Yes: 'Yes',
          alert_LogOut_success: 'Log out successfully',

          Delete_adverstiment: 'Delete adverstiment',
          Are_you_sure_to_delete: 'Are you sure you want to delete',
          You_cant_undo_this_action: 'You can`t undo this action',

          Edit_your_pet: 'Edit your pet',
          Raise_your_ad_only_for: 'Raise your ad only for',
          Add_payment_to_raise: 'Add payment to raise your ad',
          Just_scroll_your_value: 'Just scroll your value',
          Title_of_ad: 'Title of ad',
          Name_of_pet: 'Name of pet',
          Location: 'Location',
          Type_your_new_price: 'Type your new price',
          Update: 'Update',
          Type_a_comment: 'Type a comment',
          Type_name_of_pet: 'Type the name of the pet',
          Type_the_breed: 'Type the breed',
          Type_location: 'Type location',
          Type_title: 'Type title of publication',
          Raise_your_ad: 'Raise your ad',
          alert_Pet_edited_successfully: 'Pet edited successfully',
          alert_Failed_to_edit_pet: 'Failed to edit pet',

          Choose_option: 'Choose option',
          Personal_details: 'Personal details',
          More_info: 'More info',

          is_your_pet: 'your pet',
          is_sell: 'sell',
          is_lost_found: 'lost/found',
          is_in_good_hands: 'in good hands',

          Back: 'Back',
          Next: 'Next',
          Done: 'Done',
          Add_only_pet: 'Add pet',
          Add_lost_pet: 'Add lost pet',
          Add_pet_for_sale: 'Add pet for sale',
          Add_my_pet: 'Add my pet',

          Title_of_add: 'Title of add',
          Name_Pet: 'Name Pet',
          Type_title_of_publication: 'Type title of publication',
          Type_breed: 'Type breed',
          Type_name_of_the_pet: 'Type name of the pet',
          Please_fill_all_the_fields: 'Please fill all the fields',
          The_Sex: 'The Sex',
          Add_photo: 'Add photo',
          You_can_add_payment: 'You can add payment here',
          Type_of_price: 'Type of price',
          Type_your_location: 'Type your location',

          //addPetForm_validation
          only_letters_apostrophes_dashes_spaces:
            'Title may contain only letters, apostrophes, dashes, and spaces',
          Title_is_required: 'Title is required',
          Title_at_least_4: 'Title must be at least 4 characters',
          Title_not_exceed_20: 'Title must not exceed 20 characters',
          Name_is_required: 'Name is required',
          Name_letters_hyphens_apostrophe_dash_spaces:
            'Name may contain only letters, apostrophe, dash, and spaces',
          Name_at_least_2: 'Name must be at least 2 characters',
          Name_not_exceed_16: 'Name must not exceed 16 characters',
          Birthday_is_required: 'Birthday is required',
          Breed_is_required: 'Breed is required',
          Breed_letters_hyphens_apostrophes_commas_periods_spaces:
            'Breed may contain only letters, apostrophes and spaces',
          Breed_at_least_2: 'Breed must be at least 2 characters',
          Breed_not_exceed_16: 'Breed must not exceed 16 characters',
          finish_upload_photo: 'To finish form, please upload foto',
          Comments_are_required: 'Comments are required',
          Comments_at_least_8: 'Comments must be at least 8 characters',
          Comments_not_exceed_120: 'Comments must not exceed 120 characters',
          Sex_is_required: 'Sex is required',
          Location_is_required: 'Location is required',
          Invalid_city_format: 'Invalid city format',
          Price_must_be_number: 'Price must be a number',
          Price_is_required: 'Price is required',
          Location_at_least_2: 'Location must be at least 2 characters',
          Location_not_exceed_20: 'Location must not exceed 20 characters',

          //404
          Ooops: 'Ooops',
          This_page_not_found: 'This page not found',
          To_main_page: 'To main page',

          Search: 'Search',

          alert_Not_correct_value: 'Not correct value',
          alert_Try_another_image: 'Try another image',
          alert_Pet_added_successfully: 'Pet added successfully',
          alert_Failed_to_add_pet: 'Failed to add pet',
          alert_You_removed_one_filters: 'You removed one of the filters',
          alert_failed_delete:
            'Failed to delete notice. Please try again later.',
          alert_signin_fav: 'Please sign in to add to favorites',
          alert_insufficient_funds: 'Insufficient funds on your balance',
          alert_failed_update:
            'Failed to update notice. Please try again later.',
          alert_register_signin:
            'Please register or sign in to be able to add pet',
          already_paid_days: 'You have',
          alert_Failed_to_get_notice: 'Failed to get notice',
          left: 'paid days left.',
          promo_currency: '1$ = 1 day',
          is_updated_succesfully: 'is succesfully updated',

          ...verifyEmail.en,

          // enter_code: 'Enter code',
        },
      },
      uk: {
        translation: {
          Login_title: 'Авторизація',
          Email: 'Пошта',
          Password: 'Пароль',
          Dont_have_an_account: 'Ще не маєте акаунта',
          Register: 'Зареєструватися',
          Registration_title: 'Реєстрація',
          Log_IN: 'Увійти',
          Registration: 'Зареєструватися',
          Confirm_password: 'Підтвердіть пароль',
          Already_have_an_account: 'Вже маєте акаунт',

          //login-registration_validation
          Required: 'Обовʼязкове поле',
          Invalid_email_address: 'Невірна елетронна адреса',
          at_least_6_characters: 'Пароль повинен містити принаймні 6 символів',
          less_than_16_characters: 'Пароль повинен мати менше 16 символів',
          one_uppercase_one_lowercase_one_number:
            'Пароль повинен складатися принаймні з 1 великої літери, 1 малої літери та 1 цифри',
          Passwords_must_match: 'Паролі повинні збігатися',

          Congrats: 'Вітаємо',
          registration_is_successful: 'Ви успішно зареєструвалися',
          Go_to_profile: 'Перейти в профіль',

          mainPage_title: 'Подбайте про своїх домашніх улюбленців',

          disconnect_title: 'Слава ЗСУ',

          News: 'Новини',
          Find_pet: 'Знайти тваринку',
          Our_friends: 'Наші друзі',

          My_information: 'Моя інформація',
          Edit_photo: 'Редагувати фото',
          Confirm: 'Підтвердити',
          Log_Out: 'Вийти',
          Birthday: 'Д/н',
          City: 'Місто',
          Balance: 'Баланс',

          remove: 'видалити',
          Name: 'Імʼя',
          Date_of_Birth: 'Дата народження',
          Breed: 'Порода',
          Comments: 'Коментарі',
          My_pets: 'Мої тварини',
          Add_pet: 'Додати',
          No_pats_yet: 'Ви ще не додали жодну тваринку',

          Closed: 'Зачинено',
          Time: 'Часи роботи',
          Adress: 'Адреса',
          Phone: 'Телефон',
          day_and_night: 'вдень та вночі',
          on_the_website: 'на сайті',
          MN: 'ПН',
          TU: 'ВТ',
          WE: 'СР',
          TH: 'ЧТ',
          FR: 'ПТ',
          SA: 'СБ',
          SU: 'НД',

          No_result: 'Немає результатів',
          Read_more: 'Читати більше',

          alert_register_signin:
            'Будь ласка, авторизуйтеся, щоб додати тваринку!',
          Find_your_favorite_pet: 'Знайди собі улюбленця',
          Filter: 'Фільтр',
          Filters: 'Фільтри',
          By_age: 'За віком',
          By_gender: 'За статтю',
          Apply: 'Застосувати',
          m: 'м',
          year: 'рік',
          years: 'роки',
          male: 'Чоловіча',
          female: 'Жіноча',
          sell: 'Продається',
          lost_found: 'Загублені/Знайдені',
          in_good_hands: 'В хороші руки',
          favorites_ads: 'Улюблені',
          my_ads: 'Мої оголошення',
          alert_failed_delete:
            'Не вдалося видалити оголошення. Будь ласка, спробуйте ще раз згодом.',
          Learn_more: 'Дивитися більше',
          alert_signin_fav:
            'Будь ласка, авторизуйтеся, щоб додати до улюблених!',
          alert_failed_update:
            'Не вдалося оновити оголошення. Будь ласка, спробуйте ще раз згодом.',
          alert_pet_removed: 'видалено',
          for_free: 'безкоштовно',
          Price: 'Ціна',
          Place: 'Місце',
          The_sex: 'Стать',
          Add_to: 'Додати',
          Contact: 'Звʼязатися',

          Already_leaving: 'Вже йдете',
          alert_LogOut_success: 'Вихід успішний',
          Cancel: 'Відміна',
          Yes: 'Так',

          Delete_adverstiment: 'Видалити оголошення',
          Are_you_sure_to_delete: 'Ви впевнені, що хочете видалити',
          You_cant_undo_this_action: 'Ви не зможете відмінити цю дію',

          Edit_your_pet: 'Редагуйте тваринку',
          Raise_your_ad_only_for: 'Підвищіть ваше оголошення всього за',
          Add_payment_to_raise: 'Додайте оплату, щоб підвищити оголошення',
          Just_scroll_your_value: 'Просто прокрутіть значення',
          Title_of_ad: 'Заголовок оголошення',
          Name_of_pet: 'Імʼя тваринки',
          Location: 'Локація',
          Type_your_new_price: 'Вкажіть нову ціну',
          Update: 'Оновити',
          Type_a_comment: 'Напишіть коментар',
          Type_name_of_pet: 'Напишіть імʼя тваринки',
          Type_the_breed: 'Вкажіть породу',
          Type_location: 'Вкажіть локацію',
          Type_title: 'Напишіть заголовок',
          Raise_your_ad: 'Підвищіть ваше оголошення',
          alert_Pet_edited_successfully: 'Тваринка відредагована успішно',
          alert_Failed_to_edit_pet: 'Не вдалося редагувати тваринку',
          alert_insufficient_funds: 'Недостатньо коштів на рахунку',
          is_updated_succesfully: 'успішно змінено',

          Choose_option: 'Виберіть опцію',
          Personal_details: 'Деталі',
          More_info: 'Більше інфо',

          is_your_pet: 'ваша тваринка',
          is_sell: 'продається',
          is_lost_found: 'загублена/знайдена',
          is_in_good_hands: 'в хороші руки',

          Back: 'Назад',
          Next: 'Далі',
          Done: 'Готово',
          Add_only_pet: 'Додати',
          Add_lost_pet: 'Додати загублену тваринку',
          Add_pet_for_sale: 'Додати тваринку на продаж',
          Add_my_pet: 'Додати мою тваринку',

          Title_of_add: 'Заголовок оголошення',
          Name_Pet: 'Імʼя тваринки',
          Type_title_of_publication: 'Напишіть заголовок',
          Type_breed: 'Вкажіть породу',
          Type_name_of_the_pet: 'Напишіть імʼя тваринки',
          Please_fill_all_the_fields: 'Будь ласка, заповніть всі поля',
          The_Sex: 'Стать',
          Add_photo: 'Додати фото',
          You_can_add_payment: 'Підніміть оголошення за доплату',
          Type_of_price: 'Вкажіть ціну',
          Type_your_location: 'Вкажіть локацію',

          //addPetForm_validation
          only_letters_apostrophes_dashes_spaces:
            'Заголовок може містити лише літери, апострофи та пробіли.',
          Title_is_required: 'Заголовок - обовʼязкове поле',
          Title_at_least_4: 'Заголовок повинен містити не менше 4 символів',
          Title_not_exceed_20: 'Заголовок не повинен перевищувати 20 символів',
          Name_is_required: 'Імʼя - обовʼязкове поле',
          Name_letters_hyphens_apostrophe_dash_spaces:
            'Імʼя може містити тільки літери, апостроф, тире і пробіли.',
          Name_at_least_2: 'Імʼя повинно містити не менше 2 символів',
          Name_not_exceed_16: 'Імʼя не повинно перевищувати 16 символів',
          Birthday_is_required: 'Дата народження - обовʼязкове поле',
          Breed_is_required: 'Порода - обовʼязкове поле',
          Breed_letters_hyphens_apostrophes_commas_periods_spaces:
            'Порода може містити тільки літери, апостроф, тире і пробіли.',
          Breed_at_least_2: 'Порода повинно містити не менше 2 символів',
          Breed_not_exceed_16: 'Порода не повинна перевищувати 16 символів',
          finish_upload_photo:
            'Для завершення форми, будь ласка, завантажте фото',
          Comments_are_required: 'Коментарі - обовʼязкове поле',
          Comments_at_least_8: 'Коментарі повинні містити не менше 8 символів',
          Comments_not_exceed_120:
            'Коментарі не повинні перевищувати 120 символів',
          Sex_is_required: 'Стать - обовʼязкове поле',
          Location_is_required: 'Локація - обовʼязкове поле',
          Invalid_city_format: 'Некоректний формат міста',
          Price_must_be_number: 'Ціна повинна бути числом',
          Price_is_required: 'Ціна - обовʼязкове поле',
          Location_at_least_2: 'Місто має бути хоча б 2 символи',
          Location_not_exceed_20: 'Місто не має перевищувати 20 символів',

          //404
          Ooops: 'Ууупс',
          This_page_not_found: 'Ця сторінка не знайдена',
          To_main_page: 'На головну',

          Search: 'Шукати',

          alert_Not_correct_value: 'Неправильне значення',
          alert_Try_another_image: 'Спробуйте інше зображення',
          alert_Pet_added_successfully: 'Тваринка додана успішно',
          alert_Failed_to_add_pet: 'Не вдалося додати тваринку',
          alert_You_removed_one_filters: 'Ви видалили один з фільтрів',
          alert_Failed_to_get_notice: 'Не вдалося отримати оголошення',
          already_paid_days: 'Залишилось',
          left: 'оплачених днів.',
          promo_currency: '1$ це 1 день',
          ...verifyEmail.ukr,

          // enter_code: 'Введіть код',
        },
      },
    },
    lng: localStorage.getItem('i18nextLng') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    whitelist: ['uk', 'en'],
    returnObjects: true,
    keySeparator: false,
    react: {
      wait: true,
    },
  });

export default i18n;
