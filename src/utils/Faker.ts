import { faker } from '@faker-js/faker';

function PPDB_ADMIN_ADD_FAKER(): any {
  return {
    fullname: faker.person.fullName(),
    from_school: 'SMP 32 Kota Bekasi',
    phone: '080581023',
    type_registration: 'Siswa Baru',
    weight: 50,
    height: 178,
    special_needs: 'Tidak Ada',
    religion: 'Islam',
    birth_place: 'Jakarta',
    birth_date: '2000-07-20',
    address: 'Taman Alamanda',
    rt: '02',
    rw: '022',
    kelurahan: 'Timur Jaka Setya',
    kecamatan: 'Latang Jakasetya',
    gender: 'Laki-Laki',
    kodepos: 14777,
    nisn: '1021028391237895',
    nik: '10211234028391237895',
    nisn_image:
      'http://127.0.0.1:8000/1b262c63-a72e-4a6a-b930-b896d90180d3/1694860206.png',
    kartu_keluarga_image:
      'http://127.0.0.1:8000/1b262c63-a72e-4a6a-b930-b896d90180d3/1694860177.png',
    no_serial_skhus: '12938917419',
    no_serial_diploma: '12308124123',
    no_examinee: '12938129038',
    competency_pick_1: 'Teknik Komputer dan Jaringan',
    competency_pick_2: 'Akutansi Lembaga Keuangan',
    competency_pick_3: 'Otomatisasi Tata Kelola Perkantoran',
    extracurricular_1: 'OSIS',
    extracurricular_2: 'Pramuka',
    uniform_1: 'XL',
    uniform_2: 'XL',
    uniform_3: 'XL',
    uniform_4: 'XL',

    // Optinal
    no_kks: '',
    image_kks: '',
    receiver_kps: '',
    no_kps: '',
    image_kps: '',
    receiver_kip: '',
    name_kip: '',
    reason_kip: '',
    image_kip: '',

    // Parent
    father_name: faker.person.firstName(),
    father_nik: '12308580123',
    father_birth_place: 'Surabaya',
    father_birth_date: '2000-07-20',
    father_education: 'S3',
    father_job: 'Wiraswata',
    father_income: 'Rp. 5,000,000 - Rp. 20,000,000',

    mother_name: faker.person.firstName(),
    mother_nik: '12308580123',
    mother_birth_place: 'Kalimantan',
    mother_birth_date: '2000-07-20',
    mother_education: 'D2',
    mother_job: 'Tidak Bekerja',
    mother_income: 'Tidak Berpenghasilan',
  };
}

export { PPDB_ADMIN_ADD_FAKER };
