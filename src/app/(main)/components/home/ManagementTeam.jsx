import React from "react";

const ManagementTeam = () => {
  const team = [
    {
      id: 1,
      name: "Tariq Talha",
      position: "Training Manager",
      image: "https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-1/564022097_4148114172171505_3810016923684499438_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeH1r0EBZ80VgjbD32da0BlkZWo6B6G2pvdlajoHobam9yZfAvbdfUw5mU-5lGf0KUnD_dQRNHUDF5xd5aRVtXAe&_nc_ohc=KVZMrd5KKv4Q7kNvwEY7I0O&_nc_oc=AdopnvmDFGDZzhmz6YlIgYYemkbuXIfDGFnGjf8FMg0bZX39jnyuiSIfEkndSgldU9I&_nc_zt=24&_nc_ht=scontent.fdac140-1.fna&_nc_gid=HURA0Ka6skSSz4QthEgZ5g&_nc_ss=7b2a8&oh=00_Af6mDq5WB0en69nzJdShpjGRUp09n8k_fu_HBvBz4IoKTw&oe=69FBC934",
    },
    {
      id: 2,
      name: "Jhankar Mahbub",
      position: "Chief Executive Officer",
      image: "https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/461494518_3927053130903991_1669048447871862858_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEbiX55hZi4JUW_TUlJN5UNjWFf2Mh_qriNYV_YyH-quLNH3HsyHHkzka6zRJTAkeamKyedfH0YCsfQTt37qwxG&_nc_ohc=1DKGalvVIgMQ7kNvwFeIYdO&_nc_oc=AdrGSjD8ZS6N-f4Ltqta9lxrPiOydqBGLckTauRMTJjS4UGMue838Ig-DHbEEphL5ec&_nc_zt=23&_nc_ht=scontent.fdac140-1.fna&_nc_gid=DLlurT6cLOxhSQQ_Yw0uDg&_nc_ss=7b2a8&oh=00_Af6Tx4FokIsQogwbbQ9-VJbsbwTxVox91WyH3t1bM3w9ig&oe=69FBD162",
    },
    {
      id: 3,
      name: "Ahashan Habib Utsho",
      position: "Training Coordinator",
      image: "https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-1/662335202_1739243973722416_6771193190286336883_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=110&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHzaAEffktScDZfNdM5oAsnEWO9gaaQl7kRY72BppCXuSiGZjeXdZPnsfxWPToXNGmMLjatuw3lJT5ThP9RZ9Eg&_nc_ohc=PQ7zNRhsLDAQ7kNvwHgCwpF&_nc_oc=AdpsBdh4f00wJPjSTwzBUvIY5Z_5qU7exeBO7a2yyPS0DMrh6cZeUNB6oNbyv5PG91Q&_nc_zt=24&_nc_ht=scontent.fdac140-1.fna&_nc_gid=LMUG0lYNSpPJ7RTKnMEvOg&_nc_ss=7b2a8&oh=00_Af5aybN8HPs-zJnE885EYYlFkxWWGnkDqA82yXtnrpX_2A&oe=69FBF6EA",
    },
  ];

  return (
    <section className="py-8 px-4 md:px-8 lg:px-12 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-2">
            Our <span className="text-primaryy">Management Team</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Meet the passionate people behind our book borrowing platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-primaryy font-semibold mt-1">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
