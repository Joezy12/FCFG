
const banks = [
    {
        id: 0,
        BankName: "Arvest Bank",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Arvest_Bank_logo.svg/1024px-Arvest_Bank_logo.svg.png",
    },
    {
        id: 1,
        BankName: "Associated Bank",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Associated_Bank_logo.svg/2560px-Associated_Bank_logo.svg.png",
    },
    {
        id: 2,
        BankName: "Bank of America",
        img: "https://download.logo.wine/logo/Bank_of_America/Bank_of_America-Logo.wine.png",
    },
    {
        id: 3,
        BankName: "Bank of the west",
        img: "https://cdn.worldvectorlogo.com/logos/bank-of-the-west-1.svg",
    },
    {
        id: 4,
        BankName: "BBVA Compass",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d4/BBVA_Compass_Logo.jpg",
    },
    {
        id: 5,
        BankName: "BB&T Bank",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/23/BB%26T_Bank_logo.png",
    },
    {
        id: 6,
        BankName: "BMO Harris Bank",
        img: "https://download.logo.wine/logo/BMO_Harris_Bank/BMO_Harris_Bank-Logo.wine.png",
    },
    {
        id: 7,
        BankName: "Bank of the Ozarks",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Bank-Ozarks-Logo.png",
    },

    {
        id: 8,
        BankName: "Bancorp South Bank",
        img: "https://logos-download.com/wp-content/uploads/2017/03/BancorpSouth_logo.png",
    },

    {
        id: 9,
        BankName: "Banner Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_r4NFGLNIKzb8l2f5qkiUmUdUa21IogWKlw&s",
    },

    {
        id: 10,
        BankName: "Chase Bank",
        img: "https://download.logo.wine/logo/Chase_Bank/Chase_Bank-Logo.wine.png",
    },

    {
        id: 11,
        BankName: "Capital One Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsM1Q0QBJMtS5N1j4KY98FqCULuvIlQcuUSg&s",
    },
   
     {
        id: 12,
        BankName: "Citi Bank",
        img: "https://download.logo.wine/logo/Citibank/Citibank-Logo.wine.png",
    },
     {
        id: 13,
        BankName: "Citizens Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf56vWIdI52UUbeu_vEDJd_80qyKFPL9VD4g&s",
    },
     {
        id: 14,
        BankName: "Comerica Bank",
        img: "https://mma.prnewswire.com/media/1830002/Comerica_Logo.jpg?p=facebook",
    },
     {
        id: 15,
        BankName: "Chemical Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCW6ToUgGT_-vAMQqX0rdkwNT92-ahIBJoA&s",
    },
     {
        id: 16,
        BankName: "Columbia State Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qE_AmscNJufknMk__aZHmgLLHGdQ6vNelw&s",
    },
     {
        id: 17,
        BankName: "Centennial Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzlhyuUeGhI9fwbID2VVH1gJsesCEldEXD9g&s",
    },
     {
        id: 18,
        BankName: "Commerce Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1m_hs8ViRg5a8Gga9OVSgLRxdY29-oW17GQ&s",
    },
     {
        id: 19,
        BankName: "Delta community Credit Union",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5uXaJOZp-U-zn5M0RN-85YcRNhvN_yNZQefS0gqUC2kzhc9FRMqO5zZxg&s=10",
    },

     {
        id: 20,
        BankName: "Fifth Third Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdoGfZGUbmPy1WhihZm0K5bq0Q-COBsG4Tqg&s",
    },

     {
        id: 21,
        BankName: "First National Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa659ieJ-1035Q25dDX3U9H-TuEie8Y3miFA&s",
    },

     {
        id: 22,
        BankName: "First Citizens Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS1o3-kXoKKf8SJoY8AGgKtZ6k9rEdmW1jww&s",
    },
 {
        id: 23,
        BankName: "First Tennessee Bank",
        img: "https://captiveinsurancetimes.com/serviceproviders/images/First-Tennessee.gif",
    },
 {
        id: 24,
        BankName: "Frost Bank",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Frost_Bank_logo.jpg",
    },
     {
        id: 25,
        BankName: "First Commonwealth Bank",
        img: "https://upload.wikimedia.org/wikipedia/en/a/ab/First_Commonwealth_Bank_logo.png",
    },
     {
        id: 26,
        BankName: "First Midwest Bank",
        img: "https://content.energage.com/company-images/SE86626/SE86626_logo_orig.png",
    },
     {
        id: 27,
        BankName: "First Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3KpVxdH1Sv_PVZ2eIGZXM8GU4m-21iZly42Jvv2-9kckKYabjIj6KZTvLBC1QRNKZtw&usqp=CAU",
    },
     {
        id: 28,
        BankName: "Fulton Bank",
        img: "https://www.fultonbank.com/-/media/Images/Logos/fulton-og-logo.png",
    },
     {
        id: 29,
        BankName: "First Merchants Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2f3nGOAu4WygEkwVI9xm2Y2kfT3nqHCsg0g&s",
    },
     {
        id: 30,
        BankName: "First Interstate Bank",
        img: "https://upload.wikimedia.org/wikipedia/en/c/ce/First_Interstate_Bank_logo.jpg",
    },
      {
        id: 31,
        BankName: "Flagster Bank",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flagstar_Bank_logo.svg/2560px-Flagstar_Bank_logo.svg.png",
    },
      {
        id: 32,
        BankName: "Great Western Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45770W6jn14fbOyqbg34qc82XUO-_Rk-CmA&s",
    },
      {
        id: 33,
        BankName: "Glacier Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvl3Uwg1_BR6nbdNWERUt88eQhK_iI1SvUw&s",
    },
      {
        id: 34,
        BankName: "Great Southern Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9w4bjswewbSeumh5cf2Wea6L7OJj6p5GvQ&s",
    },
      {
        id: 35,
        BankName: "Huntington Bank",
        img: "https://mma.prnewswire.com/media/1840939/Huntington_Bank_Logo.jpg",
    },
       {
        id: 36,
        BankName: "HSBC",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXEv5NboHUst7xh07Q8tX_LTt8YnJo09hJZg&s",
    },
       {
        id: 37,
        BankName: "Investors Bank",
        img: "https://logos-world.net/wp-content/uploads/2021/12/Investors-Bank-New-Logo.png",
    },
       {
        id: 38,
        BankName: "Key Bank",
        img: "https://1000logos.net/wp-content/uploads/2019/12/KeyBank-logo.jpg",
    },
       {
        id: 39,
        BankName: "M&T Bank",
        img: "https://companieslogo.com/img/orig/MTB-4251082b.png?t=1720244493",
    },
       {
        id: 40,
        BankName: "MUFG Union Bank",
        img: "https://mma.prnewswire.com/media/1863297/MUFG_Main_Logo.jpg?p=facebook",
    },
       {
        id: 41,
        BankName: "NBT Bank",
        img: "https://download.logo.wine/logo/NBT_Bank/NBT_Bank-Logo.wine.png",
    },
       {
        id: 42,
        BankName: "Old National Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4rsSRghat6uubwODeA4CJowiNscbpjxrYlQ&s",
    },
       {
        id: 43,
        BankName: "PNC Bank",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PNClogo.svg/1024px-PNClogo.svg.png",
    },

       {
        id: 44,
        BankName: "PayPal",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVt-L3PMTzpdS_eSrQZMFr1mXm6zxt4j8el-OS9_qkXCV1IMOb3Ekti0&s=10",
    },

       {
        id: 45,
        BankName: "Park National Bank",
        img: "https://www.parknationalcorp.com/common/disclosures/images/pnb_horizontalLogo_RGB-01.png",
    },

       {
        id: 46,
        BankName: "Pinnacle Bank",
        img: "https://seekvectors.com/files/download/pinnacle-bank-logo-02.jpg",
    },

       {
        id: 47,
        BankName: "Regions Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5l1w6jnPyozaLELE8z14rYrZmiPp4U4qgfw&s",
    },

    
       {
        id: 48,
        BankName: "Renasant Bank",
        img: "https://upload.wikimedia.org/wikipedia/en/1/12/Renasant_Bank_logo.png",
    },
    
       {
        id: 49,
        BankName: "Rabobank",
        img: "https://images.icon-icons.com/2699/PNG/512/rabobank_logo_icon_169809.png",
    },
    
       {
        id: 50,
        BankName: "Santander Consumer Bank",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/35/Santander_Logo.PNG",
    },
    
       {
        id: 51,
        BankName: "Sun Trust Bank",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/SunTrust_Banks_logo.svg",
    },
    
       {
        id: 52,
        BankName: "Synovus Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFGG2kOrJiHZBZR0CE0Potu30zfTEzqfGNpw&s",
    },
     {
        id: 53,
        BankName: "South State Bank",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/South_State_Bank_logo.svg/2560px-South_State_Bank_logo.svg.png",
    },

     {
        id:54,
        BankName: "Simmons Bank",
        img: "https://logowik.com/content/uploads/images/simmons-bank6814.logowik.com.webp",
    },

     {
        id: 55,
        BankName: "Sterling National Bank",
        img: "https://d2m21dzi54s7kp.cloudfront.net/wp-content/uploads/sites/20/2017/10/Sterling.jpg?x87243",
    },

     {
        id: 56,
        BankName: "TD Bank",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Toronto-Dominion_Bank_logo.svg/1144px-Toronto-Dominion_Bank_logo.svg.png",
    },

     {
        id: 57,
        BankName: "TCF Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTvyEZ8xaP_y3OCH-OmZYekZzCAXELDLXyw&s",
    },
    {
        id: 58,
        BankName: "Trust Mark National Bank",
        img: "https://mma.prnewswire.com/media/1768909/Trustmark.jpg?p=twitter",
    },
     {
        id: 59,
        BankName: "TrustCo Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3XTurkaHkQFJvwwKTFGnawJ7mMUjJbtDVQg&s",
    },
     {
        id: 60,
        BankName: "U.S. Bank",
        img: "https://www.cdnlogo.com/logos/u/19/us-bank.svg",
    },
     {
        id: 61,
        BankName: "Umpqua Bank",
        img: "https://www.umpquabank.com/contentassets/de3acd6308e147ca96c4c7c04a5d8d98/umpqua-new_720x359.jpg",
    },
     {
        id: 62,
        BankName: "United Bank",
        img: "https://logowik.com/content/uploads/images/united-bank4449.logowik.com.webp",
    },
     {
        id: 63,
        BankName: "Union Bank and Trust",
        img: "https://tukuz.com/wp-content/uploads/2020/10/union-bank-and-trust-company-ubt-logo-vector.png",
    },
     {
        id: 64,
        BankName: "Venmo",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxlWc1Ds2FewFrFytKHGuW91EReKD5I4TKw&usqp=CAU",
    },

       {
        id: 65,
        BankName: "Wells Fargo",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Wells_Fargo_Logo_%282020%29.svg/1200px-Wells_Fargo_Logo_%282020%29.svg.png",
    },
   {
        id: 66,
        BankName: "Woodforest National Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZybl9D9mu-B8heeaDIKX4qrbBERDgi3umpA&s",
    },
   {
        id: 67,
        BankName: "Washington Federal",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAoMzT_F3Lw_M0RSCv6QrghOCJcW_281tSg&s",
    },
   {
        id: 68,
        BankName: "Whitney Bank",
        img: "https://static.wikia.nocookie.net/logopedia/images/a/ad/Whitney_Bank.svg/revision/latest?cb=20210523131641",
    },
   {
        id: 69,
        BankName: "Webster Bank",
        img: "https://web.waterburychamber.com/external/wcpages/wcwebcontent/webcontentpage.aspx?contentid=2861",
    },
       {
        id: 70,
        BankName: "Zions Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFcO9ChtUykrlQOfJwQHHUEKp-PZawa2XLg&s",
    },
     {
     id: 71,
        BankName: "Cross River Bank",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQceKfR7ChpR7yyRjVE8sjxwYtpoGtHSqtju4SDBNPoC5zgB0i04QSfzRHH&s=10",
    },
    {
        id: 72,
        BankName: "Cashapp",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBc0PZUMgKvsz0QnoJ_P5WxfKe0oiUTLax1Kvia4q15kx0-zrWvDB_Po&s=10",
    }
]

export default banks;
